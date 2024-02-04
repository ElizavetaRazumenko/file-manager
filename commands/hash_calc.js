import path from "path";
import fs from "fs/promises";
import crypto from "crypto";
import { homedir } from "os";

const hashCalc = async (pathToFile) => {
  try {
    const absoluteFilePath = path.resolve(homedir(), pathToFile);
    const data = await fs.readFile(absoluteFilePath, "utf8");
    const hash = crypto.createHash("sha256").update(data).digest("hex");

    console.log(`\n${hash}\n`);
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default hashCalc;
