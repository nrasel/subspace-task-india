import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Dash.css'



const Dash = () => {
    const activeStyle = {
        borderBottom:'1px solid rgb(229, 229, 229)',
        borderRadius:'2px',
        color: '#2B83EA',
    }
    return (
        <div className="dashboardBackground">

            <h2 className="text-white pt-5">Subspace</h2>

            <div className="text-start">
                <div className="container mt-4">
                <NavLink activeStyle={activeStyle}  className="text-decoration-none " to="/home"><i class="fas fa-home icon-style me-2"></i> <span className="extra-design">Home</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none" to="/transaction/payments"><i className="fas fa-exchange-alt icon-style me-2"></i> <span className="extra-design">Transaction</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle ={activeStyle}  className="text-decoration-none" to="/subcription"><i className="fab fa-telegram-plane icon-style "></i> <span className="extra-design">Subcription Plan</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none"  to="/settelement/settlement"><i class="fas fa-check-double icon-style me-2"></i><span className="extra-design">Settelement</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none"  to="/disputes/disputes"><i class="fas fa-exclamation-circle icon-style me-2"></i><span className="extra-design">Disputes</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none"  to="/refunds"><i class="fas fa-reply icon-style me-2"></i><span className="extra-design">Refunds</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none"  to="/customers/customers"><i class="fas fa-user-friends icon-style me-2"></i><span className="extra-design">Customers</span></NavLink>
                    <br /> <br />
                <NavLink className="text-decoration-none"  to="/offers"><i class="fas fa-divide icon-style me-2"></i><span className="extra-design">Offers</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none"  to="/reward"><i class="fas fa-gift icon-style me-2"></i><span className="extra-design">Reward Points</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none"  to="/myaccount"><i class="fas fa-user-circle icon-style me-2"></i><span className="extra-design">My Account</span></NavLink>
                    <br /> <br />
                <NavLink activeStyle={activeStyle} className="text-decoration-none"  to="/settings"><i class="fas fa-cog icon-style me-2"></i><span className="extra-design">Settings</span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Dash;