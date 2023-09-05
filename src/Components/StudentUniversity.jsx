import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Customer() {
    const navigate = useNavigate();
    const handlePostCustomer = () => navigate('/pstudent');
    const handleGetCustomer = () => { navigate('/gstudent') }
    return (
        <div className='auth-form'>
                <h1>Customer Information</h1>
            <div className="auth-btn-group">
                <button type="button" className="auth-btn green-bg white-txt" onClick={handlePostCustomer}>Post</button>
                <button type="button" className="auth-btn green-bg white-txt" onClick={handleGetCustomer}>Get-Update-Delete</button>
            </div>
        </div>
    )
}