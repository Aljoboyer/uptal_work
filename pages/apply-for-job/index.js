import { Row, Col } from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import Link from 'next/link';
import JobCard from "../../components/JobCard";
import { createClient } from 'contentful'
import { useState } from "react";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "jobs" })

  return {
    props: {
      job: res.items,
    },
    revalidate: 1
  } 
}

export default function Applyjob({job}) {
  const HalfSLice = job.slice(0, 6)
  const [showTech, setShowTech] = useState(false)

  return (
    <div className="template_section" style={{ width: "100%" }}>
      <Navbartwo />

      <section>
        <div className="container">
          <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-sm-start justify-content-xs-start  mx-auto employe_banner_section mt-4 gy-3">
            <Col className="" lg={6} md={6} sm={10}>
              <p className="employe_title">Your shortcut to pre-vetted talent</p>
              <p className="employe_text ">Talk to a recruiter and get a shortlist within 2 days</p>
              <div className="anchor_talkbtn ">
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
        </div>
      </section>

      <section className="talent_section">
        <div className="container mx-auto ">
          <p className="talent_title">Pre-vetted talent available to start in these fields</p>
          <div className="talent_div">
            <div className="talent_item">
              <img
                src="/fullstack.png"
                alt="Picture of the author"
                className="talent_img ps-2"
              />
              <p className="talent_text">FullStack Developer</p>
            </div>
            <div className="talent_item">
              <img
                src="/datascience.png"
                alt="Picture of the author"
                className="talent_img"
              />
              <p className="talent_text">Data Science</p>
            </div>
            <div className="talent_item">
              <img
                src="/cloud.png"
                alt="Picture of the author"
                className="talent_img"
              />
              <p className="talent_text">Cloud</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand_section">
        <div className="container mx-auto">
          <div>
            <p className="brand_title">Leading brands trust Talent Scout</p>
            <p className="brand_description">From startups to Fortune 500: brands trust our recruiters to help find the best people for them</p>
          </div>
          <Row>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/mircrosoft.jpg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/paypal-color-v1.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/walmart-color-v1.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/intuit-color-v1.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>

            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/barclays-color-v1.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
              <img
                src="/amazon-color-v1.svg"
                alt="Picture of the author"
                className="employe_brand_img"
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="expact_section">
        <div className="container">
          <div className="expact_row">
            <div className="expact_description_div" >
              <p className="how_to_become_title">How to become a Uptal developer?</p>
              <p className="expact_text_apply_job">Work with the best software companies in just 4 easy steps</p>
            </div>
            <div className="apply_expact_point_div">
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/numone.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5" >Create your profile</span> <br />
                  Fill in your basic details - Name, location, skills, salary, & experience.</p>
              </div>
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/twoicon.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5">Take our tests and interviews</span> <br />
                  Solve questions and appear for technical interview.</p>
              </div>
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/numthree.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5"> Receive job offers</span> <br />
                  Get matched with the best US and Silicon Valley companies.</p>
              </div>
              <div className="apply_expact_point">
                <img style={{
                  marginTop: '7px', marginLeft: '5px',
                  height: '30px'
                }} alt="Picture of the author" src="/numfour.png" />
                <p className="expact_text ms-2 mt-2"> <span className="fw-bold fs-5">Start working on your dream job</span> <br />
                  Once you join Turing, you’ll never have to apply for another job.</p>
              </div>
            </div>
            <div className="apply_now_btn_div">
              <a target="blank" href="https://developer.uptal.org/" className="expect_apply_btn">Apply Now</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="technology_section" style={{ marginRight: '0' }}>
        <div className="container mt-4">
          <p className="based_text">Based on Skills</p>
          <div className="technology_div">
            {job.map(data => {
                 return <JobCard key={data.sys.id} data={data} />
                }
                )}
          </div>
        </div>
      </section>

      <section className="technology_section_mobile">
        <div className="container">
          <p className="based_text ">Based on Skills</p>
          { showTech || <div className="technology_div">
            {HalfSLice.map(data => {
                 return <JobCard key={data.sys.id} data={data} />
                }
                )}
          </div>
          }
          {
            showTech && <div className="technology_div">
              {job.map(data => {
                 return <JobCard key={data.sys.id} data={data} />
                }
                )}
            </div>
          }
          <p onClick={() => setShowTech(!showTech)} className="text-primary mt-2">View More +</p>
        </div>
      </section>

      <section className="faq_section" style={{
        marginLeft: '0',
        marginRight: '0'
      }}>
        <div className="container">
          <Row className="mx-auto faq_row justify-content-lg-around ">
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
      </section>

      <section className="join_work_section" style={{
        marginLeft: '0',
        marginRight: '0',
        width: '100%'
      }}>
        <div className="container">
          <Row className='join_full_container justify-content-center mx-auto'>
            <Col lg={12} md={12} sm={12} xs={12} className='w-100 '>
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
                  <div className='join_footer_row'>
                    <Row className="justify-content-lg-between justify-content-md-around">
                      <hr className='horizontal_line' />
                      <Col lg={8} md={8} sm={12}>
                        <p className='join_text'>Access a pre-screened pool of remote talent, shortlisted for you by specialized recruiters who help you select the best talent based on your business needs.</p>
                      </Col>
                      <Col lg={3} md={3} sm={12}>
                        <a href='https://client.uptal.org/'><button className='talent_btn'>Find Talent</button></a>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section style={{
        maxWidth:'100vw',
        overflowX:'hidden'
      }}>
        <div className="container">
          <div className="join_work_container_mobile mx-auto">
            <div className="join_flex_div_one">
              <img
                src="/joinimg.png"
                alt="Picture of the author"
                className="join_img_foremploye_mobile"
              />
            </div>
            <div className="ps-3">
              <p className='join_title'>Join the world’s work marketplace</p>
              <div className='join_footer_row'>
                <Row className="justify-content-lg-between justify-content-md-between">
                  <hr className='horizontal_line' />
                  <Col lg={8} md={8} sm={12}>
                    <p className='join_text'>Find great talent. Build your business. Take your career to the next level.</p>
                  </Col>
                  <Col lg={3} md={3} sm={12}>
                    <a href='https://client.uptal.org/'><button className='talent_btn'>Find Talent</button></a>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
}
