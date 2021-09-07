import React,{useState} from 'react';
import Createtweet from './Createtweet';
import Posts from './Posts';
import AddImg from './AddImg';



const Twitter =()=>{
	const [addItem, setAddItem] = useState([]);
	const addNote =(note)=>{
		/*alert('I am click');*/
		setAddItem((prevData)=>{
			return [...prevData, note];
		});
		console.log(note);
	}
	const onDelete =(id)=> {
		setAddItem((olddata)=>
			olddata.filter((currdata, indx) => {
				return indx !== id;
			})
		)
	}
	return (
		<div className="posts">
			<div className="posts_home">Home</div>
			<Createtweet passNote={addNote}/>
			
			{addItem.map((val, index)=>{
				return <Posts
				 	key={index}
				 	id={index}
				 	title={val.title}
				 	deleteItem={onDelete}
				/>
			})}
			<AddImg/>
		</div>
	)
}
export default Twitter