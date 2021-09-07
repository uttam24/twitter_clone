import React, {useState} from 'react';
import { FaRegImage, FaRegListAlt, FaRegSmile, FaCalendarCheck } from "react-icons/fa";

const Createtweet =(props)=>{
	const [note, setNote] = useState({
		title:'',
	})
	
	const InuptEvent =(event)=>{

		const {name, value}=event.target;


		setNote((prevData)=>{
			return{
				...prevData, 
				[name]:value
			}
		})
		console.log(note);
	}
	const addEvent =(e)=>{
		e.preventDefault();
		props.passNote(note);
		setNote({
		title:'',
		})
	}
	return(
		<div className="create">
			<div className="create__first">
				<div className="create_img">
					<img src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}  alt=""/>
				</div>
				<div className="create__input">
				<input type="text" name="title" value={note.title} onChange={InuptEvent} className="create__control" placeholder="what's happening" />
				</div>
			</div>
			<div className="create__second">
			 <div className="create__icon">
				<FaRegImage className="ic"/>
				<FaRegListAlt className="ic"/>
				<FaRegSmile className="ic"/>
				<FaCalendarCheck className="ic"/>
			 </div>
			 <div className="create_btn">
			 	<button onClick={addEvent}>Tweet</button>
			 </div>
			</div>	
		</div>
		)
}

export default Createtweet