import React, { useState,useEffect } from 'react'
import './Feed.css';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import Post from './Post';
import InputOption from './InputOption';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function NewsFeed() {
const [input,setInput]= useState(" ")
const [posts,setPosts ] = useState([])

const user  = useSelector(selectUser)

useEffect(() => {
  db.collection("posts").onSnapshot((snapshot)=>
  setPosts(
    snapshot.docs.map((doc)=>(
      {
        id: doc.id,
        data: doc.data(),
      }
    ))
  )
  
  )
}, [])



const sendPost = (e)=>{
e.preventDefault();

db.collection('posts').add({
name : user.displayName, 
time: new Date().toLocaleString(),
message:input,
photoURL :user.photoURL || '',
timestamp: firebase.firestore.FieldValue.serverTimestamp(),
})

setInput('')
}

  return (
    <div className='feed'>
<div className="feed_inputContainer">
    <div className="feed_input">
   
       <form>
       
 <input value= {input}
 onChange={ (e) => setInput(e.target.value)
 
 }  type='text'
   />
        <button onClick={sendPost} type='submit'>Post</button>
       </form>
    </div>
    <div className="feed_inputOptions">
       <InputOption Icon ={InsertPhotoRoundedIcon}  
       title='Photo' 
       color="#70b5F9"
       />
       <InputOption Icon ={VideoLibraryRoundedIcon}  
       title='Video' 
       color="#E7A33E"
       />
       <InputOption Icon ={WorkRoundedIcon}  
       title='Job' 
       color="#C45D"
       />
       <InputOption Icon ={NewspaperRoundedIcon}  
       title='Write article' 
       color="#7F715E"
       />
    </div>
</div>

{
  posts.map(({id,data:{name,time,message,photoURL}}) =>(//
    
    <Post

    key={id}
   name={name}
    time={time}
    message={message}
  photoURL={photoURL}
/>
))
}
</div>
  )
}
export default NewsFeed


