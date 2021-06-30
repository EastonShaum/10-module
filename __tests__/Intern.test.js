const Intern = require('../lib/Intern.js');

test('checks the Intern object', () => {
    const intern = new Intern('Pio', 4, 'IAMNUMBER3@gmail.com', "South Harmon");
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual(expect.any(String));
    

  });