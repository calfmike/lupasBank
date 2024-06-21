import React, { useState } from 'react';
import axios from 'axios';

const ModifyUserModal = ({ user, onClose, onUserUpdated }) => {
  const [onboardingStatus, setOnboardingStatus] = useState(user.onboardingStatus);
  const [email, setEmail] = useState(user.email);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [action, setAction] = useState('');

  const handleReject = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/reject/${user._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.status === 200) {
        const updatedUser = { ...user, onboardingStatus: 'rejected' };
        setOnboardingStatus('rejected');  // Update the local state
        onUserUpdated(updatedUser);
        onClose();
      }
    } catch (error) {
      console.error('Failed to reject user', error);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/users/${user._id}`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.status === 200) {
        const updatedUser = { ...user, email };
        onUserUpdated(updatedUser);
        onClose();
      }
    } catch (error) {
      console.error('Failed to edit user', error);
    }
  };

  const openConfirmModal = (action) => {
    setAction(action);
    setShowConfirmModal(true);
  };

  const confirmAction = () => {
    if (action === 'save') {
      handleEdit();
    } else if (action === 'reject') {
      handleReject();
    }
    setShowConfirmModal(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Modify User {user.firstName} {user.lastName}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Onboarding Status</label>
          <input
            type="text"
            value={onboardingStatus}
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => openConfirmModal('save')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => openConfirmModal('reject')}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reject
          </button>
        </div>
      </div>
      {showConfirmModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
            <p>Are you sure you want to {action === 'save' ? 'save changes' : 'reject this user'}?</p>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmAction}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModifyUserModal;
