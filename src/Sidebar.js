import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function Sidebar() {
const user = useSelector(selectUser)

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
 <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
 <Avatar src={user.photoURL} className='sidebar_Avatar'> {user.displayName[0]} </Avatar>
 <h1>{user.displayName}</h1>
 <h4 >{user.email}</h4>
        </div>
        <div className="sidebar_stats">
        <div className="sidebar_stat">
    <p>Who viewed you</p>
    <p className="sidebar_statNumber">2,222</p>
   
        </div>
          <div className="sidebar_stat">
            <p> views on post</p>
    <p className="sidebar_statNumber">2,962</p>
        </div>
        </div>
        <div className="sidebar_button">
            <p>Recent</p>
        
        <div className="sidebar_recentItem">
       <p><strong>  # React js </strong></p> 
       <p><strong>  # Developer </strong></p> 
       <p><strong>  # Software </strong></p> 
        <p><strong>  # Javascript </strong></p> 

        </div>
          
        </div>
    </div>
  )
}

export default Sidebar