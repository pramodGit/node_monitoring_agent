// This interface is generic, so it can represent any event payload.

export interface DomainEvent<T> {
  eventId: string;
  eventType: string;
  version: number;
  source: string;
  serverId: string;
  timestamp: string;
  payload: T;
}