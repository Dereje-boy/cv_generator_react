import {Outlet } from 'react-router-dom';
import Header from './Components/Home/Header.jsx';
import Footer from './Components/Home/Footer.jsx';

function App() {
	
	
  return (
    <div style={{minHeight:"100vh"}}  className=" h-100 p-3 d-flex flex-column">
    <Header />
    
	<div className="flex-grow-1 h-100 py-3">
		<Outlet />
	</div>
	
	 < Footer /> 
	
    </div>
  )
}

export default App
