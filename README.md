# Node Monitoring Agent

A lightweight event-driven server monitoring agent built with Node.js and TypeScript.

## Overview

The Monitoring Agent continuously monitors server resources and system processes, generating events that can be consumed by alerting, logging, analytics, or messaging systems.

Current implementation uses Node.js EventEmitter as the internal event bus.

Future phases will integrate:

- Apache Kafka
- MongoDB
- React Dashboard
- Telegram Notifications
- AI-based anomaly detection

---

## Features

### Resource Monitoring

- CPU Usage Monitoring
- Memory Usage Monitoring
- Disk Usage Monitoring

### Process Monitoring

Monitor critical processes such as:

- Node.js
- MongoDB
- Redis
- Nginx

Generate events when:

- Process goes down
- Process comes back online

### Event-Driven Architecture

Uses a centralized Event Bus based on Node.js EventEmitter.

Supported events:

- metrics.collected
- cpu.high
- memory.high
- disk.high
- process.down
- process.up

### Alerting

Alert listeners can subscribe to events and perform actions such as:

- Console logging
- Email notifications
- Telegram notifications
- Kafka publishing

---

## Architecture

```text
┌─────────────────────────────┐
│      Monitoring Agent       │
└──────────────┬──────────────┘
               │
               ▼
       ┌─────────────┐
       │  Event Bus  │
       └──────┬──────┘
              │
    ┌─────────┼─────────┐
    ▼         ▼         ▼

 Alerts   Metrics     Future
 Service  Listener    Consumers
```

---

## Project Structure

```text
src/
│
├── alerts/
│   └── alert.service.ts
│
├── events/
│   └── eventBus.ts
│
├── listeners/
│   └── metrics.listener.ts
│
├── monitors/
│   ├── cpu.monitor.ts
│   ├── memory.monitor.ts
│   ├── disk.monitor.ts
│   ├── process.monitor.ts
│   └── system.monitor.ts
│
├── services/
│   └── systemMetrics.service.ts
│
└── app.ts
```

---

## Technology Stack

- Node.js
- TypeScript
- EventEmitter
- systeminformation
- tsx
- nodemon

---

## Installation

Clone repository:

```bash
git clone <repository-url>
cd Node_Monitoring_Agent
```

Install dependencies:

```bash
npm install
```

---

## Running Locally

Development mode:

```bash
npm run dev
```

Production:

```bash
npm run build
npm start
```

---

## Example Output

```text
Monitoring Agent Started

[Metrics] CPU=38.72% | MEM=74.28%

🚨 PROCESS DOWN
{
  process: 'nginx',
  timestamp: '2026-06-01T08:12:16.022Z'
}
```

---

## Graceful Shutdown

The application handles:

- SIGINT
- SIGTERM

for clean shutdown and future resource cleanup.

---

## Roadmap

### Phase 1 ✅

- Event Bus
- CPU Monitoring
- Memory Monitoring
- Disk Monitoring
- Process Monitoring
- Alert Service
- Metrics Listener

### Phase 2 🚧

- Apache Kafka Integration
- Kafka Producer
- Kafka Consumer

### Phase 3

- MongoDB Storage
- Historical Metrics

### Phase 4

- React Monitoring Dashboard

### Phase 5

- Telegram Alerts
- Email Notifications

### Phase 6

- AI-based Anomaly Detection