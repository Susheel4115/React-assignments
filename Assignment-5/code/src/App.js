import Postview from "./Postview";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing_page from "./Landing_page";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing_page />} />
            <Route path="/Postview" element={<Postview />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
