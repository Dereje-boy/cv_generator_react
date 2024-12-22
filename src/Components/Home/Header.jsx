import {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Navs from "./Navs.jsx";

export default function Header(){

	const navigate = useNavigate();

	const [email, setemail] = useState('Not signed in');
	const emailhandler = (message)=>{
		setemail(message);
	}

	const [signedin, setsignedin] = useState(false);
	const signedinhandler = (value)=>{
		setsignedin(value);
	}

	const logout = (e)=>{
		//another way of logging out
		//setemail()
		document.cookie = 'email=;'
		document.cookie = 'token=;'
		navigate('/login')
	}

	useEffect(()=>{
		getcookies(emailhandler, signedinhandler)
	}, [])


return(
	<div className="px-2 w-100 d-flex flex-row space-between align-items-center border border-white border-2 rounded shadow">
		<div className="flex-grow-1 ">
			<Link className="fs-5 fw-bolder text-decoration-none" to="/"> 
				CV Generator
			</Link>
			<br/>

			{signedin && 
				<small className="text-danger">{email} 
					<button className="btn btn-link btn-sm" onClick={logout}> Logout</button>
				</small>
			}
		</div>
		<Navs />
	
	</div>
	);

}

function getcookies(emailhandler, signedinhandler){
	const allcookies = document.cookie.split('; ');

	for(let i=0; i<allcookies.length; i++){
		let thiscookie = allcookies[i];
		let acookie = thiscookie.split('=');
		for(let j=0; j<acookie.length; j++)
			if(acookie[0] == 'email'){
				emailhandler(acookie[1]?acookie[1]:"Not signed in");
				signedinhandler(acookie[1] ? true : false)
			}
		
	}

}

