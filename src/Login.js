import React, { useState } from 'react'
import './Login.css'
import {useDispatch} from 'react-redux'
import { login } from './features/userSlice';
import { auth } from './firebase';
function Login() { 

    const [email,setEmail]= useState(" ");
    const [password,setPassword]= useState(" ");
    const [name,setName]= useState("")
    const [profilePic,setProfilePic] = useState("")
const dispatch = useDispatch()


const logInToApp= (e)=>{
e.preventDefault();

auth.signInWithEmailAndPassword(email,password)
.then( userAuth=>{
    dispatch(login({
        email:userAuth.user.email,
    uid:userAuth.user.uid,
    displayName:userAuth.user.name,
    photoURL:userAuth.user.profilePic
    })
    );
}).catch((error)=> alert(error));


}






const register = ()=>{
if(!name){
    return alert('please enter your full name');
}
auth.createUserWithEmailAndPassword(email,password).then(
(userAuth) =>{
    userAuth.user.updateProfile({
        displayName : name,
        photoURL : profilePic
    }).then(() =>{
dispatch(login({
 email:userAuth.user.email,
    uid:userAuth.user.uid,
    displayName:name,
    photoURL:profilePic
}))
    })
}

).catch(error => alert(error))




}


  return (
    <div className='login'>
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" alt="" />
   <form action="">
    <input
  value={name}
    onChange={(e)=> setName( e.target.value)}
     type="text"
required
     placeholder='Full name (required for registering)'/>
      <input 
      type="email"
       placeholder='E-mail'
       value={email}
 onChange={(e)=> setEmail( e.target.value)}
       />

  <input
  onChange={(e)=> setPassword( e.target.value)}
   type="password"
    placeholder='password'
    value={password}
    />
    <input
    onChange={e => setProfilePic(e.target.value)}
     type="text" 
     placeholder='Photo Url(optional)'
     value={profilePic}
     />
  <button type='submit' onClick={logInToApp}>Sign In</button>
  
   </form>

    <p>Not a Member ?
<span className='login__register' onClick={register}>Register Now</span>

    </p>
    
    
    </div>
  )
}

export default Login