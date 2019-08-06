const { axios } = require('../config/axios');
const colors = require('colors/safe');

const getLocation = async (location) => {

    console.log(`Searching for: ${colors.yellow(location)}\n`);

    let result = await axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', {
        params: {
            location: location,
        }
    });

    if (result.status != 200)
        throw new Error(colors.red(`Error status request, ${result.status}`));

    if (!result.data.Results.length > 0)
        throw new Error(colors.red(`No search results for ${location}`));

    return result.data.Results[0];
};

module.exports = {
    getLocation
};