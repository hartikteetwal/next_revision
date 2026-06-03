import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata = {
    title: 'Dashboard - My Next.js App',
    description: 'Dashboard layout with sidebar navigation',
    template: "$s - Dashboard - My Next.js App",
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <section className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white shadow-xl">

                <div className="p-6 border-b border-gray-700">
                    <h2 className="text-2xl font-bold tracking-wide">
                        Dashboard
                    </h2>
                </div>

                <nav className="p-4">
                    <ul className="space-y-3">

                        <li>
                            <Link
                                href="/dashboard/analytics"
                                className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Analytics
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/dashboard/reports"
                                className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Reports
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/dashboard/settings"
                                className="block px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Settings
                            </Link>
                        </li>

                    </ul>
                </nav>

            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">

                <div className="bg-white rounded-2xl shadow-md p-6 min-h-[calc(100vh-64px)]">
                    {children}
                </div>

            </main>

        </section>
    )
}