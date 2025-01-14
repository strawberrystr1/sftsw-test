import './App.scss';
import { AboutSection } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/Hero';
import { OffersSection } from './components/Offers';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="content">
        <OffersSection />
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
