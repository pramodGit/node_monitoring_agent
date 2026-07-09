import si from "systeminformation";
import { eventBus } from "../events/eventBus.js";
import dotenv from "dotenv";
import { EVENTS } from "../types/event.types.js";

const processStatus = new Map<string, boolean>();
dotenv.config();

export const startProcessMonitor = () => {
  console.log("Process Monitor Started");
  

  setInterval(async () => {
    try {
      const processes = await si.processes();

      const monitored = (process.env.MONITORED_PROCESSES || "").split(",");

      for (const processName of monitored) {

        const exists = processes.list.some(
          p => p.name.toLowerCase().includes(processName.toLowerCase())
        );

        const previous = processStatus.get(processName);

        // Down event (only once)
        if (previous !== false && !exists) {
          eventBus.emit(EVENTS.APP_EVENT, {
            process: processName,
            timestamp: new Date().toISOString()
          });
        }

        // Recovery event
        if (previous === false && exists) {
          eventBus.emit(EVENTS.APP_EVENT, {
            process: processName,
            timestamp: new Date().toISOString()
          });
        }

        processStatus.set(processName, exists);
      }

    } catch (error) {
      console.error("Process Monitor Error", error);
    }
  }, 10000);
};