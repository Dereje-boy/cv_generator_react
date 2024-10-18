import {Outlet } from 'react-router-dom';
import Header from './Components/Home/Header.jsx';
import Cards from './Components/Home/Cards.jsx';

function App() {

  return (
    <div className=" h-100 p-3">
    <Header />
    
	<Outlet />
	
	<Cards />
	
	{// < Footer /> 
	}
    </div>
  )
}

export default App
