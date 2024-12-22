import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./Components/Landing/Landing";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 2 ways - vite , create-react-app
