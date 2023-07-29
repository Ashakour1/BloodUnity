import React from "react"
const Section = ({infor}) => {
    return (

        
        <div className="card">
         <img src={infor.hospitalimage} alt="" />
         <div className="location">
            <p>{infor.hospitalLocation}</p>
         </div>
            <div className="info">
                <p>{infor.hospitalName}</p>
                <button>Apply</button>
            </div>
            
            
        </div>
    )
}
export default Section