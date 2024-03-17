import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import HowTo from './components/HowTo';
import Download from './components/Download';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Features/>
      <HowTo/>
      <Download/>
    </div>
  );
}

export default App;
