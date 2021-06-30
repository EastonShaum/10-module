const Employee = require('../lib/Employee.js');

test('checks the Employee object', () => {
    const employee = new Employee('Snoop Dogg', 2, 'IAMNUMBERTWO@gmail.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual(expect.any(String));
    
  });