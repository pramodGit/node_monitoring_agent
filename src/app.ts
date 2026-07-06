import { connectProducer } from "./kafka/producer.js";

import { registerKafkaBridge } from "./kafka/eventBridge.js";

import { registerAlerts } from "./alerts/alert.service.js";
import { registerMetricsListener } from "./listeners/metrics.listener.js";

import { startCpuMonitor } from "./monitors/cpu.monitor.js";
import { startMemoryMonitor } from "./monitors/memory.monitor.js";
import { startDiskMonitor } from "./monitors/disk.monitor.js";
import { startProcessMonitor } from "./monitors/process.monitor.js";
import { startSystemMonitor } from "./monitors/system.monitor.js";

const bootstrap = async () => {
  await connectProducer();

  registerKafkaBridge();

  registerAlerts();
  registerMetricsListener();

  startCpuMonitor();
  startMemoryMonitor();
  startDiskMonitor();
  startProcessMonitor();

  startSystemMonitor();

  console.log("Monitoring Agent Started");
};

bootstrap().catch(console.error);

process.on("SIGINT", () => {
  console.log("Monitoring Agent Stopped");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("Monitoring Agent Stopped");
  process.exit(0);
});
