export default function TopImage({title, imageSrc}){
return(
	<div className="d-flex flex-column gap-2 ">
		<h3 className="card-title text-center text-danger ">{title}</h3>
		<img style={{width:300}} src={imageSrc} alt={title + " image"} />
	</div>
);}