import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'

export default function Intro() {
  return (
    <div style={{width: "100%"}}>
        <Row className="mx-auto">
            <Navbartwo/>
            <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-sm-center mx-auto employe_banner_section mt-4">
                    <Col className="" lg={6} md={6} sm={10}>
                      <p className="employe_title ms-3">Your shortcut to pre-vetted talent</p>
                      <p className="employe_text ms-3">Talk to a recruiter and get a shortlist within 2 days</p>
                      <div className="anchor_talkbtn ms-3">
                            <button className="talk_btn">Talk to a recruiter</button>
                            <a className="looking_anchor ms-2">Looking for work?</a>
                      </div>
                    </Col>
                    <Col className="text-end" lg={6} md={6} sm={10}>
                        <img
                        src="/employe-bannerimg.jpg"
                        alt="Picture of the author"
                        className="employe_banner_img"
                      />
                    </Col>
            </Row>
            <Row className="container-fluid">
                <Row className="justify-content-lg-center justify-content-xl-center g-3  mx-auto">
                  <Row className="container">
                     <Col lg={11}>
                     <p className="talent_title">Pre-vetted talent available to start in <br /> these fields</p>
                     </Col>
                  </Row>
             <div>
             <Row  className="container mx-auto">
             <div className="field_grid">
                <div className="field_container field_container_first">
                    <img
                      src="/fullstack.png"
                      alt="Picture of the author"
                      className="field_img"
                    />
                    <p className="field_text my-auto">FullStack Developer</p>
                  </div>
              
                  <div className="field_container">
                  <img
                      src="/datascience.png"
                      alt="Picture of the author"
                      className="field_img"
                    />
                    <p className="field_text my-auto">Data Science</p>
                  </div>
            
                  <div className="field_container">
                    <img
                        src="/cloud.png"
                        alt="Picture of the author"
                        className="field_img"
                      />
                      <p className="field_text my-auto">Cloud</p>
                  </div>
              </div>
             </Row>

             </div>
              </Row>

              <div>
                <Row className="container justify-content-around  brand_section mx-auto gy-3">
                    <p className="brand_title ">Leading brands trust Talent Scout</p>
                    <p className="brand_description">From startups to Fortune 500: brands trust our recruiters to help find the best people for them</p>
                    <Col className="text-center" lg={2} sm={4} md={4} xs={12}>
                    <img
                        src="/paypal-color-v1.svg"
                        alt="Picture of the author"
                        className="employe_brand_img"
                      />
                    </Col>
                    <Col className="text-center" lg={2} sm={4} md={4} xs={12}>
                    <img
                        src="/walmart-color-v1.svg"
                        alt="Picture of the author"
                        className="employe_brand_img"
                      />
                    </Col>
                    <Col className="text-center" lg={2} sm={4} md={4} xs={12}>
                    <img
                        src="/amazon-color-v1.svg"
                        alt="Picture of the author"
                        className="employe_brand_img"
                      />
                    </Col>
                    <Col className="text-center" lg={2} sm={4} md={4} xs={12}>
                    <img
                        src="/olalogo.jpg"
                        alt="Picture of the author"
                        className="employe_brand_img"
                      />
                    </Col>
                    <Col className="text-center" lg={2} sm={4} md={4} xs={12}>
                    <img
                        src="/mircrosoft.jpg"
                        alt="Picture of the author"
                        className="employe_brand_img"
                      />
                    </Col>
                    <Col className="text-center" lg={2} sm={4} md={4} xs={12}>
                    <img
                        src="/barclays-color-v1.svg"
                        alt="Picture of the author"
                        className="employe_brand_img"
                      />
                    </Col>
                </Row>
              </div>

              <div className="expect_section_div">
                <Row className="container expect_section mx-auto">
                      <div>
                        <p className="expect_title">What you can expect</p>
                        <p  className="expect_description">It all starts with a conversation—we’ll work with you to find out what hard and soft <br /> skills you’re looking for, quickly zero in on a shortlist of talents, and help guide your <br /> through the hiring process.</p>
                      </div>
                      <Row className="expect_point">
                          <Col className="ps-0" xl={4} xxl={4}  lg={4} md={4} sm={12}>
                              <div className="expect_div expect_divone  ms-0">
                                  <p className="number_textone">1</p>
                                  <p className="expect_text"> <span className="fw-bold">Sign up and set up your meeting</span> <br />
                                    Give us a few details and set up <br /> a time to talk with your recruiter</p>
                              </div>
                          </Col>
                          <Col xl={4} xxl={4} lg={4} md={4} sm={12}>
                              <div className="expect_div">
                                  <p className="number_text">2</p>
                                  <p className="expect_text"> <span className="fw-bold">Meet with your recruiter</span> <br />Your recruiter will show up with a shortlist  of “top matches”</p>
                              </div>
                          </Col>
                          <Col xl={4} xxl={4}  lg={4} md={4} sm={12}>
                              <div className="expect_div">
                                  <p className="number_text">3</p>
                                  <p className="expect_text"> <span className="fw-bold">Review and hire talent</span> <br />
                                    Interview the top matches, see who’s a hire, or get another <br /> shortlist</p>
                              </div>
                          </Col>
                      </Row>
                      <Row className="justify-content-lg-start">
                          <Col lg={4}>
                            <button className="talk_btn2">Talk to a recruiter</button>
                          </Col>
                      </Row>
                </Row>
              </div>

              <div className="faq_div">
                <Row className="container-xxl container-xl container-lg container-md container-sm container-xs mx-auto faq_section justify-content-lg-evenly">
                  <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
                    <p className="faq_title">Frequently asked questions</p>
                  </Col>
                  <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
                      <div className="fa_question">
                        <p className="faq_point_title">Why use talent scout?</p>
                        <p className="faq_text">Its the quick way to hire highly-qualified talent – and with very little <br /> effort on your part.</p>
                      </div>
                      <hr />
                      <div className="fa_question">
                        <p className="faq_point_title">Who can I meet this way?</p>
                        <p className="faq_text">People with years of experience in creative, design, development, and <br /> marketing: the very best people on our platform, handpicked from <br /> hundreds of thousands globally.</p>
                      </div>
                      <hr />
                      <div className="fa_question">
                        <p className="faq_point_title">How is Talent Scout different from a staffing agency?</p>
                        <p className="faq_text">First off, we’re fast. Staffing agencies can take weeks and even months <br /> to find the right fit, and often mark up costs by 75% (that’s on the low <br /> end).</p>
                      </div>
                      <hr />
                      <div className="fa_question">
                        <p className="faq_point_title">Do I have to pay for this service?</p>
                        <p className="faq_text">When our specialized recruiters share your shortlist with you, they’ll <br /> include the hourly rate for each professional – that’s all you’ll pay: there <br /> aren’t any extra fees outside these rates.</p>
                      </div>
                  </Col>
                </Row>
              </div>
            </Row>
              <Row className='container justify-content-center mx-auto join_full_container'>
            <Col lg={11} md={12} sm={12} xs={10} className=''>
                  <Row className="join_work_container justify-content-md-between">
                  <Col className="d-flex justify-content-start " lg={4} md={4} sm={4} xs={12}>
                    <img
                    src="/joinimg.png"
                    alt="Picture of the author"
                    className="join_img"
                    />
                  </Col>
                  <Col lg={8} md={8} sm={8} xs={12}>
                      <p className='join_title'>Join the world’s work marketplace</p>
                    <div  className='join_footer_row'>
                    <Row className="justify-content-lg-between justify-content-md-between">
                      <hr className='horizontal_line' />
                        <Col lg={8} md={8} sm={12}>
                          <p className='join_text'>Find great talent. Build your business. Take your career to the next level.</p>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                          <button className='talent_btn'>Find Talent</button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
            </Col>
            </Row>
           
            <MainFooter/>
        </Row>
    </div>
  );
}
{/* <Row className="container-fluid mx-auto gy-3 justify-content-evenly gorious_section">
<Col lg={6} md={6} sm={12}>
  <img
    src="/regorious.jpg"
    alt="Picture of the author"
    className="regorious_img"
  />
</Col>
<Col lg={5} md={6} sm={12}>
  <p className="rigorious_title ms-2">Rigorous Vetting</p>
  <div className="gorious_div mt-4">
      <img
        src="/goroious-check-icon.svg"
        alt="Picture of the author"
        className="regorious_icon"
      />
      <div>
         <p className="gorious_point_title">5+ hours of tests and interviews</p>
         <p className="gorious_text">More rigorous than Silicon Valley job interviews. We test for 100+ skills, data structures, algorithms, systems design, software specializations & frameworks.</p>
      </div>
  </div>
  <div className="gorious_div">
      <img
        src="/gorious-box-icon.svg"
        alt="Picture of the author"
        className="regorious_icon"
      />
      <div>
        <p className="gorious_point_title">Seniority tests</p>
          <p className="gorious_text">We select excellent communicators who can proactively take ownership of business and product objectives without micromanagement.</p>
      </div>
  </div>
</Col>
</Row> */}