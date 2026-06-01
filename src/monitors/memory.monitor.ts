import si from "systeminformation";
import { eventBus } from "../events/eventBus.js";

export const startMemoryMonitor = () => {
  setInterval(async () => {
    const mem = await si.mem();

    const usage =
      ((mem.total - mem.available) / mem.total) * 100;

    if (usage > 85) {
      eventBus.emit("memory.high", {
        usage: Number(usage.toFixed(2)),
        timestamp: new Date()
      });
    }
  }, 10000);
};