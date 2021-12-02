import React from 'react';
import { Link } from 'react-router-dom';
import Dash from './Dash/Dash';
import DashBoardBody from './DashBoardBody/DashBoardBody';

const Header = () => {
    return (
        <div>
           <div className="p-4">
               <div className="row">
                   <div className="col-md-2">
                       <Dash/>
                   </div>
                   <div className="col-md-10">
                       <DashBoardBody/>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Header;