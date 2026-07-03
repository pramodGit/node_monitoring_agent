// Instead of every monitor manually creating envelopes, centralize it.

import { randomUUID } from "crypto";
import { DomainEvent } from "../types/domainEvent.js";

export const createEvent = <T>(
  eventType: string,
  payload: T
): DomainEvent<T> => {
  return {
    eventId: randomUUID(),
    eventType,
    version: 1,
    source: "monitoring-agent",
    serverId: process.env.SERVER_ID || "local-dev",
    timestamp: new Date().toISOString(),
    payload
  };
};

// Why a factory?

// Without it, every monitor duplicates:

// UUID generation
// Timestamp generation
// Version assignment
// Source assignment
// Server ID assignment

// With the factory, those concerns are centralized.