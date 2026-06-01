import si from "systeminformation";
import { eventBus } from "../events/eventBus.js";

export const startCpuMonitor = () => {
  setInterval(async () => {
    const load = await si.currentLoad();

    const cpuUsage = Number(load.currentLoad.toFixed(2));

    if (cpuUsage > 80) {
      eventBus.emit("cpu.high", {
        cpuUsage,
        timestamp: new Date()
      });
    }
  }, 10000);
};