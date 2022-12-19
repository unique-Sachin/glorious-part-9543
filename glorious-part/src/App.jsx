import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [cartState, setCartState] = useState(0);
  return (
    <div className="App">
      <Navbar cartState={cartState} />
      <AllRoutes setCartState={setCartState} cartState={cartState} />
      <Footer />
    </div>
  );
}

export default App;
