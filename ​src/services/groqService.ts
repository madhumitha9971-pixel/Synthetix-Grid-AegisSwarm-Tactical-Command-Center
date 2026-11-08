import Groq from "groq-sdk";

// Default fallback to stable 70B production endpoint
export const DEFAULT_GROQ_MODEL = "llama3-70b-8192";

export const executeSwarmConsensus = async (
  apiKey: string,
  telemetryPayload: Record<string, any>,
  modelEndpoint: string = DEFAULT_GROQ_MODEL
) => {
  const client = new Groq({ apiKey, dangerouslyAllowBrowser: true });

  const prompt = `
  You are AegisSwarm Autonomous Disaster Intelligence.
  Evaluate the following live hydrological telemetry payload:
  ${JSON.stringify(telemetryPayload, null, 2)}

  Task: Execute Node Alpha (IoT Telemetry), Node Beta (Topographical Solver), and Node Gamma (Historical Precedent) consensus validation.
  Return a JSON object containing:
  - masterConsensusScore (0 to 100)
  - nodeScores: { alpha: number, beta: number, gamma: number }
  - dispatchAlert: boolean (true if masterConsensusScore >= 85)
  - reasoningTrace: string
  `;

  const response = await client.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: modelEndpoint || DEFAULT_GROQ_MODEL,
    temperature: 0.2,
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0]?.message?.content || "{}");
};
