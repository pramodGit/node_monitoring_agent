import si from "systeminformation";
import { eventBus } from "../events/eventBus.js";
import { EVENTS } from "../types/event.types.js";

export const startMemoryMonitor = () => {
  setInterval(async () => {
    const mem = await si.mem();

    const usage =
      ((mem.total - mem.available) / mem.total) * 100;

    if (usage > 85) {
      eventBus.emit(EVENTS.APP_EVENT, {
        usage: Number(usage.toFixed(2)),
        timestamp: new Date()
      });
    }
  }, 10000);
};