# Vertex AI Anthropic Test

Minimal test to validate Vertex AI can serve Anthropic Claude models. Uses the same AI SDK versions and call patterns as Falconer.

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your GCP project and region
```

## Usage

```bash
npm test                # generateText test
npm run test:stream     # streamText test
```
