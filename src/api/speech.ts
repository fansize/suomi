import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI();

const speechFile = path.resolve("./src/api/speech.mp3");

export async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input:
      "Do not share your API key with others, or expose it in the browser or other client-side code. In order to protect the security of your account, OpenAI may also automatically disable any API key that we've found has leaked publicly.",
  });
  // console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
