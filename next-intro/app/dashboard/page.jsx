"use client"
import React from 'react'
import {useRouter} from 'next/navigation'


const page = () => {
  const router = useRouter()
  const handleGoToHome = () => {
    router.push("/")
  }
  return (
    <div>
      <div className="text-xl font-bold mb-4">This is Dashboard Page</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleGoToHome}>
        Go To Home
      </button>
    </div>
  )
}

export default page
