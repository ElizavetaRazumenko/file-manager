import os from "os";
import readline from "readline";
import printDirInfo from "../utils/print_dir_info.js";

const userArg = process.argv.filter(
  (arg) => arg.startsWith("--") && arg.includes("username")
);

const userName = userArg.length ? userArg[0].split("=")[1] : "Unknown user";

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startTheProgram = async () => {
  console.log(`Welcome to the File Manager, ${userName}!`);
  printDirInfo(os.homedir());
};

const endTheProgram = () => {
  console.log(`\n Thank you for using File Manager, ${userName}, goodbye! \n`);
  readlineInterface.close();
  process.exit();
};

readlineInterface.on("SIGINT", endTheProgram);

startTheProgram();
