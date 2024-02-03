import path from "path";
import fs from "fs/promises";

const moveUp = async (currDir) => {
  const absoluteCurrPath = path.resolve(currDir);
  const parentDir = path.dirname(absoluteCurrPath);

  if (parentDir === absoluteCurrPath) return absoluteCurrPath;

  try {
    const stats = await fs.stat(parentDir);
    if (stats.isDirectory()) {
      return parentDir;
    }
  } catch {
    console.log("Operation failed");
  }
};

export default moveUp;
