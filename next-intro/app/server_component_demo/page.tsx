
import React from 'react'
import ServerInfo from "../../components/ServerInfo"
import Counter from '../../components/counter'

const page = () => {
  return (
      <div className='bg-gray-800 p-4 rounded-lg text-white'>
          Server Component Demo
          <ServerInfo/>
      <Counter posts={[]} />
    </div>
  )
}

export default page
