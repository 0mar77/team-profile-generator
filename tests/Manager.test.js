const Manager = require('../lib/Manager');

describe('New Manager', () => {
    test('Should create a new manager', () => {
        const newManager = new Manager('John', 1, '123@123.com', 1);
        const expectedHTML = [
            `<div class="cards">
    <h2 id="manager-name">John</h2>
    <h3>☕ Manager</span>
    <section>
        <div id="id" class="employee-info">ID: 1</div>
        <div id="email" class='employee-info'>Email:
            <a href=mailto:123@123.com>123@123.com</a>
        </div>
        <div id="office-number" class="employee-info">Office Number: 1</div>
    </section>
    </div>`
        ].join('');
        expect(newManager.getRole()).toEqual('Manager');
        expect(newManager.render()).toEqual(expectedHTML);
    })
})