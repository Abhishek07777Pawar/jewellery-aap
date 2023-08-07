import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    // <div >
    <header style={{ backgroundColor: "goldenrod", }} className="container-fluid header_section" data-aos="fade-up"
      data-aos-delay="300">
      {/* <div > */}
      <nav className=" navbar navbar-expand-lg custom_nav-container">
        <span className="navbar-brand" >
          <img style={{ height: "56px", width: '80px', borderRadius: "50%" }} src="assets/images/aj-logo.bmp" alt="" />
          <span style={{ color: "white" }}> <>Ambika Jewellers</> </span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div
            className="d-flex ml-auto flex-column flex-lg-row align-items-center"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link"
                >Home </NavLink >
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" > About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/jewellery" className="nav-link" >Jewellery </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">Contact us</NavLink>
              </li>
              {/* <!-- <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li> --> */}
            </ul>
          </div>
          <div className="quote_btn-container">
            {/* <!-- <a href="">
                <img src="images/cart.png" alt="" />
                <div className="cart_number">0</div>
              </a> --> */}
            {/* <!-- <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                ></button>
              </form> --> */}
          </div>
        </div>
      </nav>
      {/* </div> */}
    </header>

    // </div>
  )
}
