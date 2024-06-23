import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('http://localhost:5000/api/transactions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTransactions(response.data);
    };
    fetchTransactions();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>{transaction.amount} ({transaction.reason})</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
