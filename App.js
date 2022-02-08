import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Jobs from './Components/Jobs';
import Companies from './Components/Companies';
import TalentList from './Components/TalentList';
import Land from './Components/Land';
import Footer from './Components/Footer.js';



function App() {
  return (
    <div className='main'>
      <Header />
      <Hero />
      <Jobs />
      <Companies />
      <TalentList />
      <Land />
      <Footer />

    </div>
  );
}

export default App;
