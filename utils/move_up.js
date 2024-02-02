import path, { resolve } from 'path';
import fs from 'fs/promises';

const moveUp = async (currDir) => {
  let absolutePath = resolve(path.dirname(currDir));

  try {
    const statistics = await fs.stat(absolutePath);
    if (statistics.isDirectory()) {
      return absolutePath;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export default moveUp;

