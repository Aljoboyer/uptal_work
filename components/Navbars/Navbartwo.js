import { Navbar, Container, Row, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
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

    <div className="navtwo" style={{ width: '100%', paddingLeft:'0', paddingRight:'0' }}>

      <div className="container">
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">
          <Navbar.Brand > <Link href="/"><a className="navtwo_logo">Uptal.</a></Link> </Navbar.Brand>

          <Navbar.Toggle className="mb-2" onClick={handleShow} aria-controls="responsive-navbar-nav" style={{ color: 'black' }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <div className="nav-itmes">
              <Nav >

                {router.route === '/apply-for-job'?   <Link href='/hire-developers'><a className="right-nav-span">Hire Developers</a></Link> :
                <Link href='/apply-for-job'><a  className="right-nav-span">Apply As Developer</a></Link> 
                }         

              {router.route === '/apply-for-job' || router.route ===  '/hire-developers' ? <> { router.route === '/apply-for-job' ? <Link href='https://developer.uptal.org/signin' ><a target='blank' className="getstarted_btn">Apply Now</a></Link> : 
              <Link href= 'https://client.uptal.org/'><a target='blank' className="getstarted_btn">Hire Developers </a></Link> } </> : <Link href='/hire-developers'><a className="getstarted_btn">Hire Developers </a></Link>
              }

                <Link href='/blog'><a className="right-nav-span">Blog</a></Link>

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

            <div style={{ width: '100%' }}>

              {router.route === '/apply-for-job' || router.route ===  '/hire-developers' ? <> { router.route === '/apply-for-job' ? <Link href='https://developer.uptal.org/signin' ><a target='blank' className="offcangetstarted_btn">Apply Now</a></Link> : 
              <Link href= 'https://client.uptal.org/'><a target='blank' className="offcangetstarted_btn">Hire Developers </a></Link> } </> : <Link href='/hire-developers'><a className="offcangetstarted_btn">Hire Developers </a></Link>
              }


              {router.route === '/apply-for-job'?   <Link href='/hire-developers'><a className="Applydev_btn">Hire Remote Developers</a></Link> :
                <Link href='/apply-for-job'><a  className="Applydev_btn">Apply As Developer</a></Link> 
                }

              <Link href="/blog"><a className="Login_btn">Blog</a></Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

    </div >

  );
}
