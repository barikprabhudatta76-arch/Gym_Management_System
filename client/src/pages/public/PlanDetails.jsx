import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

const PlanDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const res = await api.get(`/plans/${id}`);
                setPlan(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPlan();
    }, [id]);

    const handlePay = async () => {
        const user = JSON.parse(localStorage.getItem("user")); // or your auth token check
        if (!user) {
            // If not logged in, redirect to login page
            alert("Please login first to book a plan");
            navigate("/login");
            return;
        }
        const userId = user?._id;
        try {
            await api.post(`/plans/${id}/book`, { userId });
            alert("Plan booked successfully!");
            navigate("/"); // Redirect after booking
        } catch (err) {
            console.error(err);
            alert("Failed to book plan");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading plan...</p>;
    if (!plan) return <p className="text-center mt-10 text-red-500">Plan not found</p>;

    return (
        <div className="p-6 max-w-2xl mx-auto bg-gray-50 min-h-screen">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h1 className="text-3xl font-bold text-indigo-700 mb-4">{plan.name}</h1>
                <p className="text-xl font-semibold text-gray-800 mb-2">
                    ₹{plan.price} / {plan.duration} days
                </p>

                <h2 className="text-lg font-semibold mt-4 mb-2">Features:</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {plan.features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>

                <button
                    onClick={handlePay}
                    className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                    Pay & Book
                </button>
            </div>
        </div>
    );
};

export default PlanDetails;
