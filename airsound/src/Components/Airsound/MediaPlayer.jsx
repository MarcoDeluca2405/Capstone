import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from 'react-icons/ai'
import { is_select, select_track } from '../../Redux/Action/actionAlbum'
import { createRef } from 'react';
 
const MediaPlayer=()=> {

    const music =document.querySelectorAll("audio");
  
    const track=useSelector((state)=>state.Album.selectTrack)
    const cover=useSelector((state)=>state.Album.albumSelect2.cover_small)

    const dispatch=useDispatch();

    const HandlerClick=()=>{
        dispatch(is_select(false))
        dispatch(select_track(""))
    }
    var i=0;
    
    console.log(typeof(track?.preview))
    
    const checkTipe=(track)=>{
        if(typeof(track.preview)==="object"){
            console.log("array",track[i]?.preview)
            return track[i]?.preview
        }else{
            console.log("single",track?.preview)
            return track?.preview
        }
    }

    var currentTrack= checkTipe(track);
    
    const HandlerNext=()=>{
        if(i!==track.length){
            currentTrack=track[++i]?.preview
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


