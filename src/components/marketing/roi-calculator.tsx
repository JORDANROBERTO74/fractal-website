"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValueEvent } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, Ticket, Sparkles, ArrowRight } from "lucide-react";

export function RoiCalculator() {
  const [tickets, setTickets] = useState(5000);
  const [timePerTicket, setTimePerTicket] = useState(15); // minutes
  const [hourlyCost, setHourlyCost] = useState(40); // dollars

  const [annualCost, setAnnualCost] = useState(0);
  const [savings, setSavings] = useState(0);
  const [displaySavingsText, setDisplaySavingsText] = useState("0");

  // Spring animation for the savings number
  const springSavings = useSpring(0, { stiffness: 100, damping: 30 });
  
  // Update displayed text when spring value changes (client-side only)
  useMotionValueEvent(springSavings, "change", (latest) => {
    setDisplaySavingsText(Math.floor(latest).toLocaleString('en-US'));
  });

  useEffect(() => {
    // Logic: Manual Cost = Tickets * (Time/60) * Cost * 12
    const manualMonthlyCost = tickets * (timePerTicket / 60) * hourlyCost;
    const manualAnnualCost = manualMonthlyCost * 12;

    // Logic: FractalGrid Savings = Manual Cost * 0.45
    const projectedSavings = manualAnnualCost * 0.45;

    setAnnualCost(manualAnnualCost);
    setSavings(projectedSavings);
    springSavings.set(projectedSavings);
    // Initialize display text with formatted value
    setDisplaySavingsText(Math.floor(projectedSavings).toLocaleString('en-US'));
  }, [tickets, timePerTicket, hourlyCost, springSavings]);

  return (
    <Card className="w-full max-w-4xl mx-auto border-emerald-500/30 bg-slate-950/50 backdrop-blur-xl shadow-2xl shadow-emerald-900/10 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <CardHeader className="text-center relative z-10">
        <div className="flex justify-center mb-4">
          <Badge
            variant="outline"
            className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10 px-3 py-1"
          >
            <Sparkles className="w-3 h-3 mr-2" /> ROI Engine
          </Badge>
        </div>
        <CardTitle className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Calculate Your Automation Potential
        </CardTitle>
        <CardDescription className="text-slate-400 text-lg max-w-2xl mx-auto mt-2">
          See exactly how much revenue you&apos;re leaking to manual support tasks.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid md:grid-cols-2 gap-12 p-8 relative z-10">
        {/* Input Section */}
        <div className="space-y-8">
          {/* Slider 1: Tickets */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Ticket className="w-4 h-4 text-cyan-400" /> Monthly Tickets
              </label>
              <span className="text-slate-200 font-mono bg-slate-800 px-2 py-1 rounded text-sm">
                {tickets.toLocaleString('en-US')}
              </span>
            </div>
            <Slider
              value={[tickets]}
              onValueChange={(val) => setTickets(val[0])}
              min={100}
              max={50000}
              step={100}
              className="py-4 cursor-pointer"
            />
          </div>

          {/* Slider 2: Time */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" /> Time per Ticket
                (mins)
              </label>
              <span className="text-slate-200 font-mono bg-slate-800 px-2 py-1 rounded text-sm">
                {timePerTicket} min
              </span>
            </div>
            <Slider
              value={[timePerTicket]}
              onValueChange={(val) => setTimePerTicket(val[0])}
              min={5}
              max={60}
              step={1}
              className="py-4 cursor-pointer"
            />
          </div>

          {/* Slider 3: Cost */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-cyan-400" /> Agent Hourly
                Cost
              </label>
              <span className="text-slate-200 font-mono bg-slate-800 px-2 py-1 rounded text-sm">
                ${hourlyCost}/hr
              </span>
            </div>
            <Slider
              value={[hourlyCost]}
              onValueChange={(val) => setHourlyCost(val[0])}
              min={10}
              max={100}
              step={1}
              className="py-4 cursor-pointer"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col justify-center items-center bg-slate-900/50 rounded-2xl p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">
            Projected Annual Savings
          </p>
          <div className="flex items-baseline gap-1 text-emerald-400">
            <span className="text-5xl md:text-6xl font-bold tracking-tight">
              $
            </span>
            <motion.span className="text-5xl md:text-6xl font-bold tracking-tight">
              {displaySavingsText}
            </motion.span>
          </div>

          <div className="mt-2 text-slate-500 text-sm">
            Based on 45% automation rate
          </div>

          <div className="mt-8 w-full">
            <Button
              size="lg"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] transition-all"
            >
              Claim these Savings
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
