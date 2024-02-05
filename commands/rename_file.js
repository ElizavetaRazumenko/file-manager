import path from "path";
import fs from "fs/promises";
import { constants } from "fs";

const renameFile = async (currentDir, pathToFile, fileName) => {
  try {
    const absoluteCurrPath = path.resolve(currentDir, pathToFile);
    await fs.access(absoluteCurrPath, constants.F_OK);

    const folderPath = path.dirname(absoluteCurrPath);
    const newFilePath = path.resolve(folderPath, fileName);
    await fs.rename(absoluteCurrPath, newFilePath);
    console.log('\nThe file was successfully renamed\n');
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default renameFile;
