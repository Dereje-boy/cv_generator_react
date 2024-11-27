import HobbiesImage from '/src/images/hobbies.jpg';
//import {Form} from 'react-router-dom';

import {useState} from 'react';

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';


export default function Hobbies(){

	const [data, setdata] = useState('default data');

	const [hobby, sethobby] = useState('');
	const handlehobby = e=>{
		sethobby(e.target.value)
	}

	const payload = {
		hobby
	}

	const options = {
		method: 'POST',
		headers : {
			'content-type':'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(payload)
	}

	const submitform = e=>{
		e.preventDefault();
		setdata('Hobby : ' + JSON.stringify(payload))

		fetch('http://localhost:3000/hobby', options)
		.then(res=>{
			return res.json();
		})
		.then(resjson=>{
			setdata('Res json ' + JSON.stringify(resjson))
		}).catch(e=>setdata(e.message))
	}
	
return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<TopImage imageSrc = {HobbiesImage} title="Hobbies"/>
	
		<form onSubmit={submitform} style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
		
			<CreateFormControl name="hobbies" onchange={handlehobby} value={hobby} type="text" label="Hobbies" ph="Sketching, playing keyboard" desc="Separate your multiple hobbies by comma (,) eg: hiking, riding, playing cricket" required={true}/>

			<p> {data} </p>	
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>

);}
