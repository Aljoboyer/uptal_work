import { Row ,Col, FloatingLabel,Form} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import Link from 'next/link'
import Footer from "../../components/Footers/Footers";

export default function Contact() {
  return (
<div style={{width: "100%"}}>
    <Row className="mx-auto">
    <Navbartwo/>
    <div className="contact_header_section">
        <Row className="container-fluid mx-auto d-flex justify-content-center contact_header_row text-center align-items-center">
            <Col lg={8} md={12} sm={12}>
                <h1 className="contact_title">Get in touch</h1>
                <p className="contact_header_text">Fill out the form below and a Toptal representative will contact you as soon as possible. <br /> For immediate assistance, please call our sales line or email our customer support.</p>
            </Col>
        </Row>
    </div>
    <div className="contact_form_section">
      <Row className="container mx-auto justify-content-between">
        <Col lg={9} md={8} sm={12}>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-4 contact_inputs"
            >
            <Form.Control type="email" placeholder="Full Name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-4"
            >
            <Form.Control type="text" placeholder="Email" />
            </FloatingLabel>
            
            <Form.Select style={{ height: '60px' }} className="mb-4 contact_inputs" aria-label="Floating label select example">
              <option className="mb-2">General question</option>
              <option value="1">Sales inquires</option>
              <option value="2">Help/Support</option>
              <option value="3">Press</option>
              <option value="3">Other</option>
            </Form.Select>

            <FloatingLabel controlId="floatingTextarea2" label="I would Like to know about..">
            <Form.Control
              as="textarea"
              placeholder="I would Like to know about.."
              style={{ height: '400px' }}
            />
            </FloatingLabel>
          </Form>
          <Row className="mt-3 mb-4 justify-content-end">
              <Col lg={6} md={6} sm={6}>
              <button className="contact_send_btn">Send Message</button>
              </Col>
          </Row>
        </Col>
        <Col lg={3} md={4} sm={12}>
          <Row>
            <Col lg={12} md={12} sm={6} xs={12}>
              <p className="fw-bold">Sales Inquiries</p>
              <p className="mb-3 text-primary" >+1.888.867.7001</p>

              <p className="fw-bold">Customer support</p>
              <p className="mb-3 text-primary">support@toptal.com</p>

              <p className="fw-bold">Press</p>
              <p className="mb-3 text-primary">press@toptal.com</p>

              <p className="fw-bold">Partnerships</p>
              <p className="mb-3 text-primary">partners@toptal.com</p>

              <p className="fw-bold">Investors</p>
              <p className="mb-3 text-primary">investors@toptal.com</p>
            </Col>
            <Col lg={12} md={12} sm={6} xs={12}>
              <p className="fw-bold mb-3">Delaware Mailing Address</p>
              <p>Toptal, LLC</p>
              <p>2810 N. Church St #36879</p>
              <p>Wilmington, DE 19802-4447</p>

              <p className="fw-bold mb-3">San Francisco Mailing Address</p>
              <p>Toptal, LLC</p>
              <p>548 Market St #36879</p>
              <p>San Francisco, CA 94104</p>

              <p className="fw-bold mb-3">New York Mailing Address</p>
              <p>Toptal, LLC</p>
              <p>228 Park Ave S #36879</p>
              <p>New York, NY 10003</p>
        
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <Footer/>
    </Row>
</div>
  );
}
