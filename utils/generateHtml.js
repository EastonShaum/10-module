const generateManagerTile =  (manager) => {
    return `
    <div class="card">
      <div class="card-header">
        ${manager.name}
        <br>
        Manager
      </div>
      <div class="card-body">
        Id: ${manager.id}
        <br>Email: <a href=https://${manager.email}>${manager.email}</a>
        <br>Office Number: ${manager.officeNumber}
      </div>
    </div>
    `
}

const generateEngineerTile =  (Engineer) => {
  return `
  <div class="card">
      <div class="card-header">
        ${Engineer.name}
        <br>
        Engineer
      </div>
      <div class="card-body">
        Id: ${Engineer.id}
        <br>Email: <a href=https://${Engineer.email}>${Engineer.email}</a>
        <br>Github: <a href=https://github.com/${Engineer.github}>${Engineer.github}</a>
      </div>
  </div>
  `
}

const generateEmployeeTile =  (Employee) => {
  return `
  <div class="card">
      <div class="card-header">
        ${Employee.name}
        <br>
        Employee
      </div>
      <div class="card-body">
        Id: ${Employee.id}
        <br>Email: <a href=https://${Employee.email}>${Employee.email}</a>
        <br>Github: <a href=https://github.com/${Employee.github}>${Employee.github}</a>
      </div>
  </div>
  `
}

const generateInternTile =  (Intern) => {
  return `
  <div class="card">
      <div class="card-header">
        ${Intern.name}
        <br>
        Intern
      </div>
      <div class="card-body">
        Id: ${Intern.id}
        <br>Email: <a href=https://${Intern.email}>${Intern.email}</a>
        <br>School: ${Intern.school}
      </div>
    </div>
  `
}


const generateHtml = (data, countEngineers, countEmployees, countInterns) => {
    // destructure page data by section
    // countEngineers = 2
    // countEmployees = 2
    // countInterns = 2

    console.log(countEngineers, countEmployees, countInterns)
    console.log("data", data)
    
    console.log(data[1])
    console.log(data[2])
    console.log(data[3])
    console.log(data[4])

    let engineerHtml = ``;
    for (let i = 0;i < countEngineers;i++) {
      engineerHtml += generateEngineerTile(data[i + 1])
    }

    let employeeHtml = ``;
    for (let i = 0;i < countEmployees;i++) {
      employeeHtml += generateEmployeeTile(data[i + 1 + countEngineers])
    }

    let internHtml = ``;
    for (let i = 0;i < countInterns;i++) {
      internHtml += generateInternTile(data[i + 1 + countEngineers + countEmployees])
    }
    
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-center align-center py-3">
          <h1 class="page-title text-light py-2 px-3">My Team</h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateManagerTile(data[0])}
        ${engineerHtml}
        ${employeeHtml}
        ${internHtml}

        

      </main>
      <footer class="container text-center py-3">
        
      </footer>
    </body>
    </html>
    `;
};


// export function to generate entire page
module.exports = generateHtml;
