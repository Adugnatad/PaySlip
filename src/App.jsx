import { useState } from "react";
import "./App.css";
import PaySlip from "./Components/PaySlips/PaySlip";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payslip" element={<PaySlip />} />
        </Routes>
      </BrowserRouter>
      {/* <PaySlip />; */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
