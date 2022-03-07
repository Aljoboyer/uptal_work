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
      <div>
        <Row className="mx-auto">
            <Navbartwo/>
            <Meta
            title={name}
            />
            <h1>{name}</h1>
            <p>{dateAndTime} | {location}</p>
            <p>{organizedBy}</p>
            <p>{documentToReactComponents(about)}</p>
            <h2>Sign Up</h2>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <button onClick={onSubmit}>Submit</button>
            
        </Row>
      </div>
    );
}

