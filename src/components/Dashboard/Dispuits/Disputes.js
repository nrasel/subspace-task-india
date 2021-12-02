import React from 'react';
import { NavLink, useRouteMatch,Route } from 'react-router-dom';
import Dispute from '../../Header/Dash/Dispute/Dispute';

const Disputes = () => {
    const activeStyle = {
        color: '#2B83EA',
        borderBottom:'3px solid #2B83EA'
    }
    let { path, url } = useRouteMatch();
    return (
        <div style={{backgroundColor:'#E5E5E5',padding:'29px',border:'1px solid rgba(0, 0, 0, 0.25)',borderRadius:'10px'}}>
            <div className="text-start mb-3" style={{borderBottom:'1px solid white'}}>
                <NavLink activeStyle
                ={activeStyle} className="admin-link-style text-decoration-none ms-3" to={`${url}/disputes`}> Disputes</NavLink>
            </div>

            <Route path={`${path}/disputes`}>
                <Dispute/>
            </Route>
    

        </div>
    );
};

export default Disputes;