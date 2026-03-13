import 'dotenv/config';
import { createVertexAnthropic } from '@ai-sdk/google-vertex/anthropic';
import { generateText } from 'ai';

const vertex = createVertexAnthropic({
  project: process.env.VERTEX_PROJECT!,
  location: process.env.VERTEX_LOCATION!,
});

const models = ['claude-opus-4-6', 'claude-sonnet-4-6', 'claude-haiku-4-5@20251001'];

for (const modelId of models) {
  console.log(`Testing ${modelId}...`);
  const { text, usage } = await generateText({
    model: vertex(modelId),
    prompt: 'Say "hello" in one word.',
    maxTokens: 10,
    headers: { 'anthropic-beta': 'context-1m-2025-08-07' },
  });
  console.log(`  ✅ ${text} (${usage.promptTokens} in / ${usage.completionTokens} out)`);
}
