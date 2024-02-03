import { homedir } from "os";
import printDirInfo from "../utils/print_dir_info.js";
import moveUp from "../commands/move_up.js";

let currentDir = homedir();

const commandsListener = async (command, args) => {
  switch (command) {
    case "up":
      currentDir = await moveUp(currentDir);
      break;
    default:
      console.log(
        `Invalid input. Please check the correctness of the entered command!`
      );
      break;
  }

  printDirInfo(currentDir);
};

export default commandsListener;
