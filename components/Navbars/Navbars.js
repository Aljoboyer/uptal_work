import { Navbar,Container, Row, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Indicator from "../Indicator";

export default function Nabars({navigation}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter()

  return (
    <div style={{width: '100%',}}>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">

        <Navbar.Brand > <Link href="/"><a className="navtwo_logo">Uptal.</a></Link> </Navbar.Brand>
       
        <Navbar.Toggle className="mb-2" onClick={handleShow} aria-controls="responsive-navbar-nav" style={{color: 'black'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
           
            </Nav>
            <div className="nav-itmes">
            <Nav >

                <Nav.Link  className="mt-2 "> <Link href='/apply-for-job'><a  className="right-nav-span">Apply As Developer</a></Link></Nav.Link>
                <Nav.Link  className="mt-2 "> <Link href='/hire-developers'><a   className="getstarted_btn">Hire Remote Developers</a></Link></Nav.Link>
                
                <Nav.Link  className="mt-2"> <span className="right-nav-span">Login</span>
                </Nav.Link>
                       
            </Nav>
            </div>    
        </Navbar.Collapse>      
        </Navbar>

      <Offcanvas className="offcanvas_container w-100" show={show} onHide={handleClose} scroll={true} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <Link href="/"><a className="navtwo_logo">Uptal.</a></Link></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
          <div style={{width: '100%'}}>
              <Link href='/hire-developers'><a  className="offcangetstarted_btn">Hire Remote Developers</a></Link>
             <Link href='/apply-for-job'><a  className="Applydev_btn">Apply As Developer</a></Link>
             <Link href="/blog"><a  className="Login_btn">Blog</a></Link>
            </div>  
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
