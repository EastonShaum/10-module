const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


const generateHtml = require('./utils/generateHtml');
const { writeFile, copyFile } = require('./utils/generate-site');

//const generateHtml = require('./src/generateHtml'); 

const inquirer = require('inquirer');

const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a manager name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the managers id? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an id for the manager!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an email for the manager!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the managers office number? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter the managers office number!');
          return false;
        }
      }
    }
  ];

  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a engineer name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineers id? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an id for the engineer!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineers email? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an email for the engineer!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineers github account? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter the engineers github account!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEngineer',
      message: 'Would you like to enter another engineer?',
      default: false
    }
  ];

  const employeeQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a employee name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employees id? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an id for the employee!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employees email? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an email for the employee!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the employees github account? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter the employees github account!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to enter another employee?',
      default: false
    }
  ];

  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the interns name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a intern name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the interns id? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an id for the intern!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the interns email? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter an email for the intern!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the interns School? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter the interns School!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddIntern',
      message: 'Would you like to enter another intern?',
      default: false
    }
  ];

const managerInfo = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions)
  
    const manager = new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.officeNumber)
    
    return manager;
  
}

const engineers = [];
let countEngineers = 0;
const engineerInfo = async () => {
  
  const engineerAnswers = await inquirer.prompt(engineerQuestions)

    engineers.push(new Engineer(engineerAnswers.name,engineerAnswers.id,engineerAnswers.email,engineerAnswers.github))

    
    if (engineerAnswers.confirmAddEngineer) {
      countEngineers += 1;
      return engineerInfo();
    } else {
      countEngineers += 1;
      return engineers;
    }
  
}


const employees = [];
let countEmployees = 0;
const employeeInfo = async () => {
  const employeeAnswers = await inquirer.prompt(employeeQuestions)

    employees.push(new Employee(employeeAnswers.name,employeeAnswers.id,employeeAnswers.email,employeeAnswers.github))
  
    if (employeeAnswers.confirmAddEmployee) {
      countEmployees += 1;
      return employeeInfo();
    } else {
      countEmployees += 1;
      return employees;
    }
  
}


const interns = [];
let countInterns = 0;
const internInfo = async () => {
  const internAnswers = await inquirer.prompt(internQuestions)

    interns.push(new Intern(internAnswers.name,internAnswers.id,internAnswers.email,internAnswers.school))
  
    if (internAnswers.confirmAddIntern) {
      countInterns += 1;
      return internInfo()
    } else {
      countInterns += 1;
      return interns;
    }
  
}

// const userInfo = []
//   userInfo.push(new Manager(
//     name = 'Matt',
//     id = '1',
//     email = 'matt@gmail.com',
//     officeNumber = '1'
//   )),
//   userInfo.push( new Engineer(
//     name = 'Josh',
//     id = '2',
//     email = 'josh@gmail.com',
//     github = 'josh'
//   )),
//   userInfo.push( new Engineer(
//     name = 'Joshy',
//     id = '3',
//     email = 'joshy@gmail.com',
//     github = 'joshy'
//   )),
//   userInfo.push( new Employee( name = 'Mike', id = '4', email = 'mike@gmail.com' )),
//   userInfo.push( new Employee( name = 'Eric', id = '5', email = 'eric@gmail.com' )),
//   userInfo.push( new Intern(
//     name = 'Dave',
//     id = '6',
//     email = 'dave@gmail.com',
//     school = 'U of u'
//   )),
//   userInfo.push( new Intern(
//     name = 'Tom',
//     id = '7',
//     email = 'tom@gmail.com',
//     school = 'Utah State'
//   ))

async function init() {
  let userInfo = []
  const manager = await managerInfo()
  userInfo.push(manager);

  const engineersInfo = await engineerInfo()
  userInfo = [...userInfo, ...engineersInfo];

  const employeesInfo = await employeeInfo()
  userInfo = [...userInfo, ...employeesInfo];

  const internsInfo = await internInfo()
  userInfo = [...userInfo, ...internsInfo];

  console.log("userInfo",userInfo)
    //, countEngineers, countEmployees, countInterns
  let data = generateHtml(userInfo, countEngineers, countEmployees, countInterns);
  //console.log(data)
        
  copyFile();
  writeFile(data);
};

// Function call to initialize app
init();
