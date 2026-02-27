import React, { useEffect, useState } from "react";
import api from "../../services/api";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token"); // JWT token
            const res = await api.get("/auth/users", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(res.data);
        } catch (err) {
            console.error("Failed to fetch users:", err);
            alert("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <p className="text-center mt-10 text-gray-600">Loading users...</p>;
    }

    if (!users.length) {
        return <p className="text-center mt-10 text-gray-500">No users found.</p>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-8">
                All Users
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-lg border border-gray-200">
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Role</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Plan</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === "admin"
                                                ? "bg-red-100 text-red-800"
                                                : "bg-green-100 text-green-800"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {user.plan ? (
                                        <div className="space-y-1">
                                            <p className="font-semibold">{user.plan.name}</p>
                                            <p className="text-xs text-gray-500">
                                                ₹{user.plan.price} / {user.plan.duration} days
                                            </p>
                                        </div>
                                    ) : (
                                        <span className="text-gray-400">No plan booked</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;
