import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/accounts', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setAccounts(response.data);
      } catch (error) {
        console.error('Failed to fetch accounts', error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Accounts</h1>
      <ul className="mt-4">
        {accounts.map(account => (
          <li key={account._id}>
            {account.alias} - {account.accountNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
