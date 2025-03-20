import {
  FaHome,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
            <span className="text-blue-400">Pets Blog</span>.
          </p>
        </section>
        {/* Work Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Unified mentor</h3>
              <p className="text-gray-400">Internship (Feb 2025 - Present)</p>
            </div>
            {/* <div>
              <h3 className="font-medium">PearAi</h3>
              <p className="text-gray-400">
                OSS Contributor (Oct 2024 - Dec 2024)
              </p>
            </div>
            <div>
              <h3 className="font-medium">J-WIRES</h3>
              <p className="text-gray-400">
                Frontend Intern (Jan 2024 - Apr 2024)
              </p>
            </div> */}
          </div>
        </section>
        {/* Education */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Global Group of Institutions</h3>
              <p className="text-gray-400">
                Bachelor in Computer Applications (2022 - 2025)
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
              "React",
              "Next.js",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Docker",
              "Kubernetes",
              "Java",
              "Python",
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
        </div>
      </div>
      {/* Contact section */}

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-6 py-3 rounded-full flex gap-4 items-center shadow-lg">
        <a href="#home" className="text-white text-xl hover:text-gray-400">
          <FaHome />
        </a>
        <a href="#projects" className="text-white text-xl hover:text-gray-400">
          <FaCode />
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
        {/* <button className="text-white text-xl hover:text-gray-400">
          <FaMoon />
        </button> */}
      </div>
    </div>
  );
};

export default Portfolio;
