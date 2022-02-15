import React,  {useEffect, useState} from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Navbartwo from '../../components/Navbars/Navbartwo';
import Meta from '../../partial/seo-meta';
import { Row, Col, Offcanvas} from "react-bootstrap";
import MainFooter from '../../components/Footers/MainFooter';
import { useRouter } from "next/router";
import Indicator from '../../components/Indicator';
import { Button, TextField } from '@mui/material';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "hire" 
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
    content_type: 'hire',
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


export default function HireDevelopers({post}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const { title,skill, skillLogo ,content ,intro} = post.fields;
 
    
    const headingTypes = [BLOCKS.HEADING_2]
  
  //const headings = content.json.content.filter(item => headingTypes.includes(item.nodeType))
  
    const document = {
      nodeType: 'document',
      content: headingTypes,
    }
   
    const main = {
        
        renderNode: {
             [BLOCKS.HEADING_2]: (node, pext) =>{
                const strUnderscores = String(pext).replace(/ /g,"_")
             
                return(
                    <p className="description_title"><a id={strUnderscores}>{pext} </a></p>
                )
             }
            
          },  
    };

    const options = {
        
      renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) =>
           " ",
          [BLOCKS.HEADING_3]: (node, next) =>
           " ",
          [BLOCKS.HEADING_4]: (node, next) =>
           " ",
          [BLOCKS.HEADING_5]: (node, next) =>
           " ",
          [BLOCKS.HEADING_6]: (node, next) =>
           " ",
           [BLOCKS.UL_LIST]: (node, next) =>
           " ",
           [BLOCKS.LIST_ITEM]: (node, next) =>
           " ",
           [BLOCKS.HR]: (node, next) =>
           " ",
           [BLOCKS.OL_LIST]: (node, next) =>
           " ",
           [BLOCKS.QUOTE]: (node, next) =>
           " ",
           [BLOCKS.TABLE]: (node, next) =>
           " ",
           [BLOCKS.TABLE_CELL]: (node, next) =>
           " ",
           [BLOCKS.TABLE_ROW]: (node, next) =>
           " ",
           [BLOCKS.TABLE_HEADER_CELL]: (node, next) =>
           " ",
           [BLOCKS.HEADING_2]: (node, pext) =>{
              const strUnderscores = String(pext).replace(/ /g,"_")

               return(
                  <p className="table_link"><a href={"#"+strUnderscores}>{pext}</a> </p>
               )
           }
          
        },  
  }; 

    return (
      <div>
        <Row className="mx-auto">
            <Navbartwo/>
            <Meta
            title={title}
            image={'https:' + skillLogo.fields.file.url}
            />
            <div className='hire_details_banner_section'>
                <Row className='container-fluid hire_details_banner mx-auto'>
                    <Row className="container  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between">
                    <Col className='align-items-center' lg={7} md={6} sm={6} xs={12}>
                      <h1 className='details_title'>{title}</h1>
                      <div className='d-flex blog_details_container'>
                        <p className='blog_detailsone'>{intro}</p>
                      </div>
                      <div className='mt-3'>
                      <input type="text" className="hire_blog_inputs" placeholder='Your work Email'/>
                      <button className="hire_blog_developer_btn">Hire {skill} Developer</button>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
                    </Col>
                  </Row>
                </Row>
            </div>
            <div className='container-fluid hire_details_banner_mobile'>
                    <Row className="  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-center justify-content-sm-center">
                    <Col lg={4} md={10} sm={12} xs={12}>
                      <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
                    </Col>
                    <Col className='align-items-center' lg={7} md={10} sm={12} xs={12}>
                      <h1 className='details_title'>{title}</h1>
                      <div className='d-flex blog_details_container'>
                        <p className='blog_detailsone'>{intro}</p>
                      </div>
                      <div  className='mt-3'>
                      <input type="text" className="hire_blog_inputs" placeholder='Your work Email'/>
                      <button className="hire_blog_developer_btn">Hire {skill} Developer</button>
                      </div>
                    </Col>
                   
                  </Row>
            </div>

            <div className="hire_expact_section">
                <Row className="container-fluid  mx-auto expact_row">
                    <div className="expact_description_div" >
                      <p className="expact_title">What you can expect</p>
                      <p className="expact_text">It all starts with a conversation—we’ll work with you to find out what hard and soft <br />
                      skills you’re looking for, quickly zero in on a shortlist of talents, and help guide your <br />
                      through the hiring process.</p>
                    </div>
                    <div className="expact_point_div">
                        <div className="expact_point">
                        <img style={{
            height: '30px'}}  alt="Picture of the author"  src="/numone.png"/>
                            <p className="expact_text ms-3"> <span className="fw-bold">Sign up and set up your meeting</span> <br/>
                            Give us a few details and set up
                            a time to talk with your recruiter</p>
                        </div>
                        <div className="expact_point">
                        <img style={{
            height: '30px'}}  alt="Picture of the author"  src="/twoicon.png"/>
                            <p className="expact_text ms-3"> <span className="fw-bold"> Meet with your recruiter</span> <br/>
                            Your recruiter will show up with a shortlist of “top matches”</p>
                        </div>
                        <div className="expact_point">
                        <img style={{
            height: '30px'}}  alt="Picture of the author"  src="/numthree.png"/>
                            <p className="expact_text ms-3"> <span className="fw-bold"> Review and hire talent</span> <br/>
                            Interview the top matches, see who’s a hire, or get anothershortlist</p>
                        </div>
                    </div>
                    <div className="talk_two_btn_div text-center">
                        <button className="talk_two_btn mt-3">Hire Developers</button>
                    </div>
                </Row>
            </div>

          
       
         <div>
          <Row className='container-fluid mx-auto justify-content-lg-start justify-content-sm-center  justify-content-md-center description_container hire_description_container'>
              <Col className="table_colam pt-0" lg={2}>
                <div className='hire_table_content'>
                    <p className='table_content_title'>TABLE OF CONTENTS</p>
                    <p>{documentToReactComponents(content,options)}</p>
                </div>
              </Col>
              <Col className='description_colam' lg={10} md={12} sm={12} xs={12}>
                <div  className='container'>
                  <p className='description'>{documentToReactComponents(content,main)}</p>
                </div>
              </Col>
          
            </Row>
         </div>
     

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
              </Row>
          </Col>
          </Row>
         
          <MainFooter/>

          <div className="table_content_btn_row">
               <button onClick={handleShow} className='table_content_btn'>Table of Content</button>
          </div>

          <Offcanvas className="details_offcanvas_container w-100 h-50 bg-dark" show={show} onHide={handleClose} scroll={true} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
            <div  style={{width: '100%', marginLeft: '20px'}}>
                  <p className='table_content_title text-light'>TABLE OF CONTENTS</p>
                  <p>{documentToReactComponents(content,options)}</p>

             
            </div>
            <button onClick={handleClose} className='table_content_offcanvasbtn'>Table of Content</button>
        </Offcanvas.Body>
          </Offcanvas>
      </Row>
      <Indicator/>
      </div>
    );
}

