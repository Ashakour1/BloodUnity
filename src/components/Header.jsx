import { Link } from "react-router-dom";
import "../Style.css"

import React from "react";
const Header = () => {
    return  <div className="header">
        <Link className="logo" to="/"> <h1>BloodUnity</h1></Link>
    <div className="links">
        <Link  className="donate" to="/donate">Donate</Link>
    </div>
</div>
}

export default Header ;