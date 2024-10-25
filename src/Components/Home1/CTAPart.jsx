import {Link} from "react-router-dom";
import cv_logo from "/src/images/cv_generator_log.png";

export default function CTAPart(){
return (
	<div className="pt-3 d-flex flex-row flex-wrap align-items-center text-primary border-danger border-right-0 rounded rounded-2 shadow-sm">
		<div style={{aspectRatio:1/1}} className="w-50 p-2 d-flex flex-row align-items-center justify-content-center">
			<img src={cv_logo} alt="cv logo" className="w-100" />
		</div>
		
		<div className="w-50 p-3 d-flex flex-column gap-3 ">
			<h2 className="text-decoration-underline text-center fw-bold">CV Generator </h2>
			
			<div className="d-flex flex-column align-items-center fw-bold text-capitalize gap-3">
			
			<p className="text-black text-center">CV Generator generates you a CV with multiple designs and stores your information for future reference, <br />start today for generating engaging CVs </p>
			
			<Link to="/login" > 
				<p className="text-capitalize btn btn-primary p-2"> 
					SignUp/ Sign in 
				</p>
			</Link>
			</div>
</div>
	</div>
);}