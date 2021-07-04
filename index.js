const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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
    console.log(manager)
    return manager;
  
}

const engineers = [];
const engineerInfo = async () => {
  const engineerAnswers = await inquirer.prompt(engineerQuestions)

    engineers.push(new Engineer(engineerAnswers.name,engineerAnswers.id,engineerAnswers.email,engineerAnswers.github))

    console.log(engineers)
    if (engineerAnswers.confirmAddEngineer) {
      await engineerInfo()
    } else {
      return engineers;
    }
  
}


const employees = [];
const employeeInfo = async () => {
  const employeeAnswers = await inquirer.prompt(employeeQuestions)

    employees.push(new Employee(employeeAnswers.name,employeeAnswers.id,employeeAnswers.email))
  
    if (employeeAnswers.confirmAddemployee) {
      await employeeInfo()
    } else {
      return employees;
    }
  
}


const interns = [];
const internInfo = async () => {
  const internAnswers = await inquirer.prompt(internQuestions)

    interns.push(new Intern(internAnswers.name,internAnswers.id,internAnswers.email,internAnswers.school))
  
    if (internAnswers.confirmAddintern) {
      await internInfo()
    } else {
      return interns;
    }
  
}



  function writeToFile(data) {
    console.log("Writing file...")

    let filePath = './teamprofile.html'

    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, err => {
        if (err) {
          reject(err);
          return;
        }
            resolve({
              ok: true,
              message: 'File created!'
            });
        });        
    });
    
}

async function init() {
  let userInfo = []
  const manager = await managerInfo()
   userInfo.push(manager)

   const engineers = await engineerInfo()
   console.log(engineers)
   userInfo.push(engineers)
  //  userInfo.push(employeeInfo())
  //  userInfo.push(internInfo())

  //[Manager, [Engineers], [Interns]]
  // [Manager, Engineers, Engineers]
    console.log(userInfo)
    
    //let data = generateHtml(userInfo);
    //console.log(data)
        
    //writeToFile(data);
};

// Function call to initialize app
init();
