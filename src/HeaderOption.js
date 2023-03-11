import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function HeaderOption({Avatar,Icon,title,onClick}) {
  const user = useSelector(selectUser)
  
  
  return (
    <div  onClick={onClick} className='HeaderOption'>
    {Icon && <Icon className="HeaderOption_Icon"/>}

    {
      Avatar && 
(  <Avatar className ="HeaderOption_Icon">{user?.displayName[0]}</Avatar>)
    }
     
  
    <h3 className='HeaderOption_title'>
     
        {title}</h3>
    </div>
  )
}

export default HeaderOption