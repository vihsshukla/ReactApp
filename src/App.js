import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { AlertContext } from './Context/AppContext';
import GenericAlert from './Components/Alert/Alert';
import { useContext } from 'react';
import { navbarItems } from './Config/navbar';

function App() {
  const {showAlert,alert}=useContext(AlertContext);
  console.log({showAlert,alert});
  return (
    <BrowserRouter><Navbar navbarItems={navbarItems}/>
          {showAlert && alert && <GenericAlert severity={alert?.severity} displayText={alert?.displayText}/>}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
