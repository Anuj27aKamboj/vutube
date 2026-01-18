import React from 'react'

const CategoryButton = ({name}) => {
  return (
    <div>
        <button className='px-4 py-1.5 mx-[6px] my-2 rounded-lg font-semibold text-sm bg-gray-100 hover:bg-gray-200'>{name}</button>
    </div>
  )
}

export default CategoryButton