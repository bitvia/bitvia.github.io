+++
title = "Observability Baseline for Microservices"
date = 2026-02-10T11:00:00+08:00
draft = false
summary = "A minimum, high-leverage observability baseline for microservice systems."
categories = ["platform"]
tags = ["observability", "sre", "monitoring", "microservices"]
+++

## Goal

Observability should reduce time-to-detect and time-to-recover, not just generate dashboards.

## Baseline Signals

- Metrics: latency, traffic, errors, saturation
- Logs: structured, queryable, correlated by trace IDs
- Traces: request path across critical service boundaries

## Instrumentation Priorities

1. Define service-level objectives for key APIs.
2. Add tracing to ingress, core business paths, and external calls.
3. Emit consistent error taxonomy for alert routing.
4. Build one incident dashboard per business-critical flow.

## Alerting Principles

- Alert on user impact, not internal noise
- Use multi-window burn-rate alerts for SLO breaches
- Route alerts by ownership with clear escalation policies

## Conclusion

A focused baseline often outperforms a large but uncurated monitoring setup. Start with critical paths and iterate using incident feedback.