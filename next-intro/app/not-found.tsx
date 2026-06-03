"use client"
import {useRouter} from 'next/navigation'
export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/')}>
                Go back home
            </button>
        </div>
    )
}