"use client";

import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Activity,
  Code2,
  Fingerprint,
  RefreshCw,
} from "lucide-react";
import { ChainLogo } from "@/components/ui/chain-logos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExpandingButton } from "@/components/ui/expanding-button";
import { cn } from "@/lib/utils";

interface HackathonChainData {
  id: "ethereum" | "arbitrum" | "robinhood";
  name: string;
  badge: string;
  roleTag: string;
  tagline: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  activePulse: string;
  specs: {
    engine: string;
    target: string;
    securityFocus: string;
  };
  features: string[];
  ctaUrl: string;
}

const HACKATHON_CHAINS: HackathonChainData[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    badge: "L1 SETTLEMENT",
    roleTag: "Foundational Security & EVM Core",
    tagline: "The base settlement layer anchoring decentralized state and multi-billion dollar TVL.",
    accentColor: "text-[#8C8CBE]",
    glowColor: "from-[#627EEA]/15 via-[#627EEA]/5 to-transparent",
    borderColor: "group-hover:border-[#627EEA]/40",
    activePulse: "bg-[#8C8CBE]",
    specs: {
      engine: "Solidity v0.8.24+ / EVM Cancun",
      target: "L1 Protocols & Core Vaults",
      securityFocus: "Reentrancy & Flash-Loan Immunity",
    },
    features: [
      "Deep AST analysis for EVM storage collisions & delegatecalls",
      "Formal invariant checks for ERC-20, ERC-721 & ERC-4626 vaults",
      "Gas-profiling & opcode vulnerability detection (Dencun-ready)",
    ],
    ctaUrl: "/portal/new-request",
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    badge: "NITRO L2 ROLLUP",
    roleTag: "High-Throughput Execution & Orbit",
    tagline: "Nitro execution environment powering next-generation low-latency DeFi and perpetuals.",
    accentColor: "text-[#28A0F0]",
    glowColor: "from-[#28A0F0]/15 via-[#28A0F0]/5 to-transparent",
    borderColor: "group-hover:border-[#28A0F0]/40",
    activePulse: "bg-[#28A0F0]",
    specs: {
      engine: "Arbitrum Nitro AVM & Stylus (WASM)",
      target: "Low-Latency Rollup Contracts",
      securityFocus: "Cross-Domain Bridge & Sequencer Safety",
    },
    features: [
      "Cross-domain L1 <-> L2 message verification & replay defense",
      "Sequencer delay & timestamp-drift invariant modeling",
      "Stylus WASM (Rust/C++) & Solidity inter-contract audits",
    ],
    ctaUrl: "/portal/new-request",
  },
  {
    id: "robinhood",
    name: "Robinhood",
    badge: "CRYPTO & WALLET GATEWAY",
    roleTag: "Consumer Web3 & Connect API",
    tagline: "Retail crypto on-ramps, self-custody wallet integrations, and liquidity routing interfaces.",
    accentColor: "text-[#00C805]",
    glowColor: "from-[#00C805]/15 via-[#00C805]/5 to-transparent",
    borderColor: "group-hover:border-[#00C805]/40",
    activePulse: "bg-[#00C805]",
    specs: {
      engine: "Robinhood Connect & Web3 SDK",
      target: "On-Ramp & Consumer DApps",
      securityFocus: "Self-Custody & Interface Bounds",
    },
    features: [
      "Robinhood Connect widget & order-routing signature audits",
      "Self-custody signing security & account abstraction hooks",
      "Slippage frontrunning defense & on-ramp escrow verification",
    ],
    ctaUrl: "/portal/new-request",
  },
];

export function HackathonChainsShowcase() {
  const [selectedChainId, setSelectedChainId] = React.useState<"ethereum" | "arbitrum" | "robinhood">("arbitrum");

  const selectedChain = React.useMemo(
    () => HACKATHON_CHAINS.find((c) => c.id === selectedChainId) || HACKATHON_CHAINS[0],
    [selectedChainId]
  );

  return (
    <section id="ecosystem" className="hackathon-chains-section relative py-20 sm:py-28 border-t border-border-hairline bg-bg-void overflow-hidden">
      {/* Dynamic atmospheric radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent-scan/[0.03] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-scan/10 border border-accent-scan/20 text-accent-scan font-mono text-xs shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-accent-scan animate-pulse" />
            <span className="font-semibold tracking-wide uppercase">Hackathon Track Focus</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-text-primary leading-[1.12]">
            Securing the Hackathon Triad:{" "}
            <span className="text-accent-scan">Ethereum, Arbitrum & Robinhood.</span>
          </h2>

          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto font-sans leading-relaxed">
            From L1 base layer consensus and Nitro rollup speed, to seamless retail Web3 onboarding — Zyron delivers purpose-built automated AST analysis and formal triage for the hackathon tracks.
          </p>
        </div>

        {/* 3 Chain Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HACKATHON_CHAINS.map((chain) => {
            const isSelected = selectedChainId === chain.id;

            return (
              <div
                key={chain.id}
                onClick={() => setSelectedChainId(chain.id)}
                className={cn(
                  "group relative rounded-2xl p-1.5 transition-all duration-300 cursor-pointer text-left",
                  isSelected
                    ? "bg-gradient-to-b from-accent-scan/30 via-border-hairline/60 to-transparent shadow-lg shadow-accent-scan/5 scale-[1.01]"
                    : "bg-[#F2F4F7] dark:bg-bg-void/60 hover:bg-[#EAEBED] dark:hover:bg-bg-panel/40"
                )}
              >
                <div className="h-full rounded-xl border border-[#E4E7EC] dark:border-border-hairline/60 bg-white dark:bg-bg-panel p-6 flex flex-col justify-between space-y-6 shadow-xs relative overflow-hidden">
                  {/* Subtle top corner gradient glow */}
                  <div className={cn("absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-40 bg-gradient-to-br", chain.glowColor)} />

                  {/* Header Row */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-[#F8F9FA] dark:bg-bg-void border border-border-hairline flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                          <ChainLogo name={chain.name} className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-text-primary flex items-center gap-2">
                            {chain.name}
                            <span className={cn("h-2 w-2 rounded-full animate-ping opacity-75", chain.activePulse)} />
                          </h3>
                          <span className="text-[11px] font-mono text-text-muted">{chain.roleTag}</span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-bg-void/80 text-text-muted border border-border-hairline">
                        {chain.badge}
                      </span>
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed font-sans min-h-[36px]">
                      {chain.tagline}
                    </p>
                  </div>

                  {/* Security Specs Box */}
                  <div className="p-3.5 rounded-xl bg-[#F8F9FA] dark:bg-bg-void/60 border border-border-hairline/80 space-y-2.5 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted">RUNTIME / SDK:</span>
                      <span className="text-text-primary font-semibold text-[11px] truncate max-w-[170px]">
                        {chain.specs.engine}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted">TARGET:</span>
                      <span className="text-text-primary font-medium text-[11px]">
                        {chain.specs.target}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-border-hairline/60">
                      <span className="text-text-muted">INVARIANT:</span>
                      <span className={cn("font-semibold text-[11px]", chain.accentColor)}>
                        {chain.specs.securityFocus}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                      Audit Coverage Modules:
                    </span>
                    <ul className="space-y-1.5">
                      {chain.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text-primary font-sans leading-snug">
                          <CheckCircle2 className="h-3.5 w-3.5 text-signal-resolved shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-2 border-t border-border-hairline/60">
                    <Link href={chain.ctaUrl} className="block">
                      <Button
                        variant={isSelected ? "default" : "secondary"}
                        size="sm"
                        className="w-full rounded-xl text-xs flex items-center justify-center gap-1.5 font-medium group/btn"
                      >
                        <span>Audit {chain.name} Contracts</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Telemetry Panel */}
        <div className="rounded-2xl border border-[#E2E6EC] dark:border-border-hairline/80 bg-[#F2F4F7] dark:bg-bg-void/60 p-1.5 sm:p-2 shadow-xs">
          <div className="rounded-xl border border-[#E4E7EC] dark:border-border-hairline/60 bg-white dark:bg-bg-panel p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-hairline pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-accent-scan/10 text-accent-scan border border-accent-scan/20 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-accent-scan animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-text-primary">
                    Cross-Ecosystem Audit Matrix & Verification Harness
                  </h3>
                  <p className="text-xs text-text-muted">
                    Active rule engine calibrations synchronized for Ethereum, Arbitrum, and Robinhood.
                  </p>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal-resolved/10 text-signal-resolved border border-signal-resolved/20 font-mono text-xs font-semibold self-start sm:self-auto">
                <span className="h-2 w-2 rounded-full bg-signal-resolved animate-pulse" />
                <span>HACKATHON SCOPE VERIFIED</span>
              </div>
            </div>

            {/* Triad Architecture Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-bg-void/40 border border-border-hairline space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-text-primary font-bold">
                  <ChainLogo name="Ethereum" className="h-4 w-4" />
                  <span>1. Base Layer (Ethereum)</span>
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Canonical state settlement, reentrancy guards, and trustless governance timelock audits verified at EVM bytecode level.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-bg-void/40 border border-border-hairline space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-text-primary font-bold">
                  <ChainLogo name="Arbitrum" className="h-4 w-4" />
                  <span>2. Rollup Execution (Arbitrum)</span>
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Nitro AVM state machine verification, L1 inbox sequencer validation, and multi-language Stylus contract interoperability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-bg-void/40 border border-border-hairline space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-text-primary font-bold">
                  <ChainLogo name="Robinhood" className="h-4 w-4" />
                  <span>3. User Interface (Robinhood)</span>
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Web3 Connect integration security, self-custody wallet signing guards, and slippage/frontrunning execution checks.
                </p>
              </div>
            </div>

            {/* Bottom Ingestion Action Banner */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-hairline/60">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <CheckCircle2 className="h-4 w-4 text-accent-scan shrink-0" />
                <span>Ready to submit an audit for Ethereum, Arbitrum, or Robinhood? Instant AST intake queue available.</span>
              </div>

              <Link href="/portal/new-request" className="w-full sm:w-auto">
                <ExpandingButton
                  variant="accent"
                  rounded="xl"
                  size="md"
                  className="w-full sm:w-auto text-xs"
                  icon={<ArrowUpRight className="h-4 w-4 stroke-[2.5]" />}
                >
                  Launch Hackathon Audit
                </ExpandingButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
