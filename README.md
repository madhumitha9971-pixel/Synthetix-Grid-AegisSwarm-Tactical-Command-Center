# 🌊 AegisSwarm — Autonomous Geospatial Flood Consensus Engine

> **AI-Powered Disaster Response Platform & 3D Tactical Command Center**  
> *Real-Time Autonomous Swarm Intelligence, 3D Vector Downscaling, Web Audio Siren Engine, and Multi-Agent Risk Consensus*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React 18](https://img.shields.io/badge/React-18.x-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v3.4-38b2ac?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=flat&logo=three.js)](https://threejs.org/)
[![Groq LPU](https://img.shields.io/badge/Groq-Llama3_70B-orange?style=flat)](https://groq.com/)

**Live Demo:** [aegisswarm-flood-consensus-engine.ai.studio](https://aegisswarm-flood-consensus-engine.ai.studio)

---

## 👥 Team & Competition Details

* **Team Name:** Innovexa
* **Author / Lead Developer:** D. Madhumitha
* **Project Partner / Collaborator:** Paneer Raj .M
* **AI Core Engine:** Groq API (`llama3-70b-8192`)

We split the codebase into a modular multi-tier setup: **Client App & Portals** (`apps/web`), **AI Gateway & ML Engine** (`services/api`), **ML Models & Downscaling** (`ml`), and **Data Contracts** (`packages/contracts`).

---

## 📋 Table of Contents

1. [The Problem](#1-the-problem)
2. [Our Approach](#2-our-approach)
3. [Key Features](#3-key-features)
4. [How the AI Swarm Engine Works](#4-how-the-ai-swarm-engine-works)
5. [System Architecture](#5-system-architecture)
6. [Tech Stack](#6-tech-stack)
7. [System Performance Metrics & Mitigation](#7-system-performance-metrics--mitigation)
8. [Run It Locally](#8-run-it-locally)
9. [Repository Directory Structure](#9-repository-directory-structure)
10. [Roadmap & Future Enhancements](#10-roadmap--future-enhancements)

---

## 1. The Problem

Standard meteorological and disaster warning systems often fail at local micro-basin resolution:
* **Single-Sensor Noise & False Alarms:** Traditional threshold sensors frequently trigger false alarms from localized sensor spikes.
* **High Latency in Threat Assessment:** Centralized manual evaluation introduces critical delays when flash floods occur within minutes.
* **Lack of Spatial Topography Correlation:** Sensor readings are evaluated without dynamic cross-correlation to basin slope, elevation, or culvert choke stress.

---

## 2. Our Approach

**AegisSwarm** bridges high-frequency IoT telemetry with multi-agent LPU-accelerated AI consensus. It calculates multi-basin risk vectors in parallel, dynamically rendering real-time topographic risk heatmaps and triggering automated acoustic alerts when swarm consensus crosses critical thresholds ($\ge 85\%$).

---

## 3. Key Features

### 🗺️ Interactive Basin Pinning & Geospatial Tactical Map
* Multi-zone basin navigation (`Sector 4 Alpine River Basin`, `Sector 2 Foothill Ravine`, `Sector 7 Lowland Gorge`).
* Live vector updates for rainfall intensity, elevation, water level, and culvert choke stress.

### 🧠 Sub-Second Swarm Consensus Engine
* 3-node agentic reasoning engine running via Groq LPU (`llama3-70b-8192`):
  * **Node Alpha:** Real-time IoT Telemetry
  * **Node Beta:** Topography & Hydrological Solver
  * **Node Gamma:** Historical Precedent & Surge Model

### 🔊 Browser-Native Siren Engine
* Web Audio API dual-tone oscillator ($600\text{Hz} - 950\text{Hz}$) activating automatically when consensus exceeds 85%.
* Eliminates external asset loading failures during WAN backhaul disconnects.

### 📊 3D Matrix & Risk Heatmap
* WebGL vector grid rendering topographic saturation and surge probabilities in real time.

### 💻 Monospaced Live Reasoning Terminal
* Audit stream output logging structured JSON LLM inference, API metrics, and emergency payload states.

---

## 4. How the AI Swarm Engine Works

```text
[ Interactive Basin Pinning ] ───► [ IoT Sensor Telemetry Sliders ]
                                               │
                                               ▼
                              [ Groq Multi-Agent Swarm Engine ]
                                               │
              ┌────────────────────────────────┼────────────────────────────────┐
              ▼                                ▼                                ▼
   [ Node Alpha: IoT Telemetry ]   [ Node Beta: Topography ]   [ Node Gamma: Precedent ]
              │                                │                                │
              └────────────────────────────────┼────────────────────────────────┘
                                               ▼
                                   [ Swarm Consensus Gate ]
                                               │
                       ┌───────────────────────┴───────────────────────┐
                       ▼                                               ▼
             Consensus < 85%                                 Consensus ≥ 85%
                       │                                               │
              [ Log Nominal State ]                       [ Trigger Web Audio Siren ]
                                                          [ Dispatch CAP 1.2 Payload ]

consensus Formula 

  consensus score = 0.40.node(alfa)+0.35.node(beta)+0.25.node(gama)

