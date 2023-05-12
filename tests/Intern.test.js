const Intern = require('../lib/Intern');

describe('New Intern', () => {
    test('Should create a new intern', () => {
        const newIntern = new Intern('John', 1, '123@123.com', 'Tec de Monterrey');
        const expectedHtml = [
            `<div class="cards">
        <h2>John</h2>
        <h3>👨‍🎓 Intern</span>
        <section>
        <div id="id" class="employee-info">ID: 1</div>
        <div id="email" class="employee-info">Email: 
            <a href=mailto:123@123.com>123@123.com</a>
        </div>
        <div id="office-number" class="employee-info">School: Tec de Monterrey</div>
        </section>
        </div>`
        ].join('');
        expect(newIntern.getSchool()).toEqual('Tec de Monterrey');
        expect(newIntern.getRole()).toEqual('Intern');
        expect(newIntern.render()).toEqual(expectedHtml);
    })
})