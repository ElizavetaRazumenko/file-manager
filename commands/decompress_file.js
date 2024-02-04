import path from "path";
import zlib from "zlib";
import fs from "fs";
import { homedir } from "os";
import { pipeline } from "stream/promises";

const decompressFile = async (pathToCompressFile, pathToFile) => {
  try {
    const absolutePathToCompressFile = path.resolve(
      homedir(),
      pathToCompressFile
    );

    const fileName = path.basename(
      absolutePathToCompressFile,
      path.extname(absolutePathToCompressFile)
    );

    const absolutePathToFile = path.resolve(homedir(), pathToFile, fileName);

    const readableStream = fs.createReadStream(absolutePathToCompressFile);
    const writableStream = fs.createWriteStream(absolutePathToFile);
    await pipeline(
      readableStream,
      zlib.createBrotliDecompress(),
      writableStream
    );

    console.log("\nFile successfully decompressed\n");
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default decompressFile;
