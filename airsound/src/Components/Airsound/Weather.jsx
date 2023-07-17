import { Card, CardImg, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import temp_min from "../../img/temp_min.png"
import temp_max from "../../img/temp_max.png"
import pressione from "../../img/pressione.png"
import umidità from "../../img/umidità.png"
import speed from "../../img/speed.png"
import deg from "../../img/deg.png"
import { meteoNEWS } from "../../Redux/Action/action"
import { useEffect } from "react"


const Weather = ()=>{

  
  const weather=useSelector((state)=>state.user.meteo)

  

    return(

        <Container fluid className="d-flex justify-content-end p-0 me-0" >
         
            <div className="event">

            <Card border="secondary"  className="mainCard ">
      <Row className="h-100 w-100">
        <Col className="h-100 col-7">
        <Container className="h-100">
      <Card.Img  style={{height:"100%",width:"55%"}}  src={" https://openweathermap.org/img/wn/"+weather.weather[0].icon+".png"}></Card.Img>

        </Container>
        
        </Col>

        <Col className="h-100">

        <Card.Body className="h-100"><span className="spanWehater">{weather.main.temp}°C</span><p className="spanWehater" style={{fontSize:"12px"}}>{weather.name}</p></Card.Body>
        

        </Col>

      </Row>


    </Card> 



    <Card className="cardStatus">
    <Card className="cardHealth">
      <Card.Body>healt</Card.Body>
    </Card>
      <Card.Body>
        
        <Row style={{fontSize:"10px"}}>

        <Col>

        <Row className="h-25" style={{position:"relative", bottom:"15px"}}>
        <span><img style={{width:"20px"}} src={temp_min}/> </span>
        <p>{weather.main.temp_min} °C</p>
        </Row>

        <Row className="h-25" style={{position:"relative", bottom:"7px"}}>
        <span><img style={{width:"20px"}} src={temp_max}/></span>
        <p>{weather.main.temp_max} °C</p>
        </Row>

        </Col>

        <Col>

        <Row className="h-25" style={{position:"relative", bottom:"15px"}}>
        <span><img style={{width:"20px"}} src={pressione}/> </span>
        <p>{weather.main.pressure} bar</p>
        </Row>

        <Row className="h-25" style={{position:"relative", bottom:"7px"}}>
        <span><img style={{width:"20px"}} src={umidità}/></span>
        <p>{weather.main.humidity} %</p>
        </Row>

        </Col>

        <Col>

        <Row className="h-25" style={{position:"relative", bottom:"15px"}}>
        <span><img style={{width:"20px"}} src={speed}/> </span>
        <p>{weather.wind.speed} Km/h</p>
        </Row>

        <Row className="h-25" style={{position:"relative", bottom:"7px"}}>
        <span><img style={{width:"20px"}} src={deg}/></span>
        <p>{weather.wind.deg} °deg</p>
        </Row>

        </Col>


    

        


        </Row>
      

      </Card.Body>
    </Card>

    
      </div>
          
    
        </Container>

    )
}

export default Weather