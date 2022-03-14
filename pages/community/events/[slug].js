import React,  {useEffect, useState} from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Navbartwo from '../../../components/Navbars/Navbartwo';
import Meta from '../../../partial/seo-meta';
import { Row, Col, Offcanvas} from "react-bootstrap";
import MainFooter from '../../../components/Footers/MainFooter';
import { useRouter } from "next/router";
import Indicator from '../../../components/Indicator';
import Footer from '../../../components/Footers/Footers';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "events" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  
  const { items } = await client.getEntries({
    content_type: 'events',
    'fields.slug': params.slug
  }) 

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0] },
    revalidate: 1
  }
}


export default function Post({post}) {
  const [show, setShow] = useState(false);
  const [nam, setName] = useState(false);
  const [email, setEmail] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const { name, slug, dateAndTime, location, about, organizedBy} = post.fields;
 
    function onSubmit  (e) {
        e.preventDefault()
        console.log(nam)
       
    }
    
   
    return (
      <div style={{width: '100%'}}>
                <Navbartwo/>
        <Meta
        title={name}
        />
        <section className='event_details_banner_section'>
            <div className="contact_header_section">
            <Row className="container-fluid mx-auto d-flex justify-content-center event_details_header_row text-center align-items-center">
                <Col lg={8} md={12} sm={12}>
                    <h1 className="event_details_title">{name}</h1>
                    <p className="contact_header_text">{dateAndTime} | {location}</p>
                    <p className="contact_header_text">{organizedBy}</p>
                </Col>
            </Row>
            </div>
        </section>

        <section className='event_details_content_section'>
            <div  className='container '>
                <Row className=''>
                    <Col lg={4} md={12} sm={12} xs={12}>
                      <p className='sign_up_title'>Sign Up</p>
                      <input placeholder='Your Full Name' className='event_details_form_input mt-4' type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                      <input placeholder='Your Email Address' className='event_details_form_input' type="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                      <button className='event_login_btn' onClick={onSubmit}>Join This Event</button>
                      <p className='mt-4 sign_up_title'>Share Event</p>
                      <div className='d-flex'>
                        <a> <img className='ms-2' style={{
                          height: '32px', marginTop: '5px'
                        }} alt="Picture of the author" src="/facebook.png" /></a>

                        <a href="https://www.linkedin.com/company/uptal"><img className='mx-2' style={{
                          height: '32px', marginTop: '5px'
                        }} alt="Picture of the author" src="/linkedin.png" /></a>

                        <a href="https://twitter.com/uptalorg"><img style={{
                          height: '32px', marginTop: '5px'
                        }} alt="Picture of the author" src="/twitter.png" /></a>

                        <a href="https://www.instagram.com/uptalorg/"><img className='mx-2' style={{
                          height: '32px', marginTop: '5px'
                        }} alt="Picture of the author" src="/insta.png" /></a>
                      </div>
                    </Col>
                    <Col lg={8} md={12} sm={12} xs={12}>
                      <p className='event_content'>{documentToReactComponents(about)}</p>
                      <p className='sign_up_title organize_title'>Want to Organize a Toptal Event?</p>
                      <p>We welcome all Toptalers who are motivated to create and lead new events around the world. It's a great opportunity to meet other industry leaders, forge new connections, and help grow your local community. Fill out the contact form on this page, or email community@toptal.com for more information.</p>
                    </Col>
                </Row>
            </div>
        </section>

        <Footer/>
      </div>
    );
}

