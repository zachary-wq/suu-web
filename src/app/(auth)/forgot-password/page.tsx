import Link from "next/link";

export default function ForgotPasswordPage() {
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
              即便忘记密码也不用担心，SUU 将帮助你安全地恢复访问权限。
            </p>
          </div>
          <div className="space-y-6">
            <blockquote className="space-y-2 text-sm text-slate-200/80">
              <p>
                “账号安全是我们的第一优先，重置流程简洁且充满安全感。”
              </p>
              <footer className="text-xs text-slate-300/90">
                — 王敏，安全工程师
              </footer>
            </blockquote>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">
              设计灵感来自 shadcn/ui login-02 模块
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-16 sm:px-10">
        <div className="mx-auto w-full max-w-md space-y-10">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">找回密码</h1>
            <p className="text-sm text-slate-500">
              输入与账号绑定的邮箱，我们会发送密码重置链接。
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
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              发送重置链接
            </button>
          </form>
          <div className="space-y-3 text-center text-sm">
            <p className="text-slate-500">
              想起密码了？
              <Link href="/login" className="ml-2 font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline">
                返回登录
              </Link>
            </p>
            <p className="text-xs text-slate-400">
              需要帮助？访问我们的
              <Link href="#" className="mx-1 underline">
                帮助中心
              </Link>
              或联系
              <Link href="#" className="mx-1 underline">
                客服团队
              </Link>
              。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
