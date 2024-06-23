import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../context/useAuth';

const UserActions = ({ user, onUpdate }) => {
  const navigate = useNavigate();
  const { user: authUser } = useAuth();
  const token = localStorage.getItem('token');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      onUpdate();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-user/${user._id}`);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleEdit}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default UserActions;
