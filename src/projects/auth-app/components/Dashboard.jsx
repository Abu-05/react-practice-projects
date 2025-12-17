import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <AuthLayout>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </AuthLayout>
  );
}

export default Dashboard;
