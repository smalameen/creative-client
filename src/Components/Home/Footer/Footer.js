import React from "react";
import { Form } from "react-bootstrap";

const Footer = () => {
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
            <Form.Control
              style={{ height: "70px" }}
              type="text"
              placeholder="Your Email address"
            />{" "}
            <br /> <br />
            <Form.Control
              style={{ height: "70px" }}
              type="text"
              placeholder="Your Company name"
            />{" "}
            <br /> <br />
            <Form.Control
              style={{ height: "277px" }}
              placeholder="Your Message"
              type="text"
            />
          </div>
        </div>
      </div>
      <small className="mt-5 align-text-center">Copyright: Creative Agency</small>
    </div>
  );
};

export default Footer;
