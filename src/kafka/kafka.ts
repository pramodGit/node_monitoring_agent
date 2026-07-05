import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "monitoring-agent",
  brokers: [process.env.KAFKA_BROKER || "localhost:9092"],
});