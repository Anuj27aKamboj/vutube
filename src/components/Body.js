import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const BodyComp = () => {
  return (
    <div className='flex pt-14'>
        <Sidebar/>
        <Outlet />
    </div>
  )
}

export default BodyComp