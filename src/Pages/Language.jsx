import LanguageImage from '/src/images/languages.jpg';
import {useState} from 'react'
//import {Form} from 'react-router-dom';

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';


export default function Language(){

	const [data, setdata] = useState('before form submit'); 
	
	const [language, setlanguage] = useState('default language')
	const handlelanguage = (e) =>{
		setlanguage(e.target.value)
	}

	const [level, setlevel] = useState("Native");
	const handlelevel = (e)=>{
		setlevel(e.target.value)
	}

	const payload = { language,level }

	const options = {
		method : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		credentials : 'include',
		body : JSON.stringify(payload)
	}

	const submitform = (e)=>{
		e.preventDefault();
		setdata('After form submit \n' + JSON.stringify(payload));
		fetch('http://localhost:3000/language', options)
		.then(res=>{
			return res.json();
		}).then(resjson=>{
			setdata(JSON.stringify(resjson))
		}).catch(e=>{
			setdata(e.message);
		})
	}
	
return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<TopImage imageSrc = {LanguageImage} title="Language"/>
	
		<form onSubmit={submitform} style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
		
			<CreateFormControl onchange={handlelanguage} name="language" value="" type="text" label="Language" ph="English" desc="provide the name of the language" required={true}/>
			<select
                id="level"
                name="level"
                class="form-select"
                value={level}
                onChange = {handlelevel}
                required >
	            <option value="Native">Native</option>
	            <option value="Fluent">Fluent</option>
	            <option value="Advanced">Advanced</option>
	            <option value="Beginner">Beginner</option>
             </select>
			
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
