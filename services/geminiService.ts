
import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

// Always initialize GoogleGenAI with a named parameter using process.env.API_KEY.
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a positioning audit based on multiple diagnostic answers.
 * Incorporates "Actionably" philosophy: every point must be an immediately implementable step.
 */
export const generateDiagnosticAudit = async (answers: Record<string, string>): Promise<AuditResult> => {
  const ai = getAI();
  const context = Object.entries(answers).map(([key, val]) => `${key}: ${val}`).join('\n');
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this founder's business position using the Actionably x ChinaMenTor framework:\n${context}\n\nTasks:\n1. Identify the 'Effort Trap'.\n2. Provide 4 HIGHLY ACTIONABLE leverage points (steps they can take TODAY).\n3. Define one 'Strategic Shift'.\n4. Synthesize their 'Unfair Advantage'.\n\nEnsure all advice is concrete, tactical, and immediately implementable (Actionable).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          currentPosition: { type: Type.STRING },
          leveragePoints: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          strategicShift: { type: Type.STRING },
          unfairAdvantage: { type: Type.STRING },
          scoreCard: {
            type: Type.OBJECT,
            properties: {
              identity: { type: Type.NUMBER },
              marketing: { type: Type.NUMBER },
              sales: { type: Type.NUMBER },
              growth: { type: Type.NUMBER }
            },
            required: ["identity", "marketing", "sales", "growth"]
          }
        },
        required: ["currentPosition", "leveragePoints", "strategicShift", "unfairAdvantage", "scoreCard"]
      }
    }
  });

  try {
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI");
    }
    return JSON.parse(text.trim());
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    throw new Error("Analysis failed. Please try again.");
  }
};

export const generateAudit = async (input: string): Promise<AuditResult> => {
  return generateDiagnosticAudit({ initial_position: input });
};
