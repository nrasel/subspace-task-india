import React from 'react';
import { NavLink, useRouteMatch,Route } from 'react-router-dom';
import Customer from '../Customer/Customer';

const Customers = () => {
    const activeStyle = {
        color: '#2B83EA',
        borderBottom:'3px solid #2B83EA'
    }
    let { path, url } = useRouteMatch();
    return (
        <div style={{backgroundColor:'#E5E5E5',padding:'29px',borderRadius:'10px'}}>
                       <div className=" d-flex justify-content-between mb-5 mt-3" style={{borderBottom:'1px solid white'}}>
                            <NavLink activeStyle
                            ={activeStyle} className="admin-link-style text-decoration-none ms-3" to={`${url}/customers`}> Customers</NavLink>

                            <button style={{background: '#2B83EA',borderRadius:'5px'}} className="btn text white mb-1 text-white">+ New Customer</button>
                       </div>



                    <Route path={`${path}/customers`}>
                       <Customer/>
                    </Route>

        </div>
    );
};

export default Customers;