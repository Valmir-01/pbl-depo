import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="Solid-background">
            <div id="scroll1">
            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button" id="nav">
                <div className="container">
                    <a className="nav_brand" id="nav_brand">     </a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav mr-auto">
                            <li className="nav-item" role="presentation"/>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="list-item">PBL Catalogue</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="list-item">PBL Guide</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="list-item">Mentors</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="list-item">Submit a Project</a>
                            </li>
                        </ul>
                        <span className="navbar-text actions">
                            <NavLink to="/logIn">
                                <a className="login">Log In</a>
                            </NavLink>
                            <NavLink to="/signUp">
                                <a className="btn btn-light action-button">Sign Up</a>
                            </NavLink>
                        </span>
                    </div>
                </div>
            </nav>
            <p className="d-flex d-md-flex d-lg-flex justify-content-center justify-content-md-center justify-content-lg-center" data-aos="fade-down" data-aos-duration={800} data-aos-once="true" id="title"><br />PBL PROJECTS</p>
            <p className="d-flex d-md-flex d-lg-flex justify-content-center justify-content-md-center justify-content-lg-center align-items-lg-center" data-aos="fade-down" data-aos-duration={800} data-aos-delay={300} data-aos-once="true" id="subtitle"><br />NOW CLOSER THAN EVER<br /><br /></p>
            <div className="d-flex d-md-flex d-lg-flex justify-content-center justify-content-md-center justify-content-lg-center" data-aos="fade-down" data-aos-duration={800} data-aos-delay={400} data-aos-once="true"><a className="btn btn-light action-button" role="button" id="signup">Sign Up</a></div>
        </div>
        </div>

    )
}


export default NavBar;