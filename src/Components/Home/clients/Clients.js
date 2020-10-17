import React from "react";
import { Card } from "react-bootstrap";

const dataClient = [
  {
    name: "Nash Patrik",
    designation: "CEO Manpol",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quia?",
    img: "https://i.ibb.co/WB950dz/customer-1.png",
  },
  {
    name: "Jos Baiden",
    designation: "CEO Manpol",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quia?",
    img: "https://i.ibb.co/9cZDQTS/customer-2.png",
  },
  {
    name: "Donal Trump",
    designation: "CEO Manpol",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quia?",
    img: "https://i.ibb.co/w6gWqBj/customer-3.png",
  },
];

const Clients = () => {
  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontWeight: "700",
          fontSize: "35px",
          
        }}
      >
        Clients <span style={{ color: "#7ab259" }}>Feedback</span>
      </h3>
      <div className="container row col-sm-12 d-flex justify-content-center">
        {dataClient.map((client) => (
          <Card
            style={{ width: "22rem", marginTop: "3rem", marginLeft: "1rem" }}
          >
            <div className="d-flex align-items-center p-2">
              <Card.Img
                style={{ width: "10rem" }}
                variant="top"
                src={client.img}
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
                  {client.name}
                </h4>
                <h5
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginLeft: "15px",
                  }}
                >
                  {client.designation}
                </h5>
              </div>
            </div>

            <Card.Body>
              <Card.Text>{client.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Clients;
