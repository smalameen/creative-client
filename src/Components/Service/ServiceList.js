import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ServiceList = () => {
   
    const history = useHistory();

    const handleServiceButton = () => {
      
      const url = `/customer/service`;
      history.push(url);
    };


    return (
        <div>
      <Navbar style={{ height: "4rem" }} className="bg-light"></Navbar>
      <div className="row">
        <div
          className="col-md-3 col-sm-12 bg-light align-middle"
          style={{ height: "100vh" }}
        >
          <button style={{ border: "none", background: "none" }}>Order</button>{" "}
          <br />
          <button onClick={() => handleServiceButton()} style={{ border: "none", background: "none" }}>
            Service lits
          </button>
          <br />
          <button style={{ border: "none", background: "none" }}>
            Review
          </button>{" "}
          <br />
        </div>
        <div className="col-md-8 col-sm-12" style={{backgroundColor:"#c3fddd"}}>

        </div>
        
        </div>
      </div>
   
    );
};

export default ServiceList;