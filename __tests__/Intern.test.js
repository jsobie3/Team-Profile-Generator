const Intern = require('../lib/Intern')

test('Intern', () => {
    const intern = new Intern('Jakub', 1 , 'jakub@jakub.com')
    expect(intern.getid()).toEqual(expect.any(Number));
})

test('Employee Role', () => {
    const intern = new Intern('Jakub', 1 , 'jakub@jakub.com')
    expect(intern.getRole()).toEqual("Intern");
})