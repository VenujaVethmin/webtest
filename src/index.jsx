import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Api from "./Api";
import Photos from "./photos";
import Photo_detail from "./photo_details";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link className="t1" to="/api">Home</Link>
        <Link className="t1" to="/photos">Photos</Link>
      </nav>

      <Routes>
        <Route path="/api" element={<Api />} />
        <Route path="/photos" element={<Photos />} /> {/* Added the missing equal sign (=) here */}
        <Route path="/photos/photo_details/:id" element={<Photo_detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
