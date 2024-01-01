import React from "react";

//include images into your bundle

//create your first component
const Sectiontop = () => {
    return (
        <div className="container-fluid alert alert-secondary py-5 px-4 mb-3">
            <h1 className="">A Warm Welcome</h1>
            <p className="">"It's not enough to learn how to ride, you must also learn how to fall.” It's a Mexican proverb
                about life, acceptance, and viewing failure and success in any venture as two sides of the same coin. Being a gracious loser requires a set of skills as important as those needed for being a gracious winner—and you may wind up using them more frequently!</p>
            <button className="d-inline btn btn-primary" href="#">
                Call to action!
            </button>
        </div>
    );
};

export default Sectiontop;