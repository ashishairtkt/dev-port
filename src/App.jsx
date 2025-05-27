import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/pages/LandingPage";
import Timeline from "./components/pages/Timeline";


export default function App() {
  return (
    <div className="app">
    
      <main className="main-content">
        <LandingPage />
        {/* <Timeline /> */}
      </main>
    </div>
  );
}
