import React, { useEffect, useState } from 'react';
import { NavLink, useRouteMatch,Route } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Refunds from '../Refunds/Refunds';
import Settlement from '../Settlement/Settlement';

const Settlements = () => {
    const activeStyle = {
        color: '#2B83EA',
        borderBottom:'3px solid #2B83EA'
    }
    let { path, url } = useRouteMatch();
    return (
        <div  style={{backgroundColor:'#E5E5E5',padding:'29px',border:'1px solid rgba(0, 0, 0, 0.25)',borderRadius:'10px'}}>
             <div className="text-start mb-5 style={{borderBottom:'1px solid white'}}">
                            <NavLink activeStyle
                            ={activeStyle} className="admin-link-style text-decoration-none ms-3" to={`${url}/settlement`}> Payments</NavLink>

                            <NavLink activeStyle
                            ={activeStyle} className="admin-link-style text-decoration-none ms-3" to={`${url}/refunds`}> Refunds</NavLink>

                            <NavLink activeStyle
                            ={activeStyle} className="admin-link-style text-decoration-none ms-3"  to={`${url}/orders`}> Orders</NavLink>
                       </div>



                    <Route path={`${path}/settlement`}>
                        <Settlement/>
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

export default Settlements;