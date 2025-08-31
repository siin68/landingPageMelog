import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        console.log('Contact form submission:', body)

        return NextResponse.json(
            { message: 'Contact form submitted successfully' },
            { status: 200 }
        )
    } catch (err) {
        console.error('Contact form error:', err)
        return NextResponse.json(
            { error: 'Failed to process contact form' },
            { status: 500 }
        )
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Contact API endpoint' },
        { status: 200 }
    )
}