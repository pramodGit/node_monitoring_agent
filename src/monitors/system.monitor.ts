import { getSystemMetrics } from "../services/systemMetrics.service.js";
import { eventBus } from "../events/eventBus.js";

export const startSystemMonitor = () => {
  setInterval(async () => {
    const metrics = await getSystemMetrics();

    eventBus.emit("metrics.collected", metrics);

  }, 5000);
};