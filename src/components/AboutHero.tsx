"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[var(--red-primary)]/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[var(--gold)]/3 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono mb-6">
          <Link href="/" className="hover:text-[var(--red-light)] transition-colors">首页</Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">关于</span>
        </div>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--red-primary)]/20 bg-[var(--red-primary)]/5 text-xs text-[var(--red-light)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-primary)] animate-pulse" />
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 leading-tight">
            用<span className="text-[var(--red-primary)]">赛博朋克</span>风格呈现知识
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            红袖书院是一家专注于证券投资领域的电子书阅读平台。
            我们精选市面上最优秀的投资经典著作，以PDF格式原版呈现，
            采用赛博朋克暗黑风格设计，让阅读成为一种视觉享受。
            所有电子书免费阅读，让每一个交易者都能获取最优质的知识。
          </p>
        </div>
      </div>
    </section>
  );
}