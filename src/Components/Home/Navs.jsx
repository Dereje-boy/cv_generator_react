import {NavLink} from "react-router-dom";

export default function Navs(){

return (
	<ul className="d-flex flex-row alig-items-center">
		<CreateNav path="/" label="Home" />
		<CreateNav path="/blogs" label="Blogs" />
		<CreateNav path="/login" label="Login" />
		
	</ul>
	);
}

function CreateNav({path, label}){

return (
	<li className="flex-grow-1">
		<NavLink to={path} className = {({isActive})=> isActive && "bg-primary"}>
			{label}
		</NavLink>
	</li>
	
	);

}