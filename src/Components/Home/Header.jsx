import {Link } from 'react-router-dom';
import Navs from "./Navs.jsx";

export default function Header(){

return(
	<div className="p-2 w-100 d-flex flex-row space-between align-items-center border border-white border-2 rounded shadow">
		<div className="flex-grow-1 ">
			<Link className="fs-3 fw-bolder text-decoration-none" to="/"> 
				CV Generator
			</Link>
		</div>
		<Navs />
	
	</div>
	);

}