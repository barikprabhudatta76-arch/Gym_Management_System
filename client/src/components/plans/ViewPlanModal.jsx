import Modal from "../common/Modal";

const ViewPlanModal = ({ plan, onClose }) => (
    <Modal title="Plan Details" onClose={onClose}>
        <p><b>Name:</b> {plan.name}</p>
        <p><b>Price:</b> ₹{plan.price}</p>
        <p><b>Duration:</b> {plan.duration} days</p>
        <ul className="mt-2">
            {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
            ))}
        </ul>
    </Modal>
);

export default ViewPlanModal;
