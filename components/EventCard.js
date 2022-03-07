import React from 'react';
import {Col, Row} from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function EventCard({blog}) {

    const {name, organizedBy,slug } = blog.fields
    const router = useRouter()
    const ClickHandler = () => {
        router.push(`/community/events/${slug}`)
    }

  return(

      <Col className='card-colam pb-4 ps-4 pe-4' onClick={ClickHandler} lg={4} md={6} sm={12}>
          <p className="blog-content">{organizedBy}</p>
          <p className="blog-title mt-3">{name}</p>
          
          {/* <p className="category_text">{category.fields.categoryName}</p> */}
      </Col>
  )
}
{/* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */}