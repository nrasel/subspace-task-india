import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Stepper,Step } from 'react-form-stepper';
import '../Home/Home.css'

const Home = () => {
    const[payment,setPayment]=useState([])
    useEffect(()=>{
        fetch('./payment.json')
        .then(res=>res.json())
        .then(data=>setPayment(data))
    },[])
    
    return (
       <div style={{backgroundColor:'#E5E5E5',padding:'29px',border:'1px solid rgba(0, 0, 0, 0.25)',borderRadius:'10px'}} className="text-start py-5 px-4 home-background">
            <div>
            <h2 className="heading-title pb-4 pt-3">Welcome to your Dashbaoard, Grow90</h2>
            <div className="item-baground p-3 rounded">
                <div className="row p-4">
                <div>
                    <h2 className="heading-title">Your are just steps away from enabling live payments</h2>
                    <p className="heading-paragraph">Submit a few KYC details and start accepting payments from your customers</p>
                </div>
                </div>
                <div>
                <Stepper
                    steps={[{ label: '' }, { label: '' }, { label: '' }]}
                    activeStep={0}
                />

                    <Stepper activeStep={0}>
                    </Stepper>
                </div>
                <div className="row text-start ">
                    <div className="col-md-4">
                    <div className="p-4">
                        <p>Conatact Details</p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="p-4">
                        <p>Live payments and Settlements</p>
                        <p className="heading-paragraph">Submit a few KYC details to start accepting payments and receive settlement in your account</p>
                        <button className="btn btn-color">Submit KYC</button>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="p-4">
                        <p>Account Activation</p>
                        <p className="heading-paragraph">Get all the KYC details approved to complete the account activation</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row bg-white p-4 m-1 rounded mt-4">
                <div className="col-md-6">
                   <div className="d-flex ">
                        <div className="">
                        <div className="input-group">
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected> Past 7 Days</option>
                                <option value="1">Past 5 Days</option>
                                <option value="2">Past 3 Days</option>
                            </select>
                       
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white">11 Nov 2021 to 18 Nov 2021</span>
                            </div>
                        </div>


                        </div>
                   </div>
                </div>
                <div className="col-md-6">
                    <span className="me-4">Current Balance:$ 2.2L</span>
                    |
                    <Link to="/home" className="ms-4 text-decoration-none">View Settlements</Link>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    payment.map(pay=><div className="col">
                    <div className="card rounded h-100">
                        <div className="card-body">
                            <p className="card-title">{pay.title}</p>
                            <p className="card-text">{pay.price}</p>
                        </div>
                    </div>
                </div>)
                }
                </div>
            </div>
       </div>
    );
};

export default Home;