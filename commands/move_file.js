import path from "path";
import fs, { constants }  from "fs";
import { pipeline } from "stream";

const moveFile = async (currentDir, pathToFile, pathToCopy) => {
  try {
    const absoluteCurrPath = path.resolve(currentDir, pathToFile);
    const fileName = path.basename(absoluteCurrPath);

    await fs.promises.access(absoluteCurrPath, constants.F_OK);

    const absoluteCopyPath = path.resolve(currentDir, pathToCopy, fileName);
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
