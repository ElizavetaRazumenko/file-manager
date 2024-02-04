import { invalidArgOSMessage } from "../utils/messages.js";
import getHostMachineInfo from "./get_host_machine_info.js";
import os from "os";

const osCommandsListener = (command) => {
  try {
    switch (command) {
      case "--EOL":
        console.log(`\nEnd of line: ${JSON.stringify(os.EOL)}\n`);
        break;
      case "--cpus":
        getHostMachineInfo();
        break;
      case "--homedir":
        console.log(`\nHome directory: ${os.homedir()}\n`);
        break;
      case "--username":
        console.log(`\nCurrent system user name: ${os.userInfo().username}\n`);
        break;
      case "--architecture":
        console.log(`\nCPU architecture: ${os.arch()}\n`);
        break;
      default:
        console.log(invalidArgOSMessage);
    }
  } catch {
    console.log(`Operation failed`);
  }
};

export default osCommandsListener;
