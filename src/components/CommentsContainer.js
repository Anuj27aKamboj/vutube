import React from 'react'
import { commentsData } from "../utils/commentsData";
import CommentsList from './CommentsList'

const CommentsContainer = () => {
  return (
    <div className='mt-4 bg-gray-100 px-5 py-2 rounded-lg'>
        <h2 className='text-xl font-bold'>Comments:</h2>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer