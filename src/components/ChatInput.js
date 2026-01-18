import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const ChatInput = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

  return (
    <form className='flex justify-between rounded-lg py-3 px-1' onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
            name:"User",
            message:liveMessage
        }))
        setLiveMessage("")
    }}>
        <input type='text' value={liveMessage} className='rounded-full w-full mr-1  py-1 px-2' onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className='bg-black text-white rounded-full py-2 px-5'>Send</button>
    </form>
  )
}

export default ChatInput