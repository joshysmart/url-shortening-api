import Header from './components/Header';
import Hero from './components/Hero';
import ShortenURL from './components/ShortenURL';
import Statistics from './components/Statistics';
import BoostLinks from './components/BoostLinks';
import Footer from './components/Footer';
import './css/main.css';
// import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ShortenURL />
      <Statistics />
      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
