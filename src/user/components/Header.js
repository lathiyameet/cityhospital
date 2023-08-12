import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemContext } from '../../context/ThemContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {  LogoutReqest } from '../../reducx/action/auth.action';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Header({ cartcount1 }) {
  const them = useContext(ThemContext)
  const Auth = useSelector(state => state.auth)
  const Dispatch = useDispatch()

  console.log(Auth);

  console.log(them);
  let loginData = localStorage.getItem("login")



  const cartData = useSelector(state => state.cart)
  console.log(cartData);
  let countCart = 0;
  if (cartData.Itmes) {
    countCart = cartData.Itmes.reduce((acc, v, i) => acc + v.Qty, 0)
  }


  const data = JSON.parse(localStorage.getItem('cart'));
  let cartcount = 0;

  if (data) {
    cartcount = data.reduce((acc, v, i) => acc + v.Qty, 0)
  }



  console.log(cartcount);
  const handlelogut = () => {
  Dispatch(LogoutReqest())
}

// console.log(cartcount);
// const handlelogut = () => {
//   localStorage.removeItem("login")
//   // Navigate('/')
// }


return (

    <div className={`main-header ${them.them}`}>
      <div id="topbar" className={`d-flex align-items-center fixed-top ${them.them}`}>
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com" className={`${them.them}`}>cityhospital@example.com</a>
            <i className="bi bi-phone" /> +91 9988776655
          </div>
          <div className=" d-lg-flex social-links align-items-center">
            <div>
              <DarkModeIcon onClick={() => them.tooglethem(them.them)}>toogle Them</DarkModeIcon>
              <Link to="/cart">
                <IconButton aria-label="cart" className={`${them.them}`}>
                  <StyledBadge badgeContent={countCart} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
              {/* <Link to="/cart1">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartcount1} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link> */}
              <Link to={'/Favorite'}>
                <FavoriteIcon />
              </Link>

            </div>
            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
          </div>
        </div>
      </div>
      <header id="header" className={`fixed-top ${them.them}`}>
        <div className="container d-flex align-items-center">
          <div className="logo">
            <a href="index.html">
              <h1 className={`logo me-auto ${them.them}`}>City</h1><br />
              <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
            </a>
          </div>
          
          <nav id="navbar" className={`navbar order-last order-lg-0 ${them.them}`}>
            <ul>
              <li> <Link to="/" className={`nav-link scrollto ${them.them}`}>Home</Link></li>
              <li>  <Link to="/departments" className={`nav-link scrollto ${them.them}`}>Departments</Link></li>
              <li>  <Link to="/doctors" className={`nav-link scrollto ${them.them}`}>Doctors</Link></li>
              <li>  <Link to="/about" className={`nav-link scrollto ${them.them}`}>About</Link></li>
              <li>  <Link to="/medicine" className={`nav-link scrollto ${them.them}`}>Medicines</Link></li>
              {/* <li>  <Link to="/Medicines1" className={`nav-link scrollto ${them.them}`}>Medicines1</Link></li> */}
              <li><Link to="/contact" className={`nav-link scrollto ${them.them}`}>Contact</Link></li>
              {/* <li><Link to="/counter" className={`nav-link scrollto ${them.them}`}>counter</Link></li> */}


            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <Link to="/appointment" className="appointment-btn scrollto"><span className=" d-md-inline">Make an</span>
            Appointment</Link>
          {/* {
              loginData ? <Link to="/" className="appointment-btn scrollto">
                <span className=" d-md-inline" onClick={handlelogut}>Logut</span>
              </Link>
                :
                <Link to="/Auth" className="appointment-btn scrollto">
                  <span className=" d-md-inline">Login/ Signup</span>
                </Link>
            } */}
          {
            Auth.user ?
            <Link to="/" className="appointment-btn scrollto">
              <span className=" d-inline" onClick={handlelogut}>Logut</span>
            </Link>
            :
              <Link to="/Auth" className="appointment-btn scrollto">
                <span className="d-inline">Login/ Signup</span>
              </Link>
          }

        </div>
      </header>
    </div>


);
}  


export default Header;