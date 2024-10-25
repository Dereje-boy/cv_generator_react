import profileImage from "/src/images/testimonials/face3.png";

export default function AboutUsPart(){
return(
<div className="d-flex flex-column align-items-center gap-3 py-5 px-4 bg-primary text-white">
	<h2 className="text-center fs-2 fw-bolder text-decoration-underline"> About Us</h2>
	<CreateDiv />
</div>
);}


function CreateDiv(){
return(
	<div style={{maxWidth:"600px"}} className="d-flex flex-row overflow-auto ">
		<img height="200" src={profileImage} alt="profile photo" className="rounded rounded-circle border border-white border-3 p-1"/>
		<div className="d-flex flex-column justify-content-center p-2 text-center" >
			<p>
				I happy to provide you this CV generating website for free. I was very curious to help others with what I have and I know and this is one of a lot.
			</p>
			<p>
				Happy to see you here 😄 <br />
				<i> Daraje G.</i>
			</p>
		</div>
	</div>
);}

