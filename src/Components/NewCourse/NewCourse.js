import { Button, Navbar } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NewCourse = () => {

    const [newInfo, setNewInfo] = useState({})
  const [files, setFiles] = useState();

  const handleBlur = (e) => {
    const newData = { ...newInfo }
    newData[e.target.name] = [e.target.value]
    setNewInfo(newData);
    console.log(newData);
  }

  const handleFiles = (e) => {
      const newFiles = e.target.files[0];
      setFiles(newFiles);
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', files);
    formData.append('email', newInfo.email);
    formData.append('pass', newInfo.pass);
    fetch('http://localhost:5001/addCourse', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }


//   Navigation area

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
            
            <Form onSubmit={handleSubmit}>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleBlur} style={{ height: "50px", width: "100%", border:"none", borderRadius:"10px" }} name="email" type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handleBlur} style={{ height: "50px", width: "100%", border:"none", borderRadius:"10px" }} name="pass" type="number" placeholder="Password" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control name="file" onBlur={handleFiles}   type="file"  />
  </Form.Group>
  
  <Button onSubmit={handleSubmit} variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </div>
        </div>
      </div>
    );
};

export default NewCourse;


