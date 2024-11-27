import ReferenceImage from '/src/images/reference.jpg';
//import {Form} from 'react-router-dom';

import {useState} from 'react'

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';

export default function Reference(){

	const [data, setdata] = useState('');
	
	const [fullname, setfullname] = useState('default fullname');
	const handlefullname = (e)=>{
		setfullname(e.target.value)
	}

	const [phone, setphone] = useState('');
	const handlephone = e=>{
		setphone(e.target.value)
	}

	const [email, setemail] = useState('');
	const handleemail = (e)=>{
		setemail(e.target.value)
	}

	const [role, setrole] = useState('');
	const handlerole = (e)=>{
		setrole(e.target.value)
	}

	const payload = {
		fullname, phone, role, email,
	}

	const options = {
		method : 'POST',
		headers : {
			'Content-type' : 'application/json'
		},
		credentials : 'include',
		body : JSON.stringify(payload)
	}

	const submitform = e=>{
		e.preventDefault();
		setdata('Reference : ' + JSON.stringify(payload));

		fetch('http://localhost:3000/reference', options)
		.then(res=>{
			return res.json();
		})
		.then(resjson=>{
			setdata('Resjson : ' + JSON.stringify(resjson));
		}).catch(e=>{
			setdata(e.message);
		})
	}


return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<TopImage imageSrc = {ReferenceImage} title="Reference"/>
	
		<form onSubmit={submitform} style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
		
			<CreateFormControl name="fullname" onchange={handlefullname} value={fullname} type="text" label="Fullname" ph="Kidus Gebrehiwot" desc="Fullname of your reference" required={true}/>
			
			<CreateFormControl name="phone" onchange={handlephone} value={phone} type="the;" label="Phone No." ph="0925252525" desc="Phone number of your reference" required={true}/>
			
			<CreateFormControl name="email" onchange={handleemail} value={email} type="email" label="Email" ph="yourreference@gmail.com" desc="Email address of your reference" required={true}/>
			
			<CreateFormControl name="role" onchange={handlerole} value={role} type="text" label="Role" ph="System Designer and Architect" desc="The position you reference is working on." required={true}/>

			<p> {data} </p>
					
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>


);}

/**
function CreateFormControl({name, type, value,label, ph,desc,  required}){
	return(
		<div class="form-group border border-1 p-2">
		    <label for={name}>{label}</label>
		    <input type={type} class="form-control" placeholder={"example: "+ph} required={required}/>
		    <small class="form-text text-muted">{desc}</small>
	  </div>
	);
}
**/
