import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Homepage from './Components/Airsound/Homepage';
import PageLogin from './Components/Login/PageLogin';
import PageRegister from './Components/Register/RegisterPage';
import AlbumPage from './Components/Airsound/AlbumPage';
import TracksPage from './Components/Airsound/TracksPage';
import MediaPlayer from './Components/Airsound/MediaPlayer';
import Footer from './Components/Airsound/Footer';
import SideBarUpInizial from './Components/Airsound/SidebarUp/Login/SideBarUpInizial';
import PreferitoPage from './Components/Airsound/PreferitoPage';
import PageSearch from './Components/Airsound/PageSearch';
import SettingPage from './Components/Airsound/SettingPage';

import myIntro from './Components/media/intro.mp4'
import { useEffect, useState } from 'react';


function App() {

  
  const is_select=useSelector((state)=>state.Album.isSelect)
  var [isEnd,setIsEnd] =useState(false);


  var hideTimeout; 
  var isScrolling = false; 



  function showScrollbar() {
    document.documentElement.style.overflowY = "scroll";
    document.documentElement.style.overflowX="hidden";
  }

  
  function hideScrollbar() {
    document.documentElement.style.overflowY = "hidden";
  }

  
  function startHideTimer() {
    document.documentElement.style.overflowX="hidden";
    hideTimeout = setTimeout(function() {
      hideScrollbar();
      isScrolling = false;
    }, 1000); 
  }


  function handleScroll() {
    if (!isScrolling) {
      isScrolling = true;
      showScrollbar();
    }

    clearTimeout(hideTimeout);
    startHideTimer();
  }


  function handleWheel() {
    if (!isScrolling) {
      showScrollbar();
      clearTimeout(hideTimeout);
      startHideTimer();
    }
  }

 
  document.addEventListener("scroll", handleScroll);


  document.addEventListener("wheel", handleWheel);

  
  startHideTimer();



  useEffect(() => {
    const videoElement = document.getElementById("intro");
  
    const intervalId=  setTimeout(()=>{ videoElement.play();videoElement.muted=false;setTimeout(intervalId)},1300);


    if (videoElement) {
      const playVideo = () => {
      
      // Aggiungi un event listener per avviare la riproduzione quando l'utente interagisce con l'elemento interattivo
      videoElement.addEventListener("canplay", playVideo);
      }
      return () => {
        // Rimuovi l'event listener durante lo smontaggio del componente
        videoElement.removeEventListener("canplay", playVideo);
        clearTimeout(intervalId)
        
      };
    }
  },[]);


  return (
   
    <BrowserRouter>
    
    <div className="App">
   
    <Routes>

<Route path='/' element={
  <>

{isEnd===true ? (<></>) : (
  <video id="intro" onEnded={(e)=>{e.currentTarget.style.display="none";setIsEnd(true)}} autoPlay muted> 
  <source src={myIntro} type="video/mp4"/>
  </video>  

)}
 


  <SideBarUpInizial />
  <PageLogin />
  </>
}></Route>

<Route path='/Sing-up' element={
  <>
  <SideBarUpInizial />
  <PageRegister />
 
  </>
}></Route>

<Route path='/Home' element={
  <Homepage />
}></Route>

<Route path='/albumPage' element={
  <AlbumPage />
} />

<Route path='/TracksPage' element={
  <>
<TracksPage />
  </>
} />

<Route path='/Fav' element={
  <PreferitoPage />
} />

<Route path="pageSearch" element={
  <PageSearch />
} />

<Route path="/setting" element={
<SettingPage />
} />

    </Routes>


      {
        is_select ? (<><MediaPlayer /></>) : (<></>)
      }



    <Footer className="myFooter"/> 
    </div>

    </BrowserRouter>
      
  );
}

export default App;
<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>;
<script src="https://unpkg.com/react-media-player/dist/react-media-player.js"></script>;
