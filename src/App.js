import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BarChart from "./components/chartjs/BarChart";
import Modal1 from "./components/modal1/Modal1";
import Modal2 from "./components/modal2/Modal2";
import ReactSelectDemo from "./components/reactSelect/ReactSelectDemo";
import XlsxDemo from "./components/XlsxDemo/XlsxDemo";

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ padding: "50px", display: "flex", gap: "20px" }}>
        {/* <p>Home</p> */}
        <Link to="/arddress-select ">Addr Select </Link>
        <Link to="/mui-modal1 ">Mui modal1 </Link>
        <Link to="/mui-modal2 ">Mui Modal2 </Link>
        <Link to="/xlsx-demo">Xlsx Demo</Link>
        <Link to="/chart-js">Chart Js Demo</Link>
      </nav>
      <Routes>
        <Route path="/"></Route>
        <Route path="/arddress-select" element={<ReactSelectDemo />}></Route>
        <Route path="/mui-modal1" element={<Modal1 />}></Route>
        <Route path="/mui-modal2" element={<Modal2 />}></Route>
        <Route path="/xlsx-demo" element={<XlsxDemo />}></Route>
        <Route path="/chart-js" element={<BarChart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
