import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

//outlet fit
import Cards from './Components/Home/Cards.jsx';
import PersonalInformation from './Pages/PersonalInformation.jsx';
import Education from './Pages/Education.jsx';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path :"/",
		element: <App />,
		children:[{
			index: true,
			element: <Cards />
		},{
			path:"personal information",
			element: <PersonalInformation />
		},{
			path:"education",
			element: <Education />
		}]
	},{
		
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
  	<RouterProvider router={router} >
	     <App  />
  	</RouterProvider>
 
  </StrictMode>,
)
