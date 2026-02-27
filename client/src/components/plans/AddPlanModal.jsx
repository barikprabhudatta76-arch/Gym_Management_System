import { useState } from "react";
import api from "../../services/api";
import Modal from "../common/Modal";

const AddPlanModal = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        duration: "",
        features: "",
    });

    const submit = async (e) => {
        e.preventDefault();

        await api.post("/plans", {
            ...form,
            price: Number(form.price),
            duration: Number(form.duration),
            features: form.features
                .split(",")
                .map((f) => f.trim())
                .filter((f) => f !== ""),
        });

        onSuccess();
        onClose();
    };

    return (
        <Modal title="Create New Plan" onClose={onClose}>
            <form onSubmit={submit} className="space-y-6">

                {/* Plan Name */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Plan Name
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Premium Plan"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
                       focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Price & Duration Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Price (₹)
                        </label>
                        <input
                            type="number"
                            placeholder="999"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
                         focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                            onChange={(e) =>
                                setForm({ ...form, price: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">
                            Duration (Days)
                        </label>
                        <input
                            type="number"
                            placeholder="30"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm 
                         focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                            onChange={(e) =>
                                setForm({ ...form, duration: e.target.value })
                            }
                            required
                        />
                    </div>
                </div>

                {/* Features */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                        Features
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Enter features separated by commas  
Example: Unlimited access, Priority support, Advanced analytics"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-none
                       focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        onChange={(e) =>
                            setForm({ ...form, features: e.target.value })
                        }
                    />
                    <p className="text-xs text-gray-500">
                        Separate features using commas.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-lg border border-gray-300 
                       text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-6 py-2 text-sm rounded-lg bg-indigo-600 text-white 
                       hover:bg-indigo-700 shadow"
                    >
                        Create Plan
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddPlanModal;
