import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModifyUserModal from '../components/ModifyUserModal';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    fetchUsers();
  }, []);

  const handleModifyUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
    setShowModal(false); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 bg-gray-200">Name</th>
              <th className="py-2 px-4 bg-gray-200">Email</th>
              <th className="py-2 px-4 bg-gray-200">Status</th>
              <th className="py-2 px-4 bg-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-t text-left">
                <td className="py-2 px-4">{user.firstName} {user.lastName}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.onboardingStatus}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleModifyUser(user)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Modify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <ModifyUserModal
          user={selectedUser}
          onClose={() => setShowModal(false)}
          onUserUpdated={updateUser}
        />
      )}
    </div>
  );
};

export default Users;
