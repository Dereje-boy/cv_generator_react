export default function CreateFormControl({name, type, value,label, ph,desc,  required, onchange}){
	return(
		<div class="form-group border border-1 p-2">
		    <label for={name}>{label}</label>
		    <input type={type} class="form-control" placeholder={"example: "+ph} 
		    	required={required} onChange = {onchange}/>
		    <small class="form-text text-muted">{desc}</small>
	  </div>
	);
}
