import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar=({navbarItems})=>{
  const navigate=useNavigate();
  return (
    <div className="navbar-items">
      <div className="left">VIHSSHUKLA</div>
      <div className="right">
        {navbarItems.map((item)=> {
          if(item.navbarType==='Button'){
            return <div key={item.id} className='button-items' onClick={()=>navigate(item.redirectto)}><button>{item.displayText}</button></div>
          }else{
            return <div key={item.id} className='items' onClick={()=>navigate(item.redirectto)}>{item.displayText}</div>
          }
        })}
      </div>
    </div>
  );
}

export default Navbar;