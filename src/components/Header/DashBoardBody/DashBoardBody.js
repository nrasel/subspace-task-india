import React from 'react';
import '../Header.css'
import ellipse from '../../../images/ellipse.png'
import pixel from '../../../images/pixel.png'
import Home from '../../Dashboard/Home/Home';
import {
   
    Link,
    Route
  } from "react-router-dom";
import Transaction from '../../Dashboard/Transaction/Transaction';
import Subcription from '../../Dashboard/Subcription/Subcription';
import Settlements from '../../Dashboard/Settlements/Settlements';
import Disputes from '../../Dashboard/Dispuits/Disputes';
import Refunds from '../../Dashboard/Refunds/Refunds';
import Customers from '../../Dashboard/Customers/Customers';
import Offers from '../../Dashboard/Offers/Offers';
import Reward from '../../Dashboard/Reward/Reward'
import MyAccount from '../../Dashboard/MyAccount/MyAccount'
import Settings from '../../Dashboard/Settings/Settings'
const DashBoardBody = () => {
    return (
        <div>
           <div >
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <p className="navbar-brand" >Dashboard</p>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-4">
                                <Link to="/home" className="nav-link active" aria-current="page"><i className="fas fa-search"></i></Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/home" className="nav-link"><i className="fas fa-th"></i></Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/home" className="nav-link bell-style"><i className="fas fa-bell"></i> 15</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/home" className="nav-link "><img src={ellipse} alt="" /></Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link to="/home" className="nav-link "><img src={pixel} alt="" /></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
           </div>

           <div>
          
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/transaction">
            <Transaction/>
          </Route>
          <Route path="/subcription">
            <Subcription/>
          </Route>
          <Route path="/settelement">
            <Settlements/>
          </Route>
          <Route path="/disputes">
            <Disputes/>
          </Route>
          <Route path="/refunds">
           <Refunds/>
          </Route>
          <Route path="/customers">
           <Customers/>
          </Route>
          <Route path="/offers">
          <Offers/>
          </Route>
          <Route path="/reward">
          <Reward/>
          </Route>
          <Route path="/myaccount">
           <MyAccount/>
          </Route>
          <Route path="/settings">
           <Settings/>
          </Route>
           </div>
        </div>
    );
};

export default DashBoardBody;