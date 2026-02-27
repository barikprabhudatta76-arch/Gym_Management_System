const Modal = ({ title, children, onClose }) => (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-[400px]">
            <div className="flex justify-between mb-4">
                <h2 className="font-bold">{title}</h2>
                <button onClick={onClose}>✕</button>
            </div>
            {children}
        </div>
    </div>
);

export default Modal;
