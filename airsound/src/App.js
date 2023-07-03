import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import store from './Redux/Store/store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Homepage from './Components/Airsound/Homepage';
import PageLogin from './Components/Login/PageLogin';
import PageRegister from './Components/Register/RegisterPage';
import AlbumPage from './Components/Airsound/AlbumPage';
import TracksPage from './Components/Airsound/TracksPage';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
    <Routes>
   

<Route path='/' element={
  <PageLogin />
}></Route>

<Route path='/Sing-up' element={
  <PageRegister />
}></Route>

<Route path='/Home' element={
  <Homepage />
}></Route>

<Route path='/albumPage' element={
  <AlbumPage />
} />

<Route path='/TracksPage' element={
<TracksPage />
} />


      
    </Routes>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>