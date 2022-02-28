import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import Footer from '../../components/Footers/Footers'
import Link from 'next/link';
import RecentBlogCard from "../../components/RecentBlogCard";
import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "blog" })

  const  TodayDate = new Date();
  const today = TodayDate.setDate(TodayDate.getDate() - 30);
  const todaymonth = new Date(today).toLocaleString('default', { month: 'long' });
  const todaydates = new Date(today).getDate();
  const todayyears = new Date(today).getFullYear();

  const thisday = `${todaymonth} ${todaydates}, ${todayyears}`
  const emptyarr = []
  for(const blog of res.items){
    const month = new Date(blog.fields.date).toLocaleString('default', { month: 'long' });
    const dates = new Date(blog.fields.date).getDate();
    const years = new Date(blog.fields.date).getFullYear();

    if( `${month} ${dates}, ${years}` < thisday) {
      emptyarr.push(blog)
  } else {
      console.log("Second date is more recent");
  }

  }
  const filterBlogs = emptyarr.slice(0, 4)

  return {
    props: {
      blogs: filterBlogs,
    },
    revalidate: 1
  }
}

export default function About({blogs}) {
  return (
<div style={{width: "100%"}}>
    <Row className="mx-auto">
    <Navbartwo/>
        <div>
          <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-sm-start justify-content-xs-start  mx-auto employe_banner_section mt-4 gy-3">
                  <Col className="" lg={6} md={6} sm={10}>
                    <p className="employe_title">Our mission is to unleash the world's untapped human potential</p>
                    <p className="employe_text fs-5 pt-3">Who we are, what we do, how we do it, and everything else about us.</p>
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

        <div>
          <div className="faq_section">
    `       <Row className="container-xxl container-xl container-lg container-md  container-sm container-xs mx-auto faq_row justify-content-lg-evenly">
              <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
                <p className="faq_title">About The Company</p>
              </Col>
              <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
                  <div className="fa_question">
                    <p className="faq_point_title">What is Uptal?</p>
                    <p className="faq_text">
We are a data-science-driven deep jobs platform helping companies spin up their engineering teams in the cloud at the push of a button. Based in Palo Alto, California, we are a fully remote company of 600+ people who help connect world-class remote software engineers with world-class companies.</p>
                  </div>
                  <hr />
                  <div className="fa_question">
                    <p className="faq_point_title">What does Uptal do?</p>
                    <p className="faq_text">We make the remote hiring journey easy and rewarding for both companies and developers. With Turing, companies can hire pre-vetted, Silicon Valley-caliber remote software talent across 100+ skills in 3-5 days. We also democratize opportunities for remote developers from around the world by offering them high-quality software jobs with top US firms.</p>
                  </div>
                  <hr />
                  <div className="fa_question">
                    <p className="faq_point_title">How does Uptal work?</p>
                    <p className="faq_text">
Our Intelligent Talent Cloud uses AI to source, vet, match, and manage over a million developers worldwide. This, in turn, helps organizations save valuable time and resources as they build their dream engineering team in a matter of days.</p>
                  </div>
              </Col>
            </Row>
          </div>

          <div className="glance_section">
              <h1 className="glance_title text-center">Uptal at a glance</h1>
  `       <Row className="container glance_row mx-auto">
              <div className="mx-auto remote_company_div"><h1 className="">100% remote company</h1></div>
              <div className="glance_div">
                  <div className="glance_colam ">
                      <h1>1 million+</h1>
                      <p>DevelopersDevelopers</p>
                  </div>
                  <div className="glance_colam">
                      <h1>150+</h1>
                      <p>Countries represented</p>
                  </div>
                  <div className="glance_colam">
                      <h1>200+</h1>
                      <p>Customers</p>
                  </div>
                  <div className="glance_colam">
                      <h1>100+</h1>
                      <p>Skills available</p>
                  </div>
                  <div className="Palo_Alto_colam">
                      <h1>75%</h1>
                      <p>Of customers get developers <br /> under 3-5 days</p>
                  </div>
                  <div className="Palo_Alto_colam">
                      <h1>Palo Alto</h1>
                      <p>Headquarters</p>
                  </div>
              </div>
          </Row>
          </div>

          <div className="leadership_section">
            <h2 className="pb-4 text-center">Meet our leadership</h2>
              <Row className="container mx-auto pt-4">
                <div className="leadership_div">
                  <div className="leadership_colam">
                      <img
                      src="/member_one.png"
                      alt="Picture of the author"
                      className="leader_img"
                    />
                    <p className="leader_name">Eric Kolovson</p>
                    <p className="leader_text">Chief Executive Officer </p>
                    <p className="leader_text_small">Prior: CEO, Rover (acquired)</p>
                    <a className="leader_anchor">View bio</a>
                  </div>
                  <div className="leadership_colam">
                  <img
                      src="/member_two.png"
                      alt="Picture of the author"
                      className="leader_img"
                    />
                    <p className="leader_name">Jonathan Siddharth</p>
                    <p className="leader_small_two"><small>VP of People Ops & Business Development</small></p>
                    <a className="leader_anchor">View bio</a>
                  </div>
                </div>
              </Row>
          </div>

          <div className='blog_section'>
            
            <Row className="container-fluid mx-auto mt-3">
            <h2 className="pb-4 mb-4 text-center">Recent Blogs</h2>
                  {blogs.map(blog => {
                return <RecentBlogCard key={blog.sys.id} blog={blog} />
                  })}
              </Row>
            </div>
        </div>
    <Footer/>
    </Row>
</div>
  );
}
