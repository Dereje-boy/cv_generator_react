import ReferenceImage from '/src/images/reference.jpg';
import {Form} from 'react-router-dom';

export default function Reference(){
return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<div className="d-flex flex-column gap-2 ">
			<h3 className="card-title text-center text-danger ">Reference</h3>
			<img style={{width:300}} src={ReferenceImage} alt="language image" />
		</div>
	
		<Form style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
		
			<CreateFormControl name="fullname" value="" type="text" label="Fullname" ph="Kidus Gebrehiwot" desc="Fullname of your reference" required={true}/>
			
			<CreateFormControl name="phone" value="" type="the;" label="Phone No." ph="0925252525" desc="Phone number of your reference" required={true}/>
			
			<CreateFormControl name="email" value="" type="email" label="Email" ph="yourreference@gmail.com" desc="Email address of your reference" required={true}/>
			
			<CreateFormControl name="role" value="" type="text" label="Role" ph="System Designer and Architect" desc="The position you reference is working on." required={true}/>
										
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