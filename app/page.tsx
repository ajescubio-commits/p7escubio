
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      description: "Discover my educational background.",
      link: "/Education",
    },
    {
      title: "Hobbies",
      description: "Explore my hobbies and interests.",
      link: "/Hobbies",
    },
    {
      title: "Contact",
      description: "Find out how to contact me.",
      link: "/Contact",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="px-6 py-20 text-center">
        <Badge className="mb-4">
          My Personal Website
        </Badge>

        <h1 className="text-4xl font-bold">
          Hello, I'm Adam Japhet Escubio
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          I am a student who enjoys learning about technology,
          discovering new things, and improving my skills.
        </p>

        <Button
          className="mt-6"
          onClick={() => router.push("/About")}
        >
          About Me
        </Button>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Explore My Website
        </h2>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {sections.map((item) => (
            <Card
              key={item.title}
              className="border-gray-200 bg-white"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {item.description}
                </p>

                <Button
                  variant="link"
                  className="mt-3 px-0 text-blue-600"
                  onClick={() => router.push(item.link)}
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2026 Adam Japhet Escubio. All Rights Reserved.
      </footer>

    </main>
  );
}
