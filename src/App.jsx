import { Routes, Route } from "react-router-dom";
import "./reset.scss";
import "./App.scss";
import Header from "./components/header/header";
import SpMenu from "./components/spMenu/spMenu";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Program from "./pages/Program";
import Abstract from "./pages/Abstract";
import Registration from "./pages/registration/Registration";
import Venue from "./pages/venue/Venue";
import Photos from "./pages/Photos/Photos";

export default function App() {
  const isPC = window.innerWidth >= 768;
  const pathname = window.location.pathname;

  return (
    <div className="App">
      {isPC ? <Header /> : <SpMenu />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </main>
      {pathname !== "/" && <Footer />}
    </div>
  );
}
