import React, {useState} from 'react';
import { FaRegHeart, FaThumbsDown, FaThumbsUp,FaRegTrashAlt } from "react-icons/fa";


const Posts =(props)=>{
	 const d = new Date().toLocaleString();
	 const [active, setActive] = useState(false);
	 const [dislikes, setdislikes] = useState(false);
	 const [likes, setlikes] = useState(false);
     const upload =(e)=>{
     	console.log(e.target.files);
     }
     const userEvent =()=>{
     	setActive(!active);
     }
     const dislikeEvent =()=>{
     	setdislikes(!dislikes);
     }
     const likeEvent =()=>{
     	setlikes(!likes);
     }
     const deleteNote =()=>{
     	props.deleteItem(props.id);
     }
	return (
		  <div className="postss">
		  	<div className="postss_first">
		  		<div className="create__first">
		  		<div className="create_img"><img src="/images/profile.jpeg" alt=""/></div>
		  		<div className="user__name">
		  			<p><b>Uttam Kumar</b> <span>{d}</span></p>
		  			<p><span><b>Frontend Developer</b></span></p>
		  		</div>
		  		</div>
		  	</div>
		  	<div className="poststext">
		  	<p>{props.title}</p>
		  	</div>
		  	<div className="likeicon">
		  		<FaRegHeart className={active ? "like active": "like"} onClick={userEvent}/>
		  		<FaThumbsDown className={dislikes?"like activelike" : "like"} onClick={dislikeEvent}/>
		  		<FaThumbsUp className={likes?"like activelikes" : "like"} onClick={likeEvent}/>
		  		<span onClick={deleteNote}><FaRegTrashAlt className="trashIcon" /></span>
		  	</div>
		  </div>
		)
}

export default Posts