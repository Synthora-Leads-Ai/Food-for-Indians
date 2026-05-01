import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollProgress from './components/ScrollProgress';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './pages/Home';
import About from './pages/About';
import Philosophy from './pages/Philosophy';
import Menu from './pages/Menu';
import Specialties from './pages/Specialties';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-theme-transition">
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <FloatingActions />
          <ThemeSwitcher />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
