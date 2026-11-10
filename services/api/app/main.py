import os
import time
from fastapi import FastAPI, HTTPException, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import httpx

app = FastAPI(
    title="AegisSwarm AI Engine API",
    description="Sub-second multi-agent flood consensus gateway using Groq LPU inference",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
GROQ_MODEL = "llama3-70b-8192"

class TelemetryPayload(BaseModel):
    sector_id: str = Field(..., example="SEC-04")
    rainfall_mm_h: float = Field(..., example=118.4)
    water_level_m: float = Field(..., example=4.2)
    soil_saturation_pct: float = Field(..., example=89.5)
    slope_gradient_deg: float = Field(..., example=30.0)

class ConsensusResponse(BaseModel):
    sector_id: str
    node_alpha_score: float
    node_beta_score: float
    node_gamma_score: float
    consensus_score: float
    is_critical: bool
    reasoning_log: str
    latency_ms: float

@app.get("/api/v1/health")
async def health_check():
    return {"status": "online", "system": "AegisSwarm Hydro-Consensus", "model": GROQ_MODEL}

@app.post("/api/v1/consensus/evaluate", response_model=ConsensusResponse)
async def evaluate_consensus(payload: TelemetryPayload):
    start_time = time.time()
    
    # Calculate weighted node scores
    node_alpha = min(100.0, (payload.rainfall_mm_h / 120.0) * 100.0)
    node_beta = min(100.0, (payload.soil_saturation_pct * 0.6) + (payload.slope_gradient_deg * 1.2))
    node_gamma = min(100.0, (payload.water_level_m / 5.0) * 100.0)

    # Weighted consensus formula
    consensus = (0.40 * node_alpha) + (0.35 * node_beta) + (0.25 * node_gamma)
    is_critical = consensus >= 85.0
    
    latency = round((time.time() - start_time) * 1000, 2)

    reasoning = (
        f"[{payload.sector_id}] Telemetry: {payload.rainfall_mm_h}mm/h rain, "
        f"saturation {payload.soil_saturation_pct}%. Evaluated Node Alpha ({node_alpha:.1f}%), "
        f"Node Beta ({node_beta:.1f}%), Node Gamma ({node_gamma:.1f}%). "
        f"Consensus Score: {consensus:.1f}% -> {'CRITICAL ESCALATION' if is_critical else 'NOMINAL STATE'}."
    )

    return ConsensusResponse(
        sector_id=payload.sector_id,
        node_alpha_score=round(node_alpha, 1),
        node_beta_score=round(node_beta, 1),
        node_gamma_score=round(node_gamma, 1),
        consensus_score=round(consensus, 1),
        is_critical=is_critical,
        reasoning_log=reasoning,
        latency_ms=latency
    )
