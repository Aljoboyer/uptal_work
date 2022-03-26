import { Row, Col } from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import HireCard from '../../components/HireCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoIosArrowForward } from 'react-icons/io';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createClient } from 'contentful'
import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {

  const client = createClient({ 
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "hire" })

  return {
    props: {
      hire: res.items,
    },
    revalidate: 1
  }
}
export default function Intro({ hire }) {
  const HalfSliceTwo = hire.slice(0, 18)
  const HalfSLice = hire.slice(0, 6)
  const [showTech, setShowTech] = useState(false)

 
  return (
    <div className="template_section" style={{ width: "100%" }}>
      <Navbartwo />
      <section>
        <div className="container">
          <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-xs-start  justify-content-sm-start  mx-auto employe_banner_section mt-4 gy-3">
            <Col className="ml-0" lg={6} md={6} sm={12} xs={12}>
              <p className="employe_title">Your shortcut to pre-vetted talent</p>
              <p className="employe_text ">Talk to a recruiter and get a shortlist within 2 days</p>
              <div className="anchor_talkbtn ">
              <button className="talk_btn">Hire Developers Now</button>
                <p className="pt-2 pc_looking_anchor">Looking for job instead?<Link href="/apply-for-job"><a className="looking_anchor ms-2">Apply for job</a></Link></p>

                <p className="pt-2 mobile_looking_anchor">Looking for job instead? <br /> <Link href="/apply-for-job"><a className="looking_anchor">Apply for job</a></Link></p>
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
        <div className="container mx-auto">
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
              <p className="expact_title">What you can expect</p>
              <p className="expact_text">It all starts with a conversation—we’ll work with you to find out what hard and soft <br />
                skills you’re looking for, quickly zero in on a shortlist of talents, and help guide your <br />
                through the hiring process.</p>
            </div>
            <div className="expact_point_div">
              <div className="expact_point">
                <img style={{
                  height: '30px'
                }} alt="Picture of the author" src="/numone.png" />
                <p className="expact_text ms-3"> <span className="fw-bold">Sign up and set up your meeting</span> <br />
                  Give us a few details and set up
                  a time to talk with your recruiter</p>
              </div>
              <div className="expact_point">
                <img style={{
                  height: '30px'
                }} alt="Picture of the author" src="/twoicon.png" />
                <p className="expact_text ms-3"> <span className="fw-bold"> Meet with your recruiter</span> <br />
                  Your recruiter will show up with a shortlist of “top matches”</p>
              </div>
              <div className="expact_point">
                <img style={{
                  height: '30px'
                }} alt="Picture of the author" src="/numthree.png" />
                <p className="expact_text ms-3"> <span className="fw-bold"> Review and hire talent</span> <br />
                  Interview the top matches, see who’s a hire, or get anothershortlist</p>
              </div>
            </div>
            <div className="talk_two_btn_div">
              <button className="talk_two_btn">Talk to a recruitor</button>
            </div>
          </div>
        </div>
      </section>

      <section className="technology_section" style={{ marginRight: '0' }}>
        <div className="container mt-4">
          <p className="based_text">Based on Skills</p>
          <div className="technology_div">
            {HalfSliceTwo.map(data => {
                    return <HireCard key={data.sys.id} data={data} />
                })}
          </div>
          <Link href='https://www.uptal.org/sitemap/hire-developers'><a className="more_skills" target="blank">+ More skills</a></Link>
        </div>
      </section>

      <section className="technology_section_mobile">
        <div className="container">
          <p className="based_text ">Based on Skills</p>
          { showTech || <div className="technology_div">
              {HalfSLice.map(data => {
                    return <HireCard key={data.sys.id} data={data} />
                })}
          </div>
          }
          {
            showTech && <div className="technology_div">
            {hire.map(data => {
                  return <HireCard key={data.sys.id} data={data} />
              })}
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
          <Row className="faq_row justify-content-lg-evenly" style={{
            marginLeft: '0',
            marginRight: '0'
          }}>
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
                <Col className="d-flex justify-content-start " lg={4} md={4} sm={12} xs={12}>
                  <img
                    src="/joinimg.png"
                    alt="Picture of the author"
                    className="join_img"
                  />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <p className='join_title'>Join the world’s work marketplace</p>
                  <div className='join_footer_row'>
                    <Row className="justify-content-lg-between justify-content-md-around">
                      <hr className='horizontal_line' />
                      <Col lg={8} md={8} sm={12}>
                        <p className='join_text'>Access a pre-screened pool of remote talent, shortlisted for you by specialized recruiters who help you select the best talent based on your business needs.</p>
                      </Col>
                      <Col lg={3} md={3} sm={12}>
                        <a target="blank" href='https://client.uptal.org/'><button className='talent_btn'>Find Talent</button></a>
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
                    <a target="blank" href='https://client.uptal.org/'><button className='talent_btn'>Find Talent</button></a>
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
