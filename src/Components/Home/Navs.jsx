import {NavLink} from "react-router-dom";

export default function Navs(){

return (
	<ul className=" p-2 list-group list-group-flush list-group-horizontal">
		<CreateNav path="/" label="Home" />
		<CreateNav path="/profile" label="Profile" />
		<CreateNav path="/login" label="Login" />
		<CreateNav path="/getCV" label="Get CV" />
	</ul>
	);
}

function CreateNav({path, label}){

return (
	<li className=" p-1 list-group-item">
		<NavLink to={path} 
			className = {({ isActive }) => { return isActive ? "btn btn-primary text-decoration-none" : "btn btn-outline-primary text-decoration-none"; }}>
			{label}
		</NavLink>
	</li>
	
	);

}