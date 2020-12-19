import React from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Customer = () => {


  const historyService = useHistory();

  const handleServiceButton = () => {
    
    const url = `/service`;
    historyService.push(url);
  };


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


  const injectDataToServer = data => {
    fetch(`http://localhost:5000/injectData`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)

    })

    .then(res => res.json())
    .then(success =>{
      console.log("kew na")
    })
  }

  return (
    <div>
      <Navbar style={{ height: "4rem" }} className="bg-light">
        <ul>
          <li>Facebook</li>
        </ul>
      </Navbar>
      <div className="row">
        <div
          className="col-md-3 col-sm-12 bg-light align-middle"
          style={{ height: "100vh" }}
        >
          <button onClick={()=>handleOrderButton()} style={{ border: "none", background: "none" }}>Order</button>{" "}
          <br />
          <button  onClick={()=> handleServiceButton()} style={{ border: "none", background: "none" }}>
           Service lits
          </button>
          <br />
          <button onClick={()=>handleReviewsButton()} style={{ border: "none", background: "none" }}>
            Review
          </button>
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
          <Form.Control id="input"
            style={{ height: "50px", width: "100%" }}
            type="text"
            placeholder="Company Name"
          />{" "}
          <br />
          <Form.Control id="input"
            style={{ height: "50px", width: "100%" }}
            type="text"
            placeholder="Your Email"
          />{" "}
          <br />
          <Form.Control id="input"
            style={{ height: "50px", width: "100%" }}
            type="text"
            placeholder="Graphic Deign"
          />{" "}
          <br />
          <Form.Control id="input"
            style={{ height: "100px", width: "100%" }}
            type="text"
            placeholder="Your message"
          />{" "}
          <br />
          <div className="d-flex">
            <Form.Control id="input"
              style={{ height: "50px", width: "100%" }}
              type="text"
              placeholder="Price"
            />
            <Form.Control id="input"
              style={{ height: "50px", width: "100%", marginLeft: "5px" }}
              type="file"
            />
          </div>{" "}
          <br />
          <Button type="submit" onClick={()=>injectDataToServer()} style={{ backgroundColor: "#111430", width: "7rem" }}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
