import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001', // Базовый URL для всех запросов
    timeout: 1000, // Таймаут для запроса (1 секунда)
    headers: {
        'Content-Type': 'application/json', // Заголовки по умолчанию
        'Authorization': 'Bearer YOUR_TOKEN', // Опционально: токен авторизации
    },
    withCredentials: true, // Для передачи cookies между клиентом и сервером
});