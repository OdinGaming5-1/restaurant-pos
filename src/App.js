import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import AddItem from "./pages/AddItem";
import Navbar from "./components/Navbar"
import UpdateItem from "./pages/UpdateItem";
// import * as barcode from './JsBarcode.all.min.js';

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
      {path === '/update-item' && <UpdateItem />}
    </div>
  );
};

export default App;