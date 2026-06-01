import { eventBus } from "../events/eventBus.js";

export const registerAlerts = () => {

  eventBus.on("cpu.high", (data) => {
    console.log("🚨 CPU ALERT", data);
  });

  eventBus.on("memory.high", (data) => {
    console.log("🚨 MEMORY ALERT", data);
  });

  eventBus.on("disk.high", (data) => {
    console.log("🚨 DISK ALERT", data);
  });

  eventBus.on("process.down", (data) => {
    console.log("🚨 PROCESS DOWN", data);
  });

  eventBus.on("process.up", (data) => {
    console.log("✅ PROCESS UP", data);
  });

};