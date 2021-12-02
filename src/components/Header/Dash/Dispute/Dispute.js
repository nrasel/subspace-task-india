import React, { useEffect, useState } from 'react';

const Dispute = () => {
    const[pay,setPay]=useState([])
    useEffect(()=>{
        fetch('/dispute.json')
        .then(res=>res.json())
        .then(data=>setPay(data))
    },[pay])
    console.log(pay);
    return (
        <div>
        <div className="row text-start">
            <div className="col-md-2">
                <span>Dispute Id</span>
                <input type="text" aria-label="First name" className="form-control"/>
            </div>
            <div className="col-md-3 ">
                <span>Payment Id Id</span>
                <input type="text" aria-label="First name" className="form-control"/>
            </div>
            <div className="col-md-4">
            <span>Duration</span>
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
            <div className="col-md-3">
            <span>Dispute Type</span>
                <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>All</option>
                        <option value="1">type 1</option>
                        <option value="2">Type 2</option>
                    </select>
                </div>
            </div>

            <button className="btn btn-style mx-auto text-white my-2">Search</button>
        </div>

        <div className="row">
            <table className="table text-start">
                <thead>
                    <tr>
                    <th scope="col">Payment Id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pay.map(py=><tr>
                            <td>{py.id}</td>
                            <td>$ {py.amount}</td>
                            <td>{py.email}</td>
                            <td>{py.phone}</td>
                            <td>{py.created}</td>
                            <td>
                                {
                                    py.status === 'Closed' ? <button className=" btn-style2 pill">{py.status}</button>
                                    :
                                    <button className="btn-style3">{py.status}</button>
                                }
                                </td>
                            </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
        
    </div>
    );
};

export default Dispute;