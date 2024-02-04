import fs from "fs";
import path from "path";

const createNewFile = async (currDir, fileName) => {
  try {
    const absolutePath = path.resolve(currDir);
    const filePath = path.join(absolutePath, fileName);

    await new Promise((res, rej) => {
      const writableStream = fs.createWriteStream(filePath);
      writableStream.end();

      writableStream.on("finish", () => {
        console.log(`\nThe file was created successfully\n`);
        res();
      });

      writableStream.on("error", () => {
        console.log("\nOperation failed\n");
        rej();
      });
    });
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default createNewFile;
