
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import stocks from './data.js'

function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock stock={stocks}/>} />
        <Route path="/stocks" element={<Dashboard stock={stocks} />} />
     </Routes>
    </div>
  );
}

export default App;
