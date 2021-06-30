const Manager = require('../lib/Manager.js');

test('checks the Manager object', () => {
    const manager = new Manager('John J', 1, 'IAMNUMBERONE@gmail.com', 100);
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual(expect.any(String));
    

  });