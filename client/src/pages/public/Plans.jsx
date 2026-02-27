import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await api.get("/plans");
                setPlans(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPlans();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading plans...</p>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
                Our Plans
            </h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan._id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
                       transition-shadow duration-300 p-6 flex flex-col justify-between border border-gray-200"
                    >
                        <h2 className="text-2xl font-bold">{plan.name}</h2>
                        <p className="text-indigo-600 text-xl font-semibold mt-1">
                            ₹{plan.price} / {plan.duration} days
                        </p>
                        <ul className="mt-3 space-y-1">
                            {plan.features.map((f, i) => (
                                <li key={i} className="text-gray-700 text-sm flex items-center">
                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <button
                            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                            onClick={() => navigate(`/plans/${plan._id}`)}
                        >
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
