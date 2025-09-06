import React from 'react';
//import { useAppCustomer } from '../../workflow/hooks/useAppCustomer';


const CustomerActivity: React.FC = () => {
  // Use the customer hook to get reactive AppCustomer data
  //const appCustomer = useAppCustomer();

  const lastVenueVisitDate = ''; //appCustomer?.lastVenueVisitDate;
  const lastpurchaseactivity = '' ; // appCustomer?.lastPurchaseActivity;


  return (
    <div>
       <h3 className="text-lg font-semibold text-gray-900">
        Customer Fields:  
      </h3>
      <h4 className="text-sm/6  text-gray-500">
        Last Cellar Door Visit: {lastVenueVisitDate}
      </h4>
      <h4 className="text-sm/6  text-gray-500">Last Purchase: {lastpurchaseactivity}</h4>    </div>
  );
};

export default CustomerActivity;

