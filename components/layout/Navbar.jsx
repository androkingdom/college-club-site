"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ModeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Mentor", href: "/mentor" },
  ];

  // Animation variants
  const linkVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -3,
      scale: 1.08,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const mobileMenuVariants = {
    initial: {
      opacity: 0,
      height: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.1 },
    },
  };

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="text-lg font-bold tracking-tight hover:text-primary transition-colors duration-200"
          >
            IMS Noida Coding Club
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              // Stagger animation on initial load
              custom={index}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1 + 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              style={{ opacity: 0, y: -10 }}
              className="relative"
            >
              <Link
                href={link.href}
                className={`relative px-3 py-2 rounded-md transition-all duration-200 ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.name}
                {/* Active indicator */}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: pathname !== link.href ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              </Link>
            </motion.div>
          ))}

          {/* Mode Toggle with animation */}
          <motion.div
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: navLinks.length * 0.1 + 0.2,
                duration: 0.5,
                ease: "easeOut",
              },
            }}
            style={{ opacity: 0, y: -10 }}
          >
            <ModeToggle />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 mt-4 p-4 bg-muted/30 rounded-lg backdrop-blur-sm">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={mobileItemVariants}
                  custom={index}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md transition-all duration-200 ${
                      pathname === link.href
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={mobileItemVariants} className="px-4 py-3">
                <ModeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
