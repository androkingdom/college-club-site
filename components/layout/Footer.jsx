"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  return (
    <div className="flex items-center justify-center gap-6">
      <span className="text-sm text-muted-foreground font-semibold mr-2">
        Connect with us:
      </span>

      {/* Social Links */}
      {socialLinks.map(({ name, url, icon: Icon }) => (
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
      ))}
    </div>
  );
}
