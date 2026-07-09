import { getSystemMetrics } from "../services/systemMetrics.service.js";
import { eventBus } from "../events/eventBus.js";
import { EVENTS } from "../types/event.types.js";

export const startSystemMonitor = () => {
  setInterval(async () => {
    const metrics = await getSystemMetrics();

    eventBus.emit(EVENTS.APP_EVENT, metrics);

  }, 5000);
};