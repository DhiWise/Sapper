import React from "react";
import Vender from "pages/Vender";
import Shipnotice from "pages/Shipnotice";
import Invoices from "pages/Invoices";
import Items from "pages/Items";
import Orders from "pages/Orders";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/items" element={<Items />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/shipnotice" element={<Shipnotice />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
