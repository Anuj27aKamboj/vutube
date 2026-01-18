import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatInput from './ChatInput';
import { generateRandomName, generateRandomString } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store)=>store.chat.messages);

    useEffect(()=>{
        const timer = setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomString(20)}
            ))

        },1500)

        return ()=>clearInterval(timer)
    }, [])

  return (
    <div className='px-5 pt-2 bg-gray-100 h-full rounded-lg'>
        <h2 className="text-xl font-bold">Live Chat</h2>
        <div className='h-[80%] overflow-y-scroll flex flex-col-reverse my-3'>
            {ChatMessages.map((chat)=><ChatMessage key={chat.name} name={chat.name} message={chat.message}/>)}
        </div>
        <div className='h-[15%] overflow-y-scroll'>
            <ChatInput />
        </div>
    </div>
  )
}

export default LiveChat