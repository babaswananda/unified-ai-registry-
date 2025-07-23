// Chat Agent Integration for Unified AI Registry
// Handles domain registration, payments, and user interactions

interface ChatAgentConfig {
  apiKey: string
  baseUrl: string
  model: string
}

interface DomainRegistrationRequest {
  handle: string
  category: string
  userEmail: string
  paymentMethod: 'crypto' | 'stripe'
}

interface PaymentResult {
  success: boolean
  transactionId?: string
  error?: string
}

export class UnifiedAIChatAgent {
  private config: ChatAgentConfig

  constructor(config: ChatAgentConfig) {
    this.config = config
  }

  // Handle domain registration through chat
  async registerDomain(request: DomainRegistrationRequest): Promise<PaymentResult> {
    try {
      // Validate handle format
      if (!this.validateHandle(request.handle)) {
        return { success: false, error: 'Invalid handle format' }
      }

      // Check availability through DNS services
      const isAvailable = await this.checkDomainAvailability(request.handle)
      if (!isAvailable) {
        return { success: false, error: 'Handle already taken' }
      }

      // Process payment
      const paymentResult = await this.processPayment(request)
      if (!paymentResult.success) {
        return paymentResult
      }

      // Register domain through appropriate service
      const registrationResult = await this.registerThroughDNS(request)
      
      return registrationResult
    } catch (error) {
      return { success: false, error: 'Registration failed' }
    }
  }

  // Check domain availability across services
  private async checkDomainAvailability(handle: string): Promise<boolean> {
    try {
      // Check dnser.pencil.li
      const dnserAvailable = await this.checkDnserAvailability(handle)
      
      // Check 3dns.box
      const threeDnsAvailable = await this.check3DnsAvailability(handle)
      
      // Check hns.id
      const hnsAvailable = await this.checkHnsAvailability(handle)

      return dnserAvailable && threeDnsAvailable && hnsAvailable
    } catch (error) {
      console.error('Availability check failed:', error)
      return false
    }
  }

  private async checkDnserAvailability(handle: string): Promise<boolean> {
    // Implementation for dnser.pencil.li API
    const response = await fetch(`https://api.dnser.pencil.li/check/${handle}`, {
      headers: {
        'Authorization': `Bearer ${process.env.DNSER_PENCIL_LI_API_KEY}`
      }
    })
    const data = await response.json()
    return data.available
  }

  private async check3DnsAvailability(handle: string): Promise<boolean> {
    // Implementation for 3dns.box API
    const response = await fetch(`https://api.3dns.box/check/${handle}`, {
      headers: {
        'Authorization': `Bearer ${process.env.THREEDS_BOX_API_KEY}`
      }
    })
    const data = await response.json()
    return data.available
  }

  private async checkHnsAvailability(handle: string): Promise<boolean> {
    // Implementation for hns.id API
    const response = await fetch(`https://api.hns.id/check/${handle}`, {
      headers: {
        'Authorization': `Bearer ${process.env.HNS_ID_API_KEY}`
      }
    })
    const data = await response.json()
    return data.available
  }

  // Process payment through Crossmint or Stripe
  private async processPayment(request: DomainRegistrationRequest): Promise<PaymentResult> {
    if (request.paymentMethod === 'crypto') {
      return this.processCryptoPayment(request)
    } else {
      return this.processStripePayment(request)
    }
  }

  private async processCryptoPayment(request: DomainRegistrationRequest): Promise<PaymentResult> {
    try {
      // Use Crossmint for crypto payments
      const response = await fetch('https://api.crossmint.com/payments', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.CROSSMINT_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: this.getDomainPrice(request.category),
          currency: 'USD',
          metadata: {
            handle: request.handle,
            category: request.category,
            userEmail: request.userEmail
          }
        })
      })

      const data = await response.json()
      return { success: true, transactionId: data.id }
    } catch (error) {
      return { success: false, error: 'Crypto payment failed' }
    }
  }

  private async processStripePayment(request: DomainRegistrationRequest): Promise<PaymentResult> {
    try {
      // Stripe payment implementation
      const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: this.getDomainPrice(request.category) * 100, // Convert to cents
        currency: 'usd',
        metadata: {
          handle: request.handle,
          category: request.category,
          userEmail: request.userEmail
        }
      })

      return { success: true, transactionId: paymentIntent.id }
    } catch (error) {
      return { success: false, error: 'Stripe payment failed' }
    }
  }

  // Register domain through DNS services
  private async registerThroughDNS(request: DomainRegistrationRequest): Promise<PaymentResult> {
    try {
      // Register through primary service (dnser.pencil.li)
      const response = await fetch('https://api.dnser.pencil.li/register', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.DNSER_PENCIL_LI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          handle: request.handle,
          category: request.category,
          owner: request.userEmail
        })
      })

      if (response.ok) {
        return { success: true, transactionId: `dns-${Date.now()}` }
      } else {
        return { success: false, error: 'DNS registration failed' }
      }
    } catch (error) {
      return { success: false, error: 'DNS registration error' }
    }
  }

  // Validate handle format
  private validateHandle(handle: string): boolean {
    // Handle should be alphanumeric with hyphens, 3-63 characters
    const regex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{1,61}[a-zA-Z0-9])?$/
    return regex.test(handle)
  }

  // Get domain pricing based on category and TLD
  private getDomainPrice(category: string): number {
    const pricing = {
      'municipal': 0, // Free for government (.aiagents)
      'education': 0, // Free for schools (.k-12)
      'manufacturing': 100, // Manufacturing (.aifactory)
      'detroit': 50, // Detroit origin (.madeindetroit)
      'developer': 75, // Developer community (.vibecoder)
      'premium': 200, // Premium AI agents (.aiagents)
      'standard': 25 // Standard handles
    }
    return pricing[category as keyof typeof pricing] || 25
  }

  // Chat interface for domain registration
  async handleChatMessage(message: string, userEmail: string): Promise<string> {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes('register') && lowerMessage.includes('handle')) {
      return this.generateRegistrationResponse()
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return this.generatePricingResponse()
    }

    if (lowerMessage.includes('available') || lowerMessage.includes('check')) {
      const handle = this.extractHandleFromMessage(message)
      if (handle) {
        const available = await this.checkDomainAvailability(handle)
        return available
          ? `✅ ${handle} is available across our TLD network!

**Available on:**
• ${handle}.aiagents
• ${handle}.madeindetroit
• ${handle}.vibecoder
• ${handle}.k-12
• ${handle}.aifactory

Which TLD would you like to register?`
          : `❌ ${handle} is already taken on some TLDs. Let me check specific availability...`
      }
    }

    return "I can help you register AI handles, check availability, and process payments. What would you like to do?"
  }

  private generateRegistrationResponse(): string {
    return `🔑 **Register Your AI Handle**

I can help you register handles on:
• dnser.pencil.li (.aiagents, .vibecoder, .k-12)
• 3dns.box (.madeindetroit, .aifactory)
• hns.id (.agent, .ai, .bot)

**Available TLDs:**
• .aiagents - Root AI agent protocol
• .madeindetroit - Detroit-origin verification
• .vibecoder - Developer community
• .k-12 - Educational institutions
• .aifactory - Manufacturing & production

**Pricing:**
• Municipal/Education: FREE
• Detroit (.madeindetroit): $50
• Manufacturing (.aifactory): $100
• Premium (.aiagents): $200
• Standard: $25

Just tell me the handle you want and I'll check availability!`
  }

  private generatePricingResponse(): string {
    return `💰 **Handle Pricing by TLD**

**FREE Tiers:**
• 🏛️ Municipal/Government (.aiagents): **FREE**
• 🏫 Education/Schools (.k-12): **FREE**

**Paid Tiers:**
• ⭐ Detroit Origin (.madeindetroit): **$50**
• 🏭 Manufacturing (.aifactory): **$100**
• 💎 Premium AI Agents (.aiagents): **$200**
• 👨‍💻 Developer Community (.vibecoder): **$75**
• 📝 Standard handles: **$25**

**Payment Methods:**
• 💰 Crypto payments via Crossmint
• 💳 Credit card via Stripe
• 🔗 Integrated with dnser.pencil.li, 3dns.box, hns.id`
  }

  private extractHandleFromMessage(message: string): string | null {
    // Simple regex to extract potential handle names
    const match = message.match(/\b([a-zA-Z0-9-]{3,63})\b/)
    return match ? match[1] : null
  }
}

// Export singleton instance
export const chatAgent = new UnifiedAIChatAgent({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseUrl: 'https://api.openai.com/v1',
  model: 'gpt-4'
})
