import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Topheader from './Header/Topheader';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';



function App() {
  return (
    <div className="App">
      <Router>
        <Topheader />
        <Header/>
  <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Menu" element={<Menu />}/>
    <Route path="/Contact" element={<Contact/>}/>
  </Routes>
  </Router>
     
     
    </div>
  );
}

export default App;
