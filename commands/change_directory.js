import path from "path";
import fs from "fs/promises";

const changeDirectory = async (currDir, targetPath) => {
  let newPath;

  if (/^[a-zA-Z]:$/.test(targetPath)) {
    newPath = path.resolve(targetPath, "\\");
  } else if (targetPath === "..") {
    newPath = path.dirname(currDir);
  } else newPath = path.resolve(currDir, targetPath);

  try {
    const stats = await fs.stat(newPath);
    if (stats.isDirectory()) {
      return newPath;
    }
  } catch {
    console.log("\nOperation failed\n");
  }
  return currDir;
};

export default changeDirectory;
