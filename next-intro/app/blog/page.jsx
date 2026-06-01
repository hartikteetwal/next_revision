import React from 'react'
import Link from 'next/link'

const blogs = [{
    slug: "next", title: "Next.js 14 Released", description: "Discover the new features and improvements in Next.js 14, including enhanced performance, improved developer experience, and exciting updates to the framework."
}, {
    slug: "react", title: "React 18 Features", description: "Explore the latest features and updates in React 18, including concurrent rendering, automatic batching, and new hooks that enhance the development experience."
},
{
    slug: "typescript",
    title: "TypeScript 5.0 Features",
    description: "Discover the latest features and improvements in TypeScript 5.0, including enhanced type inference, better support for decorators, and improved developer experience."
}, {
    slug: "nodejs", title: "Node.js 20 Released", description: "Learn about the new features and improvements in Node.js 20, including enhanced performance, improved security, and exciting updates to the runtime environment."
}
]

const page = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Blog Page</h1>
            <p className="text-lg text-gray-700">   Welcome to the blog! Here you'll find the latest news, updates, and articles about our products and industry insights. Stay tuned for exciting content and feel free to explore our posts.</p>
            <ul className="mt-8 space-y-4">
                {blogs.map((blog) => (
                    <li key={blog.slug} className="p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <Link href={`/blog/${blog.slug}`} className="text-2xl font-semibold text-blue-600 hover:underline">
                            {blog.title}
                        </Link>
                        <p className="text-gray-600 mt-2">{blog.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default page
