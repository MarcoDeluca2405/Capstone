import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from 'react-icons/ai'
import { is_select, next_title, select_track } from '../../Redux/Action/actionAlbum'
import { createRef, useEffect, useState } from 'react';
import { persistor } from '../../Redux/Store/store';
import { add_text } from '../../Redux/Action/action';
 
const MediaPlayer=()=> {


    
    const music =document.querySelectorAll("audio");
    

    const track=useSelector((state)=>state.Album.selectTrack)
    const cover=useSelector((state)=>state.Album.selectTrack.cover)

    var [title, setTitle] = useState("");
    const [currentTrack, setCurrentTrack] = useState(null);

    const dispatch=useDispatch();

    const HandlerClick=()=>{
        dispatch(is_select(false))
        dispatch(select_track(""))
    }

    
    useEffect(() => {
        const currentTrack = checkTipe(track);
        setCurrentTrack(currentTrack);
        setTitle(currentTrack?.title);
        console.log("sono currentTrack:", currentTrack?.title);
      }, [track]);

    window.addEventListener("unload",()=>{HandlerClick();dispatch(add_text(""))})
    
    
    const checkTipe = (track) => {
        console.log(track.track);
        const i = 0;
        let currentTrack = null; 
        if (track && Array.isArray(track.track)) {
          console.log("array", track);
          setTitle(track.track[i]?.title);
          currentTrack = track.track[i];
          return currentTrack;
        } else if (track && track.track) {
          console.log("single", track.track.preview);
          setTitle(track.track?.title);
          currentTrack = track.track;
          return currentTrack;
        }
        return currentTrack; 
      };



var i=0;




const HandlerNext = () => {
    if (currentTrack && Array.isArray(track.track)) {
      const currentIndex = track.track.indexOf(currentTrack);
      if (currentIndex < track.track.length - 1) {
        const nextTrack = track.track[currentIndex + 1];
        setCurrentTrack(nextTrack);
        setTitle(nextTrack?.title);
        console.log(nextTrack);
        music.forEach((e) => e.setAttribute("src", nextTrack.preview));
      }
    } else {
      console.log("sono qui dentro 0");
    }
  };
    
    
  

    
    return (
        <Container className='bg-dark justify-content-center myMediaPlayer'>
            <Row>
                <div className=''>
                    <h4 className='text-light' id="Mytitle"><span style={{position:"relative",left:"100px"}}>{currentTrack && currentTrack.title}</span><Icon.AiFillCloseCircle size={25} cursor={"pointer"} className='text-secondary iconClose' onClick={()=>HandlerClick()}/> </h4>

                </div>

                <Col xs={2}>
                <img src={cover} style={{width:"80px"}} alt="picture" />
                </Col>
                <Col xs={10}>
               
                <AudioPlayer src={currentTrack && currentTrack.preview} className="mediaPlayer" id="mediaPlayer"  autoPlayAfterSrcChange="true" autoPlay volume={0.0} onEnded={HandlerNext} />
                </Col>
            </Row>
        </Container>

)

}


  export default MediaPlayer


