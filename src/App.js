import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./page/home/home";
import Orders from "./page/orders/orders";
import Admin from "./page/admin/admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
