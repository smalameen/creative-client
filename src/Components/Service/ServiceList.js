import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ServiceList = () => {
   
  const historyOrder = useHistory();

  const handleOrderButton = () => {
    
    const url = `/customer`;
    historyOrder.push(url);
  };

  const historyReviews = useHistory();

  const handleReviewsButton = () => {
    
    const url = `/reviews`;
    historyReviews.push(url);
  };


    return (
        <div>
      <Navbar style={{ height: "4rem" }} className="bg-light"></Navbar>
      <div className="row">
        <div
          className="col-md-3 col-sm-3 bg-light align-middle"
          style={{ height: "100vh" }}
        >
          <button onClick={()=>handleOrderButton()} style={{ border: "none", background: "none" }}>Order</button>{" "}
          <br />
          <button style={{ border: "none", background: "none" }}>
            Service lits
          </button>
          <br />
          <button onClick={()=>handleReviewsButton()}  style={{ border: "none", background: "none" }}>
            Review
          </button>{" "}
          <br />
        </div>
        <div
          style={{
            backgroundColor: " #c3fddd",
            width: "100%",
            height: "100vh",
            padding: "15px",
          }}
          className="col-md-8 col-sm-12"
        >
         
         <h1>I am here</h1>
        </div>
        
        </div>
      </div>
   
    );
};

export default ServiceList;