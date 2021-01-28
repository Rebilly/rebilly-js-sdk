const fs = require('fs');

const filename = './typings/rebilly-js-sdk/index.d.ts';

fs.readFile(filename, 'utf8', (error, data) => {
    if (error) throw error;
    data = data.replace('declare module \"index\"', 'declare module \"rebilly-js-sdk\"');

    fs.writeFile(filename, data, 'utf8', (err) => {
        if (err) return console.log(err);
    });
});