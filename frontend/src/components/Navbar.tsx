import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur 
                bg-zinc-900/80 text-white 
                px-6 py-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">
        AlgoTrack
      </Link>

      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/problems">Problems</Link>
        <Link to="/analytics">Analytics</Link>

        {token ? (
          <button
            onClick={logout}
            className="bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
