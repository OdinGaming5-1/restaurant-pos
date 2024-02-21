import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar"

const App = () => {
  const [path, setPath] = useState("/home");

  function navigate(value) {
    setPath(value);
  }

  return (
    <div>
    <Navbar />
      {path === '/home' && <HomePage navigate={navigate} />}
    </div>
  );
};

export default App;