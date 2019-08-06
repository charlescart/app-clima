const { argv } = require('./config/yargs');
const { getLocation } = require('./src/location');
const { getWheater } = require('./src/wheater');
const colors = require('colors');

const getInfo = async (direction) => {
    let locationWhitCoord = await getLocation(direction);
    let wheater = await getWheater(locationWhitCoord.lat, locationWhitCoord.lon);

    return { name: locationWhitCoord.name, temp: wheater.temp }
};

getInfo(argv.direction)
    .then((res) => {
        console.log(`La temperatura en ${colors.yellow(res.name)} es de ${colors.yellow(res.temp)} ℃`);
    })
    .catch((err) => {
        console.log(err);
    });