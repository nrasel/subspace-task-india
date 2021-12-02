import React, { useEffect, useState } from 'react';

const Settlement = () => {
    const[pay,setPay]=useState([])
    useEffect(()=>{
        fetch('/refund.json')
        .then(res=>res.json())
        .then(data=>setPay(data))
    },[pay])
    return (
        <div>
            <div className="row text-start mt-4">
                <div className="col-md-3">
                    <span>Refund Id</span>
                    <input type="text" aria-label="First name" className="form-control"/>
                </div>
                <div className="col-md-3">
                    <span>Payment Id Id</span>
                    <input type="text" aria-label="First name" className="form-control"/>
                </div>
                <div className="col-md-3">
                    <span>Status</span>
                    <div className="input-group mb-3">
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>All</option>
                            <option value="1">Processing</option>
                            <option value="2">Failed</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-style w-50 text-white mt-4 py-1">Search</button>
                </div>
            </div>

            <div className="row mt-4">
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
                                        py.status === 'Processing' ? <button className=" btn-style2 pill">{py.status}</button>
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

export default Settlement;