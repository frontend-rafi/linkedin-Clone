import React,{useEffect} from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import Header from './Header';
import Sidebar from './Sidebar';
import NewsFeed from './NewsFeed';
import Widgets from './Widgets';
import { selectUser,login,logout } from './features/userSlice';
import Login from './Login';

import { auth } from './firebase';
function App() {
const dispatch = useDispatch()
const user  = useSelector(selectUser)
// come from login.js
useEffect(() => {
  auth.onAuthStateChanged((userAuth)=>{
    if (userAuth) {
      // user is logged in
      dispatch(
        login({
          email: userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoURL : userAuth.photoURL
        })
      );
    }
    else{
      //user is logout
    
      dispatch(logout({
        
      }))
   
    }
  })
}, [ ])

///

  return (
<div className="App">
<Header/>

{
  !user ? <Login/> : (
    <div className="App_body">

<Sidebar/>
<NewsFeed/>

<Widgets/> 

</div>
   )
}






    </div>
  );
}

export default App;
