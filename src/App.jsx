import {Outlet } from 'react-router-dom';
import Header from './Components/Home/Header.jsx';
import Footer from './Components/Home/Footer.jsx';

function App() {
	
	
  return (
    <div className=" h-100 p-3 d-flex flex-column">
    <Header />
    
	<Outlet className="flex-grow-1"/>
	
	 < Footer /> 
	
    </div>
  )
}

export default App
