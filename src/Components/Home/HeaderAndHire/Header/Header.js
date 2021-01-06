import React from "react";
import { Button, Nav, Navbar} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import barLogo from "../../../../images/logos/logo.png";
import { useContext } from "react";
import { UserContext } from "../../../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();

  const handleLogin = () =>{
    const url = `/auth`;
    history.push(url);
}



  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg">
        <img style={{ height: "2rem", width: "6rem" }} src={barLogo} alt=""/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav style={{color:"#111430"}}>
            <Nav.Link eventKey={2} href="#memes">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="/newCourse">
              Add New Course
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Our team
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact us
            </Nav.Link>
            <img style={{height:"2rem", width:"2rem"}} src={loggedInUser.photoURL} alt=""/> 
            <p>
              {loggedInUser.email}
            </p>
            <Button onClick={()=> handleLogin()} style={{ backgroundColor: "#111430", width:"4rem" }}>LogIn</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
