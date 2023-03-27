import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';


export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

