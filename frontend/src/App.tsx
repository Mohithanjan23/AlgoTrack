import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProblemDetail from "./pages/ProblemDetail";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Problems from "./pages/Problems";
import Analytics from "./pages/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/problem/:id" element={<ProblemDetail />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
