import Modal from "../common/Modal";

const ViewMemberModal = ({ member, onClose }) => (
    <Modal title="Member Details" onClose={onClose}>
        <p><b>Name:</b> {member.name}</p>
        <p><b>Email:</b> {member.email}</p>
        <p><b>Phone:</b> {member.phone}</p>
        <p><b>Bio:</b> {member.bio}</p>
    </Modal>
);

export default ViewMemberModal;
