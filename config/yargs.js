const { argv } = require('yargs')
    .option({
        direction: {
            alias: 'd',
            demand: true,
            description: 'name of city',
            type: 'string'
        }
    })
    .help();

module.exports = {
    argv
};