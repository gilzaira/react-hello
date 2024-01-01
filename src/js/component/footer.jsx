import React from "react";

//include images into your bundle

//create your first component
const Footer = () => {
    return (
        <div className="container-fluid text-center" id="footer">
            <div className="row text-light bg-dark position-absolute w-100">
                <div className="col p-5">
                    <p className="fw-semibold align-middle m-0">Copyright &copy; My Website 2023</p>
                </div>
            </div >
        </div>
    );
};

export default Footer;