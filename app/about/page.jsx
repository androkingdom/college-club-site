"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function AboutPage() {
  const roles = [
    { emoji: "☕", name: "Java Developer" },
    { emoji: "⚙️", name: "Systems (C/C++)" },
    { emoji: "🐍", name: "Pythonista" },
    { emoji: "🌐", name: "Web Developer" },
    { emoji: "🤖", name: "AI & Machine Learning" },
    { emoji: "📱", name: "Mobile Apps (Flutter / Android)" },
    { emoji: "📊", name: "Data Analyst" },
    { emoji: "⚡", name: "Competitive Programmer" },
  ];

  const features = [
    {
      title: "Learn by Building",
      desc: "Go beyond tutorials. Ship real-world projects and see your code in action.",
    },
    {
      title: "Collaborate & Grow",
      desc: "Work with peers, share ideas, and build together in a supportive community.",
    },
    {
      title: "Explore Emerging Tech",
      desc: "Experiment with AI, apps, and systems. Curiosity drives innovation here.",
    },
  ];

  return (
    <section className="space-y-12 max-w-5xl mx-auto px-4">
      {/* About Club Section */}
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Inside IMS NOIDA CLUB
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          IMS NOIDA CLUB is a{" "}
          <span className="font-semibold">student-led tech community</span> for
          builders and coders who want more than tutorials. Here, you are not
          just learning, you are shipping real projects, exploring new tech, and
          challenging yourself in hands-on labs.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our DNA is{" "}
          <span className="font-semibold">
            experimentation, collaboration, and relentless curiosity
          </span>
          . We build together, break things together, and grow together — from
          hackathons to open-source sprints. If you love to code, create, and
          solve, IMS NOIDA CLUB is your launchpad.
        </p>
      </header>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <Card
            key={f.title}
            className="hover:shadow-lg transition-shadow rounded-2xl"
          >
            <CardHeader>
              <CardTitle className="text-xl">{f.title}</CardTitle>
              <CardDescription>{f.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Roles Section */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
          🎭 Roles Available in IMS NOIDA CLUB
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          Whether you are into{" "}
          <span className="font-semibold">languages and systems</span> like
          Java, C/C++, Python, or building{" "}
          <span className="font-semibold">web and mobile apps</span>, diving
          into <span className="font-semibold">AI, data</span>, or sharpening
          your <span className="font-semibold">competitive skills</span>, you
          will find your place here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <Card
              key={role.name}
              className="text-center hover:shadow-md transition-transform hover:-translate-y-1 hover:scale-105 rounded-xl"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                <span className="text-3xl">{role.emoji}</span>
                <span className="font-medium">{role.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
