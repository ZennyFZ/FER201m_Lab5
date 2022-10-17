import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <div>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
