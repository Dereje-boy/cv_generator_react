export default function Card({title, desc, cta, image}){
	const cardStyle = {
		width: 300,
		height:500
}
	
return (
		<div style={cardStyle} className="card d-flex flex-column">
			<img src={image} alt={title} />
			<div className="card-body flex-grow-1 d-flex flex-column">
				<h4 className="card-title text-center text-primary text-decoration-underline">{title}</h4>
				<div className="card-text d-flex flex-grow-1 flex-column justify-content-center"> 
					<p className="fs-6 text-justify">{desc}</p>
				</div>
				<a href="/" className="btn btn-primary align-self-center">{cta}</a>
			</div>
			
		</div>
	);
}