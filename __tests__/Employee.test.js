const Employee = require('../lib/Employee')

test('Employee', () => {
    const Employee = new Employee('Jakub', 1 , 'jakub@jakub.com')
    expect(Employee.officeNumber).toEqual(expect.any(String));
})

test('Employee Role', () => {
    const Employee = new Employee('Jakub', 1 , 'jakub@jakub.com')
    expect(InteEmployeern.getRole()).toEqual("Employee");
})