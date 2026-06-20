"use client";

import Link from "next/link";

const guideSteps = [
  {
    step: "01",
    title: "浏览书架",
    desc: "在书架页面，你可以浏览所有书籍，按分类筛选或使用搜索功能找到感兴趣的书籍。",
    icon: "📚",
    tips: ["使用分类导航快速定位", "热门推荐不容错过", "支持关键词搜索"],
  },
  {
    step: "02",
    title: "选择书籍",
    desc: "点击感兴趣的书籍进入详情页，了解书籍简介、作者信息、读者评价等内容。",
    icon: "📖",
    tips: ["查看书籍目录结构", "阅读其他读者评价", "了解作者背景信息"],
  },
  {
    step: "03",
    title: "开始阅读",
    desc: "点击「立即阅读」按钮进入阅读器，享受流畅的PDF阅读体验。",
    icon: "📑",
    tips: ["支持页面缩放", "流畅翻页体验", "自动保存阅读进度"],
  },
  {
    step: "04",
    title: "管理收藏",
    desc: "收藏喜欢的书籍，方便日后快速访问。登录后所有收藏自动同步。",
    icon: "⭐",
    tips: ["收藏夹随时查看", "支持批量管理", "多设备同步"],
  },
];

const readingTips = [
  { title: "快捷键使用", desc: "使用空格键或方向键快速翻页，+/-调整缩放" },
  { title: "阅读时间", desc: "建议单次阅读时长控制在45分钟内，注意休息" },
  { title: "做笔记", desc: "可以配合笔记应用，边读边记录重点内容" },
  { title: "复习巩固", desc: "定期回顾已读内容，加深理解和记忆" },
];

export default function GuideContent() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Steps */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-3">
              阅读<span className="text-[var(--red-primary)]">四步走</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)]">简单四步，开启你的投资知识之旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guideSteps.map((item) => (
              <div
                key={item.step}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 relative card-glow transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-5xl opacity-20 select-none">{item.icon}</div>
                <div className="text-4xl font-black text-[var(--red-primary)]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-1">
                  {item.tips.map((tip) => (
                    <li key={tip} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                      <span className="text-[var(--gold)]">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Reading Tips */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-3">
              阅读<span className="text-[var(--gold)]">小贴士</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)]">提升阅读效率的小技巧</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {readingTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 card-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-3">
                  <span className="text-lg">💡</span>
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">{tip.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[var(--text-secondary)] mb-6">准备好开始阅读了吗？</p>
          <Link
            href="/ebooks"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--red-primary)] text-white font-bold hover:bg-[var(--red-light)] transition-all duration-300"
          >
            <span>前往书架</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
