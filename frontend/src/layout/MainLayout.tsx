import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Meta Catalog</h2>

        <nav className="flex flex-col space-y-2">
          <Link to="/">Dashboard</Link>
          <Link to="/datasources">Datasources</Link>
          <Link to="/profiling">Profiling</Link>
          <Link to="/dq">Data Quality</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        {children}
      </div>

    </div>
  );
};

export default MainLayout;