import { NextRequest, NextResponse } from 'next/server';
import { chatAgent } from '@/lib/chat-agent';

export async function POST(request: NextRequest) {
  try {
    const { message, userEmail } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Process message through chat agent
    const response = await chatAgent.handleChatMessage(message, userEmail || 'anonymous');

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'Chat API is running',
    endpoints: {
      POST: '/api/chat - Send a message to the chat agent'
    }
  });
}
