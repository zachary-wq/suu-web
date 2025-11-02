import Link from "next/link";

export const metadata = {
  title: "登录 | SUU Platform",
};

const inputClassName =
  "mt-2 block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm transition focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50 dark:focus:ring-zinc-50/30";

export default function LoginPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          欢迎回来
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          登录以继续访问你的工作台与项目数据。
        </p>
      </div>

      <form className="space-y-6" action="#" method="POST">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
            邮箱
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClassName} />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="password">
              密码
            </label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              忘记密码？
            </Link>
          </div>
          <input id="password" name="password" type="password" autoComplete="current-password" required className={inputClassName} />
        </div>

        <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 rounded border border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            />
            记住我
          </label>
          <span>本设备将保持登录状态</span>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-50 transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50"
        >
          登录
        </button>
      </form>

      <div className="space-y-4">
        <div className="relative text-center text-xs uppercase tracking-[0.3em] text-zinc-400">
          <span className="bg-zinc-50 px-4 dark:bg-zinc-950">或使用</span>
          <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-zinc-200 dark:bg-zinc-800" aria-hidden />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
          >
            使用企业邮箱
          </button>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
          >
            使用 GitHub 登录
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        还没有账号？
        <Link href="/register" className="ml-1 font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50">
          立即注册
        </Link>
      </p>
    </div>
  );
}
