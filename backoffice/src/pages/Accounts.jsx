import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('http://localhost:5000/api/accounts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAccounts(response.data);
    };
    fetchAccounts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Accounts</h1>
      <ul>
        {accounts.map(account => (
          <li key={account._id}>{account.alias} ({account.accountNumber})</li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
