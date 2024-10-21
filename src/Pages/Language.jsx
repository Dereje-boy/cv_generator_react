import LanguageImage from '/src/images/languages.jpg';
import {Form} from 'react-router-dom';

export default function Language(){
return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<div className="d-flex flex-column gap-2 ">
			<h3 className="card-title text-center text-danger ">Language</h3>
			<img style={{width:300}} src={LanguageImage} alt="language image" />
		</div>
	
		<Form style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
		
			<CreateFormControl name="language" value="" type="text" label="Language" ph="English" desc="provide the name of the language" required={true}/>
			<select
                id="level"
                name="level"
                class="form-select"
                required >
	            <option value="Native" selected >Native</option>
	            <option value="Fluent">Fluent</option>
	            <option value="Advanced">Advanced</option>
	            <option value="Beginner">Beginner</option>
             </select>
			
										
			<button type="submit" class="btn btn-primary">Submit</button>
		</Form>
	</div>


);}

function CreateFormControl({name, type, value,label, ph,desc,  required}){
	return(
		<div class="form-group border border-1 p-2">
		    <label for={name}>{label}</label>
		    <input type={type} class="form-control" placeholder={"example: "+ph} required={required}/>
		    <small class="form-text text-muted">{desc}</small>
	  </div>
	);
}