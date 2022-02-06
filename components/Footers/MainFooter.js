import { Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'

export default function MainFooter() {
    return (
        <Row className="Footer mx-auto">
            <Row className="footerlink_container pb-3 mx-auto pt-4 mt-2">
                <Col className="" lg={2} md={4} sm={12}>
                <p className="footer_title">Uptal.</p>
                </Col>
                <Col lg={10} md={8} sm={12}>
                    <Row className="gy-3  justify-content-center">
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <p className="foter_link fw-bold">Customers</p>
                            <p className="foter_link ">Hire Developers</p>
                            <p className="foter_link ">Book a Call</p>
                            <p className="foter_link ">Hire for Specific Skills</p>
                            <p className="foter_link ">Customer Reviews</p>
                            <p className="foter_link ">How to Hire</p>
                        </Col>
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <p className="foter_link fw-bold">Developers</p>
                            <p className="foter_link ">Apply for Jobs</p>
                            <p className="foter_link ">Developer Login</p>
                            <p className="foter_link ">Remote Developer Jobs</p>
                            <p className="foter_link ">Developer Community</p>
                            <p className="foter_link ">Developer Stories</p>
                        </Col>
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <p className="foter_link fw-bold">Company</p>
                            <p className="foter_link ">Blog</p>
                            <p className="foter_link ">Press</p>
                            <p className="foter_link ">About Us</p>
                            <p className="foter_link ">Non-Developer Jobs</p>
                            <p className="foter_link ">Uptal Reviews</p>
                        </Col>
                        <Col className="justify-content-center" lg={3} md={6} sm={6} xs={6}>
                            <p className="foter_link fw-bold">Contact</p>
                            <p className="foter_link ">Contact Us</p>
                            <p className="foter_link ">Help Center</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="bottom_footer justify-content-between">
                <Col lg={5} md={5} sm={12}>
                     <FontAwesomeIcon className="social_icons" icon={faFacebook} />
                     <FontAwesomeIcon className="social_icons" icon={faLinkedinIn} />
                     <FontAwesomeIcon className="social_icons" icon={faInstagram} />
                     <FontAwesomeIcon className="social_icons" icon={faTwitter} />
                     <FontAwesomeIcon className="social_icons" icon={faYoutube} />
                     <div className="d-flex ">
                        <p className="bottomfooter_text ms-2 mt-2 bottom_text_containerOne">Sitemap</p>
                        <p className="bottomfooter_text ms-2 mt-2 bottom_text_containerOne">Terms of Service</p>
                        <p className="bottomfooter_text ms-2 mt-2  bottom_text_containerOne">Privacy Policy</p>
                     </div> 
                </Col>
                <Col  lg={5} md={5} sm={12}>
                
                </Col>
            </Row>
            <Row className="justify-content-between pb-3">
                <Col lg={5} md={6} sm={12}>
                    <p className="copyright_title">© 2021 Uptal</p>
                    <p className="bottomfooter_text">Goodworks Lab, Electronic city, Bengaluru, IN 560100</p>
                </Col>
                <Col className="d-flex justify-content-evenly align-items-end" lg={5} md={6} sm={12}>
                    <div className="d-flex ">
                        <p className="bottomfooter_text ms-2 bottom_text_containertwo">Sitemap</p>
                        <p className="bottomfooter_text ms-2 bottom_text_containertwo">Terms of Service</p>
                        <p className="bottomfooter_text ms-2 bottom_text_containertwo">Privacy Policy</p>
                    </div>
                </Col>
            </Row>
        </Row>
    
    );
  }
