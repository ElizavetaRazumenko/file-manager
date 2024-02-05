import path from "path";
import fs, { constants } from "fs";
import { pipeline } from "stream";

const copyFile = async (currentDir, pathToFile, pathToCopy) => {
  try {
    const absoluteCurrPath = path.resolve(currentDir, pathToFile);
    const fileName = path.basename(absoluteCurrPath);

    await fs.promises.access(absoluteCurrPath, constants.F_OK);

    const absoluteCopyPath = path.resolve(currentDir, pathToCopy, fileName);
    const readableStream = fs.createReadStream(absoluteCurrPath, "utf-8");
    const writableStream = fs.createWriteStream(absoluteCopyPath);

    await new Promise((res, rej) => {
      pipeline(readableStream, writableStream, (err) => {
        if (err) rej(new Error());
        console.log("\nFile copied successfully\n");
        res();
      });
    });
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default copyFile;
