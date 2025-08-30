import { Navbar, Nav, NavDropdown, Container, Button, Badge  } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./App.css";
 import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navpars() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [btnlog, setbtnlog] = useState(false);
    const [btnsign, setbtnsign] = useState(false);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-2" style={{fontWeight:"bold",}}>
      <Container>
        <Navbar.Brand href="#">
        <a href="https://wpdemothemes.com/edusion/" ><img
            src="/image/logo.png"
            alt="Logo"
            style={{ height: "40px" }}
          /></a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mx-auto mb-5" >
            <NavDropdown  title="Home" id="home-dropdown"   className="dropdown-with-border"    
            show={openDropdown==="Home"} onMouseEnter={()=>setOpenDropdown("Home")} onMouseLeave={()=>setOpenDropdown(null)}>
              <NavDropdown.Item as={Link} to="/home"  onClick={(e)=>{setbtnlog(false) ; setbtnsign(false);}}>Home 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/home2" onClick={(e)=>{setbtnlog(true) ; setbtnsign(true);}} >Home 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Home 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="pages-dropdown"  className="dropdown-with-border"
            show={openDropdown==="Pages"} onMouseEnter={()=>setOpenDropdown("Pages")} onMouseLeave={()=>setOpenDropdown(null)}>
              <NavDropdown.Item as={Link} to="/AboutUs"  onClick={(e)=>{setbtnlog(false) ; setbtnsign(false);}}>About Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Instructors Style 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Instructors Style 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Events</NavDropdown.Item>
              <NavDropdown.Item href="#">Events Detials</NavDropdown.Item>
              <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#">404</NavDropdown.Item>
              <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Item href="#">Login</NavDropdown.Item>
            </NavDropdown>

             <NavDropdown title="Courses" id="Courses-dropdown"  className="dropdown-with-border" 
              show={openDropdown==="Courses"} onMouseEnter={()=>setOpenDropdown("Courses")} onMouseLeave={()=>setOpenDropdown(null)}>
              <NavDropdown.Item as={Link} to="/CoursesStyle1" onClick={(e)=>{setbtnlog(false) ; setbtnsign(false);}} >Courses Style 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Courses Style 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Courses Style 3</NavDropdown.Item>
               <NavDropdown.Item href="#">Courses Detials Style 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Courses Detials Style 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="Blog-dropdown" className="dropdown-with-border"
            show={openDropdown==="Blog"} onMouseEnter={()=>setOpenDropdown("Blog")} onMouseLeave={()=>setOpenDropdown(null)}>
              <NavDropdown.Item href="#">Standard Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog Detials </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Contact" className="Contact-green" onClick={(e)=>{setbtnlog(false) ; setbtnsign(false);}}>Contact</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center me-3">
            <FaSearch
              style={{ fontSize: "25px", cursor: "pointer", marginRight: "25px" }}
            />

            <div style={{ position: "relative", marginRight: "25px" }}>
              <FaShoppingCart style={{ fontSize: "25px", cursor: "pointer" ,marginRight: "100px" }} />
              <Badge
                bg="success"
                pill
                style={{ position: "absolute", top: "-8px", right: "+75px", fontSize: "15px",}}
              >
                0
              </Badge>
            </div>
          </div>

       <Button
      variant=""
      className="me-2 btn-login"
      style={{ borderRadius: "30px",padding: "10px 30px",fontSize: "15px", backgroundColor:  "#61CE70",  color: "white",border: "none",}}>
      <span>{btnlog?"contact":"login"}</span>
    </Button>
  


          <Button
            variant="outline-success"
            style={{ borderRadius: "30px", padding: "10px 30px",fontSize:"15px" }}
  onMouseDown={e => e.preventDefault()} 
          >
             {btnsign?"Account":"Sign Up"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}