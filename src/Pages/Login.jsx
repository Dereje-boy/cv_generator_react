
export default function Login(){
return (
	<div className="d-flex justify-content-center align-items-center pt-3">
		<form method="post" className=" d-flex flex-column justify-content-center align-items-center gap-2 shadow p-5">
			<h3 className="fw-bold text-danger">Login </h3>
			<p className="text-secondary fw-bold">Enter your Email and Password then click <strong> Login </strong> button </p>
			
			<div className="d-flex flex-column justify-content-center align-items-center gap-4">
				<CreateInput name="Email Address" type="email" id="email" ph="someone@gmail.com"/>
				<CreateInput name="Password" type="password" id="password" ph="********"/>
			</div>
			
			<button type="submit"  className="btn btn-primary px-4 py-2 fs-6 mt-4">Login</button>
			
		</form>
	</div>
);}

function CreateInput({type, name, ph, id}){
return(
	<div className="form-group d-flex flex-column">
	    <label className="form-label fs-6 fw-bold pb-1" for={id}>{name}</label>
	    <input type={type} className="form-control fs-6 " id={id} placeholder={ph} />
  </div>
);}