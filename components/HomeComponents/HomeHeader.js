import { Row, Col} from "react-bootstrap";
import { useRouter } from "next/router";

export default function HomeHeader() {

  const router = useRouter()
  const ClickHandler = () => {
      router.push('/blog')
  }
    return (
        <Row className="Header_Row  flex-md-row flex-sm-row  flex-lg-row justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between ">
          <Col className="text-center" lg={3} md={3} sm={4} xs={12}>
              <img
        src="/my-img.png"
        alt="Picture of the author"
        className="home_logo"
      />
          </Col>
          <Col className="mt-3" lg={3} md={3} sm={4} xs={12}>
              <p onClick={ClickHandler} className="home_blog_btn Header_Btn1">BLOG</p>  
          </Col>
        </Row>
    
    );
  }
