import './App.css'
import Contacts from './components/Contacts/Contacts';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Locations from './components/Locations/Locations';
import Main from './components/Main/Main';
import Map from './components/Map/Map';
import Offers from './components/Offers/Offers';
import Phone from './components/Phone/Phone';
import Reservation from './components/Reservation/Reservation';
import Support from './components/Support/Support';
import 'font-awesome/css/font-awesome.min.css';







const App = () => (
  <div>
    
    <Header/>
    <Main/>
    <Offers/>
    <Support/>
    
    <Explore/>
    <Locations/>
    <Contacts/>
    
    <Reservation/>
    <Map/>
    <Footer/>
    <Phone/>
    
  
    
  </div>
);

export default App;
