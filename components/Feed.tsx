import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'

const Feed = () => {
  return (
    <div className='text-white flex-grow border-l border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]  ' >
        <div className='text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-gray-700  border-b'>
                <h2 className='text-lg sm:text-xl font-bold' >Home</h2>
                <SparklesIcon className='h-5 text-white' />
        </div>
    </div>
  )
}

export default Feed