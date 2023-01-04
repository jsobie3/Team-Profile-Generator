const Intern = require('../lib/Intern')

test('Intern', () => {
    const Intern = new Intern('Jakub', 1 , 'jakub@jakub.com')
    expect(Intern.officeNumber).toEqual(expect.any(String));
})

test('Employee Role', () => {
    const Intern = new Intern('Jakub', 1 , 'jakub@jakub.com')
    expect(Intern.getRole()).toEqual("Intern");
})