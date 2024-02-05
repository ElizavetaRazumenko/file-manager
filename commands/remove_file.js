import path from "path";
import fs from "fs/promises";

const removeFile = async (currentDir, pathToFile) => {
  try {
    const absoluteCurrPath = path.resolve(currentDir, pathToFile);
    await fs.unlink(absoluteCurrPath);
    console.log("\nThe file was successfully deleted\n");
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default removeFile;
