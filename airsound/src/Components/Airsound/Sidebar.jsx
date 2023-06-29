import { useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import * as IconRi from "react-icons/ri";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const username= useSelector((state)=> state.user.username);

  return (
    <>
      {click ? (
        <div
        className="ps-0 ms-0 sidebar  slide2 "
        
        >
          <Card className="bg-secondary text-light">
            <Row >
              <Col xs="10" className=" bg-dark">
                <Row className="d-flex  flex-column">
                  <Col className="pt-2 d-none  animationvisibility" id="animated">
                    <Image
                      src="https://solarbetsg.com/wp-content/uploads/2021/02/male1-768x767.jpg"
                      style={{ width: "100px" }}
                      roundedCircle
                    />
                    <p className="pt-2 mb-0">Benvenuto: {username}</p>
                    <hr className=" pt-0 mt-0 w-100"></hr>
                  </Col>

                 <div className="text-start animationvisibility3">

                  <Col className="pb-2">
                  
                  <div className="d-flex align-items-end div-effect" >
                    <IconRi.RiHome5Fill className="MyColor-Green" /> <span className="MyFont-text">Home</span>
                  </div> 
                  
                  </Col>

                  <Col className="pb-2">
                  
                  <div className="d-flex align-items-end div-effect" >
                    <IconRi.RiHeart2Fill className="MyColor-Green" /> <span className="MyFont-text">Preferiti</span>
                  </div> 
                  
                  </Col>

                  <Col>
                    <hr className="pb-0 mb-0 w-100" ></hr>
                  <div className="d-flex align-items-end div-effect" >
                    <IconRi.RiSettings5Fill className="MyColor-Green effect-setting" /> <span className="MyFont-text">Settings</span>
                  </div> 
                  
                  </Col>

                  </div>  

                </Row>
              </Col>

              <Col xs="2">
                <Card.Body className="d-flex flex-column  align-items-center btn btn-dark">
                  <div className="box" onClick={() => {
          setClick(false);
        }}>
                    <IconRi.RiHome2Fill className="icon" />
                    <IconRi.RiArrowLeftCircleFill className="icon" />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      ) : (
        <div 
        className="ps-0 ms-0 sidebar slide1 "
        
          onClick={() => {
            setClick(true);
            setTimeout(() => {
              const item = document.getElementById("animated");
              item.classList.toggle("d-none")
              

            }, 1000);
          }}
        >
          <Card >

          <Row  >
              <Col xs="10" className=" bg-dark ">
                <Row className="d-flex d-none flex-column " id="animated">
                  <Col className="p-2 animationvisibility2 ">
                    <Image
                      src="https://solarbetsg.com/wp-content/uploads/2021/02/male1-768x767.jpg"
                      style={{ width: "100px" }}
                      roundedCircle
                    />
                    <hr className="text-light w-100"></hr>
                  </Col>

                  <Col></Col>
                </Row>
              </Col>

              <Col xs="2">
            <Card.Body className="d-flex flex-column  align-items-center btn btn-dark">
              <div className="box">
                <IconRi.RiHome2Fill className="icon" />
                <IconRi.RiArrowRightCircleFill className=" icon" />
              </div>
            </Card.Body>
            </Col>
            </Row>


          </Card>
        </div>
      )}
    </>
  );
};

export default Sidebar;
