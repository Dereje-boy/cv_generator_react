export default function Card({title, desc, cta}){
	const cardStyle = {
		width: 300
}
	
return (
		<div style={cardStyle} className="card">
			
			<div className="card-body">
				<h4 className="card-title">{title}</h4>
				<p className="card-text"> {desc}</p>
				<a href="/" className="btn btn-primary">{cta}</a>
			</div>
			
		</div>
	);
}