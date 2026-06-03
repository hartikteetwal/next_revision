"use client"
import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const result = await res.json()
        console.log(result)
        setData(result)
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
      <div>
          <ul className="space-y-4">
              {data?.map(item => (
                  <li className="bg-gray-100 p-4 rounded-lg" key={item.id}>
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p className="text-gray-600">{item.body}</p>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default ProductPage
