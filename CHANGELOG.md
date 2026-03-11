# Changelog

All notable changes to Kibby Trader are documented here.

## [1.2.0] - 2026-03-12

### Added
- LiquidAF API integration as primary scanner source
- Claude Opus 4.6 as alternative AI brain alongside GPT-4o
- Public live dashboard via SSE streaming
- Real-time PnL tracking per trade

### Changed
- Scanner now runs every 10 minutes (was 15)
- Improved Jupiter swap execution with retry logic
- Dashboard redesigned with dark theme + Framer Motion animations

### Removed
- BNB/PancakeSwap integration (Solana-only focus)

## [1.1.0] - 2026-02-20

### Added
- DexScreener v2 API integration
- Pump.fun token scanner
- Wallet balance monitoring
- Trade history log (JSONL)

### Fixed
- DexScreener endpoint `/tokens/solana/` → `/latest/dex/tokens/`
- Pump.fun 530 error — switched to backup endpoint

## [1.0.0] - 2026-01-15

### Added
- Initial release
- Autonomous trading loop with GPT-4o
- Jupiter Aggregator swap execution on Solana mainnet
- Hono HTTP server with health check
- React dashboard with agent status panel
- Railway + Vercel deployment support
- Docker support
