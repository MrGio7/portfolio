import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading, NavBar, Home, Projects, Contact } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="portfolio" element={<Home />} />
        <Route path="portfolio/projects" element={<Projects />} />
        <Route path="portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
