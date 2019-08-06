const axios = require('axios');

// axios.defaults.baseURL = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Venezuela';
axios.defaults.headers.common['x-rapidapi-key'] = 'acabe71352mshd71c2efcd993d70p175e54jsn3f6ca013214b';

module.exports = {
    axios
};