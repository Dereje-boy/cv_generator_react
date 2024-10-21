import EducationImage from '/src/images/education.jpg';
import {Form} from 'react-router-dom';

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';

export default function Education(){
return(
	<div className="d-flex flex-row flex-wrap align-items-center justify-content-center gap-5 pt-5 px-2">
		<TopImage imageSrc = {EducationImage} title="Education"/>
	
		<Form style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
			<CreateFormControl name="nameOfUniversity" value="" type="text" label="Name of University" ph="Addis Ababa University" desc=""/>
			<CreateFormControl name="titleOfDocument" value="" type="text" label="Title of Document" ph="Bsc in Surveying Engineering" desc=""/>
			
			<div class="form-group">
			    <label for="graduationYear">Graduation Year</label>
			    <input type="month" class="form-control" />
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
                                required/>
			    <small class="form-text text-muted"></small>
			</div>
			
			<button type="submit" class="btn btn-primary">Submit</button>
		</Form>
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