"use client";

import Link from "next/link";

export default function HelpHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[var(--red-primary)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono mb-6">
          <Link href="/" className="hover:text-[var(--red-light)] transition-colors">首页</Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">帮助中心</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--red-primary)]/20 bg-[var(--red-primary)]/5 text-xs text-[var(--red-light)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-primary)] animate-pulse" />
            Help Center
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 leading-tight">
            <span className="text-[var(--red-primary)]">帮助中心</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            红袖书院全天候为你服务，无论是阅读问题、账号管理还是功能使用，我们都随时准备帮助你解决问题。
          </p>
        </div>
      </div>
    </section>
  );
}
