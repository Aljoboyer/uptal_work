import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import { useRouter } from "next/router";
import Link from "next/link";

export default function Sitemap() {
    const router = useRouter()
    const SitemapHandler = (routes) => {
        router.push(`/sitemap/${routes}`)
    }
    const SingleSitemapHandler  = (routes) => {
        router.push(`/${routes}`)
    }
  return (
<div style={{width: "100%"}}>
 
    <Navbartwo/>
      <div className="mx-auto sitemap_main_div" >
        <Row className="container-fluid mx-auto">
                <h2 className="sitemap_title">Uptal Sitemap</h2>
                <Col className="site_mapcolam" lg={4} md={4} sm={12}>
                    <a className="sitemap_home">Home</a>
                    <div className="sitemap_div">
                        <Link href='/hire-developers'><a className="sitemap_colamtitle">Hire Remote</a></Link> 

                        <Link href='/sitemap/hire-developers'><a className="sitemap_linktext">Hire skill-based developers</a></Link>                 
                        <a className="sitemap_linktext">Hire location-based developers</a>

                        <Link href='/sitemap/interview-questions'><a className="sitemap_linktext">Interview Q/A</a></Link> 

                        <a className="sitemap_linktext">Job description templates</a>
                        <a className="sitemap_linktext">Development services</a>
                        <a className="sitemap_linktext">Customer signup</a>
                        <a className="sitemap_linktext">How to hire</a>
                    </div>
                    <div className="sitemap_div">
                        <Link href='/apply-for-job'><a className="sitemap_colamtitle">Apply for Jobs</a></Link>
                        <Link href='/sitemap/jobs'><a className="sitemap_linktext">Skill-based jobs</a></Link>             
                        <a className="sitemap_linktext">Month-wise top software jobs</a>
                        <a className="sitemap_linktext">Latest remote developer jobs</a>
                        <Link href='/sitemap/resume'><a className="sitemap_linktext">Resume guides</a></Link> 
                        <a className="sitemap_linktext">Developer signup</a>
                        <a className="sitemap_linktext">Jobs for LatAm developers</a>
                    </div>
                </Col>
                <Col lg={8} md={8} sm={12}>
                    <Row className="">
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_rightcolam_div">
                            <a className="sitemap_colamtitle">Uptal Reviews</a> 
                            <a className="sitemap_linktext">Customer reviews</a>
                            <a className="sitemap_linktext">Developer reviews</a>
                            <a className="sitemap_linktext">Developer stories</a>
                            </div>               
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div className="sitemap_rightcolam_div">
                            <a className="sitemap_colamtitle">Support</a> 
                            <a className="sitemap_linktext">Contact us</a>
                            <a className="sitemap_linktext">Developer support</a>
                            <a className="sitemap_linktext">Customer support</a>
                          </div> 
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_rightcolam_div">
                            <a className="sitemap_colamtitle">Company</a> 
                            <Link href='/sitemap/blog'><a className="sitemap_linktext">Blog</a></Link> 
                            <a className="sitemap_linktext">Press</a>
                            <a className="sitemap_linktext">About us</a>
                            <a className="sitemap_linktext">Privacy policy</a>
                            <a className="sitemap_linktext">Terms of service</a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_rightcolam_div">
                            <a className="sitemap_colamtitle">Social Media</a> 
                            <a className="sitemap_linktext">Twitter</a>
                            <a className="sitemap_linktext">LinkedIn</a>
                            <a className="sitemap_linktext">Facebook</a>
                            <a className="sitemap_linktext">Instagram</a>
                            <a className="sitemap_linktext">Youtube</a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_career_div">
                                <a className="sitemap_colamtitle">Careers</a> 
                                <a className="sitemap_linktext">Non-developer jobs</a>
                            </div>
                        </Col>
                    </Row>
                </Col>
        </Row>
      </div>
    <MainFooter/>
   
</div>
  );
}
