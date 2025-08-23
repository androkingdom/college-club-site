"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Mentor", href: "/mentor" },
  ];

  return (
    <nav>
      <div className="flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          IMS Noida Coding Club
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ y: -2, scale: 1.05 }}>
              <Link href={link.href}>{link.name}</Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ y: -2, scale: 1.05 }}>
            <ModeToggle />
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="md:hidden flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2, scale: 1.05 }}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <ModeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
