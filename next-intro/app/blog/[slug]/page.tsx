interface BlogPageProps {
    params: {
        slug: string
    }
}

const blogData : Record<string, { title: string, content: string }> = {
    "next": {
        title: "Next.js 14 Released",
        content: "Next.js 14 has been released with exciting new features..."
    },
    "react": {
        title: "React 18 Features",
        content: "React 18 introduces concurrent rendering and more..."
    },
    "typescript": {
        title: "TypeScript 5.0 Features",
        content: "TypeScript 5.0 brings new features and improvements..."
    },
    "nodejs": {
        title: "Node.js 20 Released",
        content: "Node.js 20 has been released with exciting new features..."
    }
}

export default async function BlogPageDetails({ params }: BlogPageProps) {
    const { slug } = await params
    const blog = blogData[slug]

    if(!blog) {
        return (
            <div>   
                <h1>Blog Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
            </div>
        )
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    )
}