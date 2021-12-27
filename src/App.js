import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
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
        <Route index element={<Home Particles={Particles} />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
