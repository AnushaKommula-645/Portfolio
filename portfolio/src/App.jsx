import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Dsa from './components/Dsa.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Achievements from './components/Achievements.jsx';
// import Experience from './components/Experience.jsx'

function App() {
  return(
    <div className="mainContainer">
      <Header />
      <Home />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Dsa />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App