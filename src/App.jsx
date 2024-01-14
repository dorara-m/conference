import { Routes, Route } from "react-router-dom";
import "./reset.scss";
import "./App.scss";
import Header from "./components/header/header";
import SpNavi from "./components/spNavi/spNavi";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import About from "./pages/About";

export default function App() {
  const isPC = window.innerWidth >= 768;
  return (
    <div className="App">
      {isPC && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {!isPC && <SpNavi />}
      </main>
      <Footer />
    </div>
  );
}
