import multipleDesign from "/src/images/solutions/multipleDesign.jpg";
import shareableDocument from "/src/images/solutions/shareableDocument.jpg";
import updateDocument from "/src/images/solutions/updateDocument.jpg";

export default function SolutionsPart(){
return(
	<div className="p-3 d-flex flex-row flex-nowrap overflow-scroll gap-2 ">
		
		<CreateCard imageSource={shareableDocument} title="Shareable Documents" desc="You can download and share the CV in pdf format" />
		<CreateCard imageSource={multipleDesign} title="Multiple Designs" desc="Different design options to choose from" />
		<CreateCard imageSource={updateDocument} title="Updateable" desc="Update your information instantly" />
		
	</div>
);}

function CreateCard({imageSource, title, desc}){
return (
	<div style={{minWidth:"300px"}} className="w-25 d-flex flex-column gap-2 align-items-center border border-primary shadow-sm p-2 py-4 rounded rounded-2">
		<img height={150} src={imageSource} className="rounded rounded-2" />
		<h2 className="text-center text-primary fw-bold fs-2">{title} </h2>
		<p className="text-black text-center fs-5">
			{desc}
		</p>
		
	</div>
);}