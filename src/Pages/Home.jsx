import ProblemPart from "/src/Components/Home1/ProblemPart.jsx";
import SolutionsPart from "/src/Components/Home1/SolutionsPart.jsx";
import PortifolioPart from "/src/Components/Home1/PortifolioPart.jsx";
import TestimonialPart from "/src/Components/Home1/TestimonialPart.jsx";

export default function Home(){
return(
	<div className=" gap-3 align-items-center">
		< ProblemPart />
		< SolutionsPart />
		< PortifolioPart />
		< TestimonialPart />
		
	</div>
);}