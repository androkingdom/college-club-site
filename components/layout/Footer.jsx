"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center justify-center gap-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        {/* Left side */}
        <div className="text-center sm:text-left text-xs text-muted-foreground">
          © {year}{" "}
          <a
            href="https://x.com/Rishabhmadh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rishabh Madhwal
          </a>
          . All rights reserved.
        </div>

        {/* Center */}
        <div className="text-center text-xs text-muted-foreground">
          Made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://github.com/Androkingdom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andro
          </a>
        </div>
      </div>

      {/* <span className="text-sm text-muted-foreground font-semibold mr-2">
        Connect with us:
      </span> */}
      {/* Social Links */}
      {/* {socialLinks.map(({ name, url, icon: Icon }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          whileHover={{ y: -4, scale: 1.1 }} // pop forward effect
          transition={{ type: "spring", stiffness: 300 }}
          className="text-muted-foreground"
        >
          <Icon className="h-6 w-6" />
        </motion.a>
      ))} */}
    </div>
  );
}
