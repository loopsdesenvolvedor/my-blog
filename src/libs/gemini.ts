"use server";

import axios from "axios";

export const sendPromptGemini = async ({ prompt }: { prompt: string }) => {
  const req = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
    }
  );

  try {
    let response: string = req.data.candidates[0].content.parts[0].text;

    response = response.replace("```json", "").replace("```", "");

    return JSON.parse(response);
  } catch (error) {
    return {
      error: "Resposta indisponível",
    };
  }
};
