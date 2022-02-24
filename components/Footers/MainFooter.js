import { Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useRouter } from "next/router";
import { FaFacebook} from 'react-icons/fa';
import { AiFillYoutube} from 'react-icons/ai';
import { GrLinkedinOption} from 'react-icons/gr';
import { BsInstagram, BsTwitter} from 'react-icons/bs';
import Link from "next/link";

export default function MainFooter() {
    const router = useRouter()
    const FooterHandler = (routes) => {
        if(routes === 'blog'){
            router.push('/blog')
        }
        else if (routes === 'sitemap'){
            router.push('/sitemap')
        }
    }
    return (
        <Row className="Footer mx-auto">
             <Row className=" footerlink_container pb-3 mx-auto pt-4 mt-2">
                <Col className="" lg={2} md={4} sm={12}>
                       <p className="footer_title">Uptal.</p>
                </Col>
                <Col lg={10} md={8} sm={12}>
                    <Row className="gy-3  justify-content-center">
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <a className="foter_link_title fw-bold">Customers</a>
                            <Link href="/hire-developers"><a className="foter_link ">Hire Developers</a></Link>
                            <a className="foter_link ">Book a Call</a>
                            <a className="foter_link ">Hire for Specific Skills</a>
                            <a className="foter_link ">Customer Reviews</a>
                            <a className="foter_link ">How to Hire</a>
                        </Col>
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <a className="foter_link_title fw-bold">Developers</a>
                            <Link href="/apply-for-job"><a className="foter_link ">Apply for Jobs</a></Link>
                            <a className="foter_link ">Developer Login</a>
                            <a className="foter_link ">Remote Developer Jobs</a>
                            <a className="foter_link ">Developer Community</a>
                            <a className="foter_link ">Developer Stories</a>
                        </Col>
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <a className="foter_link_title fw-bold">Company</a>
                            <Link href='/blog'><a className="foter_link ">Blog</a></Link>
                            <a className="foter_link_title">Press</a>
                            <a className="foter_link ">About Us</a>
                            <a className="foter_link ">Non-Developer Jobs</a>
                            <a className="foter_link ">Uptal Reviews</a>
                        </Col>
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <a className="foter_link_title fw-bold">Contact</a>
                            <a className="foter_link ">Contact Us</a>
                            <a className="foter_link ">Help Center</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="bottom_footer justify-content-between">
                <Col lg={5} md={5} sm={12}>
                     <FaFacebook className="social_icons" size={25} />
                     <a href="https://www.linkedin.com/company/uptal"><GrLinkedinOption className="social_icons" size={25} /></a>
                     <a href="https://www.instagram.com/uptalorg/"><BsInstagram className="social_icons" size={25}/></a>
                     <a href="https://twitter.com/uptalorg"><BsTwitter className="social_icons" size={25} /></a>
                     <AiFillYoutube className="social_icons" size={25} />
                     <div className="d-flex ">
                         <Link href='/sitemap'><a className="bottomfooter_text ms-2 mt-2 bottom_text_containerOne">Sitemap</a></Link>
                        <a className="bottomfooter_text ms-2 mt-2 bottom_text_containerOne">Terms of Service</a>
                        <a className="bottomfooter_text ms-2 mt-2  bottom_text_containerOne">Privacy Policy</a>
                     </div> 
                </Col>
                <Col  lg={5} md={5} sm={12}>
                
                </Col>
            </Row>
            <Row className="justify-content-between pb-3">
                <Col lg={5} md={6} sm={12}>
                    <a className="copyright_title">© 2021 Uptal</a>
                    <a className="bottomfooter_text">Goodworks Lab, Electronic city, Bengaluru, IN 560100</a>
                </Col>
                <Col className="d-flex justify-content-evenly align-items-end" lg={5} md={6} sm={12}>
                    <div className="d-flex ">
                        <Link href='/sitemap'><a className="bottomfooter_text ms-2 bottom_text_containertwo">Sitemap</a></Link>

                        <a className="bottomfooter_text ms-2 bottom_text_containertwo">Terms of Service</a>
                        <a className="bottomfooter_text ms-2 bottom_text_containertwo">Privacy Policy</a>
                    </div>
                </Col>
            </Row>
        </Row>
    
    );
  }
 