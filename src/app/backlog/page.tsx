import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Melog - Project Management Tool',
    description: 'Manage your projects with our intuitive Melog feature',
}

export default function MelogPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Melog</h1>
                <p className="text-lg text-gray-600">
                    Welcome to your project Melog. This feature is coming soon!
                </p>
            </div>
        </div>
    )
}