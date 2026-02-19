import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4 space-y-6">
        {/* Sidebar Header with Logo */}
        <div className="flex items-center space-x-3 mb-6">
          <img src={Logo} alt="Meta Catalog Logo" className="w-10 h-10" />
          <h2 className="text-xl font-bold">Meta Catalog</h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          <Link to="/" className="hover:text-blue-400 transition-colors">Dashboard</Link>
          <Link to="/datasources" className="hover:text-blue-400 transition-colors">Datasources</Link>
          <Link to="/profiling" className="hover:text-blue-400 transition-colors">Profiling</Link>
          <Link to="/dq" className="hover:text-blue-400 transition-colors">Data Quality</Link>
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