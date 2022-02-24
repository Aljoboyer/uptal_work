import { Navbar,Container, Row, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useState } from "react";
import { useRouter } from "next/router";
import Indicator from "../Indicator";
import Link from "next/link";

export default function Navbartwo() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter()

  return (

     <div  className="navtwo" style={{width: '100%'}}>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">
        <Navbar.Brand > <Link href="/"><a className="navtwo_logo">Uptal.</a></Link> </Navbar.Brand>

        <Navbar.Toggle className="mb-4" onClick={handleShow} aria-controls="responsive-navbar-nav" style={{color: 'black'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <div className="nav-itmes">
            <Nav >
              <Nav.Link className="mt-2 "> 
              <Link href={router.route === '/apply-for-job' ? 'https://developer.uptal.org/' : '/apply-for-job'}><a className="right-nav-span">Apply As Developer</a></Link> 
              </Nav.Link>

              <Nav.Link className="mt-2"> 
              <Link href={router.route === '/hire-developers' ? 'https://client.uptal.org/' : '/hire-developers'}><a className="getstarted_btn">Hire Remote Developers</a></Link> 
              </Nav.Link>

              <Nav.Link  className="mt-2"> <Link href='/blog'><a className="right-nav-span">Blog</a></Link>
              </Nav.Link>
                        
            </Nav>
            </div>    
        </Navbar.Collapse>      
        </Navbar>

        <Offcanvas className="offcanvas_container w-100" show={show} onHide={handleClose} scroll={true} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img
        src="/my-img.png"
        alt="Picture of the author"
        className="canvas_img"
      /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
            <div style={{width: '100%'}}>
             <button href='/hire-developers'  className="offcangetstarted_btn">Hire Remote Developers</button>
             <button href='/apply-for-job' className="Applydev_btn">Apply As Developer</button>
             <button  className="Login_btn">Blog</button>
            </div>    
        </Offcanvas.Body>
        </Offcanvas>
      </div>
    
  );
}
