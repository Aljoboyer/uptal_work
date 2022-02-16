import React from 'react';
import {Col, Row} from 'react-bootstrap'
import { useRouter } from 'next/router';


export default function HireCard({data}) {

    const {skill, skillLogo, slug} = data.fields
    const router = useRouter()
    const ClickHandler = () => {
        router.push(`/hire/${slug}`)
    }

  return(

      <Col className='card-colam pb-4 ps-4 pe-4' onClick={ClickHandler} lg={4} md={6} sm={12}>
          <img className='cards-img' src={'https:' + skillLogo.fields.file.url}  alt={skill} />
          <p className="blog-title mt-3">{skill}</p>
          {/* <p className="category_text">{category.fields.categoryName}</p> */}
      </Col>
  )
}
{/* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */}