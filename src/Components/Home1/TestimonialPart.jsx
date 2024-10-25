import face1 from "/src/images/testimonials/face1.jpg";
import face2 from "/src/images/testimonials/face2.jpg";
import face3 from "/src/images/testimonials/face3.png";

export default function TestimonialPart(){
return(
<div className="d-flex flex-column gap-1 pt-5">
	
	<h2 className=" align-self-center text-center text-primary fs-2 fw-bold border-0 border-primary border-bottom border-2 pb-2 "> Testimonials</h2>
	<div className="d-flex flex-row gap-3 overflow-auto py-2 px-4">
		<CreateTestimonial imageSource={face1} fullname="Hiwot Kebede" 
			testimonial="I found a website I was looking for for creating CV with amazing, elegant and unique design" />
		
		<CreateTestimonial imageSource={face2} fullname="Dereje Gezahegn" 
			testimonial="CV Generator simplifies the way job seekers can have latest CV by only filling their information in the website" />
		
		<CreateTestimonial imageSource={face3} fullname="Kibru Bekele" 
			testimonial="This website makes me feel free to fill my personal information to be shown on my CV to get them later in no time just only by logging in again" />
	</div>
</div>
);}


function CreateTestimonial({imageSource, fullname, testimonial}){
return(
<div style={{minWidth:"300px"}} className="d-flex flex-column align-items-center gap-3">
	<img height="100" src={imageSource} alt={fullname} className="rounded rounded-circle border border-primary border-3 p-1"/>
	<h3 className="text-primary fw-bold"> {fullname} </h3>
	<p className="text-center fw-bold"> {testimonial} </p>

</div>
);}