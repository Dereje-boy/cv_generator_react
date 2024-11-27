import {useState} from 'react';

import CreateFormControl from '../Components/CreateFormControl.jsx';

	
const LoginTab = ({switchhandler})=>{

	const [nameofuniversity, setnameofuniversity] = useState('');
	const handlenameofuniversity = (e)=>{ 
		setnameofuniversity(prev=>e.target.value);
 	}
 	
	const [data, setData] = useState();
	
	const [initialEmail, setEmail] = useState('one@gmail.com');
	const [initialPassword, setPassword] = useState('one@gmail.com');

	const updateEmail = (e)=> setEmail((prevData)=>e.target.value);
	const updatePassword = (e)=>{setPassword((prevData)=>e.target.value);}

	const payload = {
		email: initialEmail,
		password: initialPassword
	}

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(payload)
	}

	const login = (e)=>{
		e.preventDefault();
		setData((prevData)=> 'sending post request to backend' + initialEmail + `password: ${initialPassword}`);
		fetch('http://localhost:3000/users/login', options)
			.then(response=>{
				return response.json();
			}).then(resjson=>{
				setData(()=>JSON.stringify(resjson));
				if(resjson.success){
					setData("Signed in successfully, Redirecting you to profiles page")
					setTimeout(()=>{
						setData("Profiles page")
					},2000)
				}else{
					setData("Email or password is incrorrect. Please try again.")
				}
			})
			.catch(error=>{
				setData(()=>'There is a network error, Please try again later.')
			});
	}

	return (
		<form method="post" onSubmit = {login}  className=" d-flex flex-column justify-content-center align-items-center gap-2 shadow p-5">
			<h3 className="fw-bold text-danger">Login </h3>
			<p className="text-secondary fw-bold">Enter your Email and Password then click <strong> Login </strong> button </p>

			<div className="d-flex flex-column justify-content-center align-items-center gap-4">

				<div className="form-group d-flex flex-column">
	            	<label className="form-label fs-6 fw-bold pb-1" for="email" >Email Address</label>
	            	<input type="email" className="form-control fs-6 " id="email" placeholder="someone@gmail.com"
	                	value={initialEmail} onChange = {updateEmail}/>
				</div>

				<div className="form-group d-flex flex-column">
	            	<label className="form-label fs-6 fw-bold pb-1" for="password" > Password  </label>
	            	<input type="password" className="form-control fs-6 " id="password" placeholder="********"
	                	value = {initialPassword}  onChange = {updatePassword}/>
	        	</div>
			
			</div>
		
			<button type="submit"  className="btn btn-primary px-4 py-2 fs-6 mt-4">Login</button>

			{
				data &&
				<textarea rows="3"  editable={false} className="w-100 text-center border-white " value={data} > 
				</textarea>
			}

			<button onClick={switchhandler}
				className="btn btn-outline-primary px-4 py-2 fs-6 mt-4" > 
				Sign up
			</button>
		</form>
	);
}



const SignupTab = ({switchhandler})=>{

//this is all about sign up

const [signupdata, setsignupdata] = useState('');

const [signupemail, setsignupemail] = useState('hfg@gf.vom');
const handlesignupemail = (e)=>{
	setsignupemail(prev=>e.target.value);
}
const [signuppassword, setsignuppassword] = useState('');
const handlesignuppassword = (e)=>{
	setsignuppassword(prev=>e.target.value);
}

const [signuprpassword, setsignuprpassword] = useState("");
const handlesignuprpassword = (e)=>{
	setsignuprpassword(e.target.value);
}

const signuppayload = {
     email: signupemail,
     password: signuppassword,
     repeatpassword: signuprpassword
 }

const signupoptions = {
	method: "POST",
    headers : {
       'content-type' : "application/json"
    },
    credentials: 'include',
    body: JSON.stringify(signuppayload)
}

const signup = (e)=>{
     e.preventDefault();
     setsignupdata("Afetere signup form")

     fetch('http://localhost:3000/users/signup', signupoptions)
     .then(res=>{
     	return res.json()
     }).then(resjson=>{
     	const {success, reason, otherdata} = resjson;

     	setsignupdata(JSON.stringify(resjson))
     	if(success==true){
	     	//setsignupdata(reason);
	     	//setTimeout(()=>{
	     	//	setsignupdata('You are great')
	     	//}, 2000)
     	}else{
     		//setsignupdata(JSON.stringify(resjson));
     	}
     }).catch(e=>{
         setsignupdata(e.message)
     })
}


	return (
		<form method="post" onSubmit = {signup}  className=" d-flex flex-column justify-content-center align-items-center gap-2 shadow p-5">
			<h3 className="fw-bold text-danger">Sign Up </h3>
			<p className="text-secondary fw-bold">Enter your Email and Password then click <strong> Sign Up </strong> button </p>
	
			<div className="d-flex flex-column justify-content-center align-items-center gap-4">

				<div className="form-group d-flex flex-column">
	            	<label className="form-label fs-6 fw-bold pb-1" for="signupemail" >Email Address</label>
	            	<input type="email" className="form-control fs-6 " id="signupemail" placeholder="someone@gmail.com"
	                	value={signupemail} onChange = {handlesignupemail}/>
						</div>
			
				<div className="form-group d-flex flex-column">
	            	<label className="form-label fs-6 fw-bold pb-1" for="signuppassword" > Password  </label>
	            	<input type="password" className="form-control fs-6 " id="signuppassword" placeholder="********"
	                	value = {signuppassword}  onChange = {handlesignuppassword}/>
	        	</div>
	
				<div className="form-group d-flex flex-column">
		            <label className="form-label fs-6 fw-bold pb-1" for="signuprpassword" >Repeat Password  </label>
		            <input type="password" className="form-control fs-6 " id="signuprpassword" placeholder="********"
		              	value = {signuprpassword}  onChange = {handlesignuprpassword}/>
		        	</div>			
			</div>
		
			<button type="submit"  className="btn btn-primary px-4 py-2 fs-6 mt-4"> Sign Up</button>

			{
				signupdata && 
					<textarea editable={false} className="w-100 text-center border-white" value={signupdata} > 
					</textarea>

			}
			
			<button onClick={switchhandler} className="btn btn-outline-primary px-4 py-2 fs-6 mt-4"> Login </button>
		</form>
	);
}

function Login(){

	//document.cookie = "email=derejeg35@gmail.com; path=/; max-age=86400"; // Expires in 1 day
	//document.cookie = "password=1234567890; path=/; max-age=86400"; // Expires in 1 day

	const [logintab, setlogintab] = useState(true);
	const switchhandler = (e)=>{
		setlogintab(prev=>!prev)
	}
	
	return (
		<div className="d-flex justify-content-center align-items-center pt-3">
			{logintab ? <LoginTab switchhandler={switchhandler} />  
				: 
				<SignupTab switchhandler={switchhandler}/>}
		</div>
  	);
}

export default Login

//const CreateEmail = ({type, name, ph, id, value}) => {
//	const [initialEmail, setEmail] = useState('someone@gmail.com');
//	const updateEmail = (e)=>{
//		setEmail((prevData)=>e.target.value);
//	}
//	return(
//		<div className="form-group d-flex flex-column">
//	    	<label className="form-label fs-6 fw-bold pb-1" for={id} >{name}</label>
//	    	<input type={type} className="form-control fs-6 " id={id} placeholder={ph} value={initialEmail} onChange = {updateEmail}/>
//		</div>
//	);
//}

//const CreatePassword = ({type, name, ph, id, value}) => {
//	const [initialPassword, setPassword] = useState('');
//	const updatePassword = (e)=>{setPassword((prevData)=>e.target.value);}
//  return(
// 	<div className="form-group d-flex flex-column">
//        <label className="form-label fs-6 fw-bold pb-1" for={id} >{name}</label>
//        <input type={type} className="form-control fs-6 " id={id} placeholder={ph} value = {initialPassword}  onChange = {updatePassword}/>
//    </div>
//  );
//}

