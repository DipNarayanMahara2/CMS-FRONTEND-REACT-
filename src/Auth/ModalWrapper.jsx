// components/ModalWrapper.jsx
import React from 'react';

const ModalWrapper = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-md mx-auto">
                <div className="absolute top-2 right-2 z-10">
                    <button onClick={onClose} className="text-white text-xl font-bold hover:text-gray-300">×</button>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalWrapper;
