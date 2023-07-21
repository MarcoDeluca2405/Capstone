# Capstone

Progetto che riguarda la mia passione per la musica, ho relizzato questo WebAPP streaming musicale chiamata Airsound con l'ambiente di sviluppo visual Code per la parte front-end e per la parte back-end ho usato eclipse entreprise mentre per la gestione del database ho usato postegres.
per la parte-back end ho sfruttato il framework di spring boot con le varie dipendenze per installarle basta avviarlo:
- lombok
- jwt
- spring_security
- postegresql
- thymeleaf
- spring_start_web
- commons_io
- commons_csv
- opnecsv
- spring-tx
- javafaker

per la parte front-end ho usato il framework di react e css con le sue dipedenze. Per installarle digitate "npm install":
"@fortawesome/fontawesome-free": "^6.4.0",
    "@reduxjs/toolkit": "^1.9.5",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.3.0",
    "mdb-react-ui-kit": "^6.1.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-h5-audio-player": "^3.8.6",
    "react-icons": "^4.10.1",
    "react-player": "^2.12.0",
    "react-redux": "^8.1.1",
    "react-router-dom": "^6.14.1",
    "react-scripts": "5.0.1",
    "react-spotify-web-playback": "^0.14.0",
    "react-toastify": "^9.1.3",
    "redux": "^4.2.1",
    "redux-persist": "^6.0.0",
    "web-vitals": "^2.1.4"

La pagina è coposta con un intro iniziale, alla fine della intro si ha la pagina di login con la possibilità di registrarsi. Entrambi faranno una chiamata AJAX verso il mio server.
una volta fatto il login comparirà un toasts (ci dirà se le credenziali sono corrette o meno) si aprirà la pagina Home. La pagina è composta con un HeroSection con un immagine, titolo e una descrizone del autore.
una nav bar composta da un logo e un widget animato quando ci passeremo sopra con il mouse uscirà sulla sua sinistra una card con dettagli più approfonditi  del meteo. Il collegamento avviene tramite una richiesta AJAX di openweathermap.
un sidebar con varie funzionalità, immagine del profilo che può essere modificato è salvato diretamente nel server, un link per la home, una per i brani preferiti, una per il settaggio (sarà animato) del profilo e uno per fare il Logout.
al centro abbiamo le varie tipologie "i più popolari, i più recenti e molti altri" che saranno caricati da una chiamta AJAX di strivetoschool/denzer, passandoci sopra al'artista esso sarà animato con un effetto 3D.
al di sopra della section abbiamo una searchbar per ricercare i nostri brani o artisti.


una volta selezionato un artista esso ci porterà nella sua pagina e sarà composto da i suoi album. esse saranno animate quando ci passeremò sopra con il mouse.

una volta che abbiamo selezionato uno degli album, veremo portarti nella pagina track. esso è composta da tutte le tracce di quel album. avremmo: la posizione, l'immagine della cover, titolo, like e il rank.

si ha la possibilità di selezionare il brano preferito tramite l'apposita icona del cuore, quando verra cliccato cambierà e si riempirà. esso sarà salvato nel store persist.

una volta premuto sul brano comparirà un media player.

MediaPlayer è coposto dal titolo del brano, la cover, la durata, dei pulsanti per andare avanti e indietro di 10s, in loop , il tasto del volume e infine un tasto a forma di croce per chiudere il player.

tra la section e la lista abbiamo un tasto di "Ascolta tutto l'album" questo ci permetterà di ascoltare in modo sequenziale tutta la lista di quel album.

nella searchBar una volta cercato un brano/artista esso ci restituirà una lista di track ma abbiamo la possibilità di cliccare sopra al nome del artista (esso ci porterà nella pagina di quel artista) o sull'immagine della cover (esso ci porterà diretamente nel album di quella cover).Invece se dovessimo cancellare la nostra ricerca, questo ci riporterà alla pagina antecedènte.

nella pagina preferiti avremmo tutte i nostri brani salvati che possiamo ascoltare in qualisasi momento. si ha anche la possibilità di rimuovere quel branno dalla nostra lista dei preferiti.

nella pagina di settings è composta da un form già compilato dei nostri dati ma che esso possono essere modificati solo alcune delle seguenti input "email-password e residenza". una volta premuto su "modifica".
Comparirà un modale che ci avverità di essere veramente sicuri di modificare i dati sensibili. una volta confermato comparrià un toasts che ci confermerà o meno del avvenutà modifica dal nostro database

nel Footer abbiamo la possibilità di andare sulle mie pagine social : 
facebook, instagram, linkedin e gitHub.

seguitemi per aggiornamenti su nuovi progetti  😉😎👻🦾👀
