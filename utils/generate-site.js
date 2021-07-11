const fs = require('fs');

// writing files
const writeFile = (data) => {
  console.log("Writing file...")

  let filePath = './dist/teamprofile.html'

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

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};

module.exports = { writeFile, copyFile };
