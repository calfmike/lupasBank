import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/transactions', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setTransactions(response.data);
      } catch (error) {
        console.error('Failed to fetch transactions', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <ul className="mt-4">
        {transactions.map(transaction => (
          <li key={transaction._id}>
            {transaction.reason} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
