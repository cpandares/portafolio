import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import LayoutPage from "../components/LayoutPage";
import Project from "../pages/Project";

const AppRouter = () => {
  return (
    
      <LayoutPage>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="project/:id" element={<Project />} />
        </Routes>
      </LayoutPage>
    
  );
};

export default AppRouter;
