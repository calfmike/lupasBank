import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginAdmin = async ({ username, password }) => {
  const response = await axios.post(`${API_URL}/admin/login`, { username, password });
  const { token } = response.data;
  localStorage.setItem('token', token); // Guardar solo 'token'
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return response.data;
};

// Configurar axios para enviar el token en cada solicitud
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
