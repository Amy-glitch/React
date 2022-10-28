
import Car from "./Car"
import Form from "./Form"
import One from "./pages/one"
import Two from "./pages/two"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import { Routes, Route } from "react-router-dom"




function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="about" element={ <About/> } />
    <Route path="contact" element={ <Contact/> }/>
    </Routes>
  </div>
  );
}

export default App;
