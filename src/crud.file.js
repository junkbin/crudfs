let fs = require("fs");

const readFileDemo = ()=> {
    try {
        const fileData = fs.readFileSync("test.txt", 'utf-8');

        console.log("FILE_READ :: ",  fileData);
    } catch(err) {
        console.log();
    }
}


const writeFileDemo = () => {
  try {
    const data = `Data / text need to be writtern in text file`;
    fs.writeFileSync("test.txt", data);
    
    console.log("FILE_WRITE :: SUCCESS ");
  } catch (err) {
    console.log();
  }
};


const updateFileDemo = () => {
  try {
    const data = `
        Add more data to file,
        Add more data to file
    `;
    fs.appendFileSync("test.txt", data);

    console.log("FILE_UPDATE :: SUCCESS ");
  } catch (err) {
    console.log();
  }
};




updateFileDemo();