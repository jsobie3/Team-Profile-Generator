const Manager = require('../lib/Manager')

test('Manager', () => {
    const manager = new Manager('Jakub', 1 , 'jakub@jakub.com', 12)
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test('Employee Role', () => {
    const manager = new Manager('Jakub', 1 , 'jakub@jakub.com')
    expect(manager.getRole()).toEqual("Manager");
})