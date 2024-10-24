//import 


export default function FAQPart(){
return (
<div className="d-flex flex-column align-items-center pt-5 gap-2">
	<h2 className="text-center text-primary fw-bold">Frequently Asked Questions </h2>
	<div className="d-flex flex-row overflow-auto px-5 py-1">
		<div className="d-flex flex-column gap-5 border border-1 border-white">
			<Single question="How it works?" answer="CV Generator works by collecting required information from you and putting them on the right place to catch employers eye." />
			<Single question="How can I get start?" answer="You can start creating your CV just by creating an account here in CV Generator and filling the required information" />
			
		</div>
		<div className="d-flex flex-column gap-5 border border-1 border-white">
			<Single question="How much money I need to pay?" answer="CV Generator is free to use for everyone who wants to create a CV" />
			<Single question="In what format is my CV available?" answer="After creating an account and filling your information you can download your CV in PDF format." />
		</div>
		
	</div>
</div>
);}

function Single({question, answer}){
return (
<div style={{maxWidth:"300px"}} className="d-flex flex-column align-items-center gap-2">
	<h3 className="text-primary text-decoration-underline text-center fw-bold">{question}</h3>
	<p className="text-center">{answer}</p>
</div>
);}