export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          NAVIGATION BAR
      ===================================================== */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold">
            MSK
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="transition hover:text-blue-400">
              Home
            </a>

            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>

            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>

            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
        id="home"
        className="flex min-h-[75vh] items-center justify-center px-6 py-16"
      >
        <div className="max-w-4xl text-center">
          <p className="mb-4 uppercase tracking-widest text-blue-400">
            Computer Science Student • Unreal Engine Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Mohamed Sherif Konate
          </h1>

          <p className="mb-8 text-lg text-gray-300 md:text-xl">
            I build interactive software through game development, robotics,
            computer vision, and modern web technologies.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
            >
              View Projects
            </a>

            <a className="rounded-lg border border-gray-600 px-6 py-3 font-semibold hover:border-blue-400">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT ME SECTION
      ===================================================== */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-300 md:text-4xl">
          About Me
        </h2>

        <p className="text-gray-300">
          I am a Computer Science student at the University of Cincinnati with
          interests in game development, software engineering, robotics, and
          modern web technologies. I have experience building interactive
          software using Unreal Engine, Next.js, GitHub, and modern development
          tools. My goal is to develop innovative software solutions while
          continuing to expand my skills in game development and computer
          science.
        </p>
      </section>

      {/* =====================================================
          SKILLS SECTION
      ===================================================== */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            My technical background includes software development, game
            development, web technologies, robotics, and computer vision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Programming Card */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl">
              💻
            </div>

            <h3 className="mb-4 text-xl font-semibold">Programming</h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Java
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Python
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                C++
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                JavaScript
              </span>
            </div>
          </div>

          {/* Game Development Card */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl">
              🎮
            </div>

            <h3 className="mb-4 text-xl font-semibold">
              Game Development
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Unreal Engine 5
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Blueprints
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                MetaHuman
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Blender
              </span>
            </div>
          </div>

          {/* Web Development Card */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl">
              🌐
            </div>

            <h3 className="mb-4 text-xl font-semibold">
              Web Development
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Next.js
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                React
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                GitHub
              </span>
            </div>
          </div>

          {/* Other Technologies Card */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-2xl">
              🤖
            </div>

            <h3 className="mb-4 text-xl font-semibold">
              Other Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Robotics
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Computer Vision
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                LabVIEW
              </span>

              <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300">
                Git
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS SECTION
      ===================================================== */}
      <section id="projects" className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Projects
        </h2>

        <div className="max-w-2xl rounded-xl border border-gray-700 p-6">
          <h3 className="mb-2 text-2xl font-semibold">
            2 Minutes in Japan
          </h3>

          <p className="text-gray-300">
            A third-person Unreal Engine 5 action game prototype featuring
            martial arts combat, enemy AI, and a Japanese temple environment.
            Developed using Unreal Engine Blueprints and MetaHuman technology.
          </p>
        </div>
      </section>

    </main>
  );
}