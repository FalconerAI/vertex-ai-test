import 'dotenv/config';
import { createVertexAnthropic } from '@ai-sdk/google-vertex/anthropic';
import { streamText } from 'ai';

const vertex = createVertexAnthropic({
  project: process.env.VERTEX_PROJECT!,
  location: process.env.VERTEX_LOCATION!,
});

console.log(`Streaming claude-sonnet-4-6...`);

const result = streamText({
  model: vertex('claude-sonnet-4-6'),
  prompt: 'Write a haiku about cloud computing.',
  maxTokens: 100,
  headers: { 'anthropic-beta': 'context-1m-2025-08-07' },
});

for await (const chunk of result.textStream) {
  process.stdout.write(chunk);
}

const usage = await result.usage;
console.log(`\n✅ ${usage.promptTokens} in / ${usage.completionTokens} out`);
