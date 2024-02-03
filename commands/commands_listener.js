import { homedir } from "os";
import printDirInfo from "../utils/print_dir_info.js";
import moveUp from "../commands/move_up.js";
import changeDirectory from "../commands/change_directory.js";

let currentDir = homedir();

const invalidMessage =
  "\nInvalid input. Please check the correctness of the entered command!\n";
const invalidArgsMessage = "\nInvalid input. Required arguments missing!\n";

const commandsListener = async (command, args) => {
  switch (command) {
    case "up":
      currentDir = await moveUp(currentDir);
      break;
    case "cd":
      args[0]
        ? (currentDir = await changeDirectory(currentDir, args[0]))
        : console.log(invalidArgsMessage);
      break;
    default:
      console.log(invalidMessage);
      break;
  }

  printDirInfo(currentDir);
};

export default commandsListener;
