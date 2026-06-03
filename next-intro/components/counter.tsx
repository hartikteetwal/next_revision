"use client"
import React, { useEffect, useState } from 'react'

const counter = ({ posts }:{posts: any[]}) => {
  const [count, setCount] = useState(0);


  return (
    <div className='bg-gray-800 p-4 rounded-lg text-white'>
          <p className='text-xl font-bold'>Counter {count}</p>
          <div className='flex space-x-4 mt-4'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>+</button>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count - 1)}>-</button>
            </div>
    </div>
  )
}

export default counter
