const axios = require('axios');

const getWheater = async (lat, lon, units = 'metric', lang = 'es') => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: { lat, lon, units, lang, appid: '336f1ce7fd82abe63b9099479035a7e3', }
    });

    if (resp.status != 200)
        throw new Error(`Status no 200 (OK), ${resp}`);

    return resp.data.main;
};

module.exports = {
    getWheater,
};