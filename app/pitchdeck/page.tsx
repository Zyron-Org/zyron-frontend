"use client";

import * as React from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Code2,
  Terminal,
  Cpu,
  FileCheck2,
  Sparkles,
  TrendingUp,
  Coins,
  Scale,
  Building2,
  Layers,
  GitBranch,
  Users,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Minimize2,
  Grid,
  Play,
  Pause,
  Printer,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  Check,
  AlertTriangle,
  ArrowUpRight,
  Clock,
  Radio,
  FileText,
  DollarSign,
  Activity,
  Award,
  Search,
  CheckSquare,
  Crosshair,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- PITCH DECK SLIDE DEFINITIONS WITH CONVERSATIONAL INVESTOR PRESENTATION SCRIPT ---
interface SlideData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  category: "Vision" | "Market" | "Product" | "Business" | "Traction";
  script: string;
}

const SLIDES_META: SlideData[] = [
  {
    id: "cover",
    badge: "Executive Pitch Deck",
    title: "ZYRON PROTOCOL SECURITY",
    subtitle: "The Cryptographic Security Infrastructure for Web3 Protocols",
    category: "Vision",
    script:
      "Good day, everyone! Welcome to the pitch presentation for Zai-ron Protocol Security. I am excited to walk you through how we are building the cryptographic security infrastructure for Web3 protocols. You see, the current way protocols handle security reviews is broken—teams rely on slow, opaque PDF reports. At Zai-ron, we are changing that by combining automated 14-pass A-S-T static analysis, double-blind human auditor review, and immutable on-chain attestations.",
  },
  {
    id: "problem",
    badge: "The Problem",
    title: "The Web3 Security Bottleneck",
    subtitle: "Smart contracts secure tens of billions in value, yet audits remain slow, expensive, and unverifiable.",
    category: "Market",
    script:
      "Now, let us talk about the problem. Smart contracts currently secure over one hundred billion dollars in total value locked, yet the security review process is a massive bottleneck. Protocol teams spend six to ten weeks waiting for top audit firms to start. And what do they get at the end? A static PDF report that becomes completely obsolete the moment they tweak a line of code! Furthermore, there is zero cryptographic link between what was audited in that PDF and what actually gets deployed onchain. This is why even audited protocols keep getting exploited.",
  },
  {
    id: "solution",
    badge: "The Solution",
    title: "Continuous, Verifiable Protocol Security",
    subtitle: "Automated AST analysis, structured human review, and immutable on-chain attestations.",
    category: "Product",
    script:
      "So, how do we solve this? Zai-ron introduces continuous, verifiable protocol security built on three core layers. First, automated A-S-T analysis that runs in seconds when code is submitted. Second, structured dual-pane human review where professional auditors calibrate findings and eliminate false alarms. And third, immutable on-chain attestations containing compiled bytecode hashes and Merkle roots of findings. This means anyone—investors, users, or DAO members—can independently verify protocol security directly onchain.",
  },
  {
    id: "technology",
    badge: "Technology",
    title: "14-Pass AST & Control-Flow Analysis Engine",
    subtitle: "Deterministic static analysis parsing Solidity into AST and building Control Flow Graphs.",
    category: "Product",
    script:
      "Let us dive deeper into our underlying technology engine. When code is submitted to Zai-ron, our compiler parses the Solidity source into Abstract Syntax Trees and constructs full Control Flow Graphs. We then run fourteen specialized security passes that scan for reentrancy, access control flaws, price oracle manipulation, proxy storage collisions, and Yul assembly risks. This surfaces high-signal candidate vulnerabilities before human reviewers even open the codebase.",
  },
  {
    id: "human-review",
    badge: "Human Review",
    title: "Dual-Pane Auditor Workbench",
    subtitle: "Automated tools surface candidates. Human experts make the final judgment.",
    category: "Product",
    script:
      "Automated scanners are great, but tools alone cannot catch complex economic exploits. That is where our Dual-Pane Auditor Workbench comes in. Certified human auditors inspect code side-by-side with automated findings. They calibrate severity levels, write inline remediation guidance, track fixes in real time, and support multi-file projects. This dual approach gives us higher signal and significantly lower noise than any pure automated scanner.",
  },
  {
    id: "attestation",
    badge: "On-Chain Attestation",
    title: "Verifiable Certificates, Not Just PDFs",
    subtitle: "SHA-256 bytecode hash, Merkle root of findings, and EIP-712 auditor signatures.",
    category: "Product",
    script:
      "Here is our signature innovation: Verifiable Certificates instead of untrusted PDF documents. When an audit is finalized, Zai-ron generates an on-chain attestation anchoring the S-H-A two fifty-six hash of the exact compiled bytecode, the Merkle root of all findings, E-I-P seven twelve auditor signatures, and engagement timestamps onto public E-V-M registries. Anyone can query our registry contract with one RPC call to verify if the deployed bytecode was genuinely audited.",
  },
  {
    id: "how-it-works",
    badge: "Lifecycle",
    title: "Simple Audit Lifecycle",
    subtitle: "Transparent audit process from client code submission to on-chain attestation.",
    category: "Product",
    script:
      "Let me walk you through our simple five-stage audit lifecycle. Stage one: the client submits their smart contract repository. Stage two: our automated A-S-T engine executes 14 security passes. Stage three: expert auditors review and validate findings in the dual-pane workbench. Stage four: issues are triaged, client applies fixes, and patches are verified. And stage five: the final cryptographic attestation is generated and published onchain. It is transparent from start to finish.",
  },
  {
    id: "market",
    badge: "Market Opportunity",
    title: "Growing Demand for Better Security Infrastructure",
    subtitle: "Sitting at the intersection of security tooling and on-chain trust.",
    category: "Market",
    script:
      "Looking at the market, the demand for verifiable security infrastructure is booming. Thousands of smart contracts are deployed daily across Layer-2 rollups like Arbitrum, Base, and Optimism. Institutional players and real-world asset protocols are demanding higher cryptographic assurance before committing capital. The Web3 market is shifting away from one-off compliance checks toward continuous, verifiable security.",
  },
  {
    id: "business-model",
    badge: "Business Model",
    title: "Hybrid Revenue Model",
    subtitle: "Fixed-price audit engagements, continuous scanning plans, and enterprise verification.",
    category: "Business",
    script:
      "Our business model combines immediate high-margin revenue with long-term subscription growth. We charge fixed-price engagement fees for full security reviews with on-chain attestations. Alongside this, we offer continuous security plans for ongoing pull-request scanning and priority auditor triage, creating a clear pathway from project-based fees to recurring annual revenue.",
  },
  {
    id: "competition",
    badge: "Competitive Position",
    title: "Why Zyron Outperforms Legacy & Pure Scanners",
    subtitle: "High depth of analysis, fast delivery, human expertise, and verifiable bytecode links.",
    category: "Business",
    script:
      "When you compare Zai-ron to the competition, the advantage is clear. Traditional firms are thorough but incredibly slow and deliver static PDFs. Pure automated scanners are fast but suffer from eighty percent false positives. Zai-ron delivers the speed of compiler-level automation with the depth of human expertise, topped with verifiable on-chain attestations that no legacy firm provides.",
  },
  {
    id: "roadmap",
    badge: "Execution & Roadmap",
    title: "Current Status & Multi-Phase Roadmap",
    subtitle: "From core AST engine and Arbitrum Sepolia attestations to ERC-8004 auditor identity.",
    category: "Traction",
    script:
      "Where are we today? Our core A-S-T engine, auditor workbench, and Arbitrum Sepolia attestation registry are fully live and operational. In the near term, we are expanding multi-file inheritance analysis, false positive reduction, and client dashboards. Moving forward, we are building decentralized auditor identity on E-R-C eight thousand and four, multi-chain support, and continuous active monitoring.",
  },
  {
    id: "vision",
    badge: "Vision & Next Steps",
    title: "Building the Trust Layer for Smart Contract Security",
    subtitle: "Making professional security reviews more accessible, transparent, and verifiable.",
    category: "Vision",
    script:
      "To wrap up, Zai-ron exists to build the trust layer for Web3 smart contract security. We are actively looking for early design partner protocols, feedback from security researchers, and strategic supporters who share our vision for verifiable security. Let us make security work that can actually be trusted onchain. Thank you for your time!",
  },
];

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = React.useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState<boolean>(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = React.useState<boolean>(true);
  const [isSpeaking, setIsSpeaking] = React.useState<boolean>(false);
  const [currentCaption, setCurrentCaption] = React.useState<string>("");
  const deckContainerRef = React.useRef<HTMLDivElement>(null);
  const selectedVoiceRef = React.useRef<SpeechSynthesisVoice | null>(null);

  const totalSlides = SLIDES_META.length;

  // Helper to test if a voice is male
  const isMaleVoice = (v: SpeechSynthesisVoice) => {
    const name = v.name.toLowerCase();
    return (
      name.includes("male") ||
      name.includes("guy") ||
      name.includes("daniel") ||
      name.includes("george") ||
      name.includes("arthur") ||
      name.includes("david") ||
      name.includes("aaron") ||
      name.includes("marcus") ||
      name.includes("alex") ||
      name.includes("bruce") ||
      name.includes("fred") ||
      name.includes("oliver") ||
      name.includes("thomas")
    );
  };

  // Initialize SpeechSynthesis voice selection prioritizing strong male African & English voices
  React.useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const preferredVoice =
          // 1. Male African / Nigerian voice
          voices.find(
            (v) =>
              (v.lang.toLowerCase().includes("ng") ||
                v.lang.toLowerCase().includes("za") ||
                v.lang.toLowerCase().includes("gh") ||
                v.lang.toLowerCase().includes("ke") ||
                v.name.toLowerCase().includes("nigeria") ||
                v.name.toLowerCase().includes("africa")) &&
              isMaleVoice(v)
          ) ||
          voices.find(
            (v) =>
              v.lang.toLowerCase().includes("ng") ||
              v.lang.toLowerCase().includes("za") ||
              v.lang.toLowerCase().includes("gh") ||
              v.lang.toLowerCase().includes("ke") ||
              v.name.toLowerCase().includes("nigeria") ||
              v.name.toLowerCase().includes("africa")
          ) ||
          // 2. Male English voice (e.g. Daniel, George, Arthur, David)
          voices.find((v) => v.lang.startsWith("en") && isMaleVoice(v)) ||
          voices.find(
            (v) =>
              v.name.includes("Daniel") ||
              v.name.includes("George") ||
              v.name.includes("David") ||
              v.name.includes("Arthur")
          ) ||
          voices.find((v) => v.lang.startsWith("en")) ||
          voices[0];
        selectedVoiceRef.current = preferredVoice || null;
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Format script for teleprompter display (reverting phonetic spellings for visual reading)
  const formatCaptionForDisplay = (text: string) => {
    return text
      .replace(/Zai-ron/g, "Zyron")
      .replace(/E-R-C eight thousand and four/g, "ERC-8004")
      .replace(/A-S-T/g, "AST")
      .replace(/E-I-P seven twelve/g, "EIP-712")
      .replace(/S-H-A two fifty-six/g, "SHA-256")
      .replace(/E-V-M/g, "EVM");
  };

  // Function to handle speaking current slide presentation script
  const speakCurrentSlide = React.useCallback(
    (slideIndex: number, autoAdvance: boolean) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      window.speechSynthesis.cancel(); // Stop any existing speech

      if (!isVoiceEnabled) {
        setIsSpeaking(false);
        setCurrentCaption("");
        return;
      }

      const slide = SLIDES_META[slideIndex];
      if (!slide || !slide.script) return;

      const utterance = new SpeechSynthesisUtterance(slide.script);
      utterance.rate = 0.98; // Fluent, natural pacing
      utterance.pitch = 0.95; // Stronger, deeper male voice pitch

      if (selectedVoiceRef.current) {
        utterance.voice = selectedVoiceRef.current;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setCurrentCaption(formatCaptionForDisplay(slide.script));
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        if (autoAdvance && slideIndex < totalSlides - 1) {
          setCurrentSlide((prev) => prev + 1);
        } else if (slideIndex === totalSlides - 1) {
          setIsAutoPlaying(false);
        }
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    },
    [isVoiceEnabled, totalSlides]
  );

  // Playback effect when slide changes or autoplay is toggled
  React.useEffect(() => {
    if (isAutoPlaying) {
      speakCurrentSlide(currentSlide, true);
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      setCurrentCaption("");
    }
  }, [currentSlide, isAutoPlaying, speakCurrentSlide]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const jumpToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      setIsOverviewOpen(false);
    }
  };

  const handleStartPresentation = () => {
    setCurrentSlide(0);
    setIsAutoPlaying(true);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "Escape") {
        if (isOverviewOpen) setIsOverviewOpen(false);
      } else if (e.key === "o" || e.key === "O" || e.key === "g" || e.key === "G") {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isOverviewOpen]);

  // Fullscreen handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      deckContainerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  React.useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const progressPercent = Math.round(((currentSlide + 1) / totalSlides) * 100);

  return (
    <div
      ref={deckContainerRef}
      className={cn(
        "min-h-screen bg-bg-void text-text-primary flex flex-col justify-between selection:bg-accent-scan/30 relative overflow-hidden font-sans border-hairline",
        isFullscreen ? "h-screen w-screen p-4 sm:p-8" : "p-3 sm:p-6 md:p-8"
      )}
    >
      {/* Structural Hairline Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262B33_1px,transparent_1px),linear-gradient(to_bottom,#262B33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20 -z-10" />

      {/* Top Deck Navigation Bar */}
      <header className="flex items-center justify-between gap-4 pb-4 border-b border-border-hairline shrink-0 z-20">
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
            title="Return to Zyron Portal"
          >
            <div className="h-8 w-8 rounded bg-bg-panel border border-border-hairline flex items-center justify-center text-accent-scan group-hover:border-accent-scan/50 transition-colors">
              <Shield className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xs tracking-wider text-text-primary flex items-center gap-2">
                ZYRON <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-bg-panel-raised text-accent-scan border border-border-hairline">FOUNDER PITCH DECK</span>
              </span>
              <span className="text-[10px] text-text-muted font-mono hidden sm:inline">Cryptographic Protocol Security</span>
            </div>
          </Link>
        </div>

        {/* Center Pill: Current Slide & Title */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded bg-bg-panel border border-border-hairline text-xs font-mono">
          <span className="text-accent-scan font-bold">
            SLIDE {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
          <span className="text-text-muted">•</span>
          <span className="text-text-primary truncate max-w-xs">{SLIDES_META[currentSlide].title}</span>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {/* Voiceover Mute/Unmute Toggle */}
          <button
            type="button"
            onClick={() => {
              const nextVoiceState = !isVoiceEnabled;
              setIsVoiceEnabled(nextVoiceState);
              if (!nextVoiceState && typeof window !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
                setIsSpeaking(false);
                setCurrentCaption("");
              }
            }}
            className={cn(
              "px-2.5 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 cursor-pointer",
              isVoiceEnabled
                ? "bg-bg-panel-raised border-accent-scan/50 text-accent-scan"
                : "bg-bg-panel border-border-hairline text-text-muted hover:text-text-primary"
            )}
            title={isVoiceEnabled ? "Voiceover Audio Enabled" : "Voiceover Audio Muted"}
          >
            {isVoiceEnabled ? <Volume2 className="h-3.5 w-3.5 text-accent-scan" /> : <VolumeX className="h-3.5 w-3.5 text-text-muted" />}
            <span className="hidden sm:inline font-mono text-[11px]">{isVoiceEnabled ? "Voice On" : "Muted"}</span>
          </button>

          {/* Auto Presentation Play/Pause */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={cn(
              "px-3 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 cursor-pointer font-bold",
              isAutoPlaying
                ? "bg-bg-panel-raised border-signal-resolved text-signal-resolved"
                : "bg-accent-scan text-bg-void border-accent-scan hover:bg-accent-scan/90"
            )}
            title="Auto-Present Deck with Investor Audio Presentation"
          >
            {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-bg-void" />}
            <span>{isAutoPlaying ? "Pause Presentation" : "Play Presentation"}</span>
          </button>

          {/* Slide Overview Toggle */}
          <button
            type="button"
            onClick={() => setIsOverviewOpen(!isOverviewOpen)}
            className={cn(
              "px-2.5 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 cursor-pointer",
              isOverviewOpen
                ? "bg-bg-panel-raised border-accent-scan text-accent-scan"
                : "bg-bg-panel border-border-hairline text-text-muted hover:text-text-primary"
            )}
            title="Slide Overview (Press 'O' or 'G')"
          >
            <Grid className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Overview</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded bg-bg-panel border border-border-hairline text-text-muted hover:text-text-primary transition-colors cursor-pointer"
            title="Fullscreen Toggle (Press 'F')"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>

          {/* Print / Save Deck */}
          <button
            type="button"
            onClick={() => window.print()}
            className="p-1.5 rounded bg-bg-panel border border-border-hairline text-text-muted hover:text-text-primary transition-colors cursor-pointer"
            title="Print or Save Deck (PDF)"
          >
            <Printer className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Teleprompter Voiceover Caption Bar */}
      {isSpeaking && currentCaption && (
        <div className="mt-3 max-w-5xl w-full mx-auto p-2.5 rounded bg-bg-panel border border-accent-scan/40 flex items-center gap-3 animate-fadeIn z-20 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-accent-scan shrink-0 font-bold">
            <Radio className="h-4 w-4 text-accent-scan animate-pulse" />
            <span>[LIVE PRESENTATION]</span>
          </div>
          <p className="text-text-primary text-xs truncate font-sans font-medium">{currentCaption}</p>
        </div>
      )}

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 flex flex-col justify-center items-center py-6 sm:py-8 max-w-5xl w-full mx-auto relative z-10">
        <div className="w-full transition-all duration-200">
          {currentSlide === 0 && <SlideCover onNext={nextSlide} onStart={handleStartPresentation} />}
          {currentSlide === 1 && <SlideProblem />}
          {currentSlide === 2 && <SlideSolution />}
          {currentSlide === 3 && <SlideTechnology />}
          {currentSlide === 4 && <SlideHumanReview />}
          {currentSlide === 5 && <SlideAttestation />}
          {currentSlide === 6 && <SlideHowItWorks />}
          {currentSlide === 7 && <SlideMarket />}
          {currentSlide === 8 && <SlideBusinessModel />}
          {currentSlide === 9 && <SlideCompetition />}
          {currentSlide === 10 && <SlideRoadmap />}
          {currentSlide === 11 && <SlideVision onRestart={() => handleStartPresentation()} />}
        </div>
      </main>

      {/* Bottom Deck Navigation Bar */}
      <footer className="shrink-0 pt-4 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        {/* Progress Bar & Indicators */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="text-xs font-mono text-text-muted">
            <span className="text-text-primary font-bold">{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="text-text-muted"> / {String(totalSlides).padStart(2, "0")}</span>
          </div>
          <div className="h-1.5 w-32 sm:w-48 bg-bg-panel border border-border-hairline rounded-none overflow-hidden">
            <div
              className="h-full bg-accent-scan transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-text-muted uppercase hidden md:inline">
            [{SLIDES_META[currentSlide].category}]
          </span>
        </div>

        {/* Keyboard Shortcuts Tip */}
        <div className="text-[11px] font-mono text-text-muted hidden lg:flex items-center gap-2">
          <span>Navigation:</span>
          <kbd className="px-1.5 py-0.5 rounded bg-bg-panel border border-border-hairline text-[10px] font-mono text-text-primary">
            ←
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-bg-panel border border-border-hairline text-[10px] font-mono text-text-primary">
            →
          </kbd>
          <span>or</span>
          <kbd className="px-1.5 py-0.5 rounded bg-bg-panel border border-border-hairline text-[10px] font-mono text-text-primary">
            Space
          </kbd>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end font-mono">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded text-xs bg-bg-panel hover:bg-bg-panel-raised disabled:opacity-30 disabled:pointer-events-none border border-border-hairline text-text-primary transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded text-xs bg-accent-scan text-bg-void hover:bg-accent-scan/90 disabled:opacity-30 disabled:pointer-events-none font-bold transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </footer>

      {/* Grid Overview Modal */}
      {isOverviewOpen && (
        <div className="fixed inset-0 z-50 bg-bg-void/95 backdrop-blur-sm flex flex-col p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-border-hairline max-w-5xl mx-auto w-full">
            <div>
              <h2 className="font-mono text-lg font-bold text-text-primary">DECK OVERVIEW</h2>
              <p className="text-xs text-text-muted">Select a slide to jump directly to its content</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOverviewOpen(false)}
              className="px-3 py-1.5 rounded bg-bg-panel border border-border-hairline hover:bg-bg-panel-raised text-xs font-mono text-text-primary transition-colors cursor-pointer"
            >
              Close (Esc)
            </button>
          </div>

          <div className="flex-1 overflow-y-auto max-w-5xl mx-auto w-full py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SLIDES_META.map((meta, idx) => (
              <button
                key={meta.id}
                type="button"
                onClick={() => jumpToSlide(idx)}
                className={cn(
                  "text-left p-3.5 rounded border transition-colors flex flex-col justify-between h-32 group cursor-pointer font-sans",
                  idx === currentSlide
                    ? "bg-bg-panel-raised border-accent-scan text-text-primary"
                    : "bg-bg-panel border-border-hairline hover:border-text-muted text-text-muted"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent-scan">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-bg-void text-text-muted border border-border-hairline">
                    {meta.category}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xs text-text-primary line-clamp-1 group-hover:text-accent-scan transition-colors">
                    {meta.title}
                  </h3>
                  <p className="text-[11px] text-text-muted line-clamp-2 leading-relaxed">
                    {meta.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// INDIVIDUAL SLIDE COMPONENTS
// ==========================================

// --- SLIDE 1: COVER ---
function SlideCover({ onNext, onStart }: { onNext: () => void; onStart: () => void }) {
  return (
    <div className="flex flex-col items-center text-center space-y-8 py-4 max-w-3xl mx-auto">
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-bg-panel border border-border-hairline text-accent-scan text-xs font-mono">
        <Terminal className="h-3.5 w-3.5" />
        <span>ZYRON PROTOCOL SECURITY — PITCH DECK</span>
      </div>

      {/* Hero Headline */}
      <div className="space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
          The Cryptographic Security Infrastructure for <span className="text-accent-scan">Web3 Protocols</span>
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Replacing slow, opaque PDF audits with automated AST static analysis, structured human review, and immutable on-chain attestations.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
        {[
          { label: "14 AST Passes", desc: "Deterministic analysis", icon: Code2 },
          { label: "Dual-Auditor Review", desc: "Structured workbench", icon: Users },
          { label: "On-Chain Proofs", desc: "Bytecode attestations", icon: FileCheck2 },
          { label: "Continuous Security", desc: "Ongoing verification", icon: ShieldCheck },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded bg-bg-panel border border-border-hairline text-left space-y-1.5 hover:border-accent-scan/50 transition-colors"
            >
              <div className="h-6 w-6 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="font-mono text-xs font-bold text-text-primary">{item.label}</div>
              <div className="text-[11px] text-text-muted">{item.desc}</div>
            </div>
          );
        })}
      </div>

      {/* CTA Buttons */}
      <div className="pt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={onStart}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-accent-scan text-bg-void font-mono font-bold text-xs hover:bg-accent-scan/90 transition-colors cursor-pointer"
        >
          <Play className="h-4 w-4 fill-bg-void" />
          <span>PLAY LIVE PRESENTATION</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-bg-panel border border-border-hairline text-text-primary font-mono text-xs hover:bg-bg-panel-raised transition-colors cursor-pointer"
        >
          <span>MANUAL SLIDES</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// --- SLIDE 2: PROBLEM ---
function SlideProblem() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 2 – Problem"
        title="The Web3 Security Bottleneck"
        description="Smart contracts secure tens of billions in value, yet the audit process remains slow, expensive, and unverifiable."
      />

      {/* Key Problems Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 01</span>
            <Clock className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Long Wait Times</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Protocols face wait times often lasting 6–10 weeks at top audit firms, delaying product launches and protocol updates.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 02</span>
            <FileText className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Static PDF Reports</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Audits yield static PDF reports that become outdated the moment code changes or patches are introduced.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 03</span>
            <ShieldAlert className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">No Bytecode Link</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            No cryptographic link exists between the audited source code and the actual bytecode deployed onchain.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 04</span>
            <DollarSign className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Exorbitant Pricing</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            High costs push many emerging teams to skip audits entirely or under-invest in security reviews.
          </p>
        </div>
      </div>

      {/* Result Callout */}
      <div className="p-3.5 rounded bg-bg-panel-raised border border-signal-critical/40 flex items-center gap-3">
        <div className="h-8 w-8 rounded bg-signal-critical/10 text-signal-critical flex items-center justify-center shrink-0 border border-signal-critical/20">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div className="font-mono text-xs">
          <span className="text-signal-critical font-bold">Result: </span>
          <span className="text-text-primary font-sans">Even audited protocols still get exploited due to outdated PDFs and unverifiable deployments.</span>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 3: SOLUTION ---
function SlideSolution() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 3 – Solution"
        title="Continuous, Verifiable Protocol Security"
        description="Zyron combines three specialized layers to modernize Web3 smart contract security:"
      />

      {/* 3 Solution Layers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-accent-scan">LAYER 01</span>
            <Code2 className="h-4 w-4 text-accent-scan" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Automated AST Analysis</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Fast, deterministic static analysis using Abstract Syntax Trees and Control Flow Graphs to surface candidates instantly.
          </p>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-accent-scan">LAYER 02</span>
            <Users className="h-4 w-4 text-accent-scan" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Structured Human Review</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Professional auditors review findings in a dual-pane workbench to calibrate severity and verify exploit logic.
          </p>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-accent-scan">LAYER 03</span>
            <FileCheck2 className="h-4 w-4 text-accent-scan" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">On-Chain Attestations</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Immutable certificates containing compiled bytecode hash and findings Merkle root published onchain.
          </p>
        </div>
      </div>

      {/* Bottom Summary Banner */}
      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline flex items-center justify-between gap-3 font-mono text-xs">
        <span className="text-text-muted">Core Value Proposition:</span>
        <span className="text-accent-scan font-bold">Security reviews that can actually be verified onchain.</span>
      </div>
    </div>
  );
}

// --- SLIDE 4: TECHNOLOGY ---
function SlideTechnology() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 4 – Technology"
        title="14-Pass AST & Control-Flow Analysis Engine"
        description="Our engine parses Solidity into AST, builds Control Flow Graphs, and runs specialized security passes including:"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pass List */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs font-bold text-accent-scan flex items-center justify-between border-b border-border-hairline pb-2">
            <span>AUTOMATED SECURITY PASSES</span>
            <span>14 PASSES TOTAL</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5 font-mono text-xs text-text-primary">
            {[
              "1. Access Control & Authorization",
              "2. Reentrancy & State Ordering",
              "3. Oracle & Price Manipulation",
              "4. Proxy & Storage Safety",
              "5. Token Standards Compliance",
              "6. Assembly / Yul Risks",
              "7. Centralization Vectors",
              "8. And more specialized passes...",
            ].map((pass, idx) => (
              <div key={idx} className="p-2 rounded bg-bg-panel-raised border border-border-hairline flex items-center justify-between">
                <span>{pass}</span>
                <Check className="h-3 w-3 text-signal-resolved" />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Console Output */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-[11px] text-text-muted border-b border-border-hairline pb-2">
            <span className="flex items-center gap-1.5 text-accent-scan">
              <Terminal className="h-3.5 w-3.5" /> AST_PARSER_OUTPUT
            </span>
            <span className="text-signal-resolved">READY</span>
          </div>

          <div className="space-y-2 text-[11px] leading-relaxed text-text-muted">
            <p className="text-text-primary">&gt; parsing Solidity AST nodes...</p>
            <p className="text-accent-scan">&gt; constructing CFG graph for 24 functions...</p>
            <div className="p-2.5 rounded bg-bg-void border border-border-hairline space-y-1">
              <div className="text-signal-high font-bold">⚠ PASS 2: REENTRANCY CHECK</div>
              <div className="text-[10px] text-text-primary">Line 142: State variable mutated after external call</div>
              <div className="text-[10px] text-text-muted">Target: withdraw(uint256 amount)</div>
            </div>
            <p className="text-signal-resolved">&gt; AST Analysis Complete: 14/14 Passes executed</p>
          </div>

          <div className="pt-2 border-t border-border-hairline text-[11px] text-text-muted font-sans">
            Designed to catch high-signal issues before human reviewers begin.
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 5: HUMAN REVIEW ---
function SlideHumanReview() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 5 – Human Review"
        title="Dual-Pane Auditor Workbench"
        description="Automated tools surface candidates. Human experts make the final judgment."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            01
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Side-by-Side Code & Findings</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Dual-pane workspace pairing raw Solidity source code alongside automated static analysis candidates for rapid verification.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            02
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Inline Comments & Severity Calibration</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Auditors annotate specific lines and calibrate severity scores (Critical, High, Medium, Low) based on exploit impact.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            03
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Clear Remediation Tracking</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Structured workflow tracking findings from initial discovery through client fix submission and final resolution.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            04
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Support for Multi-File Projects</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Seamless navigation across complex protocol architectures, inheritance graphs, and multi-contract codebases.
          </p>
        </div>
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>Workbench Objective:</span>
        <span className="text-accent-scan font-bold">Higher signal and lower noise than pure automated scanners.</span>
      </div>
    </div>
  );
}

// --- SLIDE 6: ON-CHAIN ATTESTATION ---
function SlideAttestation() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 6 – On-Chain Attestation"
        title="Verifiable Certificates, Not Just PDFs"
        description="Every completed audit can produce an on-chain attestation anchoring cryptographic proofs to public registries."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Included Proofs */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs font-bold text-accent-scan border-b border-border-hairline pb-2">
            ATTESTATION INCLUSIONS
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">1. SHA-256 Bytecode & Source Hash</div>
              <div className="text-[10px] text-text-muted">Direct cryptographic link to exact compiled bytecode</div>
            </div>
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">2. Merkle Root of Findings</div>
              <div className="text-[10px] text-text-muted">Verifiable proof of all identified and resolved findings</div>
            </div>
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">3. EIP-712 Auditor Signatures</div>
              <div className="text-[10px] text-text-muted">Cryptographic signature from certified human reviewers</div>
            </div>
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">4. Timestamp & Engagement Reference</div>
              <div className="text-[10px] text-text-muted">Immutable block timestamp and audit scope record</div>
            </div>
          </div>
        </div>

        {/* Certificate Display */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-[11px] text-text-muted border-b border-border-hairline pb-2">
            <span>EAS CERTIFICATE SCHEMA</span>
            <span className="text-signal-resolved font-bold">VERIFIED ONCHAIN</span>
          </div>

          <div className="space-y-2.5 text-[11px]">
            <div>
              <div className="text-text-muted">Bytecode Hash:</div>
              <div className="text-accent-scan break-all font-bold">0x8a7f9b2c3d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a</div>
            </div>
            <div>
              <div className="text-text-muted">Findings Merkle Root:</div>
              <div className="text-text-primary break-all">0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c</div>
            </div>
            <div>
              <div className="text-text-muted">Signer (EIP-712):</div>
              <div className="text-text-primary">0xAuditor712...93A2 (Verified)</div>
            </div>
            <div>
              <div className="text-text-muted">Chain Network:</div>
              <div className="text-text-primary">Arbitrum Sepolia / Mainnet</div>
            </div>
          </div>

          <div className="pt-2 border-t border-border-hairline text-[11px] text-text-muted font-sans">
            Anyone can independently verify that a specific version of the code was reviewed.
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 7: HOW IT WORKS ---
function SlideHowItWorks() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 7 – How It Works"
        title="Simple Audit Lifecycle"
        description="Transparent process from start to finish across 5 structured stages:"
      />

      {/* 5 Stages Sequence */}
      <div className="space-y-2.5 font-mono text-xs">
        {[
          { step: "STAGE 01", title: "Client Submission", desc: "Client submits smart contract source code files or GitHub repository." },
          { step: "STAGE 02", title: "Automated AST Scanning", desc: "Automated AST scanning runs 14 static passes and constructs Control Flow Graphs." },
          { step: "STAGE 03", title: "Auditor Review", desc: "Findings are reviewed and validated by expert auditors in the dual-pane workbench." },
          { step: "STAGE 04", title: "Triage & Remediation", desc: "Issues are triaged, client applies fixes, and auditors verify remediation PRs." },
          { step: "STAGE 05", title: "On-Chain Attestation", desc: "Final attestation certificate is generated and published onchain." },
        ].map((item, idx) => (
          <div key={idx} className="p-3.5 rounded bg-bg-panel border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-accent-scan/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-bg-panel-raised border border-border-hairline text-accent-scan font-bold">
                {item.step}
              </span>
              <span className="font-bold text-text-primary">{item.title}</span>
            </div>
            <span className="text-text-muted text-xs font-sans sm:text-right max-w-md">{item.desc}</span>
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>Lifecycle Guarantee:</span>
        <span className="text-accent-scan font-bold">Transparent process from start to finish.</span>
      </div>
    </div>
  );
}

// --- SLIDE 8: MARKET OPPORTUNITY ---
function SlideMarket() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 8 – Market Opportunity"
        title="Growing Demand for Better Security Infrastructure"
        description="Positioned at the intersection of security tooling and on-chain trust."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 01</span>
            <Layers className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">L2 Contract Explosion</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Increasing number of smart contracts deployed daily across Layer-2 rollups and appchains requiring fast security validation.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 02</span>
            <Building2 className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Institutional & RWA Demand</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Institutional and Real-World Asset (RWA) protocols demanding higher assurance and cryptographic audit proofs before deploying capital.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 03</span>
            <TrendingUp className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Shift to Continuous Security</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Industry paradigm shift moving from one-time static audits toward continuous scanning and active security monitoring.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 04</span>
            <FileCheck2 className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Need for Verifiable Work</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Strong market need for verifiable, cryptographic security work rather than claimable marketing PDF documents.
          </p>
        </div>
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>Strategic Position:</span>
        <span className="text-accent-scan font-bold">Zyron sits at the intersection of security tooling and on-chain trust.</span>
      </div>
    </div>
  );
}

// --- SLIDE 9: BUSINESS MODEL ---
function SlideBusinessModel() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 9 – Business Model"
        title="Hybrid Revenue Model"
        description="Clear path from project-based revenue to recurring protocol security revenue:"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs text-accent-scan font-bold">STREAM 01</div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Audit Engagements</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Fixed-price security reviews with full AST scanning, dual-auditor review, and on-chain bytecode attestation.
          </p>
          <div className="pt-2 border-t border-border-hairline font-mono text-[11px] text-text-primary">
            Fixed-Price Engagements
          </div>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-accent-scan/50 space-y-3">
          <div className="font-mono text-xs text-accent-scan font-bold">STREAM 02</div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Continuous Plans</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Ongoing static scanning, continuous CI/CD integration, plus priority review for active protocol updates.
          </p>
          <div className="pt-2 border-t border-border-hairline font-mono text-[11px] text-accent-scan font-bold">
            Recurring Subscription ARR
          </div>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs text-text-muted font-bold">STREAM 03 (FUTURE)</div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Enterprise Features</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Premium verification, continuous active monitoring, insurance risk telemetry, and enterprise API access.
          </p>
          <div className="pt-2 border-t border-border-hairline font-mono text-[11px] text-text-muted">
            Enterprise Expansion
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>Revenue Trajectory:</span>
        <span className="text-accent-scan font-bold">Clear path from project-based revenue to recurring revenue.</span>
      </div>
    </div>
  );
}

// --- SLIDE 10: COMPETITIVE POSITION ---
function SlideCompetition() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 10 – Competitive Position"
        title="Why Zyron Outperforms Alternatives"
        description="Side-by-side comparison of smart contract security approaches across key criteria:"
      />

      <div className="rounded border border-border-hairline overflow-hidden bg-bg-panel font-mono text-xs">
        <table className="w-full text-left">
          <thead className="bg-bg-panel-raised text-text-primary font-bold border-b border-border-hairline">
            <tr>
              <th className="py-3 px-4">Feature</th>
              <th className="py-3 px-4 text-text-muted">Traditional Firms</th>
              <th className="py-3 px-4 text-text-muted">Pure Scanners</th>
              <th className="py-3 px-4 text-accent-scan font-bold">Zyron</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-hairline text-text-primary text-[11px]">
            <tr>
              <td className="py-2.5 px-4 font-bold">Depth of Analysis</td>
              <td className="py-2.5 px-4 text-text-muted">High</td>
              <td className="py-2.5 px-4 text-text-muted">Medium</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">High (AST + Human)</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">Speed</td>
              <td className="py-2.5 px-4 text-signal-critical">Slow</td>
              <td className="py-2.5 px-4 text-signal-resolved">Very Fast</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Fast</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">Human Expertise</td>
              <td className="py-2.5 px-4 text-signal-resolved">Yes</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">On-Chain Attestation</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">Verifiable Bytecode Link</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Yes</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">Continuous Use</td>
              <td className="py-2.5 px-4 text-signal-high">Limited</td>
              <td className="py-2.5 px-4 text-signal-resolved">Yes</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- SLIDE 11: ROADMAP ---
function SlideRoadmap() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 11 – Current Status & Roadmap"
        title="Execution Status & Future Roadmap"
        description="Strategic milestone breakdown from live features to long-term protocol security infrastructure:"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Current */}
        <div className="p-4 rounded bg-bg-panel border border-accent-scan/50 space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs font-bold border-b border-border-hairline pb-2">
            <span className="text-accent-scan">CURRENT (NOW)</span>
            <span className="px-1.5 py-0.5 rounded bg-bg-panel-raised text-signal-resolved text-[10px]">LIVE</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-text-primary">
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Core AST analysis engine with multiple security passes</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Auditor workbench and finding management</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>On-chain attestation system (Arbitrum Sepolia)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>End-to-end audit workflow</span>
            </li>
          </ul>
        </div>

        {/* Near Term */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs font-bold border-b border-border-hairline pb-2">
            <span className="text-text-primary">NEAR TERM</span>
            <span className="px-1.5 py-0.5 rounded bg-bg-panel-raised text-accent-scan text-[10px]">IN DEV</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-text-muted">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Deeper multi-file and inheritance support</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Improved false positive reduction</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Better reporting and client dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Expanded test coverage and reliability</span>
            </li>
          </ul>
        </div>

        {/* Future */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs font-bold border-b border-border-hairline pb-2">
            <span className="text-text-muted">FUTURE</span>
            <span className="px-1.5 py-0.5 rounded bg-bg-panel-raised text-text-muted text-[10px]">PLANNED</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-text-muted">
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Auditor reputation and identity (ERC-8004 direction)</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Support for more chains</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Continuous monitoring features</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Stronger agent-based and decentralized validation (longer term)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 12: VISION & NEXT STEPS ---
function SlideVision({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 12 – Vision & Next Steps"
        title="Building the Trust Layer for Smart Contract Security"
        description="Zyron exists to make professional security reviews more accessible, transparent, and verifiable."
      />

      <div className="p-5 rounded bg-bg-panel border border-border-hairline space-y-4">
        <div className="font-mono text-xs font-bold text-accent-scan">WE ARE CURRENTLY LOOKING FOR:</div>
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline flex items-start gap-3">
            <div className="h-5 w-5 rounded bg-bg-void text-accent-scan flex items-center justify-center shrink-0 border border-border-hairline font-bold">1</div>
            <div>
              <div className="font-bold text-text-primary font-sans">Early Design Partners & Protocols</div>
              <div className="text-[11px] text-text-muted font-sans">Protocols seeking fast, verifiable smart contract audits and continuous security reviews.</div>
            </div>
          </div>

          <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline flex items-start gap-3">
            <div className="h-5 w-5 rounded bg-bg-void text-accent-scan flex items-center justify-center shrink-0 border border-border-hairline font-bold">2</div>
            <div>
              <div className="font-bold text-text-primary font-sans">Security Researchers & Founders</div>
              <div className="text-[11px] text-text-muted font-sans">Feedback and collaboration from top Web3 security researchers and protocol builders.</div>
            </div>
          </div>

          <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline flex items-start gap-3">
            <div className="h-5 w-5 rounded bg-bg-void text-accent-scan flex items-center justify-center shrink-0 border border-border-hairline font-bold">3</div>
            <div>
              <div className="font-bold text-text-primary font-sans">Strategic Supporters</div>
              <div className="text-[11px] text-text-muted font-sans">Partners who believe verifiable security infrastructure matters for Web3 adoption.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 rounded bg-bg-panel-raised border border-accent-scan/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left font-mono">
          <div className="text-sm font-bold text-text-primary">Let’s make security work that can actually be trusted onchain.</div>
          <div className="text-xs text-text-muted font-sans">Submit your contract for an audit or schedule a protocol onboarding call.</div>
        </div>

        <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
          <Link href="/portal/new-request">
            <button
              type="button"
              className="px-4 py-2 rounded bg-accent-scan text-bg-void font-bold hover:bg-accent-scan/90 transition-colors cursor-pointer"
            >
              Start Audit Request
            </button>
          </Link>
          <button
            type="button"
            onClick={onRestart}
            className="px-3.5 py-2 rounded bg-bg-panel hover:bg-bg-panel border border-border-hairline text-text-primary transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Play className="h-3.5 w-3.5 fill-text-primary" />
            <span>Replay Presentation</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Slide Header
function SlideHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-1 text-left">
      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-bg-panel text-accent-scan border border-border-hairline">
        <Sparkles className="h-3 w-3" />
        <span>{badge}</span>
      </div>
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <p className="text-xs sm:text-sm text-text-muted max-w-2xl font-sans leading-relaxed">{description}</p>
    </div>
  );
}
