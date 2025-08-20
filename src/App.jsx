import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8 font-sans relative">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center justify-between text-left ">
          <div>
            <h1 className="text-[22px] md:text-5xl font-extrabold flex items-center">
              Hi, I&apos;m Arnab <span className="ml-2 animate-wave">👋</span>
            </h1>
            <p className="text-gray-400 mt-2 text-lg max-w-xl text-balance md:text-pretty">
              Aspiring software developer who enjoys building web applications
              and Solving the real world problems.
            </p>
          </div>
          <img
            src="aaa.jpg"
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-gray-500"
          />
        </header>

        {/* ABOUT SECTION */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-gray-400 mt-2 text-pretty">
            I&apos;m Arnab Parua. I&apos;m currently in my undergraduate
            studies, and my graduation complete in June 2025. I build and
            maintain
            <span className="text-blue-400"> web applications</span>,{" "}
            <span className="text-blue-400">SaaS platforms</span>, and {""}
            <span className="text-blue-400">realworld projects</span>. Some of
            my projects include
            <span className="text-blue-400"> Talks</span>,{" "}
            <span className="text-blue-400">Pets Blog</span>,{" "}
            <span className="text-blue-400">AI Notes</span>.
          </p>
        </section>
        {/* Work Experience */}

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Global Group of Institutions</h3>
              <p className="text-gray-400">
                Bachelor in Computer Application (2022 - 2025)
              </p>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2 ">
            {[
              "HTML",
              "CSS",
              "Tailwind",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "Next.js",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Docker",
              "Java",
              "c",
              "AWS",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-700 px-3 py-1 rounded-lg text-white hover:bg-gray-300 hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        {/* Project section */}
        <div className="mt-8 text-center">
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300 sm:px-6">
            My Projects
          </button>
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-center">
            Check out my latest work
          </h2>
          <p className="text-gray-400 text-center mt-2">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications.
          </p>
        </section>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="talks.webp" alt="Codefront" className="rounded-lg" />
            <h3 className="text-xl font-bold mt-2">Talks</h3>
            <p className="text-gray-400">Feb 2025 - Present</p>
            <p className="text-gray-300 mt-2">
              A realtime communication platform using WebSockets.
            </p>
            <a
              href="https://www.talks.itsarnab.site"
              className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              <FaGlobe className="mr-2" />
              Website
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="pets-blog.webp" alt="Type Arena" className="rounded-lg" />
            <h3 className="text-xl font-bold mt-2">Pets-blog</h3>
            <p className="text-gray-400">Oct 2024 - Dec 2024</p>
            <p className="text-gray-300 mt-2">
              A blog for pet lovers and who help them to find their pets.
            </p>
            <a
              href="https://pets-blog.itsarnab.site"
              className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              <FaGlobe className="mr-2" />
              Website
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="ai-notes.png" alt="Type Arena" className="rounded-lg" />
            <h3 className="text-xl font-bold mt-2">AI Notes</h3>
            <p className="text-gray-400">feb 2025 - Mar 2025</p>
            <p className="text-gray-300 mt-2">
              A note-taking application with AI features.
            </p>
            <a
              href="https://ainotes.itsarnab.site"
              className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              <FaGlobe className="mr-2" />
              Website
            </a>
          </div>
        </div>
      </div>
      {/* Contact section */}

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-6 py-3 rounded-full flex gap-4 items-center shadow-lg">
        <a
          href="https://www.instagram.com/_i.arnab_?igsh=Nm1kNHcxdnFxOTV2"
          className="text-white text-xl hover:text-gray-400"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/users/snippetarnab"
          className="text-white text-xl hover:text-gray-400"
        >
          <FaDiscord />
        </a>
        <a
          href="https://github.com/snippetarnab"
          className="text-white text-xl hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/arnabparua"
          className="text-white text-xl hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/imArnabParua?s=08"
          className="text-white text-xl hover:text-gray-400"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://youtube.com/yourchannel"
          className="text-white text-xl hover:text-gray-400"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer footer-horizontal footer-center bg-black text-gray-400  p-10 flex justify-center max-w-md mx-auto md:flex-row">
        <aside className="flex flex-col items-center ">
          <div className="flex flex-row gap-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-code-xml-icon lucide-code-xml w-4"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github-icon lucide-github w-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-terminal-icon lucide-square-terminal w-4"
            >
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            </svg>
          </div>
          <p className="text-[9px] md:text-sm">
            Copyright © {new Date().getFullYear()} - All right reserved to
            @snippetarnab{" "}
          </p>
        </aside>
      </footer>
      {/* Footer End */}
    </div>
  );
};

export default Portfolio;
