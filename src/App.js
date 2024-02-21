import React, { useState } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  const [path, setPath] = useState("/home");

  function navigate(value) {
    setPath(value);
  }

  return (
    <div>
      {path === '/home' && <HomePage navigate={navigate} />}
    </div>
  );
};

export default App;