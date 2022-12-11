import { readdirSync, statSync } from "fs"
import { join, sep } from "path"

const getAllFiles = (dirPath: string, arrayOfFiles?: {[x:string]: string}) => {
  const files = readdirSync(dirPath)
  let newFiles = arrayOfFiles || {}

  files.forEach((file) => {
    if (statSync(dirPath + sep + file).isDirectory() && !dirPath.includes('strings')) {
      newFiles = getAllFiles(dirPath + sep + file, newFiles)
    } else if (!['index.ts', '.d.ts'].some(x => file.includes(x)) && !dirPath.includes('strings')) {
      const fileName = file.split('.')[0].replace('data', 'Data').replace('timer', 'Timer');
      const entry = {}
      entry[fileName] = join(dirPath, file);
      Object.assign(newFiles, {...entry})
    }
  })

  return newFiles
}

const entries = getAllFiles('src');

export default entries
