import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import ShowSkills from "./ShowSkills";

var skillUp = [
  {
    title: "Web & Mobile Design",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae praesentium perferendis maxime dolorem quod soluta tempore quisquam cumque reiciendis.",
    img: "https://i.ibb.co/ZBqF8pC/service1.png",
  },
  {
    title: "Graphic design",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae praesentium perferendis maxime dolorem quod soluta tempore quisquam cumque reiciendis.",
    img: "https://i.ibb.co/zmNSsxC/service2.png",
  },
  {
    title: "Web development",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae praesentium perferendis maxime dolorem quod soluta tempore quisquam cumque reiciendis.",
    img: "https://i.ibb.co/hYpdXW7/service3.png",
  },
];

const SkillUp = () => {

  const [data, setData] = useState([]);
  console.log(data)
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5001/newCourses',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);
  return (
    
      <div className="container" style={{ textAlign: "center" }}>
      <h3 style={{fontWeight: "700", fontSize: "35px" }} className="mt-3 mb-3">
        Provide awesome{" "}
        <span style={{ color: "#7ab259"}}>
          Service
        </span>
      </h3>

      <div className="container row col-sm-12 d-flex justify-content-center mt-2 ml-2">
        {data.map((skill) => (
          <ShowSkills skill={skill}></ShowSkills>
        ))}
      </div>
    </div>
   
  );
};

export default SkillUp;
