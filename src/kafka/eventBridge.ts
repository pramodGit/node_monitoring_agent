import { eventBus } from "../events/eventBus.js";
import { publishEvent } from "./publishEvent.js";
import { EVENTS } from "../types/event.types.js";

export const registerKafkaBridge = () => {
  eventBus.on(EVENTS.APP_EVENT, async (event) => {
    try {
      await publishEvent(event);

      console.log(`📤 Published -> ${event.eventType}`);
    } catch (err) {
      console.error("❌ Kafka Publish Failed", err);
    }
  });
};