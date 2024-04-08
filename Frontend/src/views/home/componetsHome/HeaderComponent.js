import './HeaderComponent.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuHeader from './menuDesplegable/MenuHeader';
import logo from "../../../assets/logo.png";
function HeaderComponent() {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      {toogle && (<>
        <MenuHeader />
      </>)}
      <div className='allHeader'>
        <div className='firstHeader'>
          <div className="header" tooltip-dir="top" onClick={() => setToogle(!toogle)}>
            <div className="titleHeader">
              <img src={logo} alt='logo'></img>
              <h1>PERPETUAL TATTOO</h1>
            </div>
          </div>
        </div>
        <div className='buttonsHeeader'>
          <button name='login'>
            <Link to="/login" className='link' >
              Login
            </Link>
          </button>
          <button name='register'>
            <Link to="/signup" className='link' >
              Register
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
