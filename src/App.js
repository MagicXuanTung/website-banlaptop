import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import { useEffect } from "react";
import { useState } from "react";



function App() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setAdmin(false)
  }, [])

  return (
    <div className="App">

      {admin ? (
        <AllRoutes />
      ) : (
        <>
          <Navbar />
          <AllRoutes />
          <Footer />
        </>
      )}

    </div>
  );
}

export default App;
