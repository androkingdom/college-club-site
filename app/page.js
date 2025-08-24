"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Hero3D from "@/components/Hero3D";
import CoreTeamCTA from "@/components/CoreTeamCTA";

export default function HomePage() {
  return (
    <Container className="space-y-12 sm:space-y-12 lg:space-y-15">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-accent/30 to-primary/20" />

        <motion.div
          className="relative z-10 w-full max-w-xl sm:max-w-2xl h-64 sm:h-72 md:h-[22rem] lg:h-[26rem] mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Hero3D />
        </motion.div>

        <motion.div
          className="relative z-20 text-center px-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Welcome to IMS NOIDA CLUB
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl lg:text-2xl mx-auto leading-relaxed">
            We are a student-driven coding community for hardcore coders,
            developers, and tech enthusiasts. Learn, build, and collaborate on
            real-world projects in a hands-on lab environment.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        className="space-y-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg leading-relaxed">
          IMS NOIDA CLUB is all about experimentation, collaboration, and
          building real-world coding skills. Hackathons, mentorship, and
          open-source projects are the core of what we do.
        </p>
      </motion.section>

      {/* Core Team Section */}
      <motion.section
        className="space-y-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <CoreTeamCTA />
      </motion.section>
    </Container>
  );
}
