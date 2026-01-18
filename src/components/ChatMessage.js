import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='my-1 p-2 flex items-center bg-gray-200 rounded-full'>
        <img className="w-6 h-6 rounded-full mr-2" src="/user-icon.png" alt="user" />
        <span className='mx-1 font-bold'>{name}:</span>
        <span className='text-xs'>{message}</span>
    </div>
  )
}

export default ChatMessage