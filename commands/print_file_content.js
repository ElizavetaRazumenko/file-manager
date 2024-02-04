import { homedir } from "os";
import fs from "fs";
import path from "path";

const printFileContent = async (pathFoFile) => {
  try {
    const currPath = path.resolve(homedir(), pathFoFile);

    await new Promise((res, rej) => {
      const readableStream = fs.createReadStream(currPath, "utf-8");
      let data = "";

      readableStream.on("data", (chunk) => {
        data += chunk;
      });

      readableStream.on("end", () => {
        console.log(`\n${data}\n`);
        res();
      });

      readableStream.on("error", () => {
        console.log("\nOperation failed\n");
        rej();
      });
    });
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default printFileContent;
