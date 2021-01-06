import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Footer = () => {


  const [newInfo, setNewInfo] = useState({})
  const [files, setFiles] = useState()

  const handleBlur = (e) => {
    const newData = { ...newInfo }
    newData[e.target.name] = [e.target.value]
    setNewInfo(newData)
    console.log(newData)
  }

  const handleFiles = (e) => {
    const newFiles = e.target.files[0]
    setFiles(newFiles)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', files)
    formData.append('email', newInfo.email)
    formData.append('review', newInfo.review)
    formData.append('designations', newInfo.designations)

    fetch('http://localhost:5001/userReview', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div style={{ backgroundColor: " #fbd062", marginTop:"5rem" }}>
      <div className="container">
        <div className="row d-flex mt-2">
          <div className="col-md-6 col-sm-12">
            <div className="mt-5 ml-1">
              <h1>
                Let us handle your <br />
                project, professionally
              </h1>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                itaque sunt officiis <br /> necessitatibus. Amet quam esse quis
                quod sed dicta?
              </small>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 mt-4">
            <Form onSubmit={handleSubmit}> 
            <Form.Control onBlur={handleBlur} name="email"
              style={{ height: "70px" }}
              type="text"
              placeholder="Your Name"
            />{" "}
            <br /> <br />
            <Form.Control onBlur={handleBlur} name="designations"
              style={{ height: "70px" }}
              type="text"
              placeholder="Your designation"
            />{" "}
            <br /> <br />
            <Form.Control onBlur={handleBlur} name="review"
              style={{ height: "277px" }}
              placeholder="Your Message"
              type="text"
            /> <br /> <br />
            <Form.Control onBlur={handleFiles} name="file"
             style={{height:"2rem", width:"10rem", backgroundColor:"red", border:"none"}}
              placeholder="Upload Your image"
              type="file"
            /> <br />
            <Button  type="submit">Submit</Button>

</Form>
          </div>
        </div>
      </div>
      <small className="mt-5 align-text-center">Copyright: Creative Agency</small>
    </div>
  );
};

export default Footer;
