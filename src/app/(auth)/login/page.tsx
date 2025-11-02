import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden bg-[radial-gradient(circle_at_top,_#1f2937,_#0f172a)] lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900" />
        <div className="relative flex h-full flex-col justify-between p-10 text-slate-100">
          <div className="space-y-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold uppercase tracking-widest">
              SUU
            </span>
            <p className="max-w-sm text-sm text-slate-200/80">
              使用 SUU 平台连接你的团队，实时协作，并将灵感转化为落地的产品体验。
            </p>
          </div>
          <div className="space-y-6">
            <blockquote className="space-y-2 text-sm text-slate-200/80">
              <p>
                “界面的细节经过精心打磨，让我们能专注在真正重要的事情上——
                提供卓越的用户体验。”
              </p>
              <footer className="text-xs text-slate-300/90">
                — 李雪，产品设计师
              </footer>
            </blockquote>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">
              设计灵感来自 shadcn/ui login-02 模块
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-20 sm:px-10">
        <div className="mx-auto w-full max-w-md space-y-10">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">欢迎回来</h1>
            <p className="text-sm text-slate-500">
              输入账户信息登录 SUU，和团队一起高效协作。
            </p>
          </div>
          <form className="space-y-6" noValidate>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="email">
                邮箱
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label className="font-medium text-slate-700" htmlFor="password">
                  密码
                </label>
                <Link
                  href="/forgot-password"
                  className="font-medium text-slate-600 transition hover:text-slate-900"
                >
                  忘记密码？
                </Link>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="输入密码"
                className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                />
                记住我
              </label>
              <span className="text-slate-400">或</span>
              <Link
                href="/register"
                className="font-medium text-slate-600 transition hover:text-slate-900"
              >
                注册账号
              </Link>
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              登录
            </button>
          </form>
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              安全登录由 SUU 提供
            </p>
            <p className="text-xs text-slate-400">
              登录即代表你同意我们的
              <Link href="#" className="mx-1 underline">
                用户协议
              </Link>
              与
              <Link href="#" className="mx-1 underline">
                隐私政策
              </Link>
              。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
