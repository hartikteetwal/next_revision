"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
   const router = useRouter()
    const handleGoToDashboard = () => { 
      router.push('/dashboard')
    }
  return (
    <div>
    <div className="text-xl font-bold mb-4">
      This is Reports Page
    </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleGoToDashboard}>
        Go To Dashboard
      </button>
    </div >
  )
}

export default page
