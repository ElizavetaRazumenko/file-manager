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
import moveFile from "../commands/move_file.js";
import removeFile from "../commands/remove_file.js";
import osCommandsListener from "./os_commands_listener.js";
import hashCalc from "../commands/hash_calc.js";
import compressFile from "../commands/compress_file.js";
import decompressFile from "../commands/decompress_file.js";

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
      await printListOfFiles(currentDir);
      break;
    case "cat":
      args[0]
        ? await printFileContent(currentDir, args[0])
        : console.log(invalidArgsMessage);
      break;
    case "add":
      args[0]
        ? await createNewFile(currentDir, args[0])
        : console.log(invalidArgsMessage);
      break;
    case "rn":
      args[0] && args[1]
        ? await renameFile(currentDir, args[0], args[1])
        : console.log(invalidArgsMessage);
      break;
    case "cp":
      args[0] && args[1]
        ? await copyFile(currentDir, args[0], args[1])
        : console.log(invalidArgsMessage);
      break;
    case "mv":
      args[0] && args[1]
        ? await moveFile(currentDir, args[0], args[1])
        : console.log(invalidArgsMessage);
      break;
    case "rm":
      args[0] ? await removeFile(currentDir, args[0]) : console.log(invalidArgsMessage);
      break;
    case "os":
      args[0] ? osCommandsListener(args[0]) : console.log(invalidArgsMessage);
      break;
    case "hash":
      args[0] ? await hashCalc(currentDir, args[0]) : console.log(invalidArgsMessage);
      break;
    case "compress":
      args[0] && args[1]
        ? await compressFile(currentDir, args[0], args[1])
        : console.log(invalidArgsMessage);
      break;
    case "decompress":
      args[0] && args[1]
        ? await decompressFile(currentDir, args[0], args[1])
        : console.log(invalidArgsMessage);
      break;
    default:
      console.log(invalidMessage);
      break;
  }

  printDirInfo(currentDir);
};

export default commandsListener;
