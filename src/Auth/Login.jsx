import React from 'react'
import Form from './components/Form'

const Login = ({ onClose, onSwitch }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close">&times;</button>
                <Form type="Login" onSwitch={onSwitch} />
            </div>
        </div>
    )
}

export default Login