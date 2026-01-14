"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { RoiCalculator } from "@/components/marketing/roi-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Zap,
  BrainCircuit,
  Share2,
  Server,
  Slack,
  Database,
  Terminal,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function MarketingPage() {
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Height of fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      router.push(href);
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 font-sans">
      {/* A. Navbar "Sticky" */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <BrainCircuit size={18} />
            </div>
            FractalGrid
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "#features")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href="#methodology"
              onClick={(e) => handleNavClick(e, "#methodology")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Methodology
            </a>
            <a
              href="#integrations"
              onClick={(e) => handleNavClick(e, "#integrations")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Integrations
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-slate-400 hover:text-white"
            >
              Log in
            </Button>
            <Button className="bg-white text-slate-950 hover:bg-slate-200 font-semibold">
              Calculate Savings
            </Button>
          </div>
        </div>
      </nav>

      {/* B. Hero Section: "The Value Hook" */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-8">
            <Zap size={12} className="fill-current" />
            New: MCP Agent Support
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 max-w-4xl mx-auto leading-[1.1]">
            Transform IT Noise into <br />
            <span className="text-white">Strategic Growth.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop fixing the same issue twice. FractalGrid uses AI to identify,
            prioritize (RICE), and automate your costliest support tickets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-white text-slate-950 hover:bg-slate-200"
            >
              Start Automating Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-white/10 text-white hover:bg-white/5"
            >
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-slate-500 flex items-center justify-center gap-6">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit
              card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Deploy in 5
              minutes
            </span>
          </p>
        </div>
      </section>

      {/* C. Features Section */}
      <section id="features" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6">
            <Zap size={12} className="fill-current" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to Automate IT Support
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built for engineering teams who refuse to waste time on repetitive tasks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Feature 1: AI-Powered Triage */}
          <Card className="bg-slate-900/50 border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <BrainCircuit className="w-6 h-6 text-cyan-400" />
              </div>
              <CardTitle className="text-xl">AI-Powered Triage</CardTitle>
              <CardDescription className="text-slate-400">
                Automatically categorize and prioritize tickets using advanced ML models.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Real-time ticket classification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Smart routing to experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>99.2% accuracy rate</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 2: RICE Prioritization */}
          <Card className="bg-slate-900/50 border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <CardTitle className="text-xl">RICE Scoring</CardTitle>
              <CardDescription className="text-slate-400">
                Data-driven prioritization framework to maximize impact.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Reach × Impact × Confidence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated effort estimation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Dynamic score updates</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 3: Self-Healing Agents */}
          <Card className="bg-slate-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-xl">Self-Healing Agents</CardTitle>
              <CardDescription className="text-slate-400">
                Autonomous agents that fix issues before they escalate.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Automated remediation workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Multi-step problem solving</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Rollback on failure</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 4: MCP Integration */}
          <Card className="bg-slate-900/50 border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Share2 className="w-6 h-6 text-purple-400" />
              </div>
              <CardTitle className="text-xl">Universal Integration</CardTitle>
              <CardDescription className="text-slate-400">
                Connect to any tool via Model Context Protocol.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>100+ pre-built connectors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Custom API integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Bi-directional sync</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 5: Security & Compliance */}
          <Card className="bg-slate-900/50 border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <CardTitle className="text-xl">Enterprise Security</CardTitle>
              <CardDescription className="text-slate-400">
                SOC 2 compliant with end-to-end encryption and audit logs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>SOC 2 Type II certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>VPC peering support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Complete audit trail</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 6: Analytics Dashboard */}
          <Card className="bg-slate-900/50 border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.3)] group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <Activity className="w-6 h-6 text-pink-400" />
              </div>
              <CardTitle className="text-xl">Real-Time Analytics</CardTitle>
              <CardDescription className="text-slate-400">
                Track automation impact and ROI with detailed dashboards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400" />
                  <span>Live performance metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400" />
                  <span>ROI calculations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400" />
                  <span>Custom reports & exports</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights Row */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/5">
            <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
            <p className="text-slate-400 text-sm">Average automation rate</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/5">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5 min</div>
            <p className="text-slate-400 text-sm">Average setup time</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/5">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <p className="text-slate-400 text-sm">Uptime SLA guarantee</p>
          </div>
        </div>
      </section>

      {/* C. Social Proof (Marquee) */}
      <section className="py-12 border-y border-white/5 bg-slate-900/50 backdrop-blur-sm">
        <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-widest">
          Trusted by engineering teams at
        </p>
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
            {/* Logos - Mocked with text for simplicity but styled like logos */}
            {[
              "Acme Corp",
              "Vercel",
              "Linear",
              "Raycast",
              "Scale",
              "Rippling",
              "Brex",
              "Retool",
            ].map((company) => (
              <span
                key={company}
                className="text-xl font-bold text-slate-600 hover:text-white transition-colors duration-300 cursor-default"
              >
                {company}
              </span>
            ))}
            {/* Duplicated for smooth loop */}
            {[
              "Acme Corp",
              "Vercel",
              "Linear",
              "Raycast",
              "Scale",
              "Rippling",
              "Brex",
              "Retool",
            ].map((company) => (
              <span
                key={`dup-${company}`}
                className="text-xl font-bold text-slate-600 hover:text-white transition-colors duration-300 cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* D. Feature 1: The Strategy Engine (RICE Methodology) */}
      <section id="methodology" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Prioritize with Science.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our AI analyzes reach, impact, and effort to tell you exactly what
            to automate first. No more guessing games.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: The Context */}
          <Card className="bg-slate-900/50 border-white/10 md:col-span-2 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="text-cyan-400" />
                Live Ticket Analysis
              </CardTitle>
              <CardDescription>
                Real-time scoring of incoming support tickets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Server Restart Loop",
                    score: 98,
                    color: "bg-emerald-500",
                    label: "Automate Now",
                  },
                  {
                    title: "Reset Password",
                    score: 85,
                    color: "bg-emerald-500/80",
                    label: "High Priority",
                  },
                  {
                    title: "Feature Request: Dark Mode",
                    score: 45,
                    color: "bg-yellow-500",
                    label: "Backlog",
                  },
                  {
                    title: "Typo in footer",
                    score: 12,
                    color: "bg-slate-500",
                    label: "Ignore",
                  },
                ].map((ticket, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-slate-950/50 p-3 rounded-lg border border-white/5"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-sm text-slate-200">
                          {ticket.title}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          RICE: {ticket.score}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${ticket.color} rounded-full`}
                          style={{ width: `${ticket.score}%` }}
                        />
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs min-w-[80px] justify-center bg-white/5 text-slate-300 border-white/10"
                    >
                      {ticket.label}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Card 2: The Metrics */}
          <div className="grid grid-rows-2 gap-6">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-950 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Reach Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mb-1">12k+</div>
                <p className="text-sm text-slate-500">
                  Users affected by top 3 issues this month.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-900 to-slate-950 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Effort Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-emerald-400 mb-1">
                  840h
                </div>
                <p className="text-sm text-slate-500">
                  Engineering hours reclaimed via automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E. COMPONENTE ESTRELLA: Interactive ROI Calculator */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Cost of Inaction
            </h2>
            <p className="text-slate-400">
              Calculate exactly how much manual support is costing your bottom
              line.
            </p>
          </div>
          <RoiCalculator />
        </div>
      </section>

      {/* F. Feature 2: The Execution (MCP & Integrations) */}
      <section
        id="integrations"
        className="py-24 container mx-auto px-6 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
              <Share2 size={12} />
              Universal Compatibility
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Built on the Model Context Protocol (MCP).
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Connect to any system. Read from Airbyte, think with Gemini, act
              via API. FractalGrid acts as the central nervous system for your
              IT infrastructure.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Bi-directional sync with Jira & Linear",
                "Secure VPC Peering",
                "Audit logs for every AI action",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white/5"
            >
              View Integration Library
            </Button>
          </div>

          <div className="md:w-1/2 relative">
            {/* Conceptual Network Diagram */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Center Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_50px_-10px_rgba(6,182,212,0.5)] flex items-center justify-center flex-col relative">
                  <BrainCircuit className="w-8 h-8 text-cyan-400 mb-1" />
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                    Fractal
                  </span>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full border border-cyan-500/50 animate-ping opacity-20" />
                </div>
              </div>

              {/* Orbiting Nodes */}
              {[
                {
                  icon: Database,
                  label: "Airbyte",
                  pos: "top-0 left-1/2 -translate-x-1/2",
                },
                {
                  icon: Terminal,
                  label: "AWS",
                  pos: "bottom-0 left-1/2 -translate-x-1/2",
                },
                {
                  icon: Slack,
                  label: "Slack",
                  pos: "top-1/2 right-0 -translate-y-1/2",
                },
                {
                  icon: Server,
                  label: "Jira",
                  pos: "top-1/2 left-0 -translate-y-1/2",
                },
                { icon: Cpu, label: "OpenAI", pos: "top-[15%] left-[15%]" },
              ].map((node, i) => (
                <div key={i} className={`absolute ${node.pos} z-10`}>
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <node.icon className="w-6 h-6 text-slate-400 mb-1" />
                    <span className="text-[9px] text-slate-500 font-medium">
                      {node.label}
                    </span>
                  </div>
                  {/* Connecting Lines (Simplified visually with absolute positioning, ideally SVG) */}
                  <div
                    className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 -z-10 w-[200px]"
                    style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
                  ></div>
                </div>
              ))}

              {/* Orbit Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-[15%] border border-white/5 rounded-full border-dashed animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* G. Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">
              <TrendingUp size={12} />
              Simple Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Start Automating Today
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your team. All plans include full access to AI agents and integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-slate-900/50 border-white/10 relative">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription className="text-slate-400">
                  Perfect for small teams
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">$99</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Up to 1,000 tickets/month</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>AI-powered triage</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>5 integrations</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-white text-slate-950 hover:bg-slate-200">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan - Recommended */}
            <Card className="bg-gradient-to-b from-cyan-950/30 to-slate-900/50 border-cyan-500/30 relative scale-105 shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)]">
              <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription className="text-slate-300">
                  For growing companies
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">$299</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Up to 10,000 tickets/month</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>RICE prioritization</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Self-healing agents</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Unlimited integrations</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-cyan-500 text-white hover:bg-cyan-600">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-900/50 border-white/10 relative">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription className="text-slate-400">
                  Custom solutions for large teams
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">Custom</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Unlimited tickets</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>SLA guarantee</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span>On-premise deployment</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 border-white/10 hover:bg-white/5" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* H. Comparison Section (Growth/Anchor) */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Engineering Leaders switch.
          </h2>

          <div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
            {/* Traditional */}
            <div className="p-8 bg-slate-900/30 border-b md:border-b-0 md:border-r border-white/10">
              <h3 className="text-lg font-semibold text-slate-400 mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5" /> Traditional ITSM
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Reactive firefighting
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Manual triage & routing
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Static, brittle rules
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Linear cost scaling
                </li>
              </ul>
            </div>

            {/* FractalGrid */}
            <div className="p-8 bg-gradient-to-b from-cyan-950/20 to-transparent relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-bl-lg">
                RECOMMENDED
              </div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-cyan-400" /> FractalGrid
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  Predictive & Proactive
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  AI Auto-Triage (RICE)
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  Self-Healing Agents
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  Zero marginal cost per ticket
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* H. Footer (SEO) */}
      <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <BrainCircuit size={16} className="text-cyan-500" /> FractalGrid
              </h4>
              <p className="text-sm text-slate-500">
                Automating the future of IT support with Model Context Protocol
                agents.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    RICE Scoring Tool
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    AI for Helpdesk
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Legal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">
              © 2026 FractalGrid Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Slack size={20} />
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Share2 size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
