import React from 'react'
import "./Header.css"
import {useDispatch, useSelector} from 'react-redux'
import logout from './features/userSlice'
import { auth } from './firebase';
import { selectUser } from './features/userSlice';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationIcon from '@mui/icons-material/Notifications'
import { Avatar } from '@mui/material'


function Header() {
const user  =  useSelector(selectUser)

  const dispatch = useDispatch()
// for Me button
  const logoutOfApp = (userAuth)=>{
    auth.signOut();
dispatch(logout({
  email: userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoURL : userAuth.photoURL
}));


  }


  return (
    // logo site
    <div className='header'>
<div className="header-left">
  <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" srcset="" href="/" />
  <div className="header_search">
    <SearchIcon/>
    <input type="text" name="" id="" placeholder='Search'/>
  </div>
</div>
{/* icon site */}
<div className="header-right">
    <HeaderOption Icon = {HomeIcon} title="Home"/>
    <HeaderOption  Icon = {SupervisorAccountIcon} title="My Network"/>
    <HeaderOption  Icon = {BusinessCenterIcon} title="Jobs"/>
    <HeaderOption  Icon = {ChatIcon} title="Messaging"/>
<HeaderOption  Icon = {NotificationIcon} title="Notifications"/>
<HeaderOption
Avatar={Avatar}
title="Me"
 onClick={logoutOfApp}
/>
</div>
    </div>
  )
}

export default Header