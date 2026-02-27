import { useState } from "react";
import api from "../../services/api";
import Modal from "../common/Modal";

const EditMemberModal = ({ member, onClose, onSuccess }) => {
    const [form, setForm] = useState({
        name: member?.name || "",
        email: member?.email || "",
        phone: member?.phone || "",
        bio: member?.bio || "",
    });

    const submit = async (e) => {
        e.preventDefault();
        await api.put(`/members/${member._id}`, form);
        onSuccess();
        onClose();
    };

    return (
        <Modal title="Edit Member" onClose={onClose}>
            <form onSubmit={submit} className="space-y-5">

                {/* Name */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={form.name}
                        placeholder="Enter member name"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={form.email}
                        placeholder="Enter email address"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        value={form.phone}
                        placeholder="Enter phone number"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Bio */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Bio
                    </label>
                    <textarea
                        rows={4}
                        value={form.bio}
                        placeholder="Short description about the member"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-none focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        onChange={(e) =>
                            setForm({ ...form, bio: e.target.value })
                        }
                    />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-5 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow"
                    >
                        Update Member
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditMemberModal;
