import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { AlertContext } from './Context/AppContext';
import { useContext } from 'react';
import { navbarItems } from './Config/navbar';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Snackbar from './Components/Snackbar/Snackbar';
// import SigninContext from './Context/Signin/SigninContext';

function App() {
  const {showAlert,alert}=useContext(AlertContext);
  // const {isSignedIn}=useContext(SigninContext);
  console.log({showAlert,alert});
  // console.log({isSignedIn});
  return (
    <BrowserRouter>
      <Navbar navbarItems={navbarItems}/>
      <ErrorBoundary>
        {showAlert && alert && <Snackbar severity={alert?.severity} displayText={alert?.displayText}/>}
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
