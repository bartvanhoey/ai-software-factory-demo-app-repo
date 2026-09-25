

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-center gap-6 px-6 py-32 text-center">
        <span className="rounded-full border border-zinc-200 px-4 py-1 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          Coming soon
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          AI Software Factory
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          We&apos;re building a new way to ship software with AI. Stay tuned
          &mdash; something big is on the way.
        </p>
      </main>
    </div>
  );
}
