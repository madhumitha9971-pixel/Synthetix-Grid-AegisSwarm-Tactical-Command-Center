export interface SectorData {
  id: string;
  name: string;
  elevation: number;
  slopeDegree: number;
  stationId: string;
  gps: {
    lat: number;
    lng: number;
  };
}

export interface TelemetryMetrics {
  rainfallMmH: number;
  waterLevelM: number;
  soilSaturationPct: number;
  culvertStressPct: number;
}

export interface AgentNodeScores {
  alpha: number;
  beta: number;
  gamma: number;
}

export interface ConsensusResult {
  sectorId: string;
  nodes: AgentNodeScores;
  consensusScore: number;
  isCritical: boolean;
  reasoningLog: string;
  timestamp: string;
}
