import os from "os";
import readline from "readline";
import util from "util";
import printDirInfo from "../utils/print_dir_info.js";
import commandsListener from "../commands/commands_listener.js";

const userArg = process.argv.filter(
  (arg) => arg.startsWith("--") && arg.includes("username")
);

const userName = userArg.length ? userArg[0].split("=")[1] : "Unknown user";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const endTheProgram = () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye! \n`);
  rl.close();
  process.exit();
};

rl.on("SIGINT", endTheProgram);

const startTheProgram = async () => {
  console.log(`Welcome to the File Manager, ${userName}!`);
  printDirInfo(os.homedir());

  while (true) {
    try {
      const userInputValue = await util
        .promisify(rl.question)
        .call(rl, "Enter the command into the console \n");

      const [userCommand, ...userArgs] = userInputValue.split(" ");

      userCommand === "exit" || userCommand === ".exit"
        ? endTheProgram()
        : await commandsListener(userCommand, userArgs);
    } catch (e) {
      console.error(e);
    }
  }
};

startTheProgram();
