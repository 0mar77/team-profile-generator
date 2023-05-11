const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function renderDocument(dataOne, dataTwo, dataThree) {
    const manager = new Manager(dataOne.name, dataOne.id, dataOne.email, dataOne.officeNumber).render();
    
    const engineers = [];
    const renderEngineers = [];

    const interns = [];
    const renderInterns = [];

    for(let i = 0; i < dataTwo.length; i++) {
        
        engineers.push(new Engineer(dataTwo[i].name, dataTwo[i].id, dataTwo[i].email, dataTwo[i].github))

    }
    
    for(let i = 0; i < engineers.length; i++) {
        renderEngineers.push(engineers[i].render())
    }

    for(let i = 0; i < dataThree.length; i++) {
        
        interns.push(new Intern(dataThree[i].name, dataThree[i].id, dataThree[i].email, dataThree[i].school))

    }

    for(let i = 0; i < interns.length; i++) {
        renderInterns.push(interns[i].render())
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${manager}
            ${renderEngineers}
            ${renderInterns}
        </main>
        <script src="../lib/cli.js"></script>
    </body>
    </html>`;
}

module.exports = { renderDocument };
