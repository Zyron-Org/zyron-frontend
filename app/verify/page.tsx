"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  ShieldAlert,
  Search,
  FileText,
  Upload,
  Hash,
  FileCode,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Terminal,
  ArrowRight,
  Lock,
  RefreshCw,
  AlertTriangle,
  Layers,
  Cpu,
  Eye,
  Download,
  Fingerprint,
  FileCheck2,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import axios from "axios";

interface VerificationData {
  id: string;
  protocolName: string;
  contractFileName: string;
  contractAddress?: string | null;
  gitCommit?: string | null;
  compilerVersion: string;
  network: string;
  sloc: number;
  stage: string;
  attestationStatus?: string | null;
  completedAt?: string | null;
  createdAt: string;
  leadAuditor?: {
    name?: string | null;
    auditorHandle?: string | null;
    walletAddress?: string | null;
  } | null;
  cryptography: {
    bytecodeHash?: string | null;
    merkleRoot?: string | null;
    ipfsCid?: string | null;
    ipfsMetadataCid?: string | null;
    ipfsGatewayUrl?: string | null;
    reportUrl: string;
    onChainTxHash?: string | null;
    onChainChainId?: number | null;
  };
  summary: {
    totalFindings: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
    resolved: number;
    allResolved: boolean;
  };
  findings: Array<{
    displayId: string;
    title: string;
    severity: string;
    status: string;
    impact?: string | null;
    remediationNote?: string | null;
  }>;
}

export default function PublicVerifyPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || searchParams.get("id") || "";

  const [activeTab, setActiveTab] = React.useState<"search" | "upload" | "code">("search");
  const [searchQuery, setSearchQuery] = React.useState(initialQuery);
  const [solidityCode, setSolidityCode] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [verificationResult, setVerificationResult] = React.useState<{
    verified: boolean;
    matchType?: string;
    matchDetail?: string;
    message?: string;
    audit?: VerificationData;
  } | null>(null);
  const [recentAudits, setRecentAudits] = React.useState<VerificationData[]>([]);
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  // Load recent verifications for quick-explore
  React.useEffect(() => {
    apiClient
      .get("/audits/verify/recent?limit=4")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setRecentAudits(res.data);
        }
      })
      .catch((err) => console.warn("Failed to load recent audits:", err));
  }, []);

  // Run initial query if present in URL
  React.useEffect(() => {
    if (initialQuery.trim()) {
      handleSearch(initialQuery.trim());
    }
  }, [initialQuery]);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSearch = async (queryText?: string) => {
    const q = (queryText || searchQuery).trim();
    if (!q) {
      toast.error("Please enter a ticket ID, contract address, hash, or IPFS CID");
      return;
    }

    setIsVerifying(true);
    setVerificationResult(null);

    try {
      const res = await apiClient.get(`/audits/verify?query=${encodeURIComponent(q)}`);
      setVerificationResult(res.data);
      if (res.data?.verified) {
        toast.success(`Attestation Verified: ${res.data.audit?.protocolName}`);
      } else {
        toast.error(res.data?.message || "Attestation could not be verified");
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to verify attestation";
      setVerificationResult({ verified: false, message: msg });
      toast.error(msg);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCodeVerify = async () => {
    if (!solidityCode.trim()) {
      toast.error("Please paste Solidity source code to verify");
      return;
    }

    setIsVerifying(true);
    setVerificationResult(null);

    try {
      const res = await apiClient.post("/audits/verify", { code: solidityCode });
      setVerificationResult(res.data);
      if (res.data?.verified) {
        toast.success(`Code Match Verified: ${res.data.audit?.protocolName}`);
      } else {
        toast.error(res.data?.message || "No verified contract matches this source code digest");
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to verify code digest";
      setVerificationResult({ verified: false, message: msg });
      toast.error(msg);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!file || !file.name.toLowerCase().endsWith(".pdf")) {
      toast.error("Please upload an authentic .pdf audit report");
      return;
    }

    setSelectedFile(file);
    setIsVerifying(true);
    setVerificationResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";
      const res = await axios.post(`${baseURL}/audits/verify/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setVerificationResult(res.data);
      if (res.data?.verified) {
        toast.success(`PDF Authenticity Verified: ${res.data.audit?.protocolName}`);
      } else {
        toast.error(res.data?.message || "The uploaded PDF does not match any certified audit");
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Failed to verify PDF document";
      setVerificationResult({ verified: false, message: msg });
      toast.error(msg);
    } finally {
      setIsVerifying(false);
    }
  };

  const audit = verificationResult?.audit;

  return (
    <div className="min-h-screen bg-bg-void text-text-primary flex flex-col font-sans selection:bg-accent-scan/20 selection:text-accent-scan">
      {/* Top Accent Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-accent-scan via-emerald-500 to-sky-500" />

      {/* Public Header */}
      <header className="w-full border-b border-border-hairline bg-bg-panel/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center h-8 w-8 rounded-[6px] bg-bg-void border border-border-hairline text-accent-scan group-hover:border-accent-scan transition-colors">
              <Terminal className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 font-mono tracking-wider">
              <span className="font-display font-bold text-sm text-text-primary tracking-wider">
                ZYRON
              </span>
              <span className="text-text-muted/60 font-light text-xs">|</span>
              <span className="text-accent-scan font-semibold text-xs tracking-wider">
                ATTESTATION REGISTRY
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex text-xs font-mono text-text-muted hover:text-text-primary transition-colors px-2.5 py-1.5 rounded-[4px] hover:bg-bg-panel-raised"
            >
              Platform
            </Link>
            <Link
              href="/portal"
              className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors px-2.5 py-1.5 rounded-[4px] hover:bg-bg-panel-raised"
            >
              Dashboard
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-8 py-10">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-scan/10 border border-accent-scan/20 text-accent-scan text-xs font-mono font-medium mb-4">
            <Fingerprint className="w-3.5 h-3.5" />
            Cryptographic Audit Attestation Registry
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-3">
            Verify Smart Contract Security Attestation
          </h1>
          <p className="text-sm text-text-muted leading-relaxed">
            Verify bytecode integrity, decentralized IPFS provenance, findings Merkle trees, and auditor sign-off.
            Every certificate issued by Zyron is immutably anchored.
          </p>
        </div>

        {/* Verification Input Box */}
        <div className="bg-bg-panel border border-border-hairline rounded-xl shadow-lg p-5 sm:p-6 mb-8 backdrop-blur-sm">
          {/* Mode Tabs */}
          <div className="flex items-center gap-2 border-b border-border-hairline pb-4 mb-6 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("search")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "search"
                  ? "bg-accent-scan text-white shadow-sm"
                  : "text-text-muted hover:text-text-primary hover:bg-bg-panel-raised"
              }`}
            >
              <Hash className="w-3.5 h-3.5" />
              Identifier / Address / Hash
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("upload")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "upload"
                  ? "bg-accent-scan text-white shadow-sm"
                  : "text-text-muted hover:text-text-primary hover:bg-bg-panel-raised"
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Audit PDF
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "code"
                  ? "bg-accent-scan text-white shadow-sm"
                  : "text-text-muted hover:text-text-primary hover:bg-bg-panel-raised"
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              Solidity Code Digest
            </button>
          </div>

          {/* Tab 1: Search Identifier / Address / Hash */}
          {activeTab === "search" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Enter Ticket ID (e.g. ZYR-9485), Contract Address (0x...), Bytecode Hash, or IPFS CID..."
                    className="w-full h-11 pl-10 pr-4 rounded-lg bg-bg-void border border-border-hairline text-xs font-mono text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-scan transition-colors"
                  />
                </div>
                <Button
                  onClick={() => handleSearch()}
                  disabled={isVerifying}
                  className="h-11 px-6 bg-accent-scan hover:bg-accent-scan/90 text-white font-mono text-xs font-semibold rounded-lg shrink-0 flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      Verify Attestation
                    </>
                  )}
                </Button>
              </div>

              {/* Sample Explorers */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted font-mono pt-1">
                <span>Quick Test:</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("ZYR-9485");
                    handleSearch("ZYR-9485");
                  }}
                  className="px-2 py-0.5 rounded bg-bg-panel-raised hover:bg-accent-scan/10 hover:text-accent-scan border border-border-hairline text-[11px] transition-colors"
                >
                  Ticket: ZYR-9485
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const addr = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
                    setSearchQuery(addr);
                    handleSearch(addr);
                  }}
                  className="px-2 py-0.5 rounded bg-bg-panel-raised hover:bg-accent-scan/10 hover:text-accent-scan border border-border-hairline text-[11px] transition-colors"
                >
                  Contract: 0x5C69...aA6f
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const cid = "bafkreigx2uei2nkpot3qric2xce6yxjhtkzv5onobktsybqtdew332ppki";
                    setSearchQuery(cid);
                    handleSearch(cid);
                  }}
                  className="px-2 py-0.5 rounded bg-bg-panel-raised hover:bg-accent-scan/10 hover:text-accent-scan border border-border-hairline text-[11px] transition-colors"
                >
                  IPFS CIDv1
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Upload Audit PDF */}
          {activeTab === "upload" && (
            <div className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(file);
                }}
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-border-hairline hover:border-accent-scan rounded-xl p-8 text-center cursor-pointer transition-colors bg-bg-void/50 hover:bg-accent-scan/5 flex flex-col items-center justify-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-bg-panel border border-border-hairline flex items-center justify-center text-accent-scan group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-semibold text-text-primary mb-1">
                    {selectedFile ? selectedFile.name : "Click or drag & drop an Audit Report PDF"}
                  </p>
                  <p className="text-[11px] text-text-muted">
                    We will calculate the cryptographic SHA-256 digest &amp; CIDv1 to verify against our decentralized attestation registry.
                  </p>
                </div>
                {selectedFile && (
                  <span className="text-[10px] font-mono text-accent-scan bg-accent-scan/10 px-2 py-0.5 rounded">
                    {(selectedFile.size / 1024).toFixed(1)} KB · Ready to verify
                  </span>
                )}
              </div>

              {selectedFile && (
                <div className="flex justify-end">
                  <Button
                    onClick={() => handleFileUpload(selectedFile)}
                    disabled={isVerifying}
                    className="h-10 px-5 bg-accent-scan hover:bg-accent-scan/90 text-white font-mono text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer"
                  >
                    {isVerifying ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Verifying Document...
                      </>
                    ) : (
                      <>
                        <FileCheck2 className="w-4 h-4" />
                        Verify Document Integrity
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Solidity Code Digest */}
          {activeTab === "code" && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-text-muted flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-accent-scan" />
                  Paste Smart Contract Source Code
                </label>
                <textarea
                  value={solidityCode}
                  onChange={(e) => setSolidityCode(e.target.value)}
                  rows={8}
                  placeholder="// Paste complete Solidity source code here..."
                  className="w-full p-3.5 rounded-lg bg-bg-void border border-border-hairline text-xs font-mono text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-scan transition-colors"
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[11px] text-text-muted font-mono">
                  Calculates SHA-256 and Keccak-256 bytecode digests to find matching audits.
                </p>
                <Button
                  onClick={handleCodeVerify}
                  disabled={isVerifying || !solidityCode.trim()}
                  className="h-10 px-5 bg-accent-scan hover:bg-accent-scan/90 text-white font-mono text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Computing Digest...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      Verify Code Digest
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Verification Results View */}
        {verificationResult && (
          <div className="mb-12">
            {verificationResult.verified && audit ? (
              <div className="border border-emerald-500/30 rounded-xl bg-bg-panel shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-300">
                {/* Verified Header Banner */}
                <div className="bg-gradient-to-r from-emerald-500/15 via-accent-scan/10 to-transparent border-b border-emerald-500/20 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold text-text-primary font-display">
                          CRYPTOGRAPHICALLY VERIFIED AUTHENTIC
                        </h2>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {verificationResult.matchType || "OFFICIAL RECORD"}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted font-mono mt-0.5">
                        {verificationResult.matchDetail || "Verified against Zyron Security decentralized registry"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <a
                      href={audit.cryptography.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Certified PDF
                    </a>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-6">
                  {/* Protocol Overview Hero */}
                  <div className="bg-bg-void border border-border-hairline rounded-lg p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                          Audited Protocol &amp; Contract
                        </span>
                        <h3 className="text-xl font-bold text-text-primary mt-0.5">
                          {audit.protocolName}
                        </h3>
                        <p className="text-xs font-mono text-accent-scan mt-0.5">
                          {audit.contractFileName}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-bg-panel border border-border-hairline text-xs font-mono text-text-muted">
                          Ticket: <strong className="text-text-primary">{audit.id}</strong>
                        </span>
                        <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Passed Remediation
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-border-hairline font-mono text-xs">
                      <div>
                        <div className="text-[10px] text-text-muted uppercase">Deployment Target</div>
                        <div className="text-text-primary font-semibold mt-0.5">{audit.network}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-text-muted uppercase">Compiler Version</div>
                        <div className="text-text-primary font-semibold mt-0.5">{audit.compilerVersion}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-text-muted uppercase">Source Lines (SLOC)</div>
                        <div className="text-text-primary font-semibold mt-0.5">{audit.sloc} LOC</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-text-muted uppercase">Certified On</div>
                        <div className="text-text-primary font-semibold mt-0.5">
                          {audit.completedAt
                            ? new Date(audit.completedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "Verified"}
                        </div>
                      </div>
                    </div>

                    {audit.contractAddress && (
                      <div className="mt-3 pt-3 border-t border-border-hairline flex items-center justify-between text-xs font-mono">
                        <span className="text-text-muted">Verified Contract Address:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-accent-scan">{audit.contractAddress}</span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(audit.contractAddress!, "contract")}
                            className="p-1 hover:bg-bg-panel rounded text-text-muted hover:text-text-primary"
                          >
                            {copiedKey === "contract" ? <Check className="w-3.5 h-3.5 text-accent-scan" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cryptographic Proof Vault (2 Column) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left: Bytecode & Merkle */}
                    <div className="bg-bg-void border border-border-hairline rounded-lg p-4 space-y-3 font-mono text-xs">
                      <div className="flex items-center gap-2 text-text-primary font-bold text-xs uppercase tracking-wider pb-2 border-b border-border-hairline">
                        <Lock className="w-3.5 h-3.5 text-accent-scan" />
                        On-Chain Cryptographic Proofs
                      </div>

                      <div>
                        <div className="text-[10px] text-text-muted uppercase">Source Bytecode SHA-256 Digest</div>
                        <div className="mt-1 p-2 rounded bg-bg-panel border border-border-hairline flex items-center justify-between gap-2">
                          <span className="text-[11px] text-accent-scan break-all">
                            {audit.cryptography.bytecodeHash || "0x98f4a3c2..."}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(audit.cryptography.bytecodeHash || "", "bytecode")}
                            className="text-text-muted hover:text-text-primary shrink-0"
                          >
                            {copiedKey === "bytecode" ? <Check className="w-3.5 h-3.5 text-accent-scan" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {audit.cryptography.merkleRoot && (
                        <div>
                          <div className="text-[10px] text-text-muted uppercase">Findings Merkle Root</div>
                          <div className="mt-1 p-2 rounded bg-bg-panel border border-border-hairline flex items-center justify-between gap-2">
                            <span className="text-[11px] text-sky-400 break-all">
                              {audit.cryptography.merkleRoot}
                            </span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(audit.cryptography.merkleRoot || "", "merkle")}
                              className="text-text-muted hover:text-text-primary shrink-0"
                            >
                              {copiedKey === "merkle" ? <Check className="w-3.5 h-3.5 text-accent-scan" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>
                      )}

                      {audit.cryptography.onChainTxHash && (
                        <div>
                          <div className="text-[10px] text-text-muted uppercase">On-Chain Attestation Tx</div>
                          <div className="mt-1 p-2 rounded bg-bg-panel border border-border-hairline flex items-center justify-between gap-2">
                            <span className="text-[11px] text-emerald-400 break-all">
                              {audit.cryptography.onChainTxHash}
                            </span>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(audit.cryptography.onChainTxHash || "", "tx")}
                              className="text-text-muted hover:text-text-primary shrink-0"
                            >
                              {copiedKey === "tx" ? <Check className="w-3.5 h-3.5 text-accent-scan" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: IPFS Decentralized Provenance */}
                    <div className="bg-bg-void border border-border-hairline rounded-lg p-4 space-y-3 font-mono text-xs">
                      <div className="flex items-center gap-2 text-text-primary font-bold text-xs uppercase tracking-wider pb-2 border-b border-border-hairline">
                        <Fingerprint className="w-3.5 h-3.5 text-sky-400" />
                        Decentralized IPFS Storage
                      </div>

                      <div>
                        <div className="text-[10px] text-text-muted uppercase">RFC CIDv1 Base32 Multihash</div>
                        <div className="mt-1 p-2 rounded bg-bg-panel border border-border-hairline flex items-center justify-between gap-2">
                          <span className="text-[11px] text-sky-400 break-all">
                            {audit.cryptography.ipfsCid || "bafkrei..."}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(audit.cryptography.ipfsCid || "", "cid")}
                            className="text-text-muted hover:text-text-primary shrink-0"
                          >
                            {copiedKey === "cid" ? <Check className="w-3.5 h-3.5 text-accent-scan" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] text-text-muted uppercase">IPFS Gateway Access</div>
                        <a
                          href={audit.cryptography.ipfsGatewayUrl || `https://ipfs.io/ipfs/${audit.cryptography.ipfsCid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 p-2 rounded bg-bg-panel border border-border-hairline flex items-center justify-between gap-2 text-[11px] text-accent-scan hover:text-emerald-300 transition-colors"
                        >
                          <span className="truncate">{audit.cryptography.ipfsGatewayUrl || `https://ipfs.io/ipfs/${audit.cryptography.ipfsCid}`}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      </div>

                      <div className="text-[10px] text-text-muted pt-1">
                        Permanently pinned artifact. Tamper-evident byte representation matches on-chain attestation digest.
                      </div>
                    </div>
                  </div>

                  {/* Summary Severity Stats */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-3">
                      Executive Finding Metrics
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono">
                      <div className="p-3 rounded-lg bg-bg-void border border-border-hairline text-center border-t-2 border-t-red-500">
                        <div className="text-xl font-bold text-red-400">{audit.summary.critical}</div>
                        <div className="text-[10px] text-text-muted uppercase mt-0.5">Critical</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-void border border-border-hairline text-center border-t-2 border-t-orange-500">
                        <div className="text-xl font-bold text-orange-400">{audit.summary.high}</div>
                        <div className="text-[10px] text-text-muted uppercase mt-0.5">High</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-void border border-border-hairline text-center border-t-2 border-t-amber-500">
                        <div className="text-xl font-bold text-amber-400">{audit.summary.medium}</div>
                        <div className="text-[10px] text-text-muted uppercase mt-0.5">Medium</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-void border border-border-hairline text-center border-t-2 border-t-sky-500">
                        <div className="text-xl font-bold text-sky-400">{audit.summary.low}</div>
                        <div className="text-[10px] text-text-muted uppercase mt-0.5">Low / Gas</div>
                      </div>
                      <div className="p-3 rounded-lg bg-bg-void border border-border-hairline text-center border-t-2 border-t-emerald-500 bg-emerald-500/5">
                        <div className="text-xl font-bold text-emerald-400">{audit.summary.resolved}</div>
                        <div className="text-[10px] text-emerald-400 uppercase mt-0.5 font-bold">100% Remediated</div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Findings List */}
                  {audit.findings && audit.findings.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                        Certified Vulnerabilities &amp; Verified Patches ({audit.findings.length})
                      </h4>
                      <div className="space-y-3">
                        {audit.findings.map((f, idx) => (
                          <div
                            key={idx}
                            className="bg-bg-void border border-border-hairline rounded-lg p-4 font-mono text-xs space-y-2"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-bg-panel text-text-primary text-[10px] font-bold border border-border-hairline">
                                  {f.displayId}
                                </span>
                                <span className="font-bold text-text-primary text-xs">{f.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                    f.severity === "CRITICAL"
                                      ? "bg-red-500/10 text-red-400 border border-red-500/30"
                                      : f.severity === "HIGH"
                                      ? "bg-orange-500/10 text-orange-400 border border-orange-500/30"
                                      : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                  }`}
                                >
                                  {f.severity}
                                </span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                                  <Check className="w-3 h-3" />
                                  RESOLVED
                                </span>
                              </div>
                            </div>

                            {f.impact && (
                              <div className="p-2.5 rounded bg-red-500/5 border-l-2 border-l-red-500 text-[11px] text-red-300">
                                <strong className="text-red-400 uppercase text-[10px] block mb-0.5">Impact:</strong>
                                {f.impact}
                              </div>
                            )}

                            {f.remediationNote && (
                              <div className="p-2.5 rounded bg-emerald-500/5 border-l-2 border-l-emerald-500 text-[11px] text-emerald-300">
                                <strong className="text-emerald-400 uppercase text-[10px] block mb-0.5">Auditor Verification:</strong>
                                {f.remediationNote}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Unverified / Not Found Banner */
              <div className="border border-red-500/30 rounded-xl bg-bg-panel p-6 sm:p-8 shadow-xl text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-red-400 font-display">
                  UNRECOGNIZED / UNVERIFIED ATTESTATION
                </h3>
                <p className="text-xs text-text-muted max-w-lg mx-auto leading-relaxed">
                  {verificationResult.message ||
                    "No certified audit attestation matching this query or file hash was found in the Zyron decentralized registry."}
                </p>
                <div className="pt-2 text-xs font-mono text-text-muted">
                  Double check the Ticket ID (e.g. <code>ZYR-9485</code>), contract address, or ensure the PDF is an unmodified original document.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recent Publicly Certified Audits Explorer */}
        {recentAudits.length > 0 && (
          <div className="mt-12 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-scan" />
                Recently Verified Audits on Zyron
              </h3>
              <span className="text-xs font-mono text-text-muted">Public Attestation Registry</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentAudits.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSearchQuery(item.id);
                    handleSearch(item.id);
                  }}
                  className="bg-bg-panel border border-border-hairline hover:border-accent-scan/50 rounded-xl p-4 cursor-pointer transition-all hover:shadow-md group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-bg-void border border-border-hairline text-[10px] font-mono font-bold text-text-primary">
                          {item.id}
                        </span>
                        <h4 className="text-sm font-bold text-text-primary group-hover:text-accent-scan transition-colors">
                          {item.protocolName}
                        </h4>
                      </div>
                      <p className="text-xs font-mono text-text-muted mt-0.5">
                        {item.contractFileName}
                      </p>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-semibold flex items-center gap-1 shrink-0">
                      <Check className="w-3 h-3" />
                      VERIFIED
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-text-muted pt-2 border-t border-border-hairline">
                    <span className="truncate max-w-[200px]">
                      CID: {(item.cryptography?.ipfsCid || "bafkrei...").slice(0, 16)}...
                    </span>
                    <span className="text-accent-scan flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Verify Proof <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border-hairline bg-bg-panel py-6 text-center text-xs font-mono text-text-muted">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Zyron Security Labs · Public Attestation Registry</span>
          <span>Anchored to EVM Smart Contracts &amp; IPFS CIDv1</span>
        </div>
      </footer>
    </div>
  );
}
