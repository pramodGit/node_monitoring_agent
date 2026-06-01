import { eventBus } from "../events/eventBus.js";

export const registerMetricsListener = () => {

  eventBus.on("metrics.collected", (metrics) => {

    console.log(
      `[Metrics] CPU=${metrics.cpu.usage}% | MEM=${metrics.memory.usedPercent}%`
    );

  });

};