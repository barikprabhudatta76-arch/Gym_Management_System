import React, { useEffect, useState } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import api from "../../services/api";
import AddMemberModal from "../../components/member/AddMemberModal";
import EditMemberModal from "../../components/member/EditMemberModal";
import ViewMemberModal from "../../components/member/ViewMemberModal";


const AdminMembers = () => {
    const [members, setMembers] = useState([]);
    const [selected, setSelected] = useState(null);

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openView, setOpenView] = useState(false);

    const fetchMembers = async () => {
        const res = await api.get("/members");
        setMembers(res.data);
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    const deleteMember = async (id) => {
        if (!window.confirm("Delete this member?")) return;
        await api.delete(`/members/${id}`);
        fetchMembers();
    };

    return (
        <div className="p-6">
            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold">Members</h1>
                <button
                    onClick={() => setOpenAdd(true)}
                    className="flex items-center gap-2 bg-indigo-700 text-white px-4 py-2 rounded"
                >
                    <Plus size={18} /> Add Member
                </button>
            </div>

            <div className="bg-white shadow rounded-lg overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((m) => (
                            <tr key={m._id} className="border-t">
                                <td className="p-3">{m.name}</td>
                                <td className="p-3">{m.email}</td>
                                <td className="p-3">{m.phone}</td>
                                <td className="p-3 flex justify-end gap-3">
                                    <Eye
                                        className="cursor-pointer text-blue-600"
                                        onClick={() => {
                                            setSelected(m);
                                            setOpenView(true);
                                        }}
                                    />
                                    <Pencil
                                        className="cursor-pointer text-green-600"
                                        onClick={() => {
                                            setSelected(m);
                                            setOpenEdit(true);
                                        }}
                                    />
                                    <Trash2
                                        className="cursor-pointer text-red-600"
                                        onClick={() => deleteMember(m._id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {openAdd && (
                <AddMemberModal
                    onClose={() => setOpenAdd(false)}
                    onSuccess={fetchMembers}
                />
            )}

            {openEdit && (
                <EditMemberModal
                    member={selected}
                    onClose={() => setOpenEdit(false)}
                    onSuccess={fetchMembers}
                />
            )}

            {openView && (
                <ViewMemberModal
                    member={selected}
                    onClose={() => setOpenView(false)}
                />
            )}
        </div>
    );
};

export default AdminMembers;
