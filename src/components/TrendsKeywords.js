import React,{useState} from 'react';

const TrendsKeywords =()=> {
	const [state, setState] =useState([
			{id:1,country:'	Trend in India',keyword:'Future India',totalkeywords:'2000k'},
			{id:2,country:'	Trend in India',keyword:'2020–2021 Indian farmers protest',totalkeywords:'6000k'},
			{id:3,country:'	Trend in India',keyword:'4th Test: Virat Kohli slams the wall in frustration after losing his wicket on Day 4 of Oval Test - Watch',totalkeywords:'2560k'},
		])
	return(
		<div className="keywords">
		<div className="key">
			<div className="keywords_heading">
				<h4>Trends for you</h4>
			</div>
			{state.map(keyword => (
				<div key={keyword.id}>
					<div className="country">
						{keyword.country}
					</div>
					<div className="keywords__name">
						<strong>{keyword.keyword}</strong>
					</div>
					<div className="keyword__tweets">
						{keyword.totalkeywords}
					</div>
				</div>
			))}
			
			</div>
		</div>
		)
}

export default TrendsKeywords