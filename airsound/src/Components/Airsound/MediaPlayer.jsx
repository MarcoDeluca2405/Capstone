import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
 
const MediaPlayer=()=> {
  
    return (
        <Container className='bg-dark justify-content-center myMediaPlayer'>
            <Row>
                    <h4 className='text-light'>hdfjkashfkjhaskljf</h4>
                <Col xs={2}>
                <img src='https://e-cdns-images.dzcdn.net/images/cover/ea30377840f4ef9ac62406c5e16e9c4b/250x250-000000-80-0-0.jpg' style={{width:"80px"}} alt="picture" />
                </Col>
                <Col xs={10}>
               

            <ReactPlayer url="https://cdns-preview-2.dzcdn.net/stream/c-262f0a68a0a8659a85a94414cc5a2789-10.mp3"  height='90%' width='100%' controls/>

                </Col>
            </Row>
        </Container>

    )
  }

  export default MediaPlayer


