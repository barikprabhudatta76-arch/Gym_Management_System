import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMembers = async () => {
        try {
            setLoading(true);
            const res = await api.get("/members");
            setMembers(res.data);
        } catch (err) {
            console.error("Failed to fetch members", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    if (loading)
        return <p className="text-center mt-10 text-gray-600">Loading members...</p>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-8">
                Our Members
            </h1>

            {members.length === 0 ? (
                <p className="text-center text-gray-500">No members found.</p>
            ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {members.map((member) => (
                        <div
                            key={member._id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                         transition-shadow duration-300 p-6 border border-gray-200
                         flex flex-col items-center text-center"
                        >
                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-2xl font-bold mb-4">
                                {member.name.charAt(0)}
                            </div>

                            {/* Member Info */}
                            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
                            <p className="text-sm text-gray-500">{member.email}</p>
                            <p className="text-sm text-gray-500">{member.phone}</p>
                            <p className="mt-2 text-gray-700 text-sm">{member.bio}</p>

                            {/* Badge / Status */}
                            <span className="mt-4 inline-block bg-indigo-100 text-indigo-800 
                               text-xs font-medium px-3 py-1 rounded-full">
                                Member
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Members;
