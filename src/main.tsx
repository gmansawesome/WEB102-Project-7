import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

import Handler from "./routes/Handler";
import Home from "./routes/Home";
import Create from "./routes/Create";
import Gallery from "./routes/Gallery";
import Edit from "./routes/Edit";
import View from "./routes/View";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="crewmates" element={<Gallery />} />
          <Route path="edit" element={<Handler/>}>
            <Route path=":id" element={<Edit />} />
            <Route path="*" element={<h3>???</h3>} />
          </Route>
          <Route path="view" element={<Handler/>}>
            <Route path=":id" element={<View />} />
            <Route path="*" element={<h3>???</h3>} />
          </Route>
          <Route path="*" element={<h3>???</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
