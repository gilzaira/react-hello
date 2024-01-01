import React from "react";

//include images into your bundle

//create your first component
const Navbar = () => {
    return (
        <div className="container">
            <nav className="row navbar navbar-expand-md navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="col d-flex justify-content-between">
                        <a className="navbar-brand text-light ms-4 ps-2 fw-bolder" href="#">Start Bootstrap</a>
                        <button
                            className="navbar-toggler text-nowrap shadow-none border border-warning-subtle me-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="col collapse navbar-collapse justify-content-end mx-4 ps-2" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    );
};

export default Navbar;