import ExperienceImage from '/src/images/experience.webp';
import {Form} from 'react-router-dom';

export default function Experience(){
return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<div className="d-flex flex-column gap-2 ">
			<h3 className="card-title text-center text-danger ">Experience</h3>
			<img style={{width:300}} src={ExperienceImage} alt="experience image" />
		</div>
	
		<Form style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
			<CreateFormControl name="position" value="" type="text" label="Position" ph="Senior Software Engineer" desc="provide the position you have been working on" required={true}/>
			<CreateFormControl name="startDate" value="" type="date" label="Start Date" ph="01/01/2022" desc="Provide the date you have started working on this position in this company" required={true}/>
			<div class="d-flex flex-column border border-1 p-2">
			    <label for="stillHere">Still I Work Here</label>
		        <input
						type="checkbox"
                        name="stillHere"                  
                        class="form-check-input" />
			    <small class="form-text text-muted">Check only if you are still working on this position</small>
			</div>
			
			<CreateFormControl name="endDate" value="" type="date" label="End Date" ph="01/01/2023" desc="If you stoped working on this position or company provide that date here"/>
			<CreateFormControl name="companyName" value="" type="text" label="Company Name" ph="KANU IT SOLUTIONS" desc="Provide the name of the company" required={true}/>
				
			<div class="form-group border border-1 p-2">
			    <label for="aboutExperience">About Experience</label>
		        <textarea
                        name="aboutExperience"
                        id="about-me"
                        rows="2"
                        class="form-control"
                        required></textarea>
			    <small class="form-text text-muted">Enter some about the experience you have got during your stay on the position in this company. You can provide regarding the situation you have faced and achievement you got with decisions you made. </small>
			</div>
							
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