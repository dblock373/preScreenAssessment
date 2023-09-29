import React, { useEffect, useState } from 'react';

function calculateRewardPoints(transactions) {
  let totalPoints = 0;
  transactions.forEach(amount => {
    if (amount > 100) {
      totalPoints += (amount - 100) * 2 + 50;
    } else if (amount > 50) {
      totalPoints += amount - 50;
    }
  });
  return totalPoints;
}

function RewardPointsCalculator() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulated asynchronous API call
    const fetchData = async () => {
    
      const response = await fetch('fakeEndpoint.json');
      const customerData = await response.json();
      setData(customerData);
    };

    fetchData();
  }, []);

  return (
    <div> 
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Month</th>
            <th>Rewards Points Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map(customerInfo => (
            <tr key={customerInfo.customerId + customerInfo.month}>
              <td>{customerInfo.customerId}</td>
              <td>{customerInfo.month}</td>
              <td>{calculateRewardPoints(customerInfo.transactions)}</td>
            </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RewardPointsCalculator;
