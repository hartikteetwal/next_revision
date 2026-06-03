export default function ServerInfo() {
    const serverTime = new Date().toLocaleTimeString();

    return (
        <div className='bg-gray-800 p-4 rounded-lg text-white'>
            <h1 className='text-xl font-bold'>Server Time {serverTime}</h1>
        </div>
    )
}