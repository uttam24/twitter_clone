import React from 'react';

const AddImg =()=>{
	const d = new Date().toLocaleString();
	return(
		<div className="postss">
		  	<div className="postss_first">
		  		<div className="create__first">
		  		<div className="create_img"><img src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}  alt=""/></div>
		  		<div className="user__name">
		  			<p><b>Uttam Kumar</b> <span>{d}</span></p>
		  			<p><span><b>Frontend Developer</b></span></p>
		  		</div>
		  		<div className="poststext">
		  		<p>Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist, and a former chairman of Tata Sons. He was also chairman of Tata Group, from 1990 to 2012, and again, as interim chairman, from October 2016 through February 2017, and continues to head its charitable trusts.</p>
		  		<img src={`${process.env.PUBLIC_URL}/images/ratan_tata4.jpg`} alt=""/>
		  		</div>
		  		</div>
		  	</div>
		 
		  </div>
		)
}

export default AddImg