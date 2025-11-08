import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "登录成功 | SUU Platform",
};

const folders = [
  { name: "所有链接", count: 128, href: "#", active: true },
  { name: "工作", count: 56, href: "#" },
  { name: "项目 X", count: 18, href: "#" },
  { name: "设计", count: 22, href: "#" },
  { name: "灵感", count: 12, href: "#" },
];

const tags = [
  { label: "design", tone: "bg-blue-500/10 text-blue-300" },
  { label: "dev", tone: "bg-emerald-500/10 text-emerald-300" },
  { label: "tools", tone: "bg-purple-500/10 text-purple-300" },
  { label: "inspiration", tone: "bg-amber-500/10 text-amber-300" },
];

const links = [
  {
    title: "Tailwind CSS - 现代化的 HTML 样式解决方案",
    url: "tailwindcss.com",
    description: "在不离开 HTML 的前提下快速构建现代网站 UI。",
    tags: ["design", "dev"],
  },
  {
    title: "Figma - 团队协同设计工具",
    url: "figma.com",
    description: "在云端完成从原型到交付的完整设计流程。",
    tags: ["design", "tools"],
  },
  {
    title: "GitHub - 全球领先的代码托管平台",
    url: "github.com",
    description: "与团队一起构建、审查并交付高质量软件。",
    tags: ["dev"],
  },
];

const tagStyleMap: Record<string, string> = {
  design: "bg-blue-500/10 text-blue-300",
  dev: "bg-emerald-500/10 text-emerald-300",
  tools: "bg-purple-500/10 text-purple-300",
  inspiration: "bg-amber-500/10 text-amber-300",
};

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950 text-zinc-50">
      <aside className="hidden w-72 flex-col border-r border-zinc-900/60 bg-zinc-950/60 px-8 py-10 lg:flex">
        <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Folders</p>
            <nav className="space-y-1 text-sm">
              {folders.map((folder) => (
                <Link
                  key={folder.name}
                  href={folder.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-zinc-900/60 hover:text-white ${
                    folder.active
                      ? "bg-zinc-900/80 text-white"
                      : "text-zinc-400"
                  }`}
                >
                  <span>{folder.name}</span>
                  <span className="text-xs text-zinc-500">{folder.count}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              <span>Tags</span>
              <button className="text-[10px] uppercase text-zinc-400 hover:text-zinc-200">管理</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tag.tone}`}
                >
                  #{tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-4 rounded-2xl border border-zinc-900/70 bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 p-6">
          <p className="text-sm font-semibold text-white">团队协作工作台</p>
          <p className="text-xs text-zinc-400">
            将你喜欢的资源与团队共享，一起打造灵感库。
          </p>
          <button className="inline-flex items-center justify-center rounded-md bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10">
            邀请成员
          </button>
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-xl border border-zinc-900/70 bg-zinc-900/40 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
            JD
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">John Doe</p>
            <p className="text-xs text-zinc-500">john.doe@email.com</p>
          </div>
          <button
            type="button"
            className="ml-auto text-xs text-zinc-400 transition hover:text-zinc-200"
          >
            退出
          </button>
        </div>
      </aside>

      <section className="flex-1 bg-zinc-950/80">
        <header className="border-b border-zinc-900/60 bg-zinc-950/80 px-6 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Welcome back</p>
              <h1 className="text-3xl font-semibold text-white">登录成功，祝你工作顺利！</h1>
              <p className="text-sm text-zinc-500">以下是你最近收藏的项目链接，继续保持灵感流动。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex h-10 w-full items-center overflow-hidden rounded-lg border border-zinc-900/60 bg-zinc-950 sm:w-64">
                <input
                  type="search"
                  placeholder="搜索我的链接..."
                  className="h-full flex-1 bg-transparent px-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
                />
                <span className="px-3 text-xs text-zinc-500">⌘K</span>
              </div>
              <button className="inline-flex items-center justify-center rounded-lg bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200">
                + 添加链接
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
            <span>筛选标签：</span>
            {tags.map((tag) => (
              <button
                key={tag.label}
                className={`rounded-full px-3 py-1 transition hover:brightness-125 ${tag.tone}`}
              >
                #{tag.label}
              </button>
            ))}
            <button className="rounded-full border border-dashed border-zinc-800 px-3 py-1 text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-200">
              + 新建标签
            </button>
          </div>
        </header>

        <div className="space-y-8 px-6 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Project X</p>
              <h2 className="text-2xl font-semibold text-white">你的精选灵感合集</h2>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border border-zinc-800 bg-transparent" />
                全选
              </label>
              <button className="rounded-md border border-zinc-800 px-3 py-1 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200">
                分享列表
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {links.map((link) => (
              <article
                key={link.title}
                className="flex flex-col gap-3 rounded-2xl border border-zinc-900/70 bg-zinc-900/40 p-6 transition hover:border-zinc-800 hover:bg-zinc-900/50 sm:flex-row sm:items-center"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm text-zinc-400">
                      {link.title.charAt(0)}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{link.title}</h3>
                      <p className="text-xs text-zinc-500">{link.url}</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">{link.description}</p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {link.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tagStyleMap[tag]}`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
