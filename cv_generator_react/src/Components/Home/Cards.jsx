import Card from "./Card.jsx"
import Hobbies from '/src/images/Hobbies.jpg';

export default function Cards(){
	const actions = giveActions();
	const cards = [];
	
	for(let i=0; i<actions.length; i++){
		cards.push(
			<Card title={actions[i].title} desc={actions[i].desc} cta = {actions[i].cta} />
		);
	}
	
	return(
		<div className="p-3 d-flex flex-row flex-wrap gap-3 align-items-start">
			{cards}
			<img src={Hobbies} alt="alt of the hobbies image" />
		</div>
	);
}


function giveActions() {
	return [
		{
			title: "Personal Information",
			desc: "Add your personal Information like full name, phone Number, email address and others" , 
			cta:"Personal Information"
		},{
			title:'Education',
			desc: "With out Education, it is difficult to be appointed for further step. So, Add your Educations HERE.",
			cta:"Education"
		},{
			title:'Experience',
			desc: "Add all of your relevant Experiences to be visible to employers.",
			cta:"Experience"
		},{
			title:'Language',
			desc: "Being multiple language speaker has more chance to get job. List all of languages you know with their level.",
			cta:"Language"
		},{
			title: 'References',
			desc: 'Always it is better to have reference who knows you very well, to express you in the way that gives you better chance for further assessement',
			cta: 'References'
	},{
			title: 'Hobbies',
			desc: 'Hobbies are optoinal to have on cv or resume. Just add some to let the Hiring Managers knows you more',
			cta: 'Hobbies'
	}
	];
}