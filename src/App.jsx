import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import "./server";
import Layout from "./Components-2/Layout";
import Header from "./Components-2/Header";
import Dashboard from "./Components-2/Host/Dashboard";
import VansDetails from "./components/VansDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Income from "./Components-2/Host/Income";
import Reviews from "./Components-2/Host/Reviews";
import HostLayout from "./Components-2/HostLayout";
import Vans2 from "./Components-2/Host/Vans-2";
import HostVanDetails from "./Components-2/Host/HostVanDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VansDetails />} />
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<Vans2 />} />
              <Route path="vans/:id" element={<HostVanDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
