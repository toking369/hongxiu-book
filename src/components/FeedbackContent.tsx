"use client";

import { useState } from "react";

const feedbackTypes = [
  { id: "bug", label: "功能问题", icon: "🐛", desc: "报告功能异常或错误" },
  { id: "suggestion", label: "功能建议", icon: "💡", desc: "提出新功能或改进意见" },
  { id: "content", label: "内容需求", icon: "📚", desc: "推荐想看的书籍或内容" },
  { id: "other", label: "其他反馈", icon: "💬", desc: "其他类型的反馈或问题" },
];

export default function FeedbackContent() {
  const [selectedType, setSelectedType] = useState<string>("suggestion");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedType("suggestion");
    setTitle("");
    setContent("");
    setEmail("");
    setSubmitted(false);
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {submitted ? (
          <div className="text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-12">
            <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">感谢你的反馈！</h2>
            <p className="text-[var(--text-secondary)] mb-6">
              我们已收到你的反馈，会认真处理并在后续版本中考虑你的建议。
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--red-primary)]/30 hover:text-[var(--text-primary)] transition-all duration-300"
            >
              提交新反馈
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-8">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">提交反馈</h2>

            {/* Feedback Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">反馈类型</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {feedbackTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      selectedType === type.id
                        ? "border-[var(--red-primary)] bg-[var(--red-primary)]/10"
                        : "border-[var(--border-color)] hover:border-[var(--red-primary)]/30"
                    }`}
                  >
                    <span className="text-xl mb-2 block">{type.icon}</span>
                    <div className="text-sm font-medium text-[var(--text-primary)]">{type.label}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                反馈标题 <span className="text-[var(--red-primary)]">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="请简要描述你的反馈"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-primary)] transition-colors"
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                详细描述 <span className="text-[var(--red-primary)]">*</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={5}
                placeholder="请详细描述你的问题或建议，以便我们更好地理解和处理"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-primary)] transition-colors resize-none"
              />
            </div>

            {/* Email */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                电子邮箱（选填）
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="留下邮箱以便我们联系你"
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--red-primary)] transition-colors"
              />
              <p className="text-xs text-[var(--text-muted)] mt-2">
                如果希望获得问题处理进度的反馈，请留下你的邮箱地址
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[var(--red-primary)] text-white font-bold hover:bg-[var(--red-light)] transition-all duration-300 cursor-pointer"
            >
              提交反馈
            </button>
          </form>
        )}

        {/* Tips */}
        <div className="mt-8 text-center text-sm text-[var(--text-muted)]">
          <p>反馈提交后，我们通常会在 1-3 个工作日内处理</p>
          <p className="mt-1">紧急问题请联系：support@hongxiu.com</p>
        </div>
      </div>
    </section>
  );
}
