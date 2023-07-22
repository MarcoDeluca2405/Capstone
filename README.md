# Capstone

Progetto che riguarda la mia passione per la musica, ho realizzato questo WebAPP streaming musicale chiamato Airsound con l'ambiente di sviluppo visual Code, per la parte front-end e per la parte back-end ho usato eclipse entreprise mentre per la gestione del database ho usato postegres.
per la parte-back end ho sfruttato il framework di spring boot con le varie dipendenze, per installarle basta avviarlo:
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

La pagina è composta con un intro iniziale, alla fine della intro si ha la pagina di login con la possibilità di registrarsi. Entrambi faranno una chiamata AJAX verso il mio server.
una volta fatto il login comparirà un toasts (ci dirà se le credenziali sono corrette o meno) si aprirà la pagina Home. La pagina è composta da una HeroSection con un immagine, titolo e una descrizone dell' autore.
Una nav bar composta da un logo e un widget animato, quando ci passeremo sopra con il mouse uscirà sulla sua sinistra una card con dettagli più approfonditi  del meteo. Il collegamento avviene tramite una richiesta AJAX di openweathermap.
Una sidebar con varie funzionalità, immagine del profilo che può essere modificata e salvata direttamente nel server, un link per la home, una per i brani preferiti, una per il settaggio (sarà animato) del profilo e uno per fare il Logout.
Al centro abbiamo le varie tipologie "i più popolari, i più recenti e molti altri" che saranno caricati da una chiamta AJAX di strivetoschool/denzer, passandoci sopra all'artista, quest'utlimo sarà animato con un effetto 3D.
Al di sopra della section abbiamo una searchbar per ricercare i nostri brani o artisti.


Una volta selezionato un' artista si aprirà la sua pagina con i suoi vari album che saranno animati quando ci passeremo sopra con il mouse.

Una volta che  selezioniamo uno degli album, verremo portati nella pagina track; essa è composta da tutte le tracce di quell' album. Avremo: la posizione, l'immagine della cover, titolo, like e il rank.

Si ha la possibilità di selezionare il brano preferito tramite l'apposita icona del cuore, quando verrà cliccato cambierà e si riempirà, dopo di chè sarà salvato nel store persist.

Una volta premuto sul brano comparirà un media player.

Il media player è composto da: titolo del brano, cover, durata,  pulsanti per andare avanti e indietro di 10s, loop ,  tasto del volume e infine un tasto a forma di croce per chiudere il player.

Tra la section e la lista abbiamo un tasto di "Ascolta tutto l'album" che ci permetterà di ascoltare in modo sequenziale tutta la lista di quell' album.

Nella searchBar una volta cercato un brano/artista, quest'ultimo  ci restituirà una lista di track ma abbiamo la possibilità di cliccare sopra al nome dell' artista (esso ci porterà nella pagina di quell' artista) o sull'immagine della cover (ci porterà direttamente nell' album di quella cover). Se dovessimo cancellare la nostra ricerca, questa ci riporterà alla pagina antecedente.

Nella pagina dei preferiti avremo tutti i nostri brani salvati che possiamo ascoltare in qualsiasi momento. Si ha anche la possibilità di rimuovere quel brano dalla nostra lista dei preferiti.

La pagina di settings è composta da un form già compilato con i nostri dati  che  possono essere modificati da alcuni dei seguenti input "email-password e residenza". Una volta premuto su "modifica",
comparirà un modale che ci avvertirà di essere veramente sicuri di modificare i dati sensibili. Una volta confermato comparirà un toasts che ci confermerà o meno dell' avvenuta modifica dal nostro database.

Nel Footer abbiamo la possibilità di andare sulle mie pagine social : 
facebook, instagram, linkedin e gitHub.

Seguitemi per aggiornamenti su nuovi progetti  😉😎👻🦾👀
