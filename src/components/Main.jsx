import React from "react";
import {Link} from "react-router-dom"
const Main = () => {
    return (
        <div className="main">
            <h1>Donate your <span>Blood</span></h1>
            <p>Blood donation is the act of voluntarily giving blood, either whole blood or specific blood components, <br /> to be used for medical purposes.</p>
            <div className="btn">
                <button><Link to="/donate">Apply Now</Link></button>
            </div>
        </div>
    )
}
export default Main;