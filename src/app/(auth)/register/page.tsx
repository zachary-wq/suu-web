import Link from "next/link";

export const metadata = {
  title: "注册 | SUU Platform",
};

const inputClassName =
  "mt-2 block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm transition focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50 dark:focus:ring-zinc-50/30";

export default function RegisterPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          创建新账户
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          加入 SUU 平台，与团队协作、跟踪创意项目的每一个细节。
        </p>
      </div>

      <form className="space-y-6" action="#" method="POST">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="name">
            姓名
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClassName} />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
            工作邮箱
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClassName} />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="password">
            密码
          </label>
          <input id="password" name="password" type="password" autoComplete="new-password" required className={inputClassName} />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200" htmlFor="team">
            团队或公司名称
          </label>
          <input id="team" name="team" type="text" className={inputClassName} placeholder="可选" />
        </div>

        <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
            />
            <span>
              我同意遵守 SUU Platform 的
              <a href="#" className="mx-1 font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50">
                服务条款
              </a>
              和
              <a href="#" className="ml-1 font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50">
                隐私政策
              </a>
              。
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-50 transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50"
        >
          注册并继续
        </button>
      </form>

      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        已经拥有账号？
        <Link href="/login" className="ml-1 font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50">
          立即登录
        </Link>
      </p>
    </div>
  );
}
