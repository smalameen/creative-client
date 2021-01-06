import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowSkills = ({skill}) => {
    return (
        <div>
            <Card
            style={{
              width: "18rem",
              alignItems: "center",
              borderRadius:"1rem",
              align: "center",
              padding: "20px",
              marginLeft: "20px",
              marginTop: "1rem",
              boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
              overflow:"hidden"
            }}
          >
           <Link to="/customer"> <Image style={{ height: "50px", width: "50px" }} src={`data:image/jpeg;base64,${skill.image.img}`} />  </Link>
            <Card.Body>
              <Card.Title>{skill.email}</Card.Title>
              <Card.Text>{skill.pass}</Card.Text>
            </Card.Body>
          </Card>
        </div>
    );
};

export default ShowSkills;