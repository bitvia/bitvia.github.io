+++
title = "Edge API Platform"
date = 2026-02-20T10:00:00+08:00
draft = false
summary = "A high-availability API gateway platform with unified auth, rate limiting, and observability."
main_image = "/images/project-edge-api.svg"
categories = ["backend"]
tags = ["go", "gateway", "kubernetes", "api"]

[params]
  featured = true
  weight = 1
  showInPostList = true
+++

## Overview

Edge API Platform provides a single ingress layer for multiple internal services and public APIs.

## Key Capabilities

- Unified JWT and API key authentication
- Tenant-aware rate limiting
- Canary routing and rollback strategies
- End-to-end request tracing and metrics

## Tech Stack

- Go, gRPC, REST
- Kubernetes + Helm
- OpenTelemetry + Prometheus + Grafana

## Outcome

The platform reduced repeated gateway logic across teams and improved deployment safety through progressive delivery.
