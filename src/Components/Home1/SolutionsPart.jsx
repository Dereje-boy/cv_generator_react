import multipleDesign from "/src/images/solutions/multipleDesign.jpg";
import shareableDocument from "/src/images/solutions/shareableDocument.jpg";
import updateDocument from "/src/images/solutions/updateDocument.jpg";

export default function SolutionsPart(){
return(
<div className="d-flex flex-column gap-1 py-3 mx-auto">
	<h2 className="text-center align-self-center text-primary fs-2 fw-bold border-0 border-primary border-bottom border-2 pb-2"> Our Services  </h2>
	<div className="d-flex flex-row gap-3 overflow-auto py-2 px-4 w-100 mx-5">
		
		<CreateCard imageSource={shareableDocument} title="Shareable Documents" desc="You can download and share the CV in pdf format" />
		<CreateCard imageSource={multipleDesign} title="Multiple Designs" desc="Different design options to choose from" />
		<CreateCard imageSource={updateDocument} title="Updateable" desc="Update your information instantly" />
	
		
	</div>
</div>
);}

function CreateCard({imageSource, title, desc}){
return (
	<div style={{minWidth:"300px"}} className="w-25 d-flex flex-column gap-2 align-items-center border border-primary shadow-sm p-2 py-4 rounded rounded-2">
		<img height={150} src={imageSource} className="rounded rounded-2 shadow" />
		<h2 className="text-center text-primary fw-bold fs-2">{title} </h2>
		<p className="text-black text-center fs-5">
			{desc}
		</p>
		
	</div>
);}