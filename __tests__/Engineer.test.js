const Engineer = require('../lib/Engineer');

test('Engineer', () => {
    const engineer = new Engineer('Engineer', 1 , 'jakub@jakub.com', "github")
    expect(engineer.getgithub()).toEqual(expect.any(String));
})

test('Employee Role', () => {
    const engineer = new Engineer('Jakub', 1 , 'jakub@jakub.com')
    expect(engineer.getRole()).toEqual("Engineer");
})