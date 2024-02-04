import path from "path";
import fs from "fs";
import { homedir } from "os";
import { pipeline } from "stream";

const moveFile = async (pathToFile, pathToCopy) => {
  try {
    const absoluteCurrPath = path.resolve(homedir(), pathToFile);
    const fileName = path.basename(absoluteCurrPath);
    const absoluteCopyPath = path.resolve(homedir(), pathToCopy, fileName);
    const readableStream = fs.createReadStream(absoluteCurrPath, "utf-8");
    const writableStream = fs.createWriteStream(absoluteCopyPath);

    await new Promise((res, rej) => {
      pipeline(readableStream, writableStream, async (err) => {
        if (err) rej(new Error());
        await fs.promises.unlink(absoluteCurrPath);
        console.log("\nFile transferred successfully\n");
        res();
      });
    });
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default moveFile;
