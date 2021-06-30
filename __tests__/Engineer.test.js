const Engineer = require('../lib/Engineer.js');

test('checks the Engineer object', () => {
    const engineer = new Engineer('Pio', 3, 'IAMNUMBER3@gmail.com', "piopio");
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(expect.any(String));
    

  });