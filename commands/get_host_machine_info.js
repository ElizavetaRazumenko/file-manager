import { cpus } from "os";

const getHostMachineInfo = () => {
  const cpusData = cpus().map((item) => ({
    Model: item.model,
    "Clock rate": `${(item.speed / 1000).toFixed(2)} GHz`,
  }));

  console.log(`\nOverall amount of CPUS: ${cpusData.length}`);

  cpusData.forEach((data, index) => {
    console.log(`\nCPUS ${index + 1}:`);

    for (let [key, value] of Object.entries(data)) {
      console.log(`${key} is ${value}`);
    }
  });
};

export default getHostMachineInfo;
