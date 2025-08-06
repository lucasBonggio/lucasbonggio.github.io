import styles from './App.module.css';
import Nav from './components/layout/Nav.jsx'
import Hero from './components/layout/Hero.jsx'
import ProjectSection from './components/projects/ProjectSection.jsx';
import Contact from './components/contact/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import Education from './components/resume/Education.jsx'
import Skills from './components/resume/Skills.jsx';

function App() {
  return (
    <>
      <Nav />
      <main className={styles.mainContent}>
        <Hero />
        <ProjectSection />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;