import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
