const { readdirSync, statSync } = require("fs")
const { join, sep } = require("path")

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = readdirSync(dirPath)
  let newFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (statSync(dirPath + sep + file).isDirectory() && !dirPath.includes('strings')) {
      newFiles = getAllFiles(dirPath + sep + file, newFiles)
    } else if (!['index.ts', '.d.ts'].some(x => file.includes(x)) && !dirPath.includes('strings')) {

      const name = file.split('.')[0].replace('data', 'Data').replace('timer', 'Timer');
      const entry = {
        filePath: join(dirPath, file).replace(/\\/g, '/'),
        outFile: join('dist', 'modules', name + '.d.ts').replace(/\\/g, '/'),
        noCheck: false,
        output: {
          // umdModuleName: name,
          noBanner: true,
        }
      }
      newFiles.push(entry)
    }
  })

  return newFiles;
}

module.exports = getAllFiles('src');
