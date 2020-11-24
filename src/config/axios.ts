import axios from 'axios';

const devURL: string = 'http://localhost:3001';

const apiClient = axios.create({ baseURL: devURL });

export { apiClient };
