import React from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Customer = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    fetch(`http://localhost:5001/userData`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
  
    })
  
    .then(res => res.json())
    .then(success =>{
      alert("Are you sure to send data");
      handleServiceButton();
      console.log(success)
    });
  }
  

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


  // const insertUserData = data => {
    
  // }

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
          
          <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" style={{ height: "50px", width: "100%", border:"none", borderRadius:"10px" }} name="name" placeholder="Please Enter your name" ref={register} /> <br/> <br/>

      <input type="email" style={{ height: "50px", width: "100%", border:"none", borderRadius:"10px" }} name="email" placeholder="Please Enter your email" ref={register} /> <br/> <br/>

      
      <input type="text" style={{ height: "50px", width: "100%", border:"none", borderRadius:"10px" }} name="course" placeholder="Enter Your course name" ref={register({ required: true })} /> <br/> <br/>
      
      <input type="text" style={{ height: "100px", width: "100%", border:"none", borderRadius:"10px" }} name="address" placeholder="Enter Your Address" ref={register({ required: true })} /> <br/> <br/>

      <div className="d-flex">
      <input type="number" style={{ height: "50px", width: "50%", border:"none", borderRadius:"10px" }} name="phone" placeholder="Enter Your phone number" ref={register({ required: true })} /> <br/> <br/>

<input className="ml-1" type="number" style={{ height: "50px", width: "50%", border:"none", borderRadius:"10px" }} name="zip" placeholder="Enter Your zip code" ref={register({ required: true })} /> <br/> <br/>
      </div>
      <br/> 
      <input style={{ backgroundColor: "#111430", width:"7rem", color:"white", borderRadius:"1rem", border:"none" }} type="submit" />
    </form>
        </div>
      </div>
    </div>
  );
};

export default Customer;
