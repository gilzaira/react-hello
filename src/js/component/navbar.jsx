import React from "react";

//include images into your bundle

//create your first component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light text-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse dropwdown" id="navbarNav">
                    <ul className="navbar-nav ms-auto dropdown-menu-end">
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;