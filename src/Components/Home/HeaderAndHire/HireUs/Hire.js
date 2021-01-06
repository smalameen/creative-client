import React from "react";
import { Button,Image} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import img from "../../../../images/logos/Frame.png";

const Hire = () => {

  const historyOrder = useHistory();

  const handleAddCourseButton = () => {
    
    const url = `/customer`;
    historyOrder.push(url);
  };
  return (
    <section className="container">
       <div className="row d-flex align-items-center ml-3">
       <div className="col-md-6 col-sm-12">
            <h1 style={{color: "#111430", fontWeight:"700", fontSize:"40px" }}>Let Grow Your <br/> Brand to the <br/> Next Level</h1>
            <Button onClick={handleAddCourseButton} style={{ backgroundColor: "#111430", width:"7rem" }}>Order</Button>

        </div>

        <div className="col-md-6 col-sm-12">
        <Image className="img-fluid" style={{height:"25rem",width:"27rem"}} src={img} rounded />

        </div>
       </div>

    </section>
  );
};

export default Hire;
