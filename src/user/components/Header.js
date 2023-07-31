import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Header({cartcount1}) {
  let loginData = localStorage.getItem("login")



  const cartData = useSelector(state => state.cart)
  console.log(cartData);
  let countCart = 0;
  if (cartData.Itmes) {
    countCart = cartData.Itmes.reduce((acc, v, i) => acc + v.Qty, 0)
  }


  const data = JSON.parse(localStorage.getItem('cart')) ;
let cartcount=0;

  if(data){
      cartcount =data.reduce((acc, v, i) => acc + v.Qty , 0)
  }



  console.log(cartcount);
  const handlelogut = () => {
    localStorage.removeItem("login")
    // Navigate('/')
  }



  return (
    <div className="hero_area">
      <div className="main-header">
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
              <i className="bi bi-phone" /> +91 9988776655
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <div>
                <Link to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={countCart} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
                <Link to="/cart1">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartcount1} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
                <Link to={'/Favorite'}>
                <FavoriteIcon/>
                </Link>

              </div>
              <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
              <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
              <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <div className="logo">
              <a href="index.html">
                <h1 className="logo me-auto">City</h1><br />
                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
              </a>
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                {/* <li><a className="nav-link scrollto active" href="index.html">Home</a></li>
          <li><a className="nav-link scrollto" href="./pages/departments.html">Departments</a></li>
          <li><a className="nav-link scrollto" href="./pages/doctors.html">Doctors</a></li>
          <li><a className="nav-link scrollto " href="./pages/about.html">About</a></li>
          <li><a className="nav-link scrollto" href="./pages/contact.html">Contact</a></li> */}
                <li> <Link to="/" className='nav-link scrollto'>Home</Link></li>
                <li>  <Link to="/departments" className='nav-link scrollto'>Departments</Link></li>
                <li>  <Link to="/doctors" className='nav-link scrollto'>Doctors</Link></li>
                <li>  <Link to="/about" className='nav-link scrollto'>About</Link></li>
                <li>  <Link to="/medicine" className='nav-link scrollto'>Medicines</Link></li>
                <li>  <Link to="/Medicines1" className='nav-link scrollto'>Medicines1</Link></li>
                <li><Link to="/contact" className='nav-link scrollto'>Contact</Link></li>
                <li><Link to="/counter" className='nav-link scrollto'>counter</Link></li>


              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <Link to="/appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
              Appointment</Link>
            {
              loginData ? <Link to="/" className="appointment-btn scrollto">
                <span className="d-none d-md-inline" onClick={handlelogut}>Logut</span>
              </Link>
                :
                <Link to="/Auth" className="appointment-btn scrollto">
                  <span className="d-none d-md-inline">Login/ Signup</span>
                </Link>
            }

          </div>
        </header>
      </div>
    </div>

  );
}

export default Header;