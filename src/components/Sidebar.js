import React from 'react';
import { FaTwitter, FaHome, FaHashtag, FaRegBell, FaRegBookmark, FaRegListAlt, FaRegUser, FaRegMehBlank } from "react-icons/fa";


const Sidebar =()=>{
	return(
		<div className="sidebar">
			<ul>
				<li><a href="#"><FaTwitter className="icons logo"/></a> </li>
				<li><a href="#"><FaHome className="icons logo"/>Home</a> </li>
				<li><a href="#"><FaHashtag className="icons"/>Explore</a></li>
				<li><a href="#"><FaRegBell className="icons"/>Notifications</a></li>
				<li><a href="#"><FaRegBookmark className="icons"/>Bookmarks</a></li>
				<li><a href="#"><FaRegListAlt className="icons"/>Lists</a></li>
				<li><a href="#"><FaRegUser className="icons"/>Profile</a></li>
				<li><a href="#"><FaRegMehBlank className="icons"/>More</a></li>
				<div className="sidebar__Btn">
					<a href="">profile</a>
				</div>
			</ul>
		</div>
	)
}

export default Sidebar