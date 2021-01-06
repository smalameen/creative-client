import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios';
import ShowClinet from "./ShowClinet";

// const dataClient = [
//   {
//     name: "Nash Patrik",
//     designation: "CEO Manpol",
//     text:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quia?",
//     img: "https://i.ibb.co/WB950dz/customer-1.png",
//   },
//   {
//     name: "Jos Baiden",
//     designation: "CEO Manpol",
//     text:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quia?",
//     img: "https://i.ibb.co/9cZDQTS/customer-2.png",
//   },
//   {
//     name: "Donal Trump",
//     designation: "CEO Manpol",
//     text:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quia?",
//     img: "https://i.ibb.co/w6gWqBj/customer-3.png",
//   },
// ];

const Clients = () => {

  const [data, setPosts]= useState([]);
  console.log(data);
  const getPosts = async () => {
    try {
  const userPosts = await axios.get("http://localhost:5001/users")
      
      setPosts(userPosts.data);  // set State
    
    } catch (err) {
      console.error(err.message);
    }
  };
    
    useEffect(()=>{
      
      getPosts()
  }, []);
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
        {
          data.map((clients => <ShowClinet clients={clients}></ShowClinet>))
        }
      </div>
    </div>
  );
};

export default Clients;
