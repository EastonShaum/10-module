const generateManagerTile =  (object) => {
    return `
    <div>
    `
}


const generateHtml = (data) => {
    // destructure page data by section
    console.log("data", data)
    const { manager, engineer, employee, intern } = data;
  
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
        ${generateManagerTile(manager)}
        ${engineer.name}
        ${employee}
        ${intern}

      </main>
      <footer class="container text-center py-3">
        
      </footer>
    </body>
    </html>
    `;
};


// export function to generate entire page
module.exports = generateHtml;