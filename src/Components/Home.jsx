import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    const handleCustomer = () => navigate('/student');
  

    return (
        <div className="auth-form">
               <h1>Service Center Customer Database</h1>
            <div className="auth-btn-group">
                <button className="auth-btn green-bg white-txt" onClick={handleCustomer}>Customer</button>
   
            </div>
        </div>
    );
}