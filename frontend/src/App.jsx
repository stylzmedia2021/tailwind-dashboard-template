import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import SuperAdminLogin from './pages/SuperAdminLogin';
import SuperAdminDashboard from './pages/SuperAdminDashboard';

function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/super-admin-login" element={<SuperAdminLogin />} />
        <Route path="/super-admin-dashboard" element={<SuperAdminDashboard />} />
        <Route path="*" element={<SuperAdminLogin />} />
      </Routes>
  );
}

export default App;
