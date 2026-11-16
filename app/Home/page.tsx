
"use client";

import { useRouter } from "next/navigation";
import {Navbar} from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const router = useRouter();

  const sections = [
    {
      title: "About Me",
      description: "Learn more about my background and personality.",
      link: "/About",
    },
    {
      title: "Education",
      description: "Discover my academic background and experiences.",
      link: "/Education",
    },
    {
      title: "Hobbies",
      description: "Explore my interests and favorite activities.",
      link: "/Hobbies",
    },
    {
      title: "Contact",
      description: "Find out how to get in touch with me.",
      link: "/Contact",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex min-h-[85vh] items-center px-6 py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <Badge className="mb-5">
              Welcome to My Portfolio
            </Badge>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hello, I'm{" "}
              <span className="text-blue-400">
                Adam Japhet Escubio
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Welcome to my personal portfolio! I am a student
              passionate about technology, learning new skills,
              and exploring different interests.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => router.push("/About")}
              >
                About Me
              </Button>

              <Button
                variant="outline"
                onClick={() => router.push("/Contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <Card className="border-slate-700 bg-slate-900 text-white">
            <CardContent className="flex flex-col items-center p-10 text-center">

              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-blue-500 text-5xl font-bold">
                YN
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Adam Japhet Escubio
              </h2>

              <p className="mt-2 text-slate-400">
                Student | Future IT Professional
              </p>

              <Badge variant="secondary" className="mt-5">
                Always Learning
              </Badge>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Explore My Portfolio
            </h2>

            <p className="mt-3 text-slate-400">
              Get to know more about me through these sections.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {sections.map((item) => (
              <Card
                key={item.title}
                className="border-slate-700 bg-slate-950 text-white transition hover:-translate-y-1 hover:border-blue-400"
              >
                <CardContent className="p-6">

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <Button
                    variant="link"
                    className="mt-4 px-0 text-blue-400"
                    onClick={() => router.push(item.link)}
                  >
                    Learn More →
                  </Button>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 Your Name. All Rights Reserved.
      </footer>

    </main>
  );
}
