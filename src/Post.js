import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import InputOption from './InputOption';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';


function Post({name,time,message,photoURL}) {

  return (
    <div className='post' >
        <div className="post_header">
            <Avatar src={photoURL} >{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{time}</p>
            
            </div>
        </div> 
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_button">
             <InputOption
              Icon={ThumbUpAltRoundedIcon}
               title="Like"
               color="grey"
               />
                <InputOption
              Icon={CommentIcon}
               title="Comment"
               color="grey"
               />
                <InputOption
              Icon={ShareIcon}
               title="Share"
               color="gray"
               />
                <InputOption
              Icon={SendIcon}
               title="Send"
               color="gray"
               />
        </div>
    </div>
  )
}

export default Post