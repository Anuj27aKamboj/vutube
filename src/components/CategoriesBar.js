import React from 'react'
import CategoryButton from './CategoryButton'

const List = ['All','Music','Movies','Comedy','Cars','Gaming','News','Music','Movies','Comedy','Cars','Gaming','News','Music','Movies','Comedy','Cars','Gaming','News'];

const CategoriesBar = () => {
  return (
    <div className='sticky top-14 z-40 bg-white'>
      <div className='flex gap-3 px-6 mr-10 py-3 overflow-x-auto whitespace-nowrap no-scrollbar'>
      {List.map((item,index)=><CategoryButton key={index} name={item} />)}
    </div>
    </div>
    
  )
}

export default CategoriesBar