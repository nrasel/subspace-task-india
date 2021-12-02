import React, { useState } from 'react';
import { NavLink,useRouteMatch,Route } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Payments from '../Payments/Payments';
import Refunds from '../Refunds/Refunds';

const Transaction = () => {
    const activeStyle = {
        color: '#2B83EA',
        borderBottom:'3px solid #2B83EA'
    }
    let { path, url } = useRouteMatch();
    
    return (
        <div style={{backgroundColor:'#E5E5E5',padding:'29px',borderRadius:'10px'}}>
                       <div className="text-start mb-5 mt-3" style={{borderBottom:'1px solid white'}}>
                            <NavLink activeStyle
                            ={activeStyle} className="admin-link-style text-decoration-none ms-3" to={`${url}/payments`}> Payments</NavLink>

                            <NavLink activeStyle
                            ={activeStyle} className="admin-link-style text-decoration-none ms-3" to={`${url}/refunds`}> Refunds</NavLink>

                            <NavLink activeStyle
                            ={activeStyle} className="admin-link-style text-decoration-none ms-3"  to={`${url}/orders`}> Orders</NavLink>
                       </div>



                    <Route path={`${path}/payments`}>
                        <Payments/>
                    </Route>
                    <Route path={`${path}/refunds`}>
                        <Refunds/>
                    </Route>
                    <Route path={`${path}/orders`}>
                        <Orders/>
                    </Route>

        </div>
    );
};

export default Transaction;