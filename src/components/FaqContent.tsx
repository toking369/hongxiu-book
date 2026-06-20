"use client";

import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    category: "关于红袖书院",
    questions: [
      {
        q: "红袖书院是什么？",
        a: "红袖书院是一个专注于股票投资领域的电子书阅读平台，精选市场上最优秀的投资经典著作，以PDF格式原版呈现，采用红袖书院赛博朋克风格设计，让阅读成为一种视觉享受。所有电子书免费阅读，让每一个交易者都能获取最优质的知识。",
      },
      {
        q: "红袖书院收费吗？",
        a: "红袖书院所有电子书均免费阅读，无需注册账号即可享受完整服务。我们致力于为投资者提供免费、优质的知识资源。",
      },
      {
        q: "平台有哪些书籍？",
        a: "平台涵盖K线技术、财务分析、技术指标、趋势分析、选股技巧、短线战法、盘口战法、交易心理、投资理念、期货期权等多个投资领域。",
      },
    ],
  },
  {
    category: "阅读相关",
    questions: [
      {
        q: "支持什么格式的电子书？",
        a: "目前红袖书院支持PDF格式的电子书。PDF格式能够完美呈现原版书籍的排版和图表，确保最佳阅读体验。",
      },
      {
        q: "阅读进度会自动保存吗？",
        a: "是的，系统会自动保存你的阅读进度。当你再次打开同一本书时，可以从上次离开的位置继续阅读。",
      },
      {
        q: "可以下载书籍到本地吗？",
        a: "平台上的书籍支持在线阅读。如需离线阅读，建议使用浏览器的打印功能将PDF保存到本地。",
      },
    ],
  },
  {
    category: "账号与隐私",
    questions: [
      {
        q: "需要注册账号吗？",
        a: "红袖书院无需注册即可使用所有功能。所有书籍均可免费访问，阅读进度也会自动保存在本地浏览器中。",
      },
      {
        q: "我的阅读数据会被收集吗？",
        a: "我们尊重用户隐私，阅读数据主要存储在本地浏览器中。我们仅收集必要的匿名统计数据用于改善服务质量。",
      },
      {
        q: "如何清除本地存储的数据？",
        a: "可以通过清除浏览器缓存来清除本地存储的阅读进度和偏好设置。",
      },
    ],
  },
  {
    category: "技术支持",
    questions: [
      {
        q: "哪些浏览器体验最佳？",
        a: "推荐使用Chrome、Firefox、Edge、Safari等现代浏览器以获得最佳阅读体验。我们不支持IE等旧版浏览器。",
      },
      {
        q: "移动端体验如何？",
        a: "红袖书院针对移动端进行了专门优化，在手机和平板上都有良好的阅读体验。无需下载App，直接通过浏览器访问即可。",
      },
      {
        q: "遇到技术问题怎么办？",
        a: "如果遇到技术问题，请尝试刷新页面或清除浏览器缓存。如问题持续，请通过反馈页面提交问题，我们会尽快处理。",
      },
    ],
  },
];

export default function FaqContent() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {faqData.map((category) => (
            <div
              key={category.category}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                className="w-full px-6 py-4 flex items-center justify-between cursor-pointer bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors"
              >
                <span className="text-base font-bold text-[var(--text-primary)]">{category.category}</span>
                <svg
                  className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 ${openCategory === category.category ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openCategory === category.category && (
                <div className="border-t border-[var(--border-color)]">
                  {category.questions.map((item, idx) => {
                    const key = `${category.category}-${idx}`;
                    return (
                      <div key={key} className="border-b border-[var(--border-color)] last:border-b-0">
                        <button
                          onClick={() => setOpenQuestion(openQuestion === key ? null : key)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-[var(--bg-secondary)] transition-colors"
                        >
                          <span className="text-sm font-medium text-[var(--text-primary)] pr-4">{item.q}</span>
                          <svg
                            className={`w-4 h-4 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-200 ${openQuestion === key ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openQuestion === key && (
                          <div className="px-6 pb-4">
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-8">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">还有其他问题？</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            如果FAQ中没有找到你想要的答案，可以通过反馈页面联系我们
          </p>
          <Link
            href="/feedback"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--red-primary)] text-white font-bold hover:bg-[var(--red-light)] transition-all duration-300"
          >
            <span>提交反馈</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
