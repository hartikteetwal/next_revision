import type { ReactNode } from 'react'
import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
          <title>My Next.js App</title>
      </head>
      <body className="bg-gray-100 min-h-screen flex flex-col">

        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <h1 className="text-2xl font-bold tracking-wide">
              My Website
            </h1>

            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-gray-200 transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-gray-200 transition">
                About
              </Link>

              <Link href="/contact" className="hover:text-gray-200 transition">
                Contact
              </Link>
              <Link href="/dashboard" className="hover:text-gray-200 transition">
                Dashboard
              </Link>
              <Link href="/blog" className="hover:text-gray-200 transition">
                Blog
              </Link>
            </nav>

          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm">
              © 2026 My Website. All rights reserved.
            </p>

            <div className="flex gap-5 text-sm">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-white transition">
                Terms
              </Link>

              <Link href="#" className="hover:text-white transition">
                Support
              </Link>
            </div>

          </div>
        </footer>

      </body>
    </html>
  )
}