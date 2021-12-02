import React, { useEffect, useState } from 'react';

const Customer = () => {
    const[customer,setCustomer]=useState([])
    useEffect(()=>{
        fetch('/customer.json')
        .then(res=>res.json())
        .then(data=>setCustomer(data))
    },[customer])
    return (
        <div>
            <div className="row">
                <table className="table text-start">
                    <thead>
                        <tr>
                        <th scope="col">Payment Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customer.map(cus=><tr>
                                <td>{cus.id}</td>
                                <td>{cus.name}</td>
                                <td>{cus.email}</td>
                                <td>{cus.phone}</td>
                                </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customer;