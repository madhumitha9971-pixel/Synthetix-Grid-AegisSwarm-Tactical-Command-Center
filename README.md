# 🌊 AegisSwarm — Autonomous Geospatial Flood Consensus Engine

> **AI-Powered Disaster Response Platform & 3D Tactical Command Center**
> *Real-time autonomous swarm intelligence, 3D vector downscaling, a Web Audio siren engine, and multi-agent risk consensus.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React 18](https://img.shields.io/badge/React-18.x-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v3.4-38b2ac?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=flat&logo=three.js)](https://threejs.org/)
[![Groq LPU](https://img.shields.io/badge/Groq-Llama3_70B-orange?style=flat)](https://groq.com/)

**Live Demo:** [aegisswarm-flood-consensus-engine.ai.studio](https://aegisswarm-flood-consensus-engine.ai.studio)

---

## 👥 Team & Competition Details

| | |
| :--- | :--- |
| **Team Name** | Innovexa |
| **Author / Lead Developer** | D. Madhumitha |
| **AI Core Engine** | Groq API (`llama3-70b-8192`) |

The codebase is split into a modular, multi-tier setup:

- **Client App & Portals** — `apps/web`
- **AI Gateway & ML Engine** — `services/api`
- **ML Models & Downscaling** — `ml`
- **Data Contracts** — `packages/contracts`

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

- **Single-sensor noise & false alarms:** Traditional threshold sensors frequently trigger false alarms from localized sensor spikes.
- **High latency in threat assessment:** Centralized manual evaluation introduces critical delays when flash floods develop within minutes.
- **Lack of spatial topography correlation:** Sensor readings are evaluated without dynamic cross-correlation to basin slope, elevation, or culvert choke stress.

---

## 2. Our Approach

**AegisSwarm** bridges high-frequency IoT telemetry with multi-agent, LPU-accelerated AI consensus. It calculates multi-basin risk vectors in parallel, renders real-time topographic risk heatmaps, and triggers automated acoustic alerts when swarm consensus crosses the critical threshold (≥ 85%).

---

## 3. Key Features

### 🗺️ Interactive Basin Pinning & Geospatial Tactical Map
- Multi-zone basin navigation: `Sector 4 Alpine River Basin`, `Sector 2 Foothill Ravine`, `Sector 7 Lowland Gorge`.
- Live vector updates for rainfall intensity, elevation, water level, and culvert choke stress.

### 🧠 Sub-Second Swarm Consensus Engine
A 3-node agentic reasoning engine running on the Groq LPU (`llama3-70b-8192`):

- **Node Alpha:** Real-time IoT telemetry
- **Node Beta:** Topography & hydrological solver
- **Node Gamma:** Historical precedent & surge model

### 🔊 Browser-Native Siren Engine
- Web Audio API dual-tone oscillator (600 Hz – 950 Hz) that activates automatically when consensus exceeds 85%.
- Eliminates external asset-loading failures during WAN backhaul disconnects.

### 📊 3D Matrix & Risk Heatmap
- WebGL vector grid rendering topographic saturation and surge probabilities in real time.

### 💻 Monospaced Live Reasoning Terminal
- Audit stream logging structured JSON LLM inference, API metrics, and emergency payload states.

---

## 4. How the AI Swarm Engine Works

1. **Telemetry input:** The user selects a basin pin, sending the sensor telemetry values into the pipeline.
2. **Parallel dispatch:** The request is sent to the Groq multi-agent engine (`llama3-70b-8192`) in parallel.
3. **Independent evaluation:** Three nodes assess the data:
   - **Node Alpha** evaluates live IoT telemetry metrics.
   - **Node Beta** runs the topographical elevation and slope solver.
   - **Node Gamma** checks historical precedent and surge models.
4. **Consensus gate:** The Swarm Consensus Gate aggregates the votes.
   - Consensus **< 85%** → the system logs a nominal state.
   - Consensus **≥ 85%** → the Web Audio siren is triggered and emergency payloads are dispatched.

### Consensus Formula

$$
\text{Consensus Score} = (0.40 \cdot \text{Node}_{\alpha}) + (0.35 \cdot \text{Node}_{\beta}) + (0.25 \cdot \text{Node}_{\gamma})
$$

Emergency sirens trigger automatically when the Consensus Score is **≥ 85%**.

---

## 5. System Architecture

- **Frontend Layer (React 18 & Vite):** Runs the Tactical Command Center dashboard, the Three.js 3D WebGL render loop, and the Web Audio API siren synthesizer.
- **Backend Layer (FastAPI & Python 3.11):** Handles incoming telemetry payloads, executes XGBoost spatial downscaling models, and runs hydro-routing solvers.
- **AI Inference Layer:** Connects directly to the Groq API (`llama3-70b-8192`) high-throughput LPU infrastructure to generate multi-agent consensus scores and audit logs.

---

## 6. Tech Stack

| Layer | Technologies & Tools |
| :--- | :--- |
| **Frontend UI / UX** | React 18, TypeScript, Tailwind CSS, Lucide Icons |
| **3D & Graphics Engine** | Three.js, React Three Fiber, Canvas API |
| **Acoustic Warning Engine** | Web Audio API (dual-tone oscillator, 600 Hz – 950 Hz) |
| **AI / Swarm Consensus** | Groq LPU SDK (`llama3-70b-8192`) |
| **Backend Service** | FastAPI (Python 3.11), Pydantic v2, Uvicorn |
| **Spatial / ML Processing** | XGBoost, PostGIS, Open-Meteo data pipelines |

---

## 7. System Performance Metrics & Mitigation

| Metric | Value | Source |
| :--- | :--- | :--- |
| **LLM latency** | ~480 ms | Groq LPU engine |
| **Audio alert speed** | 15 ms | Native Web Audio API |
| **3D render loop** | 60 FPS | Three.js WebGL canvas |
| **Consensus gate** | ≥ 85% confidence | Swarm Consensus Gate |

**False-positive mitigation:** Multi-node consensus requires independent agreement across Node Alpha (IoT metrics) and Node Beta (topography solver) before emergency sirens trigger, eliminating single-sensor spike anomalies.

---

## 8. Run It Locally

### Prerequisites

- **Node.js** v18+
- **Python** v3.11+
- **Groq API key**

### 1. Clone & Install

```bash
git clone https://github.com/Innovexa/AegisSwarm-Flood-Consensus.git
cd AegisSwarm-Flood-Consensus

# Install web app dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### 3. Start Backend & ML Engine

```bash
cd services/api
python -m venv .venv
source .venv/bin/activate   # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 4. Run the Frontend Development Server

```bash
# In the root directory
npm run dev
```

Open <http://localhost:5173> in your browser.

---

## 9. Repository Directory Structure

```text
AegisSwarm-Flood-Consensus/
├── apps/
│   └── web/                          # React 18 + Vite frontend application
│       ├── src/
│       │   ├── components/
│       │   │   ├── SectorTacticalMap.jsx   # Geospatial vector grid & pins
│       │   │   ├── ConsensusMatrix.jsx     # Node voting visualizer
│       │   │   ├── DynamicTelemetry.jsx    # Live sensor sliders & heatmap
│       │   │   ├── SirenController.jsx     # Web Audio API siren engine
│       │   │   └── AuditTerminal.jsx       # Monospaced reasoning logs
│       │   ├── App.jsx                     # Dashboard shell component
│       │   └── index.css                   # Tactical dark theme styling
│       └── package.json
├── data/                             # Topographic maps & historical logs
├── docs/                             # Architecture diagram & technical reports
├── e2e/                              # Playwright integration testing
├── ml/                               # XGBoost spatial downscaling models
├── packages/
│   └── contracts/                    # Shared TypeScript types & API schemas
├── scripts/                          # Automated build & benchmarking scripts
├── services/
│   └── api/                          # FastAPI backend & Groq integration
│       ├── app/
│       │   ├── main.py               # FastAPI app entrypoint
│       │   └── swarm_engine.py       # Groq multi-agent consensus logic
│       └── requirements.txt
├── supabase/                         # DB schemas & spatial migrations
├── .editorconfig
├── .gitattributes
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## 10. Roadmap & Future Enhancements

- **Autonomous Evacuation Route Engine:** Integrate dynamic A* pathfinding to automatically calculate and render real-time escape corridors on the 3D map, based on live flooding vectors and terrain elevation barriers.
- **Offline WebAssembly (WASM) Local Fallback:** Add a client-side ONNX Runtime / WebAssembly inference module so swarm consensus voting continues locally during total WAN backhaul failures.
- **Automated CAP/EDXL Emergency Payload Dispatch:** Add Common Alerting Protocol (CAP 1.2) XML/JSON export to broadcast structured emergency alerts directly to local municipality responder systems.

---

## 📄 License

Released under the [MIT License](LICENSE).
