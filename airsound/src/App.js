import { Provider, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import store from './Redux/Store/store';
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




function App() {

  const is_select=useSelector((state)=>state.Album.isSelect)

  return (
   
    <BrowserRouter>
    
    <div className="App">
   
    <Routes>

<Route path='/' element={
  <>
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
