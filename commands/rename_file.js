import { homedir } from "os";
import path from "path";
import fs from "fs/promises";
import { constants } from "fs";

const renameFile = async (pathToFile, fileName) => {
  try {
    const absoluteCurrPath = path.resolve(homedir(), pathToFile);
    await fs.access(absoluteCurrPath, constants.F_OK);

    const folderPath = path.dirname(absoluteCurrPath);
    const newFilePath = path.resolve(folderPath, fileName);
    await fs.rename(absoluteCurrPath, newFilePath);
    console.log('The file was successfully renamed');
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default renameFile;
