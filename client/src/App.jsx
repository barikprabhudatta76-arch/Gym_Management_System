import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Login from './pages/public/Login';
import Attendance from './pages/public/Attendance';

import Register from './pages/public/Register';
import Profile from './pages/user/Profile';
import AdminDashboard from './pages/admin/AdminDashboard';

// Route Guards
import ProtectedRoute from './route/ProtectedRoute';
import PublicRoute from './route/PublicRoute';
import AdminMembers from './pages/admin/AdminMembers';
import AdminPlan from './pages/admin/AdminPlan';
import Members from './pages/public/Members';
import Plans from './pages/public/Plans';
import PlanDetails from './pages/public/PlanDetails';
import AdminUsers from './pages/admin/AdminUsers';


function App() {
  return (
    <Routes>
      {/* Public Routes with Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Attendance" element={<Attendance />} />
        <Route path="members" element={< Members />} />
        <Route path="plans" element={<Plans />} />
        <Route path="plans/:id" element={<PlanDetails />} />

        {/* Only accessible if NOT logged in */}
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Only accessible if logged in */}
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Admin Routes with Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path='members' element={<AdminMembers />} />
        <Route path='plans' element={<AdminPlan />} />
        <Route path='users' element={<AdminUsers />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;