import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const tasksApi = {
  async getTasks() {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
  },
  async addTask(task) {
        const response = await axios.post(`${API_URL}/tasks`, task);
        return response.data;
  },
};

export default tasksApi;