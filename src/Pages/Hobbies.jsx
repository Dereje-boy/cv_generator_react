import HobbiesImage from '/src/images/hobbies.jpg';
import {Form} from 'react-router-dom';

//important components
import CreateFormControl from '../Components/CreateFormControl.jsx';
import TopImage from '../Components/TopImage.jsx';


export default function Hobbies(){
return(
	<div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5 px-1">
		<TopImage imageSrc = {HobbiesImage} title="Hobbies"/>
	
		<Form style={{maxWidth:400}} method="post"  className="d-flex flex-column gap-3 shadow p-2">
		
			<CreateFormControl name="hobbies" value="" type="text" label="Hobbies" ph="Sketching, playing keyboard" desc="Separate your multiple hobbies by comma (,) eg: hiking, riding, playing cricket" required={true}/>
			
			<button type="submit" class="btn btn-primary">Submit</button>
		</Form>
	</div>


);}