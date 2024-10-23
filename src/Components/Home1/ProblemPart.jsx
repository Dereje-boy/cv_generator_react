import cv_logo from "/src/images/cv_generator_log.png";

export default function ProblemPart(){
return (
	<div className="pt-3 d-flex flex-row flex-wrap align-items-center text-primary border border-white rounded rounded-2 shadow-sm">
		<div style={{aspectRatio:1/1}} className="w-50 p-2 d-flex flex-row align-items-center justify-content-center">
			<img src={cv_logo} alt="cv logo" className="w-100" />
		</div>
		
		<div className="w-50 p-3 d-flex flex-column gap-1 border border-white border-3 shadow">
			<h2 className="text-decoration-underline text-center">CV Generator </h2>
			
			<p className="text-capitalize text-primary text-center">
				Create a standalone cv with speed as fast as you are
			</p>
			<div className="d-flex flex-column text-secondary fw-bold text-capitalize gap-0">
			
			<p> ✍️ No more Email Verification </p>
			{// <p> ✍️ No More having bad looking CV designs </p>
			}
			<p> ✍️ Just Create an account </p>
			<p> ✍️ Fill your information </p>
			<p> ✍️ have your CV in PDF </p>
			{// <p> ✍️ for free </p>
			}
			<p className="text-capitalize text-primary text-center"> Read More From Below ✍️</p>
			</div>
</div>
	</div>
);}