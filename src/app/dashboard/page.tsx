import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "用户管理中心 | SUU Platform",
};

const navItems = [
  { name: "概览", href: "#", active: true },
  { name: "用户列表", href: "#" },
  { name: "角色权限", href: "#" },
  { name: "安全设置", href: "#" },
  { name: "操作日志", href: "#" },
];

const quickStats = [
  { label: "总用户", value: "2,845", trend: "+3.2%", tone: "text-emerald-400" },
  { label: "本周新增", value: "128", trend: "+12", tone: "text-sky-400" },
  { label: "活跃率", value: "82%", trend: "-1.3%", tone: "text-amber-400" },
];

const tags = [
  { label: "全部", active: true },
  { label: "已激活" },
  { label: "待验证" },
  { label: "已禁用" },
  { label: "管理员" },
];

const users = [
  {
    name: "王小明",
    email: "xiaoming@example.com",
    role: "产品经理",
    department: "产品部",
    status: "已激活",
    lastActive: "5 分钟前",
  },
  {
    name: "李雪",
    email: "lixue@example.com",
    role: "设计师",
    department: "设计中心",
    status: "待验证",
    lastActive: "昨天 22:14",
  },
  {
    name: "陈伟",
    email: "chenwei@example.com",
    role: "后端工程师",
    department: "技术平台部",
    status: "已激活",
    lastActive: "2 小时前",
  },
  {
    name: "刘芳",
    email: "liufang@example.com",
    role: "运营专员",
    department: "用户运营",
    status: "已禁用",
    lastActive: "2024-04-01",
  },
  {
    name: "赵磊",
    email: "zhaolei@example.com",
    role: "技术支持",
    department: "客服中心",
    status: "已激活",
    lastActive: "10 分钟前",
  },
];

const statusToneMap: Record<string, string> = {
  已激活: "text-emerald-300 bg-emerald-500/10 border border-emerald-500/20",
  待验证: "text-amber-300 bg-amber-500/10 border border-amber-500/20",
  已禁用: "text-rose-300 bg-rose-500/10 border border-rose-500/20",
};

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950 text-zinc-50">
      <aside className="hidden w-72 flex-col border-r border-zinc-900/60 bg-zinc-950/80 px-7 py-10 lg:flex">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">控制台</p>
            <nav className="space-y-1 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-zinc-900/70 ${
                    item.active ? "bg-zinc-900/80 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.active ? (
                    <span className="text-[10px] uppercase tracking-wide text-emerald-400">当前</span>
                  ) : null}
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl border border-zinc-900/70 bg-gradient-to-br from-zinc-900/50 to-zinc-900/10 p-5">
            <p className="text-sm font-semibold text-white">安全提醒</p>
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              启用两步验证可以提升账号安全性，保护用户数据与操作日志。
            </p>
            <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20">
              前往设置
            </button>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-3 rounded-xl border border-zinc-900/70 bg-zinc-900/40 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">SJ</div>
          <div className="text-sm">
            <p className="font-semibold text-white">苏远</p>
            <p className="text-xs text-zinc-500">suyuane@example.com</p>
          </div>
          <button type="button" className="ml-auto text-xs text-zinc-400 transition hover:text-zinc-200">
            退出
          </button>
        </div>
      </aside>

      <section className="flex-1 bg-zinc-950/80">
        <header className="border-b border-zinc-900/60 bg-zinc-950/80 px-6 py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">User Management</p>
              <h1 className="text-3xl font-semibold text-white">用户管理控制台</h1>
              <p className="text-sm text-zinc-500">
                登录成功，您可以在这里查看用户状态、调整权限并快速执行批量操作。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex h-10 w-full items-center overflow-hidden rounded-lg border border-zinc-900/60 bg-zinc-950 sm:w-64">
                <input
                  type="search"
                  placeholder="搜索用户姓名、邮箱或角色..."
                  className="h-full flex-1 bg-transparent px-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
                />
                <span className="px-3 text-xs text-zinc-500">⌘K</span>
              </div>
              <div className="flex gap-2">
                <button className="inline-flex items-center justify-center rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:text-white">
                  批量导入
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400">
                  + 新增用户
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-900/60 bg-zinc-900/40 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{stat.label}</p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-3xl font-semibold text-white">{stat.value}</span>
                  <span className={`text-xs font-medium ${stat.tone}`}>{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="px-6 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">用户列表</p>
              <h2 className="text-2xl font-semibold text-white">近期更新的用户记录</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              {tags.map((tag) => (
                <button
                  key={tag.label}
                  className={`rounded-full px-3 py-1 transition ${
                    tag.active
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "border border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  #{tag.label}
                </button>
              ))}
              <button className="rounded-full border border-dashed border-zinc-800 px-3 py-1 text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-200">
                + 新建分组
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-900/60 bg-zinc-900/40">
            <div className="grid grid-cols-[2fr,2fr,1.5fr,1.5fr,1.2fr] border-b border-zinc-900/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
              <span>用户</span>
              <span>邮箱</span>
              <span>部门</span>
              <span>角色</span>
              <span className="text-right">状态</span>
            </div>
            <ul className="divide-y divide-zinc-900/60">
              {users.map((user) => (
                <li key={user.email} className="grid grid-cols-[2fr,2fr,1.5fr,1.5fr,1.2fr] items-center px-6 py-4 text-sm text-zinc-200">
                  <div>
                    <p className="font-medium text-white">{user.name}</p>
                    <p className="text-xs text-zinc-500">最近活跃：{user.lastActive}</p>
                  </div>
                  <span className="truncate text-xs text-zinc-400">{user.email}</span>
                  <span className="text-xs text-zinc-400">{user.department}</span>
                  <span className="text-xs text-zinc-400">{user.role}</span>
                  <div className="flex justify-end">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        statusToneMap[user.status] ?? "border border-zinc-800 bg-zinc-900 text-zinc-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-zinc-900/60 bg-zinc-900/40 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-base font-semibold text-white">批量操作建议</p>
              <p className="text-sm text-zinc-500">
                建议对待验证用户发送提醒邮件，并为活跃用户开启登录保护策略。
              </p>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center justify-center rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-700 hover:text-white">
                导出列表
              </button>
              <button className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                发送提醒
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
