import './App.css';
import Landing from './components/landing';
import Nav from './components/Nav';
import Aboutme from './components/aboutme';
import Little from './components/little';
import Project from './components/project';
import Skills from './components/skills';
import Resume from './components/resume';
import Contact from './components/contact';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <ToastContainer/>
    <Nav/>
    <Landing/>
    <Little/>
    <Aboutme/>
    <Project/>
    <Skills/>
    <Resume/>
    <Contact/>
    </>
  );
}

export default App;
