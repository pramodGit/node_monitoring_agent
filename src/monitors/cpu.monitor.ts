import si from "systeminformation";
import { eventBus } from "../events/eventBus.js";
import { createEvent } from "../events/eventFactory.js";
import { EVENTS } from "../types/event.types.js";

export const startCpuMonitor = () => {
  setInterval(async () => {
    const load = await si.currentLoad();

    const cpuUsage = Number(load.currentLoad.toFixed(2));

    if (cpuUsage > 80) {
      const event = createEvent(EVENTS.APP_EVENT, {
        usage: cpuUsage
      });

      eventBus.emit(EVENTS.APP_EVENT, event);
    }
  }, 10000);
};