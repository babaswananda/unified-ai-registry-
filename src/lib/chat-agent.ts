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

  // Get domain pricing based on category
  private getDomainPrice(category: string): number {
    const pricing = {
      'municipal': 0, // Free for government
      'education': 0, // Free for schools
      'manufacturing': 100,
      'detroit': 50,
      'premium': 200,
      'standard': 25
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
          ? `✅ ${handle}.aiagents is available! Would you like to register it?`
          : `❌ ${handle}.aiagents is already taken. Try a different handle.`
      }
    }

    return "I can help you register AI handles, check availability, and process payments. What would you like to do?"
  }

  private generateRegistrationResponse(): string {
    return `🔑 **Register Your AI Handle**

I can help you register handles on:
• dnser.pencil.li
• 3dns.box  
• hns.id

**Pricing:**
• Municipal/Education: FREE
• Detroit handles: $50
• Manufacturing: $100
• Premium: $200
• Standard: $25

Just tell me the handle you want and I'll check availability!`
  }

  private generatePricingResponse(): string {
    return `💰 **Handle Pricing**

• 🏛️ Municipal/Government: **FREE**
• 🏫 Education/Schools: **FREE**
• ⭐ Detroit (.madeindetroit): **$50**
• 🏭 Manufacturing: **$100**
• 💎 Premium handles: **$200**
• 📝 Standard handles: **$25**

Payment accepted via crypto (Crossmint) or credit card (Stripe).`
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
