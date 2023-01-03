import React from "react";
import DeleteExpense from "pages/DeleteExpense";
import AddExpense from "pages/AddExpense";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/deleteexpense" element={<DeleteExpense />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
