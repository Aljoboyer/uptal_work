import { Navbar,Container, Row, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useState } from "react";
import { useRouter } from "next/router";
import Indicator from "../Indicator";

export default function Navbartwo() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter()
    const ClickHandler = () => {
        router.push('/')
    }
  return (
    <div className="navtwo" style={{width: '100%', height: '80px'}}>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">

        <Navbar.Brand onClick={ClickHandler}>
            <img
            src="/my-img.png"
            alt="Picture of the author"
            className="navtwologo"
            />
      </Navbar.Brand>
     
        <Navbar.Toggle onClick={handleShow} aria-controls="responsive-navbar-nav" style={{color: 'black'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
           
            </Nav>
            <div className="nav-itmes">
            <Nav >

                <Nav.Link className="mt-2 "> <span className="right-nav-span">Apply As Developer</span></Nav.Link>
                <Nav.Link className="mx-2" >
                        <button className="getstarted_btn">Hire Remote Developers</button>
                </Nav.Link>
                <Nav.Link className="mt-2"> <span className="right-nav-span">Login</span>
                </Nav.Link>
                       
            </Nav>
            </div>    
        </Navbar.Collapse>      
        </Navbar>
        <Indicator/>

    </div>
  );
}
