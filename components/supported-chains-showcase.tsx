"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, CheckCircle2, ShieldCheck } from "lucide-react";
import { ChainLogo } from "@/components/ui/chain-logos";
import { cn } from "@/lib/utils";

interface SupportedChain {
  id: string;
  name: string;
  networkType: string;
  runtime: string;
  description: string;
  features: string[];
  ctaUrl: string;
}

const SUPPORTED_CHAINS: SupportedChain[] = [
  {
    id: "arbitrum",
    name: "Arbitrum",
    networkType: "Layer 2 Rollup",
    runtime: "Nitro AVM & Stylus WASM",
    description:
      "High-throughput optimistic rollup execution with deep sequencer drift invariants and cross-domain message validation.",
    features: [
      "L1 <-> L2 cross-domain message replay protection",
      "Sequencer timestamp & time-drift invariant checks",
      "Solidity & Stylus (Rust/WASM) contract interoperability",
    ],
    ctaUrl: "/portal/new-request",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    networkType: "Layer 1 Settlement",
    runtime: "EVM Cancun / Shanghai",
    description:
      "Canonical base layer settlement anchoring decentralized state, multi-asset vaults, and core protocol liquidity.",
    features: [
      "EVM storage collision & delegatecall AST checks",
      "ERC-20, ERC-721, and ERC-4626 vault invariant analysis",
      "Formal reentrancy and flash-loan attack vector modeling",
    ],
    ctaUrl: "/portal/new-request",
  },
  {
    id: "robinhood",
    name: "Robinhood",
    networkType: "Crypto & Web3 Gateway",
    runtime: "Robinhood Connect & Wallet SDK",
    description:
      "Consumer on-ramp and self-custody infrastructure connecting retail Web3 interfaces to verified smart contracts.",
    features: [
      "Robinhood Connect signature & order-routing audits",
      "Self-custody signing and interface permission boundaries",
      "Slippage protection and on-ramp escrow verification",
    ],
    ctaUrl: "/portal/new-request",
  },
];

export function SupportedChainsShowcase() {
  const [selectedChainId, setSelectedChainId] = React.useState<string>("arbitrum");

  return (
    <section id="ecosystem" className="relative py-20 sm:py-24 border-t border-border-hairline bg-bg-void/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-bg-panel border border-border-hairline text-accent-scan font-mono text-xs">
            <Cpu className="h-3.5 w-3.5 text-accent-scan" />
            <span>SUPPORTED ECOSYSTEMS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-text-primary">
            Securing smart contracts across{" "}
            <span className="text-accent-scan">Arbitrum, Ethereum & Robinhood.</span>
          </h2>

          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto font-sans leading-relaxed">
            Continuous automated AST rules and manual audit triage calibrated for each ecosystem&apos;s specific execution environment and architecture.
          </p>
        </div>

        {/* 3 Chain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SUPPORTED_CHAINS.map((chain) => {
            const isSelected = selectedChainId === chain.id;

            return (
              <div
                key={chain.id}
                onClick={() => setSelectedChainId(chain.id)}
                className={cn(
                  "rounded-2xl p-1.5 transition-all duration-200 cursor-pointer text-left group",
                  isSelected
                    ? "bg-[#EAEBED] dark:bg-bg-panel-raised border border-accent-scan/30 shadow-xs"
                    : "bg-[#F2F4F7] dark:bg-bg-void/60 hover:bg-[#EAEBED] dark:hover:bg-bg-panel/40"
                )}
              >
                <div className="h-full rounded-xl border border-[#E4E7EC] dark:border-border-hairline/60 bg-white dark:bg-bg-panel p-6 flex flex-col justify-between space-y-5 shadow-xs">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-[#F8F9FA] dark:bg-bg-void border border-border-hairline flex items-center justify-center shrink-0">
                          <ChainLogo name={chain.name} className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-base font-bold text-text-primary">
                            {chain.name}
                          </h3>
                          <span className="text-[11px] font-mono text-text-muted">
                            {chain.networkType}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8F9FA] dark:bg-bg-void border border-border-hairline text-text-muted">
                        Active
                      </span>
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed font-sans min-h-[44px]">
                      {chain.description}
                    </p>
                  </div>

                  {/* Runtime Spec Badge */}
                  <div className="p-3 rounded-lg bg-[#F8F9FA] dark:bg-bg-void/50 border border-border-hairline text-xs font-mono flex items-center justify-between">
                    <span className="text-[11px] text-text-muted">Runtime:</span>
                    <span className="text-[11px] text-text-primary font-medium truncate max-w-[190px]">
                      {chain.runtime}
                    </span>
                  </div>

                  {/* Key Security Checks */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                      Target Audit Rules:
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

                  {/* Card Footer Link */}
                  <div className="pt-2 border-t border-border-hairline/60">
                    <Link
                      href={chain.ctaUrl}
                      className="text-xs font-medium text-text-muted hover:text-accent-scan transition-colors flex items-center justify-between group/link"
                    >
                      <span>New {chain.name} Audit Request</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-text-muted group-hover/link:text-accent-scan transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
