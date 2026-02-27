import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      {/* User Info */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and your current plan.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.email}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Role</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user?.role === "admin" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                    }`}
                >
                  {user?.role}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Plan Info */}
      {user?.plan ? (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">My Plan</h3>
          <h2 className="text-2xl font-bold text-indigo-700">{user.plan.name}</h2>
          <p className="text-gray-800 font-semibold mt-1">
            ₹{user.plan.price} / {user.plan.duration} days
          </p>

          <h4 className="text-md font-semibold mt-4 mb-2">Features:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {user.plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <Link
            to={`/plans/${user.plan._id}`}
            className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            View Plan Details
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
          You have not booked any plan yet. <Link to="/plans" className="text-indigo-600 hover:underline">Book a plan</Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
