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
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  const {showAlert,alert}=useContext(AlertContext);
  console.log({showAlert,alert});
  return (
    <BrowserRouter><Navbar navbarItems={navbarItems}/>
      <ErrorBoundary>
        {showAlert && alert && <GenericAlert severity={alert?.severity} displayText={alert?.displayText}/>}
      </ErrorBoundary>  
      <Routes>
        <Route path='/' element={<ErrorBoundary><Home /></ErrorBoundary>}></Route>
        <Route path='/signin' element={<ErrorBoundary><SignIn /></ErrorBoundary>}></Route>
        <Route path='/signup' element={<ErrorBoundary><SignUp /></ErrorBoundary>}></Route>
        <Route path='/dashboard' element={<ErrorBoundary><Dashboard /></ErrorBoundary>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
