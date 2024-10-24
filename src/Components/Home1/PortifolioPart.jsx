import design1 from '/src/images/design1.png';
import design2 from '/src/images/design2.png';

export default function PortifolioPart(){
return (
<div className="d-flex flex-row gap-3 overflow-auto py-5 px-4 bg-primary">
	<CreatePortifolio imageSource={design1} title="Dereje Gezahegn" desc="This CV was created by Dereje Gezahegn with this good looking design. We hope him great looking for job time" />
	<CreatePortifolio imageSource={design2} title="Abeba Kebede" desc="This CV was designed for ABEBE KEBEDE with his preference design. We hope him great looking for job time" />
	
	
</div>
);}


function CreatePortifolio({imageSource, title, desc}){
return (
<div className=" d-flex flex-row align-items-center gap-3 bg-white p-2 border border-white shadow rounded  ">
	<img width="300" src={imageSource} className="shadow p-1 rounded rounded-3" alt={title}/>
	<div style={{minWidth: "200px"}} className="d-flex flex-column justify-content-center gap-3 shadow p-2">
		<h3 className="text-center text-primary fs-3 fw-bold">{title} </h3>
		<p className="text-center"> {desc} </p>
		
	</div>

</div>
);}