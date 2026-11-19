
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AIDemo from './components/AIDemo';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AIDemo />
        <Pricing />
        <Testimonials />
        <FAQ /> 
      </main>

       <Footer />
    </>
  );
}

export default App;
