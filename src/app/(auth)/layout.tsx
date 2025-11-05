import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 md:grid-cols-2">
      <div className="relative hidden overflow-hidden border-b border-zinc-200 bg-zinc-900 text-zinc-50 dark:border-zinc-800 md:flex md:flex-col">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-600 via-zinc-900 to-black opacity-70" />
        </div>
        <div className="relative z-10 flex flex-1 flex-col justify-between p-12">
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            SUU Studio
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              管理账户，连接你的创意旅程。
            </h2>
            <p className="text-base text-zinc-300">
              使用同一个账户即可访问我们的所有服务。创建团队、管理项目、与伙伴实时协作，让灵感不再错过。
            </p>
          </div>
          <div className="space-y-1 text-sm text-zinc-400">
            <p>需要帮助？</p>
            <p>
              联系 <a className="font-medium text-white underline-offset-4 hover:underline" href="mailto:support@example.com">support@example.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-10 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="/" className="font-semibold text-zinc-900 transition hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-200">
              ← 返回首页
            </Link>
            <span>SUU Platform</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
