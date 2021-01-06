import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Reviews from './Reviews'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import order from "../../images/order.png";
import list from "../../list.jpg";
import reviews from "../../review.jpg";

const ServiceList = (props) => {
  const { loggInUser, setLoggedInUser } = props

  console.log(loggInUser.email)

  const historyOrder = useHistory()

  const handleOrderButton = () => {
    const url = `/customer`
    historyOrder.push(url)
  }

  const historyReviews = useHistory()

  const handleAddCourseButton = () => {
    const url = `/newCourse`
    historyReviews.push(url)
  }

  // console.log(fromDB);

  const [fromDB, setFromDB] = useState([])

  useEffect(() => {
    fetch('http://localhost:5001/findUserByMail')
      .then((response) => response.json())
      .then((data) => setFromDB(data))
  }, [])
  // fetch('http://localhost:5001/findUserByMail')
  // .then(response => response.json())
  // .then(data => console.log(data))

  return (
    <div className="justify-content-center">
      <Navbar
        className="d-flex justify-align-content-right bg-light"
        style={{ height: '4rem' }}
      >
        <button onClick={()=>handleAddCourseButton()} className="ml-1 bg-light" style={{border:"none", backgroundColor:"white"}}>Add Course</button>
        <button className="ml-1 bg-light"  style={{border:"none", backgroundColor:"white"}}>Home</button>
        <button onClick={()=>handleOrderButton()} className="ml-1 bg-light"  style={{border:"none", backgroundColor:"white"}}>Order</button>
        <p className="font-weight-bold"> {loggInUser.email}</p>
      </Navbar>
      <div className="row">
      <div
            className="col-md-3 col-sm-12 bg-light align-middle"
            style={{ height: "10rem" }}
          >
           <img style={{height:"1.5rem", width:"1.5rem"}} src={order} alt=""/> 
           <button onClick={()=>handleOrderButton()} style={{ border: "none", background: "none" }}>Order</button>
            <br />
            <img style={{height:"1.5rem", width:"1.5rem"}} src={list} alt=""/>  <button  style={{ border: "none", background: "none" }}>
             Service lits
            </button>
            <br />
            <img style={{height:"1.5rem", width:"1.5rem"}} src={reviews} alt=""/>  <button style={{ border: "none", background: "none" }}>
              Review
            </button>
            <br />
          </div>
        <div
          style={{
            backgroundColor: ' #c3fddd',
            width: '100%',
            height: '100vh',
            padding: '15px',
          }}
          className="col-md-8 col-sm-12"
        >
          <p style={{ textAlign: 'center' }}>
            He is Reviews and details from Your Users
          </p>
          {/* <Button>See Your Data</Button> */}
          <div style={{ alignItems: 'center' }}>
            <Table
              className="text-center"
              border="1"
              style={{ border: '1', alignItems: 'center' }}
            >
              <Thead>
                <Tr>
                  <Th>User Gmail</Th>
                  <Th>Course</Th>
                  <Th>Address</Th>
                  <Th>Phone number</Th>
                </Tr>
              </Thead>
              {fromDB.map((data) => (
                <Tbody>
                  <Tr className="p-1">
                    <Td>{data.email}</Td>
                    <Td>{data.course}</Td>
                    <Td>{data.address}</Td>
                    <Td>{data.phone}</Td>

                  </Tr>
                </Tbody>
              ))}
            </Table>
          </div>
        </div>
      </div>
      {/* <ul>
          console.log(fromDB);
        {
          fromDB.map(data => <p>Here is the Data {data.length}</p>)
        }
        </ul> */}
    </div>
  )
}

export default ServiceList
