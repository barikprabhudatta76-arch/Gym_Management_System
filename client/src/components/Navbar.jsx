import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              FLEXICORE
            </Link>
          </div>

          <div className="flex items-center space-x-4 relative">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/Attendance" className="text-gray-700 hover:text-blue-600">
              Attendance
            </Link>
            <Link to="/members" className="text-gray-700 hover:text-blue-600">
              Members
            </Link>
            <Link to="/plans" className="text-gray-700 hover:text-blue-600">
              Plans
            </Link>

            {user ? (
              <>
                {/* Profile dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-700"
                  >
                    Hi, {user.name}
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50 p-4 text-sm">
                      <Link 
                      to={`/profile`}
                      className="block mt-2 text-indigo-600 hover:underline">Profile</Link>

                      {user.plan ? (
                        <Link
                          to={`/plans/${user.plan._id}`}
                          className="block mt-2 text-indigo-600 hover:underline"
                        >
                          My Plan
                        </Link>
                      ) : (
                        <span className="block mt-2 text-gray-400">No plan booked</span>
                      )}

                      <button
                        onClick={logout}
                        className="mt-3 w-full bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>

                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="text-blue-600 font-semibold ml-3"
                  >
                    Admin Panel
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
