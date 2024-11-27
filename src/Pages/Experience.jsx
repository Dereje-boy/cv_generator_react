import ExperienceImage from '/src/images/experience.webp';
//import {Form} from 'react-router-dom';

import {useState} from 'react'

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';

export default function Experience(){

	const [data, setdata] = useState('Before sending data');

	const [position, setposition] = useState('');
	const handleposition = (e)=>{
		setposition(prev=>e.target.value)
		setData('checked')

	}

	const [startdate, setstartdate] = useState('');
	const handlestartdate = (e)=>{
		setstartdate(prev=>e.target.value)
	}

	const [enddate, setenddate] = useState('');
	const handleenddate = (e)=>{
		setenddate(prev=>e.target.value)
	}

	const [companyname, setcompanyname] = useState('');
	const handlecompanyname = (e)=>{
		setcompanyname(prev=>e.target.value)
	}

	const [aboutexperience, setaboutexperience] = useState('');
	const handleaboutexperience = (e)=>{
		setaboutexperience(prev=>e.target.value)
		setData(e.target.value)
	}

	const [stillhere, setstillhere] = useState(false)
	const handlestillhere = (e)=>{
		setstillhere(e.target.checked);
		setData('checked')
	}

	const submitform = (e)=>{
		e.preventDefault();
		let experience = {
			position,
			startdate,
			enddate,
			companyname,
			stillhere,
			aboutexperience
		}

     const options = {
        method : 'POST',
        headers : {
             'Content-Type' : 'application/json'
         },
         credentials : 'include',
         body : JSON.stringify(experience)
      }

		fetch('http://localhost:3000/experience', options)
		.then(response=>{
			return response.json();
		}).then(resjson=>{
			setdata(prev=>JSON.stringify(resjson) );
		}).catch(e=>{
			setdata(prev=>e.message)
		})
		
		// setdata(prev=> JSON.stringify(experience) )
	}

		

return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<TopImage imageSrc = {ExperienceImage} title="Experience"/>
			
		<form onSubmit={submitform}  style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
			<CreateFormControl name="position" value={position} onchange={handleposition}  type="text" label="Position" 
				ph="Senior Software Engineer" desc="provide the position you have been working on" required={true}/>
			<CreateFormControl name="startDate" value={startdate} onchange={handlestartdate} type="date" label="Start Date" 
				ph="01/01/2022" desc="Provide the date you have started working on this position in this company" required={true}/>
			<div class="d-flex flex-column border border-1 p-2">
			    <label for="stillHere" className="form-label">Still I Work Here</label>
		        <input
						type="checkbox"
                        name="stillHere"
                        value = {stillhere}
                        onChange = {handlestillhere}                  
                        className="form-control form-check-input" />
			    <small className="form-text text-muted">Check only if you are still working on this position</small>
			</div>
			
			<CreateFormControl name="endDate" value={enddate} onchange={handleenddate} type="date" label="End Date" 
				ph="01/01/2023" desc="If you stoped working on this position or company provide that date here"/>
			<CreateFormControl name="companyName" value={companyname} onchange={handlecompanyname} type="text" 
				label="Company Name" ph="KANU IT SOLUTIONS" desc="Provide the name of the company" required={true}/>
				
			<div className="form-group border border-1 p-2">
			    <label for="aboutExperience" className="form-label">About Experience</label>
		        <textarea
                        name="aboutExperience"
                        id="about-me"
                        rows="3"
                        value={aboutexperience}
                        onChange = {handleaboutexperience}
                        className="form-control"
                        required></textarea>
			    <small className="form-text text-muted">Enter some about the experience you have got during your stay on the position in this company. You can provide regarding the situation you have faced and achievement you got with decisions you made. </small>
			</div>

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
