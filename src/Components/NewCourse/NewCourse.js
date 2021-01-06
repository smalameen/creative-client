import { Button, Navbar } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import order from '../../images/order.png'
import list from '../../list.jpg'
import reviews from '../../review.jpg'
import { UserContext } from '../../App'

const NewCourse = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

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
    formData.append('pass', newInfo.pass)
    fetch('http://localhost:5001/addCourse', {
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

  //   Navigation area

  const historyHome = useHistory()
  const handleHomeButton = () => {
    const url = `/home`
    historyHome.push(url)
  }

  const historyService = useHistory()
  const handleServiceButton = () => {
    const url = `/service`
    historyService.push(url)
  }
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

  return (
    <div style={{maxHeight:"5rem"}}>
      <Navbar
        className="d-flex justify-align-content-right bg-light"
        style={{ height: '4rem' }}
      >
        <button
          onClick={() => handleAddCourseButton()}
          className="ml-1 bg-light"
          style={{ border: 'none', backgroundColor: 'white' }}
        >
          Add Course
        </button>
        <button onClick={()=>handleHomeButton()}
          className="ml-1 bg-light"
          style={{ border: 'none', backgroundColor: 'white' }}
        >
          Home
        </button>
        <button
          onClick={() => handleOrderButton()}
          className="ml-1 bg-light"
          style={{ border: 'none', backgroundColor: 'white' }}
        >
          Order
        </button>
        <img style={{height:"2rem", width:"2rem"}} src={loggedInUser.photoURL} alt=""/>
      </Navbar>
      <div className="row">
        <div
          className="col-md-3 col-sm-12 bg-light align-middle"
          style={{ height: '10rem' }}
        >
          <img
            style={{ height: '1.5rem', width: '1.5rem' }}
            src={order}
            alt=""
          />
          <button
            onClick={() => handleOrderButton()}
            style={{ border: 'none', background: 'none' }}
          >
            Order
          </button>
          <br />
          <img
            style={{ height: '1.5rem', width: '1.5rem' }}
            src={list}
            alt=""
          />{' '}
          <button
            onClick={() => handleServiceButton()}
            style={{ border: 'none', background: 'none' }}
          >
            Service lits
          </button>
          <br />
          <img
            style={{ height: '1.5rem', width: '1.5rem' }}
            src={reviews}
            alt=""
          />{' '}
          <button style={{ border: 'none', background: 'none' }}>Review</button>
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
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Course Title</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                style={{
                  height: '50px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '10px',
                }}
                name="email"
                type="text"
                placeholder="Enter course title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                style={{
                  height: '50px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '10px',
                }}
                name="name"
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                onBlur={handleBlur}
                style={{
                  height: '50px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '10px',
                }}
                name="pass"
                type="text"
                placeholder="Write briefly.."
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Upload an Image</Form.Label>
              <Form.Control name="file" onBlur={handleFiles} type="file" />
            </Form.Group>

            <Button onSubmit={handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default NewCourse
