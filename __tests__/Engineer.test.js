const Engineer = require('../lib/Engineer');

test('Engineer', () => {
    const Engineer = new Engineer('Jakub', 1 , 'jakub@jakub.com')
    expect(Engineer.officeNumber).toEqual(expect.any(String));
})

test('Employee Role', () => {
    const Engineer = new Engineer('Jakub', 1 , 'jakub@jakub.com')
    expect(Engineer.getRole()).toEqual("Engineer");
})