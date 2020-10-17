import React from "react";
import { Button, Form, Navbar } from "react-bootstrap";

const Customer = () => {
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
          <button style={{ border: "none", background: "none" }}>
            Service lits
          </button>{" "}
          <br />
          <button style={{ border: "none", background: "none" }}>
            Review
          </button>{" "}
          <br />
        </div>
        <div style={{backgroundColor:" #c3fddd", width:"100%", height:"100vh", padding:"15px"}} className="col-md-8 col-sm-12">
          <Form.Control
            style={{ height: "50px", width:"40rem" }}
            type="text"
            placeholder="Company Name"
          /> <br/> 
           <Form.Control
            style={{ height: "50px", width:"40rem" }}
            type="text"
            placeholder="Your Email"
          /> <br/> 
           <Form.Control
            style={{ height: "50px", width:"40rem" }}
            type="text"
            placeholder="Graphic Deign"
          /> <br/> 
           <Form.Control
            style={{ height: "100px", width:"40rem" }}
            type="text"
            placeholder="Your message"
          /> <br/> 
          <div className="d-flex">
          <Form.Control
            style={{ height: "50px", width:"20rem" }}
            type="text"
            placeholder="Price"
          /><Form.Control
          style={{ height: "50px", width:"20rem", marginLeft:"10px" }}
          type="file"
         
        />
                   

          </div> <br/>
          <Button style={{ backgroundColor: "#111430", width:"7rem" }}>Send</Button>
         
        </div>
      </div>
    </div>
  );
};

export default Customer;
