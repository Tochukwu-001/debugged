import Image from "next/image";
import Link from "next/link";
import { FaBug, FaUsers, FaLightbulb, FaCodeBranch } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <section className="min-h-dvh bg-black/70 flex items-center justify-center">
          <blockquote className="text-white lg:w-1/2 mx-auto space-y-10 p-3 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">
              Got a Problem? Get it{" "}
              <span className="text-blue-200 italic">Debugged</span>
            </h1>
            <p className="text-lg">
              Where errors end, and innovation begins. A place where code evolves,
              ideas take flight, and collaboration transcends languages and
              frameworks — because true innovation knows no boundaries.
            </p>

            <div className="flex max-md:flex-col items-center gap-10 justify-center">
              <Link
                href={"/about"}
                className="bg-blue-600 px-10 py-4 text-xl rounded-md hover:-translate-y-1 transition-all duration-200 max-md:w-full text-center"
              >
                Learn More
              </Link>
              <Link
                href={"/fixes"}
                className="bg-blue-600 px-10 py-4 text-xl rounded-md hover:-translate-y-1 transition-all duration-200 max-md:w-full text-center"
              >
                Find a Fix
              </Link>
            </div>
          </blockquote>
        </section>

      </main>
      <section
        id="about"
        className="bg-white py-20 px-6 text-gray-800 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">What is Debugged?</h2>
          <p className="text-lg text-gray-600">
            Debugged is the developer’s hub for logging errors, finding real
            solutions, and learning from the collective experience of coders
            across the world. It’s not just a site — it’s a space where every
            mistake becomes a lesson and every lesson becomes an open door for
            someone else.
          </p>
          <p className="text-gray-600">
            Whether you’re an aspiring developer still figuring out your first
            JavaScript bug or a senior engineer solving deep architectural
            issues, Debugged helps you document, share, and improve with others
            who understand the journey.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Why Developers Love Debugged
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-all">
              <FaBug className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Log Your Errors</h3>
              <p className="text-gray-600">
                Keep track of your coding challenges, document them, and find
                proven fixes shared by other developers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-all">
              <FaLightbulb className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Discover Smart Fixes
              </h3>
              <p className="text-gray-600">
                Find community-tested solutions for errors across different
                languages, frameworks, and versions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-all">
              <FaCodeBranch className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grow Through Code</h3>
              <p className="text-gray-600">
                Turn every bug into a learning experience — expand your problem-solving and debugging skills.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition-all">
              <FaUsers className="text-5xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
              <p className="text-gray-600">
                Collaborate with developers who speak your language — both code
                and human.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Debug the World?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Start logging your errors, sharing fixes, and helping others
            overcome challenges you’ve already conquered. Together, we make
            debugging faster and coding more human.
          </p>
          <Link
            href={"/auth/signin"}
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition-all"
          >
            Join Debugged Now
          </Link>
        </div>
      </section>
    </>
  );
}