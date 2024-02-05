import path from "path";
import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream/promises";

const compressFile = async (currentDir, pathToFile, pathToCompressFile) => {
  try {
    const absolutePathToFile = path.resolve(currentDir, pathToFile);
    const fileName = path.basename(absolutePathToFile);

    const absolutePathToCompressFile = path.resolve(
      currentDir,
      pathToCompressFile,
      `${fileName}.br`
    );

    const readableStream = fs.createReadStream(absolutePathToFile, "utf-8");
    const writableStream = fs.createWriteStream(absolutePathToCompressFile);
    await pipeline(readableStream, zlib.createBrotliCompress(), writableStream);

    console.log("\nFile successfully compressed\n");
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default compressFile;
