import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import AddItem from "./pages/AddItem";
import Navbar from "./components/Navbar"


const App = () => {
  const [path, setPath] = useState("/home");

  function navigate(value) {
    console.log(value)
    setPath(value);
  }

  return (
    <div>
    <Navbar navigate={navigate}/>
      {path === '/home' && <HomePage  />}
      {path === '/add-item' && <AddItem />}
    </div>
  );
};

export default App;