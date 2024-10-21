import design1 from '/src/images/design1.png';
import design2 from '/src/images/design2.png';

export default function GetCV(){
return (
	<form method="get" className="d-flex flex-column justify-content-center align-items-center gap-2 pt-5 px-1">
		<h3 className="fw-bold text-danger">Get your CV </h3>
		<p className="text-secondary fw-bold">Select the design you want and then click download  button </p>
		
		<div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-4">
			<CreateCheckBox title="Design One" sampleImage={design1} label="Select Design 1" name="design" id="design1"/>
			<CreateCheckBox title="Design Two" sampleImage={design2} label="Select Design 2" name="design" id="design2"/>
		</div>
		
		<button type="submit"  className="btn btn-primary px-4 py-2 fs-6 mt-4"> ⬇️ Download </button>
		
	</form>
);}

function CreateCheckBox({title, sampleImage, label, name, id}){
return(
	<div className="form-group pt-2 px-4 border d-flex flex-column align-self-center shadow rounded-2">
		<h4 className="text-danger fw-bold text-center"> {title}  </h4>
		<img height={350} src={sampleImage} alt={"design sample image of "+title} />
		<div class="form-check d-flex flex-row flex-wrap justify-content-center align-items-center ">
		    <input value={id} type="radio" class="form-check-input fs-5 fw-bold" id={id} name={name} />
		    <label class="form-check-label px-3 py-2 fs-5 fw-bold" for={id}> {label} </label>
		</div>
	</div>
);}