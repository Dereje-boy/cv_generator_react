import HobbiesImage from '/src/images/hobbies.jpg';
import {Form} from 'react-router-dom';

export default function Hobbies(){
return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<div className="d-flex flex-column gap-2 ">
			<h3 className="card-title text-center text-danger ">Hobbies</h3>
			<img style={{width:300}} src={HobbiesImage} alt="hobbies image" />
		</div>
	
		<Form style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
		
			<CreateFormControl name="hobbies" value="" type="text" label="Hobbies" ph="Sketching, playing keyboard" desc="Separate your multiple hobbies by comma (,) eg: hiking, riding, playing cricket" required={true}/>
			
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