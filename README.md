<div align="center">

<img src="ui/public/aHhOPd_w_400x400.jpg" alt="KIBBY TRADER" width="120" />

# KIBBY TRADER

**Autonomous AI trading agent on Solana**

[![Live](https://img.shields.io/badge/Live%20Dashboard-online-00ff94?style=for-the-badge&logo=vercel&logoColor=white)](https://ui-zeta-roan.vercel.app)
[![Railway](https://img.shields.io/badge/Backend-Railway-6c42df?style=for-the-badge&logo=railway&logoColor=white)](https://actavis-agent-production.up.railway.app/health)
[![Model](https://img.shields.io/badge/AI-GPT--4o%20%2F%20Claude%20Opus%204.6-74aa9c?style=for-the-badge&logo=openai&logoColor=white)](#)
[![SOL](https://img.shields.io/badge/Chain-Solana-9945ff?style=for-the-badge&logo=solana&logoColor=white)](#)
[![Scanner](https://img.shields.io/badge/Scanner-Birdeye%20%2B%20DexScreener-00c2ff?style=for-the-badge)](#)
[![Telegram](https://img.shields.io/badge/Alerts-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)

> **KIBBY TRADER** runs 24/7 — scanning Birdeye, DexScreener & Pump.fun every 10 minutes,  
> reasoning through market data with GPT-4o / Claude Opus 4.6, executing trades on Solana, and sending live alerts to Telegram.

<br/>

[**→ Open Live Dashboard**](https://ui-zeta-roan.vercel.app) &nbsp;·&nbsp; [**→ Health Check**](https://actavis-agent-production.up.railway.app/health)

</div>

---

## What It Does

```
╔══════════════════════════════════════════════════════════════╗
║                   KIBBY TRADER — Every 10 min               ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  📡  SCAN                                                    ║
║      ├── Birdeye       →  token analytics & new listings     ║
║      ├── DexScreener   →  top boosted tokens                 ║
║      └── Pump.fun      →  trending memecoins                 ║
║                                  │                           ║
║  🧠  THINK                       ▼                           ║
║      GPT-4o / Claude Opus 4.6 analyzes:                      ║
║      · price action   · liquidity depth                      ║
║      · volume spike   · token age & holders                  ║
║      · risk score     · entry / exit signal                  ║
║                                  │                           ║
║  💰  ACT                         ▼                           ║
║      BUY  ──▶  Jupiter Aggregator  ──▶  Solana Mainnet       ║
║      SELL ──▶  Jupiter Aggregator  ──▶  Solana Mainnet       ║
║      HOLD ──▶  update memory & wait next cycle               ║
║                                  │                           ║
║  📊  LOG                         ▼                           ║
║      Event log (JSONL)  ──▶  SSE stream  ──▶  Live UI        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

No human needed. Fully autonomous.

---

## Tech Stack

| Layer | Technology |
|---|---|
| AI Brain | GPT-4o / Claude Opus 4.6 via Vercel AI SDK |
| Blockchain | Solana — Jupiter aggregator swaps |
| Scanner | Birdeye + DexScreener + Pump.fun |
| Backend | Node 22 + TypeScript + Hono |
| Frontend | React 18 + Vite 5 + Framer Motion |
| Deploy | Railway (backend) + Vercel (frontend) |
| Realtime | Server-Sent Events (SSE) |

---

## Architecture

```mermaid
flowchart TD
    style A fill:#1a1a2e,stroke:#00ff94,color:#fff
    style E fill:#1a1a2e,stroke:#9945ff,color:#fff
    style F fill:#1a1a2e,stroke:#9945ff,color:#fff
    style G fill:#1a1a2e,stroke:#444,color:#aaa

    A([🌐 Web UI / Vercel]) -->|SSE live stream| B

    subgraph BACKEND [" 🖥️  Hono Server — Railway :3002 "]
        B[API Layer] --> C[Trading Loop\n⏱ every 10 min]
        B --> H[💬 Chat Interface]
    end

    subgraph SCANNER [" 📡  Multi-Source Scanner "]
        D1[🦅 Birdeye\ntoken analytics & listings]
        D2[📈 DexScreener\ntop boosts]
        D3[🐸 Pump.fun\ntrending memecoins]
    end

    C --> SCANNER
    D1 & D2 & D3 -->|token list + metrics| E

    subgraph BRAIN [" 🧠  AI Brain "]
        E[GPT-4o / Claude Opus 4.6\nprice · liquidity · volume · risk]
    end

    E -->|BUY / SELL / HOLD| F

    subgraph EXECUTION [" 💰  Execution "]
        F[Jupiter Aggregator\nSolana Mainnet]
    end

    F -->|tx signature| G[(Event Log\nJSONL)]
    G -->|push events| B
```

---

## AI Brain

KIBBY TRADER uses **GPT-4o** and **Claude Opus 4.6** with a structured tool loop — switchable via env var:

- **`scan_tokens`** — pulls data from Birdeye (token analytics), DexScreener (top boosts), Pump.fun (trending)
- **`get_positions`** — checks current open positions & unrealized PnL
- **`buy_token`** — executes a Jupiter aggregator swap (SOL → token)
- **`sell_token`** — exits a position (token → SOL) via Jupiter
- **`recall_memory`** — reads persistent notes from previous cycles

Each cycle the agent reasons step-by-step: *"Should I enter this? What's the liquidity? What's my risk? Do I hold or exit?"*

---

## Trading Engine

| Parameter | Value |
|---|---|
| Cycle interval | 10 minutes |
| Scanner sources | Birdeye + DexScreener + Pump.fun |
| Swap router | Jupiter Aggregator |
| Network | Solana Mainnet |
| AI models | GPT-4o / Claude Opus 4.6 (switchable) |
| Auto-trading | ✅ enabled by default |
| Guard checks | Position size + liquidity + cooldown |

---

## Live Dashboard

The UI streams live data from the agent in real-time via SSE:

| Tab | What you see |
|---|---|
| Overview | Wallet balance, PnL, agent status |
| Positions | Open trades with unrealized PnL |
| Scanner | Tokens currently being analyzed |
| Brain | GPT-4o / Claude Opus 4.6 reasoning log |
| Event Log | Full event stream |
| Config | Agent parameters |
| Telegram | Live trade alerts & notifications |

**[→ Open Dashboard](https://ui-zeta-roan.vercel.app)**

---

## Quick Start

<details>
<summary><b>🏃 Run locally</b></summary>

```bash
# Prerequisites: Node.js 22+
git clone https://github.com/JunaidAtta-ai/Miles_Trader
cd Miles_Trader
npm install
```

Create a `.env` file:

```env
OPENAI_API_KEY=sk-...
SOLANA_PRIVATE_KEY=your_base58_private_key
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
SOLANA_AUTO_TRADING=true
AI_MODEL=gpt-4o          # or: claude-opus-4-6
PORT=3002
```

```bash
# Start backend
npx tsx src/main.ts

# Start frontend (separate terminal)
cd ui && npm install && npm run dev
```

Open [localhost:3002](http://localhost:3002)

</details>

<details>
<summary><b>🚀 Deploy to Railway + Vercel</b></summary>

**Backend (Railway):**
1. Connect GitHub repo to Railway
2. Railway auto-detects `Dockerfile`
3. Set env vars: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `SOLANA_PRIVATE_KEY`, `AI_MODEL=gpt-4o` (or `claude-opus-4-6`), `SOLANA_AUTO_TRADING=true`

**Frontend (Vercel):**
1. Connect `ui/` subfolder to Vercel
2. Set `VITE_API_URL` to your Railway URL
3. Deploy

</details>

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | ✅ | GPT-4o API key |
| `ANTHROPIC_API_KEY` | optional | Claude Opus 4.6 API key |
| `SOLANA_PRIVATE_KEY` | ✅ | Base58 Solana wallet private key |
| `SOLANA_RPC_URL` | optional | Custom RPC (default: mainnet) |
| `AI_MODEL` | optional | Model override: `gpt-4o` or `claude-opus-4-6` |
| `SOLANA_AUTO_TRADING` | optional | Enable auto-trading (default: `true`) |
| `SOLANA_TRADING_INTERVAL_MINUTES` | optional | Cycle interval (default: `10`) |
| `PORT` | optional | HTTP port (default: `3002`) |
| `BIRDEYE_API_KEY` | optional | Birdeye API key for token data |
| `TELEGRAM_BOT_TOKEN` | optional | Telegram bot token for trade alerts |
| `TELEGRAM_CHAT_ID` | optional | Telegram chat ID to send alerts to |

---

## Project Structure

<details>
<summary><b>📁 View full structure</b></summary>

```
src/
├── main.ts                    # Entry point
├── core/
│   ├── engine.ts              # Facade → AgentCenter
│   ├── agent-center.ts        # Provider routing + sessions
│   ├── config.ts              # Env-aware config loader
│   ├── event-log.ts           # Append-only JSONL event bus
│   └── tool-center.ts         # Tool registry
├── extension/
│   ├── memecoin-scanner/      # Birdeye + DexScreener + Pump.fun
│   ├── solana-trading/        # Jupiter swap execution
│   └── brain/                 # Memory + persistent state
├── task/
│   └── trading-loop/          # 10-min autonomous cycle
├── connectors/
│   └── web/                   # Hono HTTP + SSE connector
└── plugins/
    └── http.ts                # /health endpoint

ui/
├── src/
│   ├── App.tsx                # Main dashboard shell
│   ├── components/            # Overview, Scanner, Brain, etc.
│   ├── hooks/useSSE.ts        # Live event stream hook
│   └── api.ts                 # REST client
└── public/
    └── logo.png               # MILES TRADER logo
```

</details>

---

## Disclaimer

> **This is experimental software.** Memecoin trading carries extreme risk of total loss.
> This project is for educational purposes only. Use at your own risk.

---

## License

MIT © 2026 Kibby Trader

---

<div align="center">

Built with ❤️ &nbsp;·&nbsp; Powered by GPT-4o &amp; Claude Opus 4.6 &nbsp;·&nbsp; Running on Solana

**[Dashboard](https://ui-zeta-roan.vercel.app)** &nbsp;·&nbsp; **[Health](https://actavis-agent-production.up.railway.app/health)**

</div>
