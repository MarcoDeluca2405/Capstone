import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './Redux/Store/store';
import media from './Components/media/laser_-_121651 (Original).mp4'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
    <video id="background-video" autoPlay={true} muted>
        <source src={media} type='video/mp4'></source>
    </video>
    

    <App/>

    </PersistGate>

</Provider>
 
);


