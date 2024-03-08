import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Order from "../pages/Order";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/:number" element={<Order />} />
    </Routes>
  );
};

export default AppRouter;
