import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-zinc-50 px-6 py-24 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600 dark:bg-zinc-50/10 dark:text-zinc-300">
            SUU Platform
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            统一的创意协作平台，
            <br className="hidden sm:block" />
            在这里连接团队、项目与灵感。
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            使用单一账户即可在 SUU Platform 上完成项目规划、资源管理与实时协作。立即登录或注册，开启高效、沉浸的创作体验。
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-base font-semibold text-zinc-50 transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50"
          >
            创建账户
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md border border-zinc-200 px-5 py-3 text-base font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:text-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/40 dark:focus-visible:outline-zinc-50"
          >
            已有账号？登录
          </Link>
        </div>
      </div>
    </main>
  );
}
