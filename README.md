# Pieces Matrix Adapter

I've thrown the most common-use Pieces Typescript SDK types into an adapter recipe to create some robust, re-usable call handlers. In a nutshell:

`pattern × service × strategy = specific API calls`

<svg width="850" height="200" xmlns="http://www.w3.org/2000/svg"> <!-- Input --> <rect x="20" y="40" width="160" height="130" rx="5" ry="5" fill="white" stroke="#333" stroke-width="2"/> <text x="65" y="30" font-family="Arial" font-size="14" font-weight="bold">Inputs</text>

<text x="35" y="70" font-family="Arial" font-size="12" font-weight="bold">Pattern</text> <text x="50" y="90" font-family="Arial" font-size="12">list, get, create,</text> <text x="50" y="105" font-family="Arial" font-size="12">update, delete, etc.</text>

<text x="35" y="125" font-family="Arial" font-size="12" font-weight="bold">Service</text> <text x="50" y="145" font-family="Arial" font-size="12">conversations, assets,</text> <text x="50" y="160" font-family="Arial" font-size="12">models, etc.</text>

<text x="190" y="100" font-family="Arial" font-size="18" font-weight="bold">×</text>

<!-- Strategy --> <rect x="210" y="65" width="120" height="70" rx="5" ry="5" fill="white" stroke="#333" stroke-width="2"/> <text x="235" y="55" font-family="Arial" font-size="14" font-weight="bold">Strategy</text> <text x="220" y="85" font-family="Arial" font-size="12">standard</text> <text x="220" y="105" font-family="Arial" font-size="12">resilient</text> <text x="220" y="125" font-family="Arial" font-size="12">realtime</text>

<text x="340" y="100" font-family="Arial" font-size="18" font-weight="bold">=</text>

<!-- Matrix --> <rect x="360" y="40" width="360" height="120" rx="5" ry="5" fill="white" stroke="#333" stroke-width="2"/> <text x="420" y="30" font-family="Arial" font-size="14" font-weight="bold">Pieces Matrix</text>

<text x="370" y="70" font-family="Arial" font-size="12" font-weight="bold">Build Once, Ship Anywhere LLM Chat Apps:</text> <text x="385" y="90" font-family="Arial" font-size="12">• Easier Websocket, stores and frontend state management</text> <text x="385" y="110" font-family="Arial" font-size="12">• Smart retries and fallbacks</text> <text x="385" y="130" font-family="Arial" font-size="12">• Efficient caching on demand</text> <text x="385" y="150" font-family="Arial" font-size="12">• Maintains type safety</text> </svg>

# Quick Start

Clone this repo and install the core package directly from local copy:

```bash
cd /path/to/piecesmatrix
# Using npm
npm install /packages/core

# Using pnpm
pnpm add /path/to/piecesvelte/packages/core
```
Or you can install from my remote:

```bash
npm install github:seantiz/piecesvelte/packages/core
```

## Basic Usage

After installation, import and start up the adapter client:

```typescript
import { pieces, newAdapterClient } from 'core';

// Start the adapter client with default settings
newAdapterClient({
  port: 39000,
  basePath: 'http://localhost'
});

// Example: Check if the matrix adapter client can talk to your local Pieces OS server
async function checkConnection() {
  try {
    const health = await pieces.get('wellKnown.health');
    console.log('Connection status:', health.status);
    return health.status === 'running';
  } catch (error) {
    console.error('Failed to connect to Pieces OS:', error);
    return false;
  }
}

// Example: Ask a question with QGPT
async function askQuestion(query) {
  return pieces.send('qgpt.question', { query });
}
```

## Key Benefits

1. **Better DX** - Intuitive REST API naming means you'll use handlers without hunting through OpenAPI docs for machine-generated property names.

2. **Cut down debugging time** - This is a work in progress. Your local Pieces OS server _does_ have its own `Configuration` pipeline, but I've spent two years building with Pieces and the adapter's config state is the product of some hard-earned lessons on where to save time. Livestream pipelines can and will frequently go wrong after deployment. Built-in safeties catch errors before they waste your days.

3. **Smaller Footprint** - This isn't a criticism of the larger Pieces Typescript SDK, which itself covers more possible use-cases but ships with over 1MB of imports to cover them. This adapter is aims to ship with the most common-use endpoints only.


## The Big Aim
The biggest long-term problem of Cloud-LLM upstream services is latency. Added to that, people often want ChatGPT-like streaming and context-accuracy but have modest resources.

The Pieces OS SDK already handles accuracy and resource efficiency, so this adapter isn't pretending to do any revolutionary work on those two needs.

But speed is where I'm hoping the Matrix adapter will help you in your workflow.

We aim to keep latency down by bringing speed of DX, with minimal latency traded off in the backend. That's why the adapter uses a flatmap matrix to do its work.
