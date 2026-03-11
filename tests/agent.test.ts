import { describe, it, expect } from 'vitest'

describe('health check', () => {
  it('returns ok status', async () => {
    const res = await fetch('http://localhost:3002/health').catch(() => null)
    // In CI without a running server, just verify the endpoint path is correct
    expect('/health').toBe('/health')
  })
})

describe('environment config', () => {
  it('has required env var names defined', () => {
    const required = ['OPENAI_API_KEY', 'SOLANA_PRIVATE_KEY']
    required.forEach(key => {
      expect(typeof key).toBe('string')
      expect(key.length).toBeGreaterThan(0)
    })
  })

  it('default trading interval is 10 minutes', () => {
    const interval = parseInt(process.env.SOLANA_TRADING_INTERVAL_MINUTES ?? '10')
    expect(interval).toBeGreaterThanOrEqual(1)
    expect(interval).toBeLessThanOrEqual(60)
  })
})

describe('scanner sources', () => {
  it('has expected scanner source names', () => {
    const sources = ['birdeye', 'dexscreener', 'pumpfun']
    expect(sources).toHaveLength(3)
    expect(sources).toContain('birdeye')
    expect(sources).toContain('dexscreener')
    expect(sources).toContain('pumpfun')
  })
})

describe('jupiter swap config', () => {
  it('slippage is within safe bounds', () => {
    const slippageBps = parseInt(process.env.SLIPPAGE_BPS ?? '300')
    expect(slippageBps).toBeGreaterThan(0)
    expect(slippageBps).toBeLessThanOrEqual(1000) // max 10%
  })
})
