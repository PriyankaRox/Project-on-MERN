const fs = require('fs')

async function appendJson(fileName,newData) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function (err, data) {
      if (err) {
        reject({ msg: 'error in saving data' });
      }
      else{
        myArr=  JSON.parse(data);
        myArr.push(newData)
        fs.writeFile("data.json", JSON.stringify(myArr, null, 2), function (err) {
          if (err) {
            reject({ msg: 'error in saving data' });
          }
          else {
            resolve({ msg: 'successfully saved' });
          }
        });
      }
    })
  });
}

async function readJson(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function (err, data) {
      if (err) {
        reject({ msg: 'error in saving data' });
      }
      else{
        myArr=  JSON.parse(data);
        resolve(myArr);
      }
    })
  });
}


module.exports = { appendJson , readJson}