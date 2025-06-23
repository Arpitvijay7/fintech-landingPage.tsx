"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Circle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  BarChart3,
  PieChart,
  Wallet,
  CreditCard,
  Building,
  Phone,
  Mail,
  MapPin,
  Check,
  X,
  Crown,
  Sparkles,
  Bot,
  Brain,
  Cpu,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/spline";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "FinTech Innovation",
  title1 = "Elevate Your",
  title2 = "Financial Future",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Revolutionary financial technology that empowers businesses and
              individuals to manage, invest, and grow their wealth with
              unprecedented ease and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_0_rgba(99,102,241,0.3)]">
              Get Started Today
              <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white/80 font-semibold rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:scale-105 backdrop-blur-sm">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: any;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative p-8 bg-white/[0.02] border border-white/[0.08] rounded-2xl backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300 hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-rose-500/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 rounded-xl mb-6">
          <Icon className="h-6 w-6 text-white/80" />
        </div>

        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function StatsCard({
  value,
  label,
  icon: Icon,
  delay = 0,
}: {
  value: string;
  label: string;
  icon: any;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center p-6 bg-white/[0.02] border border-white/[0.08] rounded-xl backdrop-blur-sm"
    >
      <Icon className="h-8 w-8 text-indigo-400 mx-auto mb-4" />
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-2">
        {value}
      </div>
      <div className="text-white/60 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

function TestimonialCard({
  name,
  role,
  company,
  content,
  rating = 5,
  delay = 0,
}: {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-8 bg-white/[0.02] border border-white/[0.08] rounded-2xl backdrop-blur-sm"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-white/70 mb-6 leading-relaxed italic">"{content}"</p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-white/50 text-sm">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PricingCard({
  name,
  price,
  period = "month",
  description,
  features,
  isPopular = false,
  buttonText = "Get started",
  delay = 0,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative p-8 rounded-2xl border transition-all flex flex-col h-full",
        isPopular
          ? "bg-gradient-to-br from-indigo-900/40 to-black border-indigo-500/30 hover:border-indigo-500/60"
          : "bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-indigo-500/30"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-normal px-3 py-1 rounded-b-md">
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-normal mb-2 text-white">{name}</h3>
        <p className="text-gray-400 font-extralight text-sm mb-4">
          {description}
        </p>
        <div className="flex items-baseline">
          <span className="text-4xl font-light text-white">${price}</span>
          <span className="text-gray-400 ml-2 font-extralight">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray-300 font-extralight"
          >
            <svg
              className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={cn(
          "w-full rounded-md px-6 py-3 transition-all font-light",
          isPopular
            ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90"
            : "bg-transparent border border-gray-700 text-white hover:bg-white/5"
        )}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

function AIFinancialSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className="w-full min-h-[500px] lg:h-[500px] bg-black/[0.96] relative overflow-hidden border-white/[0.08] rounded-2xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
          {/* Left content */}
          <div className="flex-1 p-6 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm">
                <Brain className="h-6 w-6 text-indigo-400" />
              </div>
              <span className="text-indigo-400 text-xs md:text-sm font-medium tracking-wider uppercase">
                AI-POWERED FINANCE
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight">
              Intelligent Financial
              <br />
              Automation
            </h2>

            <p className="text-neutral-300 max-w-lg mb-8 text-base md:text-lg leading-relaxed">
              Experience the future of finance with our AI-driven platform. Our
              advanced algorithms analyze market trends, optimize portfolios,
              and execute trades with precision - all while you focus on what
              matters most.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-md bg-indigo-500/10">
                  <Bot className="h-5 w-5 text-indigo-400" />
                </div>
                <span className="text-gray-300 text-sm md:text-base">
                  Automated portfolio rebalancing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-md bg-indigo-500/10">
                  <Cpu className="h-5 w-5 text-indigo-400" />
                </div>
                <span className="text-gray-300 text-sm md:text-base">
                  Real-time risk assessment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-md bg-indigo-500/10">
                  <TrendingUp className="h-5 w-5 text-indigo-400" />
                </div>
                <span className="text-gray-300 text-sm md:text-base">
                  Predictive market analysis
                </span>
              </div>
            </div>

            <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_0_rgba(99,102,241,0.4)] w-fit text-sm md:text-base">
              Experience AI Finance
              <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right content */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20 z-10 pointer-events-none" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full rounded-r-2xl"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function FintechLandingPage() {
  return (
    <div className="bg-[#030303] text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroGeometric />

      {/* Features Section */}
      <section className="relative py-24 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                Powerful Financial Tools
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Experience the future of finance with our cutting-edge platform
              designed for modern businesses and individuals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={TrendingUp}
              title="Smart Analytics"
              description="Advanced AI-powered insights to help you make informed financial decisions and maximize your returns."
              delay={0.1}
            />
            <FeatureCard
              icon={Shield}
              title="Bank-Grade Security"
              description="Military-grade encryption and multi-layer security protocols to keep your financial data safe and secure."
              delay={0.2}
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Execute transactions and access your data instantly with our high-performance infrastructure."
              delay={0.3}
            />
            <FeatureCard
              icon={PieChart}
              title="Portfolio Management"
              description="Comprehensive portfolio tracking and management tools to diversify and optimize your investments."
              delay={0.4}
            />
            <FeatureCard
              icon={CreditCard}
              title="Digital Payments"
              description="Seamless payment processing with support for all major payment methods and cryptocurrencies."
              delay={0.5}
            />
            <FeatureCard
              icon={Building}
              title="Business Solutions"
              description="Enterprise-grade financial tools designed to scale with your business and streamline operations."
              delay={0.6}
            />
          </div>
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={1}
          width={400}
          height={100}
          rotate={8}
          gradient="from-violet-500/[0.08]"
          className="right-[-10%] top-[20%]"
        />
      </section>

      {/* AI Financial Section */}
      <section className="relative py-24 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.03] via-transparent to-purple-500/[0.03]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <AIFinancialSection />
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={1.2}
          width={350}
          height={90}
          rotate={15}
          gradient="from-purple-500/[0.08]"
          className="left-[-8%] top-[30%]"
        />
        <ElegantShape
          delay={1.4}
          width={280}
          height={70}
          rotate={-20}
          gradient="from-indigo-500/[0.08]"
          className="right-[-10%] bottom-[25%]"
        />
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                Thousands
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value="$2.5B+"
              label="Assets Under Management"
              icon={DollarSign}
              delay={0.1}
            />
            <StatsCard
              value="50K+"
              label="Active Users"
              icon={Users}
              delay={0.2}
            />
            <StatsCard
              value="99.9%"
              label="Uptime Guarantee"
              icon={Shield}
              delay={0.3}
            />
            <StatsCard
              value="150+"
              label="Countries Supported"
              icon={BarChart3}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.02] to-transparent" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="CEO"
              company="TechFlow Inc"
              content="This platform revolutionized how we manage our company finances. The analytics are incredibly detailed and the security gives us complete peace of mind."
              delay={0.1}
            />
            <TestimonialCard
              name="Marcus Johnson"
              role="Investment Manager"
              company="Wealth Partners"
              content="The portfolio management tools are outstanding. I've been able to optimize my clients' investments like never before. Highly recommended!"
              delay={0.2}
            />
            <TestimonialCard
              name="Elena Rodriguez"
              role="Founder"
              company="StartupVibe"
              content="As a startup founder, this platform has been invaluable. The business solutions are comprehensive and the support team is exceptional."
              delay={0.3}
            />
          </div>
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={1.2}
          width={300}
          height={80}
          rotate={-12}
          gradient="from-cyan-500/[0.08]"
          className="left-[-5%] bottom-[10%]"
        />
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#030303] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-40 left-20 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Simple, transparent{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                pricing
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-extralight">
              Choose the perfect plan for your team's needs with no hidden fees
              or long-term commitments.
            </p>
          </motion.div>

          {/* Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-12"
          >
            <span className="text-gray-400 mr-3">Monthly</span>
            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-gray-800">
              <label
                htmlFor="toggle"
                className="absolute left-0 w-6 h-6 mb-2 transition duration-100 ease-in-out transform bg-indigo-500 rounded-full cursor-pointer"
              ></label>
              <input
                type="checkbox"
                id="toggle"
                name="toggle"
                className="w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-gray-400 ml-3">
              Yearly <span className="text-xs text-indigo-400">(Save 20%)</span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              price="29"
              description="Perfect for small teams getting started"
              features={[
                "Up to 5 team members",
                "20GB storage",
                "Basic analytics",
                "24/7 email support",
              ]}
              delay={0.1}
            />

            <PricingCard
              name="Pro"
              price="79"
              description="Ideal for growing businesses"
              features={[
                "Up to 20 team members",
                "100GB storage",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
              ]}
              isPopular={true}
              delay={0.2}
            />

            <PricingCard
              name="Enterprise"
              price="199"
              description="For large-scale organizations"
              features={[
                "Unlimited team members",
                "1TB storage",
                "Enterprise analytics",
                "24/7 phone & email support",
                "Dedicated account manager",
              ]}
              buttonText="Contact sales"
              delay={0.3}
            />
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-light mb-8 text-center">
              Frequently asked questions
            </h3>

            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-lg font-normal mb-2">
                  Can I change my plan later?
                </h4>
                <p className="text-gray-400 font-extralight">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be reflected in your next billing cycle.
                </p>
              </div>

              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-lg font-normal mb-2">
                  Do you offer a free trial?
                </h4>
                <p className="text-gray-400 font-extralight">
                  Yes, we offer a 14-day free trial on all plans. No credit card
                  required to start.
                </p>
              </div>

              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-lg font-normal mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-400 font-extralight">
                  We accept all major credit cards, PayPal, and for annual
                  plans, we also support wire transfers.
                </p>
              </div>

              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-lg font-normal mb-2">
                  Is there a discount for non-profits?
                </h4>
                <p className="text-gray-400 font-extralight">
                  Yes, we offer special pricing for non-profit organizations.
                  Please contact our sales team for details.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-2xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                Transform
              </span>{" "}
              Your Finances?
            </h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers and start your journey
              towards financial freedom today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_0_rgba(99,102,241,0.4)] text-lg">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="px-10 py-5 bg-white/[0.03] border border-white/[0.08] text-white/80 font-semibold rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:scale-105 backdrop-blur-sm text-lg">
                Schedule Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-white/40">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={0.8}
          width={500}
          height={120}
          rotate={15}
          gradient="from-amber-500/[0.08]"
          className="right-[-10%] top-[30%]"
        />
        <ElegantShape
          delay={1}
          width={350}
          height={90}
          rotate={-20}
          gradient="from-violet-500/[0.08]"
          className="left-[-8%] bottom-[20%]"
        />
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-[#030303] border-t border-white/[0.08]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold">FinanceFlow</span>
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                Empowering the future of finance through innovative technology
                and exceptional user experience.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-white/40">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <Mail className="h-4 w-4" />
                  <span>hello@financeflow.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-white/60">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Personal Banking
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Business Solutions
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Investment Platform
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  API Services
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-white/60">
                <li className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Press
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.08] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              © 2024 FinanceFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">
                Security
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
