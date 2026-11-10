🌊 AegisSwarm — Autonomous Geospatial Flood Consensus & Disaster Response Engine
​AI-Powered Civic & Environmental Disaster Response Platform
Real-Time Autonomous Swarm Intelligence, Geospatial Vector Downscaling, Dynamic Telemetry, and Automated Emergency Siren Routing.
​📌 Executive Overview & Architecture
​AegisSwarm is an enterprise-grade, real-time autonomous disaster response and civic intelligence platform. Designed for high-risk environmental monitoring, it bridges multi-agent AI verification (powered by Groq Backend / Llama3-70b-8192) with interactive geospatial tactical grids and dynamic sensor telemetry.
​When environmental anomalies breach critical thresholds (\ge 85\% consensus), the platform instantly engages acoustic siren synthesizers via the Web Audio API and routes encrypted emergency directives to alpine and lowland corridor response teams.
​🌟 Key Features & Core Capabilities
​1. 🗺️ Interactive Geospatial Tactical Grid & Sector Pins
​Sector 4 Alpine River Basin (SEC-04): High-elevation glacial basin (1,940m MSL, 30° slope, heavy rainfall, station STA-ALPHA-77, GPS: 46°31'44"N, 08°28'12"E). Currently targeted for emergency dispatch.
​Sector 2 Foothill Ravine (SEC-02): Mid-elevation ravine (780m MSL, 19° slope, station STA-BETA-42).
​Sector 7 Lowland Gorge (SEC-07): Narrow gorge choke point with 92% culvert backflow stress (210m MSL, 12° slope, station STA-DELTA-07).
​Sector 1 Lowland Plain (SEC-01): Alluvial floodplain (140m MSL, nominal baseline conditions).
​Sector 5 Glacial Reservoir Confluence (SEC-05): Mountain dam confluence (1,420m MSL, elevated storage load tracking).
​2. ⚡ Dynamic Real-Time State Synchronization
​Sensor Telemetry Sliders: Instantly populates with selected sector rainfall intensity, water level, rate of rise, soil saturation, slope gradient, and culvert choke stress.
​Hydrological Risk Heatmap: Automatically recalculates historical deviation ratios and displays selected sector's GPS coordinates, elevation range, and catchment area (128.4\text{ km}^2, velocity 118\text{ mm/h}).
​3D Consensus Matrix: Dynamically loads the sector's multi-agent evaluation nodes:
​Node Alpha (Telemetry/Sensor): 92.1\% confidence score
​Node Beta (Hydrological Routing): 87.5\% confidence score
​Node Gamma (Historical Variance): 88.0\% confidence score
​Unified Consensus Score: 89.2\% Critical Threat Level (Exceeds 85\% emergency threshold).
​Agent Trace Terminal: Streams the sector's dispatch intelligence report, station coordinates, and Python hydrological routing script in real time.
​3. 🚨 Active Visual & Acoustic Monitoring Feedback
​Animated Concentric Radar Rings: Multi-stage expanding ripple animations centered on the currently active sector pin.
​Reticle Crosshair & Beacon Ring: Glowing cyan/rose targeting vehicle indicating active live telemetry monitoring.
​Live Monitoring Status Card: Real-time readout of active coordinates, elevation, catchment area, and risk tier.
​Tactical Layer Controls: Toggles for elevation contours, river drainage flow vectors, and animated radar swaps.
​Web Audio API Dual-Tone Synthesizer: Autonomous acoustic siren emitter providing auditory alerts when consensus breaches critical thresholds.
​🛠️ Tech Stack & System Architecture
LayerTechnologies & Tools Used
Frontend / DashboardReact.js, Vite, Tailwind CSS, Lucide Icons, Canvas API
AI / Multi-Agent SwarmGroq Backend API (llama3-70b-8192), Node Consensus Matrix
Geospatial & Hydro EnginePostGIS, XGBoost Spatial Downscaling, Open-Meteo Weather API
State & Audio EngineWeb Audio API (Dual-Tone Siren Synthesizer), LocalStorage State Persistence

📁 Comprehensive Repository Directory Structure

AegisSwarm-Flood-Consensus/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                   # Automated Vercel Deployment & Build Pipeline
├── public/
│   ├── assets/
│   │   ├── topography-vectors.svg      # Geospatial Topography Vector Overlays
│   │   └── audio-synthesizer.js        # Web Audio API Siren Waveform Generators
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SectorTacticalMap.jsx       # Interactive Geospatial Map, Pins & Lat/Long Grid
│   │   ├── ConsensusMatrix.jsx         # 3D Multi-Agent Node Voting & Confidence Visualizer
│   │   ├── DynamicTelemetry.jsx        # Real-time Sensor Sliders & Hydrological Heatmap
│   │   ├── SirenController.jsx         # Web Audio API Dual-Tone Emergency Siren Synthesizer
│   │   └── AgentTraceTerminal.jsx      # Live Dispatch Intelligence & Python Routing Streamer
│   ├── types/
│   │   └── geospatial.ts               # TypeScript Interfaces for Sectors, Nodes & Hydro Metrics
│   ├── utils/
│   │   └── hydroCalculations.js        # XGBoost Spatial Downscaling & Deviation Ratios
│   ├── App.jsx                         # Master Dashboard Layout, Navigation & State Engine
│   └── index.css                       # Tactical Dark Theme, Glow Utilities & Animations
├── .env.example                        # Template Environment Variables
├── .gitignore                          # Ignored Build Artifacts & Node Modules
├── package.json                        # Project Dependencies, Scripts & Metadata
├── tailwind.config.js                  # Custom Tailwind Theme Extensions (Glow, Radar, Matrix)
├── vite.config.js                      # Vite Bundler & Path Aliases Configuration
└── README.md                           # Project Documentation

🌿 Git Branching Strategy & Workflow
​This project follows an enterprise Git branching model to guarantee stable production releases:
​main: Production-ready branch. Automatically deployed to live Vercel environment (https://aegisswarm-flood-consensus-engine.ai.studio). Updated exclusively via verified Pull Requests.
​staging: Integration branch for pre-release validation and cross-agent testing.
​feature/<feature-name>: Isolated branches for continuous development (e.g., feature/tactical-map-pins, feature/groq-consensus-matrix, feature/web-audio-siren).
​🚀 Quick Start & Local Installation
​1. Prerequisites
​Ensure you have the following installed on your local machine:
​Node.js (v18.0.0 or higher)
​npm or yarn package manager
​2. Clone the Repository
git clone https://github.com/Innovexa/AegisSwarm-Flood-Consensus.git
cd AegisSwarm-Flood-Consensus
3. Install Dependencies

npm install

4. Configure Environment Variables
​Create a .env file in the root directory by referencing .env.example:
cp .env.example .env

Add your Groq API key inside .env:
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_APP_ENV=production

5. Run Local Development Server

npm run dev

Open http://localhost:5173 in your browser to interact with the dashboard.
​📦 Production Build & Deployment
​To bundle the application for optimal production performance, run:
npm run build
To preview the production build locally:
npm run preview

👥 Team & Submission Information
​Project Title: AegisSwarm — Autonomous Geospatial Flood Consensus Engine
​Team Name: Innovexa
Developer: D.Madhumitha
​