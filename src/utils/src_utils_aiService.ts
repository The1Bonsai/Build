// Replace HUGGINGFACE_API_TOKEN with your actual token from environment or config

const HUGGINGFACE_API_TOKEN = "<YOUR_HF_TOKEN>";

export async function sendMessageToAI(message: string): Promise<string> {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/bigcode/starcoder",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: message,
        options: { wait_for_model: true }
      })
    }
  );
  if (!response.ok) return "Sorry, I couldn't get a response from BuildBot.";
  const data = await response.json();
  return data.generated_text || data[0]?.generated_text || "No response.";
}