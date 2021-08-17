import axios from 'axios';

const BASE_URL = 'http://18.224.33.76:3000/api/';
export const Api = {
    addEntry: (data) => {
        return axios({
            method: 'post',
            url: 'add_entry',
            data: data,
            baseURL: BASE_URL
        });
    },

    getEntries: (data) => {
        return axios({
            method: 'get',
            url: 'get_entries',
            baseURL: BASE_URL
        });    
    },

    getCoinListings: () => {
        return axios({
            method: 'get',
            url: 'coin_listings',
            baseURL: BASE_URL
        });    
    }
};

export default Api;