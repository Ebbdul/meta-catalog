import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DatasourceView from "../pages/DatasourceView";
import ProfilingView from "../pages/ProfilingView";
import DQView from "../pages/DQView";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/datasources" element={<DatasourceView />} />
          <Route path="/profiling" element={<ProfilingView />} />
          <Route path="/dq" element={<DQView />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;