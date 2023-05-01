const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function renderDocument() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylescheet" href="./style.css">
    </head>
    <body>

    </body>
    </html>`
}

module.exports = { renderDocument };