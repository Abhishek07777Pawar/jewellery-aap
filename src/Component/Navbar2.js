import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Diamond from './Diamond';
// import Gold from './Gold'
export default function Navbar2() {
    const [open, setOpen] = useState(false);
    const mouseHandle = () => setOpen(true) //onMouseOver


    const funMouseHandle = () => {
        setOpen(true)
    }

    return (

        <header className="header_section" data-aos="fade-up" data-aos-delay="300">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-white  ">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div
                            className="d-flex mr-auto flex-column flex-lg-row align-items-center"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <NavLink  className="nav-link"
                                     
                                    >
                                    <h5 onMouseOver={() => setOpen(true)}> DIAMOND</h5>
                                    <Diamond open={open} setOpen={setOpen} />
                                    </NavLink >
                                </li>

                              

                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </header>
    )
}
