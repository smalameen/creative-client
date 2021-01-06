import React from 'react';
import google from "../../../images/logos/google.png";
import netglix from "../../../images/logos/netflix.png";
import img1 from "../../../images/logos/uber.png";
import img3 from "../../../images/logos/slack.png";
import img4 from "../../../images/logos/airbnb.png";



const Brands = () => {
    return (
        <div className="container-fluid row d-flex justify-content-center">
            
                <div className="image-fluid col-md-3 col-sm-12">
                <img style={{height:"5rem", width:"7rem", marginLeft:"1rem"}} src={google} alt=""/>

                </div>
                <div className="image-fluid col-md-3 col-sm-12">
                <img style={{height:"5rem", width:"7rem"}} src={netglix} alt=""/>
                </div>
                <div className="image-fluid col-md-3 col-sm-12">
                <img style={{height:"5rem", width:"6rem"}}src={img1} alt=""/>
                </div>
               <div className="image-fluid col-md-3 col-sm-12">
               <img style={{height:"5rem", width:"7rem"}}src={img3} alt=""/>
               </div>
               
           
        </div>
    );
};

export default Brands;