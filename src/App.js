import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { useContext } from 'react';
import { Context } from './Context/AppContext';
import { GenericAlert } from "./Components/Alert/Alert";

function App() {
  const [alert, showAlert,setShowAlert]=useContext(Context);
  const navbarItems=[{id:'home',displayText:'Home',redirectto:'/'},{id:'about',displayText:'About us',redirectto:'/'},{id:'contacts',displayText:'Contact us',redirectto:'/'},{id:'login',displayText:'Sign in',redirectto:'/signin',navbarType:'Button'},{id:'enroll',displayText:'Sign up',redirectto:'/signup',navbarType:'Button'}];
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbarItems={navbarItems}/>
        {/* {showAlert && <GenericAlert severity={alert.severity} displayText={alert.displayText} setShowAlert={setShowAlert} />} */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
