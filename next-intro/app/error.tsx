"use client"
const Error = ({error,reset}:{error:Error,reset:() => void}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Error</h1>
      <p className="text-gray-600">{error.message}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>
        Try again
      </button>
    </div>
  )
}

export default Error
