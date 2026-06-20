"use client";

import { useState } from "react";

const helpCategories = [
  {
    icon: "📖",
    title: "阅读问题",
    color: "#DC1E1E",
    items: [
      { q: "如何开始阅读一本书？", a: "在书架页面浏览书籍，点击任意书籍封面进入详情页，然后点击「立即阅读」按钮即可开始阅读。" },
      { q: "支持哪些阅读格式？", a: "红袖书院目前支持PDF格式的电子书，未来将陆续支持更多格式。" },
      { q: "如何调整阅读界面？", a: "在阅读页面，你可以使用页面底部的工具栏调整缩放比例、翻页设置等。" },
    ],
  },
  {
    icon: "👤",
    title: "账号管理",
    color: "#D4A84B",
    items: [
      { q: "需要注册账号吗？", a: "红袖书院所有书籍均可免费阅读，无需注册账号即可享受完整服务。" },
      { q: "如何收藏书籍？", a: "登录后，点击书籍详情页的收藏按钮即可将书籍加入个人收藏夹。" },
      { q: "如何修改个人资料？", a: "点击页面右上角的头像，进入个人中心即可修改个人资料。" },
    ],
  },
  {
    icon: "💻",
    title: "功能使用",
    color: "#06B6D4",
    items: [
      { q: "支持哪些设备？", a: "红袖书院支持电脑，平板、手机等所有主流设备，通过浏览器即可访问。" },
      { q: "如何切换深色/浅色模式？", a: "点击页面右上角的主题切换按钮即可在深色和浅色模式间切换。" },
      { q: "阅读进度会保存吗？", a: "是的，系统会自动保存你的阅读进度，下次打开可继续阅读。" },
    ],
  },
  {
    icon: "📱",
    title: "移动端使用",
    color: "#8B5CF6",
    items: [
      { q: "有手机App吗？", a: "目前红袖书院为Web端应用，可在手机浏览器中流畅使用。" },
      { q: "手机端体验如何？", a: "我们针对移动端进行了专门优化，在手机上有良好的阅读体验。" },
    ],
  },
];

const contactInfo = [
  { label: "在线客服", value: "24小时在线", icon: "💬" },
  { label: "邮箱地址", value: "support@hongxiu.com", icon: "📧" },
  { label: "微信公众号", value: "红袖书院", icon: "🔔" },
];

export default function HelpContent() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 card-glow transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--red-primary)]/10 flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] mb-1">{item.label}</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Categories */}
        <div className="space-y-8">
          {helpCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">{category.title}</h2>
              </div>

              <div className="space-y-3">
                {category.items.map((item, idx) => {
                  const key = `${category.title}-${idx}`;
                  return (
                    <div
                      key={key}
                      className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer"
                      >
                        <span className="text-sm font-medium text-[var(--text-primary)]">{item.q}</span>
                        <svg
                          className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 ${openItem === key ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openItem === key && (
                        <div className="px-6 pb-4">
                          <div className="w-full h-px bg-[var(--border-color)] mb-4" />
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
