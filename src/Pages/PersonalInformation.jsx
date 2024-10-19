import personalInformation from '/src/images/personal_information.png';
import {Form} from 'react-router-dom';

export default function PersonalInformation(){
	return(
		<div className="d-flex flex-row flex-wrap gap-3 pt-5 px-2">
			<div className="d-flex flex-column gap-2 ">
				<h3 className="card-title text-center text-danger ">Personal Information</h3>
				<img style={{height:300}} src={personalInformation} alt="personal information image" />
			</div>
		
			<Form method="post"  className="d-flex flex-column gap-3 shadow p-3">
				<CreateFormControl name="firstname" value="" type="text" label="Firstname" ph="Abebe" desc=""/>
				<CreateFormControl name="lastname" value="" type="text" label="Lastname" ph="Kebede" desc=""/>
				
				<div class="form-group">
				    <label for="email">Email</label>
				    <input type="email" class="form-control" disabled placeholder="someone@gmail.com" />
				    <small class="form-text text-muted"></small>
				</div>
				<CreateFormControl name="phoneNumber" value="" type="tel" label="Phone Number" ph="+251900000000" desc="provide your primary phone number"/>
				<CreateFormControl name="city" value="" type="text" label="City or Hometown" ph="Addis Ababa" desc="Enter your home town"/>
				<CreateFormControl name="state" value="" type="text" label="State or Province" ph="Addis Ababa" desc="Enter the state your city is located in"/>
				
				<button type="submit" class="btn btn-primary">Submit</button>
			</Form>
		</div>
	);
}

function CreateFormControl({name, type, value,label, ph,desc}){
	return(
		<div class="form-group">
		    <label for={name}>{label}</label>
		    <input type={type} class="form-control" placeholder={ph} />
		    <small class="form-text text-muted">{desc}</small>
	  </div>
	);
}