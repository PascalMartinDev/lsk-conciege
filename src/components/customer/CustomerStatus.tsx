import React from 'react';
//import { useAppCustomer } from '../../workflow/hooks/useAppCustomer';

const CustomerStatus: React.FC = () => {
  // Use the customer hook to get reactive data
  //const appCustomer = useAppCustomer();

  const group = ''; // appCustomer?.group;
  const isVip = ''; //appCustomer?.isVip;
  const dateJoined = '' // appCustomer?.dateJoined;


  return (
    <div>
       <h3 className="text-lg font-semibold text-gray-900">
        Membership Information:
      </h3>
      <h4 className="text-sm/6  text-gray-500">Group: {group}</h4>
      <h4 className="text-sm/6  text-gray-500">VIP: {isVip}</h4>
      <h4 className="text-sm/6  text-gray-500">MEMBER SINCE: {dateJoined}</h4>
    </div>
  );
};

export default CustomerStatus;

