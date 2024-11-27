import EducationImage from '/src/images/education.jpg';
//import {Form} from 'react-router-dom';

import {useState} from 'react';

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';

export default function Education(){

	const [nameofuniversity, setnameofuniversity] = useState('');
	const handlenameofuniversity = (e)=>{
		setnameofuniversity(prev=>e.target.value);
	}

	const [titleofdocument, settitleofdocument] = useState('');
	const handletitleofdocument = (e)=>{
		settitleofdocument(prev=>e.target.value)
	}

	const [graduationyear, setgraduationyear] = useState('');
	const handlegraduationyear = (e) =>{
		setgraduationyear(prev=>e.target.value)
	}

	const [cgpa, setcgpa] = useState('');
	const handlecgpa = (e) =>{
		setcgpa(prev=>e.target.value)
	}

	const [data, setData] = useState('before form submit');

	const payload = {
		nameofuniversity,
		titleofdocument,
		graduationyear,
		cgpa
	}

	const options = {
		method : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		credentials : 'include',
		body : JSON.stringify(payload)
	}

	const submitForm = (e)=>{
		e.preventDefault();
		setData(prev=>"After form submit")

		fetch('http://localhost:3000/education', options)
			.then(response=>{
				return response.json();
			}).then(jsonres=>{
				setData(prev=>JSON.stringify(jsonres));
			}).catch(e=>{
				setData(prev=>e.message)
			})
	}


return(
	<div className="d-flex flex-row flex-wrap align-items-center justify-content-center gap-5 pt-5 px-2">
		<TopImage imageSrc = {EducationImage} title="Education"/>
	
		<form onSubmit = {submitForm}  style={{maxWidth:400}} method="post" className="d-flex flex-column gap-3 shadow p-2">
			<CreateFormControl name="nameOfUniversity" value={nameofuniversity} 
				onchange={handlenameofuniversity}  type="text" 
				label="Name of University" ph="Addis Ababa University" desc=""/>
			<CreateFormControl name="titleOfDocument" value={titleofdocument} onchange={handletitleofdocument} type="text" label="Title of Document" ph="Bsc in Surveying Engineering" desc=""/>
			
			<div class="form-group">
			    <label for="graduationYear">Graduation Year</label>
			    <input type="month" class="form-control" value={graduationyear} onChange={handlegraduationyear}  />
			    <small class="form-text text-muted">Select year and month of completion year</small>
			</div>
				
			<div class="form-group">
			    <label for="cgpa">CGPA</label>
			    <input type="number"
                                step="0.01"
                                min="2"
                                max="4"
                                name="cgpa"
                                class="form-control fw-bold px-2 fs-5"
                                value = {cgpa}
                                onChange = {handlecgpa}
                                required/>
			    <small class="form-text text-muted"></small>
			</div>

			<p> {data} </p>
			
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>


);}


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
