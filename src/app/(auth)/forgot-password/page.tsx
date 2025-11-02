import Link from "next/link";

export const metadata = {
  title: "找回密码 | SUU Platform",
};

const inputClassName =
  "mt-2 block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm transition focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50 dark:focus:ring-zinc-50/30";

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          重置密码
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          输入注册邮箱，我们会向你发送重置链接，帮助你安全恢复账户访问。
        </p>
      </div>

      <form className="space-y-6" action="#" method="POST">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
            邮箱地址
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClassName} />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-50 transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50"
        >
          发送重置邮件
        </button>
      </form>

      <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          没收到邮件？请检查垃圾邮件或稍后再试。如果问题仍然存在，欢迎联系我们的支持团队。
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/login" className="font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50">
            返回登录
          </Link>
          <span className="text-zinc-400">·</span>
          <Link href="/register" className="font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50">
            创建新账户
          </Link>
        </div>
      </div>
    </div>
  );
}
