import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const getTodayStocks = () => api.get('/stocks');
export const getDateOptions = () => api.get('/stocks/date');
export const getSidOptions = () => api.get('/stocks/stock');
export const getStock = (sid, date) => api.get('/stocks', { params: {id: sid, date: date} });