import { producer } from "./producer.js";
import { DomainEvent } from "../types/domainEvent.js";

export const publishEvent = async <T>(event: DomainEvent<T>) => {
  await producer.send({
    topic: process.env.KAFKA_TOPIC!,
    messages: [
      {
        key: event.eventType,
        value: JSON.stringify(event),
      },
    ],
  });
};