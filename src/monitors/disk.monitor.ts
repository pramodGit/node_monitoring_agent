import si from "systeminformation";
import { eventBus } from "../events/eventBus.js";
import { EVENTS } from "../types/event.types.js";

export const startDiskMonitor = () => {
  setInterval(async () => {
    const disks = await si.fsSize();

    for (const disk of disks) {
      if (disk.use > 90) {
        eventBus.emit(EVENTS.APP_EVENT, {
          mount: disk.mount,
          usage: disk.use
        });
      }
    }
  }, 60000);
};