
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with a direct reference to process.env.API_KEY
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateFinancialStrategy = async (userGoal: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Como um consultor financeiro da D-AI Bank (uma fintech de IA descentralizada), analise o seguinte objetivo e forneça uma estratégia curta e poderosa em português: "${userGoal}". Concentre-se em como o ecossistema descentralizado pode ajudar.`,
    config: {
      temperature: 0.7,
      // Removed maxOutputTokens to avoid truncation and follow best practices unless strictly required
    },
  });

  return response.text || "Desculpe, não conseguimos processar sua estratégia agora. Tente novamente.";
};

export const analyzeInvestmentRisk = async (investmentType: string) => {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analise o risco do investimento em ${investmentType} dentro de um cenário de economia descentralizada e Web3. Responda em português.`,
        config: {
            temperature: 0.8,
            // Removed maxOutputTokens to allow the model to provide a full analysis
        }
    });
    return response.text || "Erro na análise.";
}