import fs from "fs/promises";
import path from "path";

const printListOfFiles = async (currDir) => {
  try {
    const dirContent = await fs.readdir(currDir);
    const files = [];
    const directories = [];

    for (let dirItem of dirContent) {
      const itemPath = path.join(currDir, dirItem);
      const stats = await fs.stat(itemPath);
      if (stats.isDirectory()) {
        directories.push(dirItem);
      } else {
        files.push(dirItem);
      }
    }

    directories.sort();
    files.sort();

    const tableData = [];

    directories.forEach((directory) =>
      tableData.push({ Name: directory, Type: "Directory" })
    );
    files.forEach((file) => tableData.push({ Name: file, Type: "File" }));

    return tableData;
  } catch {
    console.log("\nOperation failed\n");
  }
};

export default printListOfFiles;
