🌊 AegisSwarm — Autonomous Geospatial Flood Consensus Engine
> AI-Powered Disaster Response Platform & 3D Tactical Command Center
> Real-Time Autonomous Swarm Intelligence, 3D Vector Downscaling, Web Audio Siren Engine, and Multi-Agent Risk Consensus
> 
Live Demo: aegisswarm-flood-consensus-engine.ai.studio
👥 Team & Competition Details
 * Team Name: Innovexa
 * Author / Lead Developer: D. Madhumitha
 * Project Partner / Collaborator: Paneer Raj .M
 * AI Core Engine: Groq API (llama3-70b-8192)
We split the codebase into a modular multi-tier setup: Client App & Portals (apps/web), AI Gateway & ML Engine (services/api), ML Models & Downscaling (ml), and Data Contracts (packages/contracts).
📋 Table of Contents
 * The Problem
 * Our Approach
 * Key Features
 * How the AI Swarm Engine Works
 * System Architecture
 * Tech Stack
 * System Performance Metrics & Mitigation
 * Run It Locally
 * Repository Directory Structure
 * Roadmap & Future Enhancements
1. The Problem
Standard meteorological and disaster warning systems often fail at local micro-basin resolution:
 * Single-Sensor Noise & False Alarms: Traditional threshold sensors frequently trigger false alarms from localized sensor spikes.
 * High Latency in Threat Assessment: Centralized manual evaluation introduces critical delays when flash floods occur within minutes.
 * Lack of Spatial Topography Correlation: Sensor readings are evaluated without dynamic cross-correlation to basin slope, elevation, or culvert choke stress.
2. Our Approach
AegisSwarm bridges high-frequency IoT telemetry with multi-agent LPU-accelerated AI consensus. It calculates multi-basin risk vectors in parallel, dynamically rendering real-time topographic risk heatmaps and triggering automated acoustic alerts when swarm consensus crosses critical thresholds (\ge 85\%).
3. Key Features
🗺️ Interactive Basin Pinning & Geospatial Tactical Map
 * Multi-zone basin navigation (Sector 4 Alpine River Basin, Sector 2 Foothill Ravine, Sector 7 Lowland Gorge).
 * Live vector updates for rainfall intensity, elevation, water level, and culvert choke stress.
🧠 Sub-Second Swarm Consensus Engine
 * 3-node agentic reasoning engine running via Groq LPU (llama3-70b-8192):
   * Node Alpha: Real-time IoT Telemetry
   * Node Beta: Topography & Hydrological Solver
   * Node Gamma: Historical Precedent & Surge Model
🔊 Browser-Native Siren Engine
 * Web Audio API dual-tone oscillator (600\text{Hz} - 950\text{Hz}) activating automatically when consensus exceeds 85%.
 * Eliminates external asset loading failures during WAN backhaul disconnects.
📊 3D Matrix & Risk Heatmap
 * WebGL vector grid rendering topographic saturation and surge probabilities in real time.
💻 Monospaced Live Reasoning Terminal
 * Audit stream output logging structured JSON LLM inference, API metrics, and emergency payload states.
4. How the AI Swarm Engine Works
 * Step 1: User clicks an interactive basin pin to send sensor telemetry sliders into the pipeline.
 * Step 2: The request hits the Groq Multi-Agent Engine (llama3-70b-8192) in parallel.
 * Step 3: Three independent nodes evaluate the data:
   * Node Alpha evaluates live IoT telemetry metrics.
   * Node Beta runs the topographical elevation and slope solver.
   * Node Gamma checks historical precedent and surge models.
 * Step 4: The Swarm Consensus Gate aggregates the votes. If consensus is < 85\%, the system logs a nominal state. If consensus is \ge 85\%, it triggers the Web Audio API siren and dispatches emergency payloads.
Consensus Formula
Emergency sirens automatically trigger if Consensus Score \ge 85\%.
5. System Architecture
 * Frontend Layer (React 18 & Vite): Manages the Tactical Command Center dashboard, Three.js 3D WebGL render loop, and the Web Audio API siren synthesizer.
 * Backend Layer (FastAPI & Python 3.11): Handles incoming telemetry payloads, executes XGBoost spatial downscaling models, and runs hydro-routing solvers.
 * AI Inference Layer: Connects directly to Groq API (llama3-70b-8192) high-throughput LPU infrastructure to generate multi-agent consensus scores and audit logs.
6. Tech Stack
| Layer | Technologies & Tools |
|---|---|
| Frontend UI / UX | React 18, TypeScript, Tailwind CSS, Lucide Icons |
| 3D & Graphics Engine | Three.js, React Three Fiber, Canvas API |
| Acoustic Warning Engine | Web Audio API (Dual-Tone Oscillator: 600Hz - 950Hz) |
| AI / Swarm Consensus | Groq LPU SDK (llama3-70b-8192) |
| Backend Service | FastAPI (Python 3.11), Pydantic v2, Uvicorn |
| Spatial / ML Processing | XGBoost, PostGIS, Open-Meteo Data Pipelines |
7. System Performance Metrics & Mitigation
 * LLM Latency: ~480 ms (Groq LPU Engine)
 * Audio Alert Speed: 15 ms (Native Web Audio API)
 * 3D Render Loop: 60 FPS (Three.js WebGL Canvas)
 * Consensus Gate: \ge 85\% Confidence Threshold
False-Positive Mitigation: Multi-node consensus requires independent agreement across Node Alpha (IoT metrics) and Node Beta (topography solver) before triggering emergency sirens, eliminating single-sensor spike anomalies.
8. Run It Locally
Prerequisites
 * Node.js (v18+)
 * Python (v3.11+)
 * Groq API Key
1. Clone & Install
git clone https://github.com/Innovexa/AegisSwarm-Flood-Consensus.git
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
