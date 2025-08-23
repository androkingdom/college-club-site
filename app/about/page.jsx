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

  return (
    <section className="space-y-8 max-w-3xl mx-auto">
      {/* About Club Section */}
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Inside IMS NOIDA CLUB
        </h1>
        <p className="text-muted-foreground">
          IMS NOIDA CLUB is a{" "}
          <span className="font-semibold">student-led tech community</span>
          for builders and coders who want more than tutorials. Here, you’re not
          just learning—you’re shipping real projects, exploring new tech, and
          challenging yourself in hands-on labs.
        </p>
        <p className="text-muted-foreground">
          Our DNA:{" "}
          <span className="font-semibold">
            experimentation, collaboration, and relentless curiosity
          </span>
          . We build together, break things together, and grow together—whether
          that’s through hackathons, late-night brainstorms, or open-source
          sprints. If you love to code, create, and solve, IMS NOIDA CLUB is
          your launchpad.
        </p>
      </header>

      {/* Roles Section */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-4 text-center">
          🎭 Roles Available in IMS NOIDA CLUB
        </h2>
        <p className="text-muted-foreground text-center mb-6">
          IMS NOIDA CLUB offers a variety of roles for students to explore and
          grow their skills. From{" "}
          <span className="font-semibold">Languages & Tech</span> like Java,
          C/C++, Python, to{" "}
          <span className="font-semibold">Web & App Development</span>,
          <span className="font-semibold">AI / Machine Learning</span>,
          <span className="font-semibold">Data Analysis</span>, and
          <span className="font-semibold">Competitive Programming</span> —
          there’s something for every coding enthusiast. Join the lab,
          collaborate on projects, and learn from peers who share your passion.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {roles.map((role) => (
            <button
              key={role.name}
              className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-transform transform hover:-translate-y-1 hover:scale-105 font-medium"
            >
              <span className="text-xl">{role.emoji}</span>
              <span>{role.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
