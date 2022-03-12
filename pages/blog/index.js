import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import BlogCard from "../../components/BlogCard";
import { createClient } from 'contentful'
import Filteritem from "../../components/Filteritem";
import { Row } from "react-bootstrap";
import Navbar from "../../components/Navbars/Navbars";
import Footer from "../../components/Footers/Footers";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "blog" })

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1
  }
}

export default function Blog({ blogs }) {
  const [viewBlog, ViewBlog] = useState(6)
  const [viewMore, setViewMore] = useState(true)

  let SliceBlogs;
  SliceBlogs = blogs.slice(0, viewBlog)


  return (

    <div className="mx-auto">
      <Navbar />


      <Filteritem />
      <div className="container">
        <Row className="mx-auto mt-3">
          {SliceBlogs.map(blog => {
            return <BlogCard key={blog.sys.id} blog={blog} />
          })}
          {
            viewMore && <p className='text-primary view_more_blog_btn text-center' onClick={() => {
              ViewBlog(viewBlog + 6)

            }}>View More</p>
          }

        </Row>
      </div>
      <Footer />
    </div>

  );
}
