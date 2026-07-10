export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-4xl text-center">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Computer Science Student • Unreal Engine Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Mohamed Sherif Konate
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          I build interactive software through game development, robotics,
          computer vision, and modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            View Projects
          </a>

          <a className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-lg font-semibold">
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}