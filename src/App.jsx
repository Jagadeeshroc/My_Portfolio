import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Page from './components/Page';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Projects from './components/ProjectsPage/Projects';
import ProjectDetails from './components/ProjectsPage/ProjectDetails';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import SignOut from './components/SignOut';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Projects Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/signout" element={<SignOut/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App