"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "@/env.mjs";

export const getAIResponse = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
}