import Image from 'next/image'
import React from 'react'
import ProductsPage from '../components/ProductPage'
import Link from 'next/link'
import Counter from '../components/counter'

interface Post{
  id: number;
  title: string;
  body: string;
}

const page = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    // {cache: 'no-store' },
    {next:{revalidate: 1}}
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const post: Post[] = await res.json();
const posts = post.slice(0, 5);

  return (

    <div className="bg-white p-8 rounded-lg mt-4 shadow">
      <Counter posts={posts} />
      <h1 className="text-3xl font-bold mb-4">Posts fetch data by server components</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li className="border-b border-gray-200 pb-4" key={post.id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>

    // <div>
    //   {/* <ProductsPage/> */}
      
    //   <Link className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/server_component_demo">Go to Server Info</Link>

    // <main className="bg-white p-8 rounded-lg mt-4 shadow">
    //   <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App</h1>
    //   <Image
    //     className="bg-gray-800 p-4 rounded-lg"
    //     src="/vercel.svg"
    //     alt="Next.js Logo"
    //     width={100}
    //     height={100}
    //   />
    // </main>
    // </div>
  )
}

export default page
