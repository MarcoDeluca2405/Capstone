import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from 'react-icons/ai'
import { is_select } from '../../Redux/Action/actionAlbum'
import { createRef } from 'react';
 
const MediaPlayer=()=> {

    const music =document.querySelectorAll("audio");
  
    const track=useSelector((state)=>state.Album.selectTrack)
    const cover=useSelector((state)=>state.Album.albumSelect2.cover_small)

    const dispatch=useDispatch();

    const HandlerClick=()=>{
        dispatch(is_select(false))
    }

    const tracks=[track.preview,"https://cdns-preview-5.dzcdn.net/stream/c-5ab7293f3dd967191594572f52bfd55e-9.mp3"]
    var i=0;
    var currentTrack=tracks[i];
  
    const HandlerNext=()=>{
        if(i!==tracks.length){
            currentTrack=tracks[++i]
            music.forEach(e=> e.setAttribute("src",currentTrack))

        }else{
            i=0;
        }
    }
  

    return (
        <Container className='bg-dark justify-content-center myMediaPlayer'>
            <Row>
                <div className=''>
                    <h4 className='text-light'>{track.title} <Icon.AiFillCloseCircle size={25} cursor={"pointer"} className='text-secondary iconClose' onClick={()=>HandlerClick()}/> </h4>

                </div>

                <Col xs={2}>
                <img src={cover} style={{width:"80px"}} alt="picture" />
                </Col>
                <Col xs={10}>
               
                <AudioPlayer src={currentTrack}  className="mediaPlayer" id="mediaPlayer"  autoPlayAfterSrcChange="true" autoPlay volume={0.4} onEnded={()=>{
                    console.log(currentTrack)
                HandlerNext()
                    console.log(currentTrack)}}/>

                </Col>
            </Row>
        </Container>

    )
  }

  export default MediaPlayer


