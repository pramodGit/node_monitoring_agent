import { eventBus } from "../events/eventBus.js";
import { publishEvent } from "./publishEvent.js";

const EVENTS = [
  "cpu.high",
  "memory.high",
  "disk.high",
  "process.down",
  "process.up",
];

export const registerKafkaBridge = () => {
  for (const eventName of EVENTS) {
    eventBus.on(eventName, async (event) => {
      try {
        await publishEvent(event);

        console.log(`📤 Published -> ${event.eventType}`);
      } catch (err) {
        console.error("Kafka Publish Failed", err);
      }
    });
  }
};