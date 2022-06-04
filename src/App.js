import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Page from "./Components/Page/Page";
import Order from "./Components/Order/Order";
import OjaHead from "./Components/OjaHead";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      {user ? null : <OjaHead />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page" element={<Page />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
