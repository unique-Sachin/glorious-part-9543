import React from "react";
import { Route, Routes } from "react-router-dom";
import Care from "../pages/Care";
import Fitness from "../pages/Fitness";
import Home from "../pages/Home/Home";
import Mind from "../pages/Mind";
import Store from "../pages/Store/Store";
import Treadmills from "../pages/STORE PAGES/Treadmills";
import Tshirt from "../pages/STORE PAGES/Tshirt";
import Accessories from "../pages/STORE PAGES/Accessories";
import Spinbikes from "../pages/STORE PAGES/Spinbikes";
import Cycles from "../pages/STORE PAGES/Cycles";

const AllRoutes = ({ setCartState, cartState }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fitness" element={<Home />} />
      <Route path="/care" element={<Home />} />
      <Route path="/mind" element={<Home />} />
      <Route
        path="/store"
        element={<Store setCartState={setCartState} cartState={cartState} />}
      />
      <Route path="/tshirt" element={<Tshirt />} />
      <Route path="/treadmills" element={<Treadmills />} />
      <Route path="/cycles" element={<Cycles />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/spinbikes" element={<Spinbikes />} />
    </Routes>
  );
};

export default AllRoutes;
