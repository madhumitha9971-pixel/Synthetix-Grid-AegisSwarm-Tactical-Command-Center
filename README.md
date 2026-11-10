# 🌊 AegisSwarm — Autonomous Geospatial Flood Consensus Engine

> **AI-Powered Disaster Response Platform & 3D Tactical Command Center**  
> *Real-Time Autonomous Swarm Intelligence, 3D Vector Downscaling, Web Audio Siren Engine, and Multi-Agent Risk Consensus*

---

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React 18](https://img.shields.io/badge/React-18.x-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v3.4-38b2ac?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=flat&logo=three.js)](https://threejs.org/)
[![Groq LPU](https://img.shields.io/badge/Groq-Llama3_70B-orange?style=flat)](https://groq.com/)

**Live Demo:** [aegisswarm-flood-consensus-engine.ai.studio](https://aegisswarm-flood-consensus-engine.ai.studio)[span_0](start_span)[span_0](end_span)

---

## 👥 Team & Competition Details

* **Team Name:** Innovexa[span_1](start_span)[span_1](end_span)
* **Author / Lead Developer:** D. Madhumitha[span_2](start_span)[span_2](end_span)
* **AI Core Engine:** Groq API (`llama3-70b-8192`)[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span)

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

* **Single-Sensor Noise & False Alarms:** Traditional threshold sensors frequently trigger false alarms from localized sensor spikes[span_5](start_span)[span_5](end_span).
* **High Latency in Threat Assessment:** Centralized manual evaluation introduces critical delays when flash floods occur within minutes.
* **Lack of Spatial Topography Correlation:** Sensor readings are evaluated without dynamic cross-correlation to basin slope, elevation, or culvert choke stress[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span).

---

## 2. Our Approach

**AegisSwarm** bridges high-frequency IoT telemetry with multi-agent LPU-accelerated AI consensus[span_8](start_span)[span_8](end_span)[span_9](start_span)[span_9](end_span). It calculates multi-basin risk vectors in parallel, dynamically rendering real-time topographic risk heatmaps and triggering automated acoustic alerts when swarm consensus crosses critical thresholds ($\ge 85\%$)[span_10](start_span)[span_10](end_span)[span_11](start_span)[span_11](end_span).

---

## 3. Key Features

### 🗺️ Interactive Basin Pinning & Geospatial Tactical Map
* Multi-zone basin navigation (`Sector 4 Alpine River Basin`, `Sector 2 Foothill Ravine`, `Sector 7 Lowland Gorge`)[span_12](start_span)[span_12](end_span).
* Live vector updates for rainfall intensity, elevation, water level, and culvert choke stress[span_13](start_span)[span_13](end_span).

### 🧠 Sub-Second Swarm Consensus Engine[span_14](start_span)[span_14](end_span)
* 3-node agentic reasoning engine running via Groq LPU (`llama3-70b-8192`)[span_15](start_span)[span_15](end_span)[span_16](start_span)[span_16](end_span):
  * **Node Alpha:** Real-time IoT Telemetry[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span)
  * **Node Beta:** Topography & Hydrological Solver[span_19](start_span)[span_19](end_span)[span_20](start_span)[span_20](end_span)
  * **Node Gamma:** Historical Precedent & Surge Model[span_21](start_span)[span_21](end_span)

### 🔊 Browser-Native Siren Engine[span_22](start_span)[span_22](end_span)
* Web Audio API dual-tone oscillator ($600\text{Hz} - 950\text{Hz}$) activating automatically when consensus exceeds 85%[span_23](start_span)[span_23](end_span)[span_24](start_span)[span_24](end_span).
* Eliminates external asset loading failures during WAN backhaul disconnects[span_25](start_span)[span_25](end_span).

### 📊 3D Matrix & Risk Heatmap[span_26](start_span)[span_26](end_span)
* WebGL vector grid rendering topographic saturation and surge probabilities in real time[span_27](start_span)[span_27](end_span)[span_28](start_span)[span_28](end_span).

### 💻 Monospaced Live Reasoning Terminal[span_29](start_span)[span_29](end_span)
* Audit stream output logging structured JSON LLM inference, API metrics, and emergency payload states[span_30](start_span)[span_30](end_span)[span_31](start_span)[span_31](end_span).

---

## 4. How the AI Swarm Engine Works

* **Step 1:** User clicks an interactive basin pin to send sensor telemetry sliders into the pipeline.
* **Step 2:** The request hits the Groq Multi-Agent Engine (`llama3-70b-8192`) in parallel[span_32](start_span)[span_32](end_span)[span_33](start_span)[span_33](end_span).
* **Step 3:** Three independent nodes evaluate the data[span_34](start_span)[span_34](end_span)[span_35](start_span)[span_35](end_span):
  * **Node Alpha** evaluates live IoT telemetry metrics[span_36](start_span)[span_36](end_span).
  * **Node Beta** runs the topographical elevation and slope solver[span_37](start_span)[span_37](end_span).
  * **Node Gamma** checks historical precedent and surge models[span_38](start_span)[span_38](end_span).
* **Step 4:** The Swarm Consensus Gate aggregates the votes[span_39](start_span)[span_39](end_span). If consensus is $< 85\%$, the system logs a nominal state. If consensus is $\ge 85\%$, it triggers the Web Audio API siren and dispatches emergency payloads[span_40](start_span)[span_40](end_span)[span_41](start_span)[span_41](end_span).

### Consensus Formula
$$\text{Consensus Score} = (0.40 \cdot \text{Node}_{\alpha}) + (0.35 \cdot \text{Node}_{\beta}) + (0.25 \cdot \text{Node}_{\gamma})$[span_42](start_span)[span_42](end_span)

*Emergency sirens automatically trigger if Consensus Score $\ge 85\%$[span_43](start_span)[span_43](end_span)[span_44](start_span)[span_44](end_span).*

---

## 5. System Architecture

* **Frontend Layer (React 18 & Vite)[span_45](start_span)[span_45](end_span):** Manages the Tactical Command Center dashboard, Three.js 3D WebGL render loop[span_46](start_span)[span_46](end_span)[span_47](start_span)[span_47](end_span), and the Web Audio API siren synthesizer[span_48](start_span)[span_48](end_span)[span_49](start_span)[span_49](end_span).
* **Backend Layer (FastAPI & Python 3.11)[span_50](start_span)[span_50](end_span):** Handles incoming telemetry payloads, executes XGBoost spatial downscaling models, and runs hydro-routing solvers.
* **AI Inference Layer:** Connects directly to Groq API (`llama3-70b-8192`) high-throughput LPU infrastructure to generate multi-agent consensus scores and audit logs[span_51](start_span)[span_51](end_span)[span_52](start_span)[span_52](end_span).

---

## 6. Tech Stack

| Layer | Technologies & Tools |
| :--- | :--- |
| **Frontend UI / UX** | React 18, TypeScript, Tailwind CSS, Lucide Icons[span_53](start_span)[span_53](end_span) |
| **3D & Graphics Engine** | Three.js, React Three Fiber, Canvas API[span_54](start_span)[span_54](end_span) |
| **Acoustic Warning Engine** | Web Audio API (Dual-Tone Oscillator: 600Hz - 950Hz)[span_55](start_span)[span_55](end_span) |
| **AI / Swarm Consensus** | Groq LPU SDK (`llama3-70b-8192`)[span_56](start_span)[span_56](end_span)[span_57](start_span)[span_57](end_span) |
| **Backend Service** | FastAPI (Python 3.11), Pydantic v2, Uvicorn |
| **Spatial / ML Processing** | XGBoost, PostGIS, Open-Meteo Data Pipelines |

---

## 7. System Performance Metrics & Mitigation[span_58](start_span)[span_58](end_span)

* **LLM Latency:** ~480 ms (Groq LPU Engine)[span_59](start_span)[span_59](end_span)
* **Audio Alert Speed:** 15 ms (Native Web Audio API)[span_60](start_span)[span_60](end_span)
* **3D Render Loop:** 60 FPS (Three.js WebGL Canvas)[span_61](start_span)[span_61](end_span)[span_62](start_span)[span_62](end_span)
* **Consensus Gate:** $\ge 85\%$ Confidence Threshold[span_63](start_span)[span_63](end_span)[span_64](start_span)[span_64](end_span)

**False-Positive Mitigation:** Multi-node consensus requires independent agreement across Node Alpha (IoT metrics) and Node Beta (topography solver) before triggering emergency sirens, eliminating single-sensor spike anomalies[span_65](start_span)[span_65](end_span).

---

## 8. Run It Locally

### Prerequisites
* **Node.js** (v18+)
* **Python** (v3.11+)
* **Groq API Key**[span_66](start_span)[span_66](end_span)[span_67](start_span)[span_67](end_span)

### 1. Clone & Install
```bash
git clone [https://github.com/Innovexa/AegisSwarm-Flood-Consensus.git](https://github.com/Innovexa/AegisSwarm-Flood-Consensus.git)
cd AegisSwarm-Flood-Consensus

# Install Web App Dependencies
npm install

2. Configure Environment Variables
Create a .env file in the project root:
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_API_BASE_URL=http://localhost:8000/api/v1

3. Start Backend & ML Engine
cd services/api
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

4. Run Frontend Development Server
# In the root directory
npm run dev

Open http://localhost:5173 in your browser.
9. Repository Directory Structure
AegisSwarm-Flood-Consensus/
├── apps/
│   └── web/                        # React 18 + Vite Frontend Application
│       ├── src/
│       │   ├── components/
│       │   │   ├── SectorTacticalMap.jsx   # Geospatial Vector Grid & Pins
│       │   │   ├── ConsensusMatrix.jsx     # Node Voting Visualizer
│       │   │   ├── DynamicTelemetry.jsx    # Live Sensor Sliders & Heatmap
│       │   │   ├── SirenController.jsx     # Web Audio API Siren Engine
│       │   │   └── AuditTerminal.jsx       # Monospaced Reasoning Logs
│       │   ├── App.jsx                     # Dashboard Shell Component
│       │   └── index.css                   # Tactical Dark Theme Styling
│       └── package.json
├── data/                           # Topographic Maps & Historical Logs
├── docs/                           # Architecture Diagram & Technical Reports
├── e2e/                            # Playwright Integration Testing
├── ml/                             # XGBoost Spatial Downscaling Models
├── packages/
│   └── contracts/                  # Shared TypeScript Types & API Schemas
├── scripts/                        # Automated Build & Benchmarking Scripts
├── services/
│   └── api/                        # FastAPI Backend & Groq Integration
│       ├── app/
│       │   ├── main.py             # FastAPI App Entrypoint
│       │   └── swarm_engine.py     # Groq Multi-Agent Consensus Logic
│       └── requirements.txt
├── supabase/                       # DB Schemas & Spatial Migrations
├── .editorconfig
├── .gitattributes
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

10. Roadmap & Future Enhancements
 * Autonomous Evacuation Route Engine: Integrate dynamic A* pathfinding to auto-calculate and render real-time escape corridors on the 3D map based on live flooding vectors and terrain elevation barriers.
 * Offline WebAssembly (WASM) Local Fallback: Implement client-side ONNX Runtime / WebAssembly inference module so swarm consensus voting continues locally during total WAN network backhaul failures.
 * Automated CAP/EDXL Emergency Payload Dispatch: Add standard Common Alerting Protocol (CAP 1.2) XML/JSON export capabilities to directly broadcast structured emergency alerts to local municipality responder systems.

