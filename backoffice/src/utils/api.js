import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginAdmin = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/admin/login`, userData);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

// Puedes agregar más funciones de la API aquí según sea necesario
