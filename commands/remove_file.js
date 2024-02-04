import path from "path";
import fs from "fs/promises";
import { homedir } from "os";

const removeFile = async (pathToFile) => {
  try {
    const absoluteCurrPath = path.resolve(homedir(), pathToFile);
    await fs.unlink(absoluteCurrPath);
    console.log("\nThe file was successfully deleted\n");
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default removeFile;
