import  { useState } from "react";
import {Offcanvas, Row, Col, Nav, Navbar,Container} from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineMenu} from 'react-icons/ai';
export default function HomeHeader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="l">
          <Container>
          <Navbar.Brand ><p className="website_title">Uptal.</p></Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} className="me-3 mb-2"  aria-controls="responsive-navbar-nav" style={{color: 'black'}}><AiOutlineMenu size={30}/></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <div className="nav-itmes">
            <Nav>
              <Link href="/blog"><a className="home_blog_btn ">Community</a></Link>
              <Link href="/blog"><a className="home_blog_btn ">Blog</a></Link>
            </Nav>
            </div>
          </Navbar.Collapse>
          </Container>
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
              <Link href="/blog"><a className="home_blog__offcanvas_btn ">Community</a></Link>
              <Link href="/blog"><a className="home_blog__offcanvas_btn ">Blog</a></Link>
            </div>    
        </Offcanvas.Body>
        </Offcanvas>

      </div>
    );
  }
