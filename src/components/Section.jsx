import React from "react"
import {Link} from "react-router-dom"
const Section = ({infor}) => {
    return (

        
        <div className="card">
         <img src={infor.hospitalimage} alt="" />
         <div className="location">
            <p>Location :{infor.hospitalLocation}</p>
         </div>
            <div className="info">
                <p>{infor.hospitalName}</p>
                <button><Link to="contact">Apply</Link></button>
            </div>
            
            
        </div>
    )
}
export default Section