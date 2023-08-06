

import Home from './Component/Home';
import About from './Component/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Jewellery from './Component/Jewellery';
import Contact from './Component/Contact';
import Diamond from './Component/Diamond';
function App() {
  return (
    
          <BrowserRouter>
            {/* <Navbar/> */}
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/jewellery" element={<Jewellery />} />
              <Route path="/contact" element={<Contact />} />

              {/* <Route path="/diamond" element={<Diamond />} /> */}

            </Routes>
          </BrowserRouter>
   
  );
}

export default App;
