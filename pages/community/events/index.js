import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import EventCard from "../../../components/EventCard";
import { createClient } from 'contentful'
import Filteritem from "../../../components/Filteritem";
import { Button, Col, Row } from "react-bootstrap";
import Navbartwo from "../../../components/Navbars/Navbartwo";
import Footer from "../../../components/Footers/Footers";


export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "events" })

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1
  }
}


export default function Community({ blogs }) {


  return (
       
    <div style={{width: '100%'}}>
     <Navbartwo />
     <Filteritem />
     <section>
        <div className="container">
          <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-sm-start justify-content-xs-start  mx-auto employe_banner_section mt-4 gy-3">
            <Col className="" lg={6} md={6} sm={10}>
              <p className="employe_title">Explore Upwork events & webinars</p>
              <p className="employe_text ">Official Upwork-hosted events: Expert Talks, Webinars, Focus Groups and Meetups.</p>
              <div className="anchor_talkbtn ">
                <button className="talk_btn">Talk to a recruiter</button>
              </div>
            </Col>
            <Col className="text-end" lg={6} md={6} sm={10}>
              <img
                src="/events_banner_img.jpg"
                alt="Picture of the author"
                className="employe_banner_img"
              />
            </Col>
          </Row>
        </div>
      </section>
      <section className="event_section ms-3">
        <div className="container mx-auto">
          <h1 className="event_page_title">Events</h1>
          <div className="container event_card_div mt-3 mx-auto gx-2">
              {blogs.map(blog => (
                <EventCard key={blog.sys.id} blog={blog} />
              ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
}
