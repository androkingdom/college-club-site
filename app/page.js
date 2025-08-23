"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Hero3D from "@/components/Hero3D";

export default function HomePage() {
  return (
    <Container className="space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 opacity-30" />

        {/* Hero3D Model Container with floating animation */}
        <motion.div
          className="relative z-10 w-full max-w-2xl h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] mb-8"
          animate={{ y: [0, -10, 0] }} // float up and down
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Hero3D />
        </motion.div>

        {/* Hero Text with fade-in */}
        <motion.div
          className="relative z-20 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Welcome to IMS NOIDA CLUB
          </h1>
          <p className="text-white/80 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
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
        <h2 className="text-3xl font-semibold text-center">Core Team</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg leading-relaxed">
          Meet our passionate team of student developers, designers, and
          mentors.
        </p>
      </motion.section>
    </Container>
  );
}
