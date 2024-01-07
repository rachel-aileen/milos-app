import './App.css';

import Navbar from './layouts/Navbar';
import Hero from './layouts/hero';
import About from './layouts/About';
import Services from './layouts/Services';


function App() {
  return (
    <div>
     <Navbar companyLogo={'Milo'} />

     <Hero />

     <About />

    <Services/>
   
     
    </div>
  );
}

export default App;
