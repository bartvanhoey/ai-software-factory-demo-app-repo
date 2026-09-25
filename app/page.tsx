export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-black px-6 py-32 font-sans">
      <section className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          AI Software Factory
        </h1>
        <p className="text-lg leading-8 text-indigo-300">
          We&apos;re building a new way to ship software with AI. Stay tuned
          — something big is on the way.
        </p>
      </section>
    </div>
  );
}
