import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

//outlet fit
import Cards from './Components/Home/Cards.jsx';
import PersonalInformation from './Pages/PersonalInformation.jsx';
import Education from './Pages/Education.jsx';
import Experience from './Pages/Experience.jsx';
import Language from './Pages/Language.jsx';
import Reference from './Pages/Reference.jsx';
import Hobbies from './Pages/Hobbies.jsx';
import GetCV from './Pages/GetCV.jsx';
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';


import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const profileChildren = [
	{
		index: true,
		element: <Cards />
	},{
		path: "education",
		element: <Education />
	},{
		path:"personal information",
		element: <PersonalInformation />
	},{
		path:"education",
		element: <Education />
	},{
		path:"experience",
		element: <Experience />
	},{
		path:"language",
		element: <Language />
	},{
		path:"reference",
		element: <Reference />
	},{
		path:"hobbies",
		element: <Hobbies />
	}
];

const router = createBrowserRouter([
	{
		path :"/",
		element: <App />,
		children:[
		{
			index: true,
			element: <Home />
		},{
			path:"profile",
			children: profileChildren
		},{
			path:"getcv",
			element:<GetCV />
		},{
			path:"login",
			element:<Login />
		}]
	}
]);



createRoot(document.getElementById('root')).render(
  <StrictMode >
  	<RouterProvider router={router} >
	     <App  />
  	</RouterProvider>
 
  </StrictMode>,
)
