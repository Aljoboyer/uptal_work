import { Row, Col} from "react-bootstrap";

export default function HomeHeader() {
    return (
        <Row className="Header_Row flex-md-row  flex-lg-row justify-content-xl-between justify-content-lg-between justify-content-md-between flex-md-wrap flex-lg-wrap">
          <Col className="d-flex justify-content-sm-center" lg={3} md={3} sm={12}>
              <img
        src="/my-img.png"
        alt="Picture of the author"
        className="home_logo"
      />
          </Col>
          <Col className="d-flex justify-content-sm-center mt-3" lg={3} md={3} sm={12} >
            <div > <span className="Header_Btn Header_Btn1">Login</span> </div>
            <div > <span className="Header_Btn Header_Btn2">Signup</span> </div>
          </Col>
        </Row>
    
    );
  }
