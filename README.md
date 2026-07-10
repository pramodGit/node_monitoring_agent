# Node Monitoring Agent

A lightweight event-driven server monitoring agent built with **Node.js** and **TypeScript**.

---

# Overview

The Monitoring Agent continuously monitors server resources and critical processes, generating **Domain Events** that are published through an internal Event Bus.

A Kafka Bridge subscribes to the internal Event Bus and publishes events to **Apache Kafka**. Downstream microservices (such as Logger and Alert services) consume these events independently, allowing the Monitoring Agent to remain completely decoupled from consumers.

This architecture follows an **Event-Driven Microservices** design where producers and consumers evolve independently.

---

# Responsibilities

The Monitoring Agent is responsible only for:

- Collecting system metrics
- Monitoring critical processes
- Detecting threshold violations
- Creating Domain Events
- Publishing events to Kafka

It is **not responsible** for logging, alerting, analytics, dashboards, or notifications. Those concerns are handled by independent downstream microservices.

---

# Architecture Highlights

- Event-Driven Architecture
- Domain Events
- Internal Event Bus
- Kafka Event Streaming
- Producer / Consumer Architecture
- Loose Coupling
- Asynchronous Processing

---

# Future Enhancements

- React Monitoring Dashboard
- Telegram Notifications
- Email Notifications
- AI-based Anomaly Detection
- Kubernetes Deployment

---

# Features

## Resource Monitoring

- CPU Usage Monitoring
- Memory Usage Monitoring
- Disk Usage Monitoring

## Process Monitoring

Monitor critical services such as:

- Node.js
- MongoDB
- Redis
- Nginx

Generate events when:

- Process goes down
- Process comes back online

---

## Event Flow

```text
CPU Monitor
      │
      ▼
Create Domain Event
      │
      ▼
Internal Event Bus
      │
      ▼
Kafka Bridge
      │
      ▼
Apache Kafka
      │
      ├──────────────┐
      ▼              ▼
Logger Service   Alert Service
```

---

## Event-Driven Architecture

The Monitoring Agent uses a centralized **Event Bus** built on Node.js **EventEmitter**.

Supported events:

- metrics.collected
- cpu.high
- memory.high
- disk.high
- process.down
- process.up

---

## Kafka Integration

- Apache Kafka Producer
- Kafka Bridge
- Domain Events
- Asynchronous Event Publishing
- Decoupled Microservices

---

# Architecture

```text
                 ┌──────────────────────────┐
                 │    Monitoring Agent      │
                 └─────────────┬────────────┘
                               │
                               ▼
                     Internal Event Bus
                               │
                               ▼
                        Kafka Bridge
                               │
                               ▼
                         Apache Kafka
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
        Logger Service                  Alert Service
```

---

# Project Structure

```text
src/
│
├── config/
├── events/
├── kafka/
├── monitors/
├── services/
├── types/
├── utils/
└── app.ts
```

---

# Technology Stack

- Node.js
- TypeScript
- EventEmitter
- Apache Kafka
- KafkaJS
- systeminformation
- systemd

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
cd Node_Monitoring_Agent
```

Install dependencies:

```bash
npm install
```

---

# Running Locally

Ensure **Apache Kafka** is running before starting the Monitoring Agent.

Development:

```bash
npm run dev
```

Production:

```bash
npm run build
npm start
```

---

# Example Output

```text
Monitoring Agent Started

[Metrics] CPU=38.72% | MEM=74.28%

🚨 PROCESS DOWN

{
  process: "nginx",
  timestamp: "2026-06-01T08:12:16.022Z"
}
```

---

# Graceful Shutdown

The application handles:

- SIGINT
- SIGTERM

to support graceful shutdown and future resource cleanup.

---

# Design Principles

- Event-Driven Architecture
- Domain Events
- Loose Coupling
- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Asynchronous Messaging
- Microservice-Friendly Design

---

# Roadmap

## Phase 1 ✅ Monitoring Foundation

- CPU Monitoring
- Memory Monitoring
- Disk Monitoring
- Process Monitoring
- Event Factory
- Internal Event Bus

---

## Phase 2 ✅ Event Streaming

- Kafka Producer
- Kafka Bridge
- Domain Events
- Event Publishing
- Loose Coupling

---

## Phase 3 🚧 Event Processing

- Logger Service
- Alert Service
- Event Persistence
- Retry Mechanism
- Dead Letter Queue (DLQ)

---

## Phase 4 🚧 Dashboard

- React Dashboard
- Live Metrics
- Historical Charts

---

## Phase 5 🚧 Notifications

- Telegram Notifications
- Email Notifications
- Slack Integration

---

## Phase 6 🚧 AI

- AI-based Anomaly Detection
- Predictive Alerts

---

# Related Projects

- **Node Monitoring Agent** (Producer)
- **Logger Service** (Consumer)
- **Alert Service** (Consumer)
- **Monitoring Dashboard** *(Upcoming)*