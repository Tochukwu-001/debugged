import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="min-h-dvh bg-black/70 flex items-center justify-center">
        <blockquote className="text-white lg:w-1/2 mx-auto space-y-10 p-3">
          <h1 className="text-center text-3xl md:text-5xl font-bold">Got a Problem ? Get it <span className="text-blue-200 italic">Debugged</span></h1>
          <p className="text-center text-lg">Where errors end, and innovation begins. A place where code evolves, ideas take flight and collaboration transcends languages and frameworks because true innovation knows no boundaries</p>

          <div className="flex max-md:flex-col items-center gap-10 justify-center">
            <Link href={"#"} className="bg-blue-600 px-10 py-4 text-xl rounded-md hover:-translate-y-1 transition-all duration-200 max-md:w-full text-center">Learn More</Link>
            <Link className="bg-blue-600 px-10 py-4 text-xl rounded-md hover:-translate-y-1 transition-all duration-200 max-md:w-full text-center" href={"#"}>Find a Fix</Link>
          </div>
        </blockquote>
      </section>
    </main>
  );
}