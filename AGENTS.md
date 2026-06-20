# 仓库贡献指南

本文档为红袖电子书阅读平台（基于 Next.js、React、TypeScript 构建）的贡献者提供必要信息。

## 项目简介

红袖电子书是一个专注于股票投资领域的在线阅读平台，提供 PDF 阅读、图书分类、主题切换等功能，支持深色/浅色模式。

## 项目结构

```
hongxiu-ebook/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── api/               # API 路由
│   │   ├── categories/        # 分类页面
│   │   ├── ebook/             # 单本书籍页面
│   │   ├── ebooks/            # 书架页面
│   │   └── ranking/           # 排行榜页面
│   ├── components/            # React 组件
│   │   ├── reader/            # PDF 阅读器组件
│   │   └── *.tsx             # UI 组件
│   ├── data/                  # 静态数据
│   │   ├── books.ts          # 图书目录和分类
│   │   └── books_generated.ts # 自动生成的图书数据
│   └── content/               # PDF 书籍文件
│       └── ebooks/            # PDF 文件（361+ 本书）
├── public/
│   └── covers/                # 书籍封面图片
├── next.config.js             # Next.js 配置
├── postcss.config.js         # PostCSS 配置
└── tsconfig.json              # TypeScript 配置
```

## 开发命令

```bash
npm run dev      # 启动开发服务器（默认端口 3000）
npm run build    # 构建生产版本
npm run start    # 启动生产服务器
npm run lint     # 运行 ESLint 代码检查
```

## 代码规范

### TypeScript
- 启用严格模式（strict mode）
- 函数参数和返回值使用显式类型注解
- 需要时显式导入类型

### React 组件
- 使用函数组件，客户端组件添加 `"use client"` 指令
- 主题订阅使用 `useSyncExternalStore`（参见 `BookCover.tsx`）
- 保持组件专注和模块化

### Tailwind CSS v4
- 使用 CSS 变量定义主题颜色（在 `globals.css` 中定义）
- 可用主题变量：`--red-primary`、`--gold`、`--bg-primary`、`--text-primary` 等
- 使用 `card-glow` 类实现卡片悬停效果
- 遵循现有颜色系统保持一致性

### 文件命名
- 组件：PascalCase（如 `BookCover.tsx`、`EbookCard.tsx`）
- 数据文件：camelCase 描述性命名
- API 路由：使用 `route.ts` 后缀

## 数据管理

### 图书数据（`src/data/books.ts`）
- `Book` 接口定义图书结构
- `Category` 接口定义分类结构
- `allBooks` 数组包含 361+ 本图书
- `categories` 数组包含 11 个分类
- 每本书包含：id、title、author、rating、readers、tags、description、category
- 每个分类包含：id、name、count、icon、description、color、popular

### 添加新书
1. 在 `src/data/books.ts` 的 `allBooks` 数组中添加图书条目
2. 确保 PDF 文件存在于 `src/content/ebooks/` 目录
3. 使用图书的 `id` 作为文件名（如 `123.pdf`）

## 主题系统

应用使用 CSS 变量支持深色/浅色主题：

```css
/* globals.css 中的关键主题变量 */
--red-primary: #DC1E1E;
--gold: #D4A84B;
--bg-primary: #0a0a0f;
--bg-card: #12121a;
--text-primary: #f0f0f0;
```

通过 `html` 元素上的 `data-theme` 属性切换主题。

## API 路由

位于 `src/app/api/`：
- `api/ebook/[id]/route.ts` - GET 获取图书元数据
- `api/ebook/[id]/pdf/route.ts` - GET 获取 PDF 文件

## 部署

项目配置为 Vercel 部署（`vercel.json`）。运行 `vercel` 即可部署。

## 注意事项

- 所有内容为简体中文
- `src/src/` 目录包含重复/备份文件，请勿修改
- PDF 文件使用图书的 `id` 作为文件名
- 项目使用 `react-pdf` 渲染 PDF
- 主题检测使用 `useSyncExternalStore` 配合 `MutationObserver`
