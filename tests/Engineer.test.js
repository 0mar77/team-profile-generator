const Engineer = require('../lib/Engineer');

describe('New engineer', () => {
    test('Should creates a new engineer', () => {
        const newEngineer = new Engineer('John', 1, '123@123.com', 'github.com/John');
        const expectedHTML = [
            `<div class="cards">
        <h2 id="manager-name">John</h2>
        <h3>👓 Engineer</span>
        <section>
            <div id="id" class="employee-info">ID: 1</div>
            <div id="email" class="employee-info">Email:
                <a href=mailto:123@123.com>123@123.com</a>
            </div>
            <div class="employee-info">Github: github.com/John</div>
        </section>
        </div>`
        ].join('');
        expect(newEngineer.getGithub()).toEqual('github.com/John');
        expect(newEngineer.getRole()).toEqual('Engineer');
        expect(newEngineer.render()).toEqual(expectedHTML);
    })
})