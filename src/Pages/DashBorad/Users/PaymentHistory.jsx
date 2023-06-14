/* eslint-disable no-unused-vars */
import React from 'react';
import useEnrolledClass from '../../../Hooks/useEnrolledClass';
import { Helmet } from 'react-helmet';

const PaymentHistory = () => {
    const [enrolledClass, refetch] = useEnrolledClass();
    return (
        <div className='w-full'>
        <Helmet>
            <title>Sports || My Selected Class</title>
        </Helmet>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th># </th>
                        <th>Transaction Id</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolledClass.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                               {item.transactionId}
                            </td>
                            <td>
                               $ {item.price}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {item.date}
                            </td>
                            <td>
                                {item.orderStatus}
                            </td>
                        </tr>)
                    }


                </tbody>

            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;