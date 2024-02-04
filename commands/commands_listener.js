import { homedir } from "os";
import { invalidMessage, invalidArgsMessage } from "../utils/messages.js";
import printDirInfo from "../utils/print_dir_info.js";
import moveUp from "../commands/move_up.js";
import changeDirectory from "../commands/change_directory.js";
import printListOfFiles from "../commands/print_list_of_files.js";
import printFileContent from "../commands/print_file_content.js";
import createNewFile from "../commands/create_new_file.js";
import renameFile from "../commands/rename_file.js";
import copyFile from "../commands/copy_file.js";

let currentDir = homedir();

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
    case "ls":
      const listInfo = await printListOfFiles(currentDir);
      console.table(listInfo);
      break;
    case "cat":
      args[0]
        ? await printFileContent(args[0])
        : console.log(invalidArgsMessage);
      break;
    case "add":
      args[0]
        ? await createNewFile(currentDir, args[0])
        : console.log(invalidArgsMessage);
      break;
    case "rn":
      args[0] && args[1]
        ? await renameFile(args[0], args[1])
        : console.log(invalidArgsMessage);
      break;
    case "cp":
      args[0] && args[1]
        ? await copyFile(args[0], args[1])
        : console.log(invalidArgsMessage);
      break;
    default:
      console.log(invalidMessage);
      break;
  }

  printDirInfo(currentDir);
};

export default commandsListener;
