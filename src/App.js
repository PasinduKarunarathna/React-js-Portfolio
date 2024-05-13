import './App.css';
import About from './Components/About/about';
import Navbar from './Components/NavBar/navbar';
import Profile from './Components/Profile/profile';
import Experience from './Components/Experience/experience';
import Project from './Components/Project/project';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
