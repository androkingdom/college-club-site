import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col items-center gap-8 sm:gap-8 lg:gap-10 p-3 sm:p-3 lg:p-5">
            {/* Navbar Slab */}
            <header className="w-full max-w-3xl panel p-3 sm:p-3 lg:p-5">
              <Navbar />
            </header>

            {/* Main Slab */}
            <main className="flex-1 w-full max-w-7xl panel p-6 sm:p-8 lg:p-10">
              {children}
            </main>
            {/* Footer Slab with hover animation */}
            <footer className="w-full max-w-lg panel p-3 sm:p-3 lg:p-5">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
