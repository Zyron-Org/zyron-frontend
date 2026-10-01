"use client";

import * as React from "react";
import { Cpu } from "lucide-react";
import { ChainLogo } from "@/components/ui/chain-logos";
import { cn } from "@/lib/utils";

interface EcosystemItem {
  name: string;
  logo: "Arbitrum" | "Ethereum" | "Robinhood";
  tag: string;
  tagColor: string;
}

const row1Items: EcosystemItem[] = [
  {
    name: "Arbitrum One",
    logo: "Arbitrum",
    tag: "Nitro L2 Rollup",
    tagColor: "text-[#28A0F0] border-[#28A0F0]/25 bg-[#28A0F0]/5",
  },
  {
    name: "Ethereum Mainnet",
    logo: "Ethereum",
    tag: "L1 EVM Settlement",
    tagColor: "text-[#8C8CBE] border-[#8C8CBE]/25 bg-[#8C8CBE]/5",
  },
  {
    name: "Robinhood Connect",
    logo: "Robinhood",
    tag: "Web3 Crypto Gateway",
    tagColor: "text-[#00C805] border-[#00C805]/25 bg-[#00C805]/5",
  },
  {
    name: "Arbitrum Nitro",
    logo: "Arbitrum",
    tag: "AVM Execution Safety",
    tagColor: "text-[#28A0F0] border-[#28A0F0]/25 bg-[#28A0F0]/5",
  },
  {
    name: "Ethereum EVM",
    logo: "Ethereum",
    tag: "Cancun / Shanghai",
    tagColor: "text-[#8C8CBE] border-[#8C8CBE]/25 bg-[#8C8CBE]/5",
  },
  {
    name: "Robinhood Wallet",
    logo: "Robinhood",
    tag: "Self-Custody API",
    tagColor: "text-[#00C805] border-[#00C805]/25 bg-[#00C805]/5",
  },
];

const row2Items: EcosystemItem[] = [
  {
    name: "Ethereum Sepolia",
    logo: "Ethereum",
    tag: "Testnet Staging",
    tagColor: "text-[#8C8CBE] border-[#8C8CBE]/25 bg-[#8C8CBE]/5",
  },
  {
    name: "Arbitrum Orbit",
    logo: "Arbitrum",
    tag: "L3 Rollup Infra",
    tagColor: "text-[#28A0F0] border-[#28A0F0]/25 bg-[#28A0F0]/5",
  },
  {
    name: "Robinhood Crypto",
    logo: "Robinhood",
    tag: "Order-Routing Defense",
    tagColor: "text-[#00C805] border-[#00C805]/25 bg-[#00C805]/5",
  },
  {
    name: "Arbitrum Stylus",
    logo: "Arbitrum",
    tag: "WASM / Rust & Solidity",
    tagColor: "text-[#28A0F0] border-[#28A0F0]/25 bg-[#28A0F0]/5",
  },
  {
    name: "Ethereum Core",
    logo: "Ethereum",
    tag: "ERC-4626 & Vaults",
    tagColor: "text-[#8C8CBE] border-[#8C8CBE]/25 bg-[#8C8CBE]/5",
  },
  {
    name: "Robinhood Gateway",
    logo: "Robinhood",
    tag: "On-Ramp Verification",
    tagColor: "text-[#00C805] border-[#00C805]/25 bg-[#00C805]/5",
  },
];

export function SupportedChainsShowcase() {
  return (
    <section id="ecosystem" className="relative py-20 border-t border-border-hairline bg-bg-void/80 overflow-hidden">
      {/* Section Header */}
      <div className="reveal-on-scroll max-w-4xl mx-auto px-4 text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-bg-panel border border-border-hairline text-accent-scan font-mono text-xs">
          <Cpu className="h-3.5 w-3.5 text-accent-scan" />
          <span>CROSS-CHAIN SECURITY LAB</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-text-primary">
          Securing smart contracts across{" "}
          <span className="text-accent-scan">Arbitrum, Ethereum &amp; Robinhood.</span>
        </h2>

        <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto font-sans leading-relaxed">
          Continuous automated AST rules and manual audit triage calibrated for EVM Cancun execution, Arbitrum Nitro rollup invariants, and Robinhood Web3 integrations.
        </p>
      </div>

      {/* 2-Row Sleek Ambient Marquee */}
      <div className="relative w-full overflow-hidden space-y-3.5 py-2">
        {/* Left & Right Edge Cut-Out Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-bg-void via-bg-void/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-bg-void via-bg-void/80 to-transparent z-20" />

        {/* Row 1: Leftward smooth continuous glide */}
        <div className="flex items-center gap-3.5 whitespace-nowrap will-change-transform animate-marquee-left hover:[animation-play-state:paused]">
          {[...row1Items, ...row1Items, ...row1Items].map((item, index) => (
            <div
              key={`r1-${item.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-[6px] bg-bg-panel border border-border-hairline shadow-sm dark:shadow-black/60 shadow-black/5 hover:bg-bg-panel-raised hover:border-accent-scan/30 transition-all group shrink-0 select-none cursor-default"
            >
              <ChainLogo name={item.logo} className="h-5 w-5 shrink-0" />
              <span className="font-display font-medium text-xs text-text-primary group-hover:text-accent-scan transition-colors">
                {item.name}
              </span>
              <span className={cn("text-[10px] font-mono px-2 py-0.5 rounded-[4px] border font-medium", item.tagColor)}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward smooth continuous glide */}
        <div className="flex items-center gap-3.5 whitespace-nowrap will-change-transform animate-marquee-right hover:[animation-play-state:paused]">
          {[...row2Items, ...row2Items, ...row2Items].map((item, index) => (
            <div
              key={`r2-${item.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-[6px] bg-bg-panel border border-border-hairline shadow-sm dark:shadow-black/60 shadow-black/5 hover:bg-bg-panel-raised hover:border-accent-scan/30 transition-all group shrink-0 select-none cursor-default"
            >
              <ChainLogo name={item.logo} className="h-5 w-5 shrink-0" />
              <span className="font-display font-medium text-xs text-text-primary group-hover:text-accent-scan transition-colors">
                {item.name}
              </span>
              <span className={cn("text-[10px] font-mono px-2 py-0.5 rounded-[4px] border font-medium", item.tagColor)}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          animation: marqueeLeft 32s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 32s linear infinite;
        }
      `}</style>
    </section>
  );
}
