//import {NavLink} from "react-router-dom";

export default function Navs(){

return (
	<ul className=" p-2 list-group list-group-flush list-group-horizontal border-0">
		<CreateNav path="/" label="Home" />
		<CreateNav path="/blogs" label="Blogs" />
		<CreateNav path="/login" label="Login" />
		
	</ul>
	);
}

function CreateNav({path, label}){

return (
	<li className=" p-1 list-group-item">
		<a href={path} 
			className = {({isActive})=> isActive && "bg-primary"} 
			className="btn btn-outline-primary text-decoration-none">
			{label}
		</a>
	</li>
	
	);

}