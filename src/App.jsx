import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="mt-9 w-[548.151px] bg-[#FFF7ED] gap-[235.213px] inline-flex px-[26px] py-[35px] justify-center items-center">
          <div className="">
            <Link
              className="text-black text-[25.353px] font-black leading-[40.271px]"
              to="/"
            >
              #VANLIFE
            </Link>
          </div>
          <div>
            <Link className="p-2 text-lg" to="/">
              Home
            </Link>
            <Link className="p-2 text-lg" to="/about">
              About
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
