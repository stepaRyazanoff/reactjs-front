import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001', // Базовый URL для всех запросов
    headers: {
        'Content-Type': 'application/json', // Заголовки по умолчанию
        'Authorization': 'Bearer YOUR_TOKEN', // Опционально: токен авторизации
    },
    withCredentials: true, // Для передачи cookies между клиентом и сервером
});

export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3', // Базовый URL для всех запросов
    headers: {
        'Accept': 'application/json', // Заголовки по умолчанию
        'API-KEY': 'x-cg-pro-api-key CG-SWQVapn52Sr17948UytyZgHA', // Передача API-ключа через заголовок
    },
});

