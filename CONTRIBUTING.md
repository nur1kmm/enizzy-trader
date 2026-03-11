# Contributing to Kibby Trader

Thanks for your interest in contributing. Here's how to get started.

## Setup

```bash
git clone https://github.com/kibby0x333/free.git
cd free
cp .env.example .env
npm install
cd ui && npm install && cd ..
```

Fill in your `.env` with API keys, then:

```bash
npm run dev        # start backend
cd ui && npm run dev   # start frontend
```

## Project Structure

```
src/                    # Backend (Node.js + Hono)
├── core/               # Agent engine, session, config
├── extension/
│   ├── memecoin-scanner/   # LiquidAF + DexScreener + Pump.fun
│   ├── solana-trading/     # Jupiter swap execution
│   └── brain/              # AI reasoning loop
├── task/
│   └── trading-loop/       # Main 10-min cron job
└── main.ts

ui/src/                 # Frontend (React + Vite + TypeScript)
├── components/         # Dashboard panels
├── hooks/              # SSE streaming hook
└── App.tsx
```

## Making Changes

- Branch from `master`
- Keep PRs focused — one feature or fix per PR
- TypeScript only — no `.js` files in `src/` or `ui/src/`
- Test your changes locally before submitting

## Reporting Issues

Open an issue with:
- What you expected
- What happened instead
- Steps to reproduce

## Questions

Open an issue or reach out on [Twitter](https://x.com/kibby0x).
