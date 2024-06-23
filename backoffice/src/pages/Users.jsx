import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../context/useAuth';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        navigate('/login');
      }
    };

    fetchUsers();
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-6 text-blue-500 hover:text-blue-700"
      >
        ← Back to Dashboard
      </button>
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Manage Users</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Onboarding Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.firstName}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.lastName}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                      user.onboardingStatus === 'approved'
                        ? 'text-green-900'
                        : user.onboardingStatus === 'rejected'
                        ? 'text-red-900'
                        : 'text-yellow-900'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 opacity-50 rounded-full ${
                        user.onboardingStatus === 'approved'
                          ? 'bg-green-200'
                          : user.onboardingStatus === 'rejected'
                          ? 'bg-red-200'
                          : 'bg-yellow-200'
                      }`}
                    ></span>
                    <span className="relative">{user.onboardingStatus}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
