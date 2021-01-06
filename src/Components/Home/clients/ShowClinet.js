import React from 'react';
import { Card } from 'react-bootstrap';

const ShowClinet = ({clients}) => {
    return (
        <div>
            <Card
            style={{ width: "22rem", marginTop: "3rem", marginLeft: "1rem" }}
          >
            <div className="d-flex align-items-center p-2">
              <Card.Img
                style={{ width: "10rem" }}
                variant="top"
                src={`data:image/png;base64, ${clients.image.img}`}
                roundedCircle
              />
              <div>
                <h4
                  style={{
                    fontSize: "25px",
                    fontWeight: "700",
                    marginLeft: "15px",
                  }}
                >
                  {clients.email}
                </h4>
                <h5
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginLeft: "15px",
                  }}
                >
                  {clients.designations}
                </h5>
              </div>
            </div>

            <Card.Body>
              <Card.Text>{clients.review}</Card.Text>
            </Card.Body>
          </Card>
        </div>
    );
};

export default ShowClinet;