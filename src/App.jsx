import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import UseCallbackExample from "./components/hooksexample/useCallback/useCallbackExample";
import UseMemoExample from "./components/hooksexample/useMemo/useMemoExample";
import Footer from "./components/pages/Footer";
import LandingPage from "./components/pages/LandingPage";
export default function App() {
  return (
    <div>
      <LandingPage />
      {/* <UseCallbackExample /> */}
      {/* <UseMemoExample /> */}
    </div>
  );
}
