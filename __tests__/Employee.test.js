const Employee = require('../lib/Employee')

test('Employee', () => {
    const employee = new Employee('Jakub', 1 , 'jakub@jakub.com')
    expect(employee.getid()).toEqual(expect.any(Number));
})

test('Employee Role', () => {
    const employee = new Employee('Jakub', 1 , 'jakub@jakub.com')
    expect(employee.getRole()).toEqual("Employee");
})