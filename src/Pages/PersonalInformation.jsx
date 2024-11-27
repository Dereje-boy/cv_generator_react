import personalInformation from '/src/images/personal_information.png';
//import {Form} from 'react-router-dom';

import {useState} from 'react';

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';


export default function PersonalInformation(){

	const [data, setData] = useState('Default data');

	const [firstname, setfirstname] = useState('');
	const handlefirstname = (e)=>{
		setfirstname(()=>e.target.value)
	}
	
	const [lastname, setlastname] = useState('');
	const handlelastname = (e)=>{
		setlastname(()=>e.target.value);
	}
	
	const [phonenumber, setphonenumber] = useState('');
	const handlephonenumber = (e)=>{
		setphonenumber(()=>e.target.value);
	}
	
	const [city, setcity] = useState('');
	const handlecity = (e)=>{
		setcity(()=>e.target.value);
	}
	
	const [state, setstate] = useState('');
	const handlestate = (e) =>{
		setstate(()=>e.target.value);
	}

	const [aboutme, setaboutme] = useState('');
	const handleaboutme = e =>{
		setaboutme(()=>e.target.value);
	}

	const body = {
		firstname,
		lastname,
		phonenumber,
		city,
		state,
		aboutme
	}

	const options = {
		method : 'POST',
		headers : {
			'Content-Type': 'application/json',
		},
		credentials : 'include',
		body : JSON.stringify(body)
	}

	const formSubmit = (e) =>{
		e.preventDefault();
		let result = `firstname ${firstname} \t lastname ${lastname} \t city ${city} \t 
			state ${state} \t phone ${phonenumber} \t aboutme ${aboutme}`;
		//setData(()=>"After form submit " + result );

		fetch('http://localhost:3000/personalinformation', options)
			.then(response=>{
				return response.json()
			}).then(
				res=>{ setData(prev=>JSON.stringify(res));	}
			)
			.catch(e=>{
				setData(()=>e.message)
			})
	}

	return(
		<div className="d-flex flex-row flex-wrap align-items-center justify-content-center gap-5 pt-5 px-2">
			<TopImage imageSrc = {personalInformation} title="Personal Information"/>
			{/**
				<div className="d-flex flex-column gap-2 ">
					<h3 className="card-title text-center text-danger ">Personal Information</h3>
					<img style={{height:300}} src={personalInformation} alt="personal information image" />
				</div>
				**/}
		
			<form style={{maxWidth:400}} 
				method="POST"  
				className="d-flex flex-column gap-3 shadow p-2"
				onSubmit = {formSubmit}
				>
				<CreateFormControl 
					name="firstname" value="" type="text" 
					label="Firstname" ph="Abebe" desc="" 
					onchange = {handlefirstname}/>
				<CreateFormControl 
					name="lastname" value="" type="text" 
					label="Lastname" ph="Kebede" desc=""
					onchange = {handlelastname}/>
				
				<div class="form-group">
				    <label for="email">Email</label>
				    <input type="email" class="form-control" disabled placeholder="someone@gmail.com" />
				    <small class="form-text text-muted"></small>
				</div>
				
				<CreateFormControl 
					name="phoneNumber" value="" type="tel" label="Phone Number" 
					ph="+251900000000" desc="provide your primary phone number"
					onchange = {handlephonenumber}/>
				<CreateFormControl 
					name="city" value="" type="text" label="City or Hometown" 
					ph="Addis Ababa" desc="Enter your home town"
					onchange = {handlecity} />
				<CreateFormControl 
					name="state" value="" type="text" label="State or Province" 
					ph="Addis Ababa" desc="Enter the state your city is located in"
					onchange = {handlestate}/>

				<div class="form-group border border-1 p-2">
					<label for='aboutme'>About Me</label> 
					<textarea rows='3' id="aboutme" class="form-control" 
						placeholder="Describe your self here" required={true}  onChange={handleaboutme}></textarea> 
					<small class="form-text text-muted">Self Description</small>
				</div>

				<p> {data} </p>
				
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	);
}

/**
function CreateFormControl({name, type, value,label, ph,desc}){
	return(
		<div class="form-group">
		    <label for={name}>{label}</label>
		    <input type={type} class="form-control" placeholder={ph} />
		    <small class="form-text text-muted">{desc}</small>
	  </div>
	);
}

**/

