import { Row ,div, Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbartwo from '../../components/Navbars/Navbartwo';
import { IoIosArrowForward } from 'react-icons/io';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Hire() {

  return (
    <div className="hire_page" style={{width:"100%",  backgrounddivor: "#f4f4f6"}}>
        <Row className="mx-auto">
        <Navbartwo/>
          <div className="">
              <h2 className="hire_title">Hire Uptal Developers</h2>
              <form className="nosubmit">
                  <input className="nosubmit" type="search" placeholder="Search skills, roles...."/>
              </form>
          </div>

         <div className="technology_section">
         <p className="based_text">Based on Skills</p>
           <Row className="container ms-2 mt-4">
              <div className="technology_div">
              <div className="technology_colam">
                    <img
                        src="/React-svg.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">React.js</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Node_js.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">Node.js</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Python_.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Python.js</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/AWS.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">AWS</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Javascript.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Javascript</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/react_native.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">React Native</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Postgre_SQL.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">PostgreSQL</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Ruby_on_Rails.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">Ruby On Rails</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Java_developers.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Java</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Angular.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />  
                    <p className="technology_text">Angular</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div><div className="technology_colam">
                    <img
                        src="/Golang.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Golang</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/PHP.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">PHP</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/ML_engineers.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Machine Le..</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Android.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">Android</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Django_developers.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Django</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Laravel.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Laravel</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
              </div>
           </Row>
         </div>

         <div className="technology_section_mobile">
               <p className="based_text">Based on Skills</p>
                <div className="technology_div">
              <div className="technology_colam">
                    <img
                        src="/React-svg.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">React.js</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Node_js.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">Node.js</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Python_.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Python.js</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/AWS.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">AWS</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Javascript.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Javascript</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/react_native.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">React Native</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Postgre_SQL.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">PostgreSQL</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Ruby_on_Rails.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">Ruby On Rails</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Java_developers.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Java</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Angular.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />  
                    <p className="technology_text">Angular</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div><div className="technology_colam">
                    <img
                        src="/Golang.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Golang</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/PHP.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">PHP</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/ML_engineers.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Machine Le..</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Android.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    />
                    <p className="technology_text">Android</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Django_developers.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Django</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
                  <div className="technology_colam">
                    <img
                        src="/Laravel.svg"
                        alt="Picture of the author"
                        className="hire_tech_img"
                    /> 
                    <p className="technology_text">Laravel</p>
                    <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                  </div>
              </div>
         </div>
        </Row>
    </div>
  );
}
