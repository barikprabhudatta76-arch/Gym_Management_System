import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import api from "../../services/api";
import ViewPlanModal from "../../components/plans/ViewPlanModal";
import EditPlanModal from "../../components/plans/EditPlanModal";
import AddPlanModal from "../../components/plans/AddPlanModal";

const AdminPlan = () => {
  const [plans, setPlans] = useState([]);
  const [selected, setSelected] = useState(null);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);

  const fetchPlans = async () => {
    const res = await api.get("/plans");
    setPlans(res.data);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const deletePlan = async (id) => {
    if (!window.confirm("Delete this plan?")) return;
    await api.delete(`/plans/${id}`);
    fetchPlans();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Plans</h1>
        <button
          onClick={() => setOpenAdd(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={18} /> Add Plan
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white rounded-xl shadow p-5 border"
          >
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="text-2xl font-bold text-indigo-600 mt-2">
              ₹{plan.price}
            </p>
            <p className="text-sm text-gray-500">
              {plan.duration} Days
            </p>

            <ul className="mt-3 text-sm space-y-1">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <div className="flex justify-end gap-3 mt-4">
              <Eye
                className="cursor-pointer text-blue-600"
                onClick={() => {
                  setSelected(plan);
                  setOpenView(true);
                }}
              />
              <Pencil
                className="cursor-pointer text-green-600"
                onClick={() => {
                  setSelected(plan);
                  setOpenEdit(true);
                }}
              />
              <Trash2
                className="cursor-pointer text-red-600"
                onClick={() => deletePlan(plan._id)}
              />
            </div>
          </div>
        ))}
      </div>

      {openAdd && (
        <AddPlanModal
          onClose={() => setOpenAdd(false)}
          onSuccess={fetchPlans}
        />
      )}

      {openEdit && (
        <EditPlanModal
          plan={selected}
          onClose={() => setOpenEdit(false)}
          onSuccess={fetchPlans}
        />
      )}

      {openView && (
        <ViewPlanModal
          plan={selected}
          onClose={() => setOpenView(false)}
        />
      )}
    </div>
  );
};

export default AdminPlan;
