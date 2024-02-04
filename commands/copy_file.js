import path from "path";
import fs from "fs";
import { homedir } from "os";
import { pipeline } from "stream";

const copyFile = async (pathToFile, pathToCopy) => {
  try {
    const absoluteCurrPath = path.resolve(homedir(), pathToFile);
    const fileName = path.basename(absoluteCurrPath);
    const absoluteCopyPath = path.resolve(homedir(), pathToCopy, fileName);
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
