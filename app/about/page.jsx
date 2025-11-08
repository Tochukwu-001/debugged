"use client";
import React from "react";
import { FaBug, FaUsers, FaCodeBranch, FaLightbulb } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image src={"/logo.png"} alt="logo" width={500} height={500} className="w-30 h-30"/>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Debugged</span>
          </h1>
          <p className="text-lg text-gray-300">
            The collaborative space where developers log errors, share fixes, and
            learn from one another — one bug at a time.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          Our Mission
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Debugged exists to make the developer’s journey a little smoother.
          Whether you’re a beginner wrestling with your first syntax error or an
          experienced engineer tackling complex issues, Debugged helps you find
          real-world solutions logged by real developers. We believe that every
          error comes with a lesson — and those lessons should be shared.
        </p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-900">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all">
              <FaCodeBranch className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We grow together by sharing our experiences and fixes openly
                with the community.
              </p>
            </div>

            <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all">
              <FaLightbulb className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Knowledge Sharing</h3>
              <p className="text-gray-600">
                Every logged bug and fix becomes a resource for someone else to
                learn from.
              </p>
            </div>

            <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all">
              <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Debugged is powered by developers of all levels, across
                frameworks, languages, and continents.
              </p>
            </div>

            <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all">
              <MdOutlineSupportAgent className="text-5xl text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600">
                Our community thrives on empathy, mentorship, and a helping hand
                for those stuck on tough bugs.
              </p>
            </div>

            <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-lg transition-all">
              <IoIosRocket className="text-5xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We aim to continuously improve the debugging experience through
                shared ideas and better documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-500 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Join the Debugged Community
          </h2>
          <p className="text-lg text-blue-500 mb-6">
            Log your bugs, share your fixes, and explore solutions from
            developers like you. Together, we can make debugging faster,
            smarter, and more human.
          </p>
          <Link href={"/auth/signin"} className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white border border-white transition-all">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
