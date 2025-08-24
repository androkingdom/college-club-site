"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Container from "@/components/layout/Container";
import { coreTeam } from "@/data/coreTeam";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Core Team
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the students driving IMS NOIDA CLUB forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreTeam.map((member, index) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-col items-center space-y-3 pb-4">
                  <motion.div
                    className="w-24 h-24 relative rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.photo && (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="96px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority={index < 3}
                      />
                    )}
                  </motion.div>

                  <div className="text-center space-y-1">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 text-center">
                    {member.bio}
                  </p>

                  {member.socials && (
                    <div className="flex justify-center gap-2">
                      {member.socials.github && (
                        <motion.a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.socials?.linkedin && (
                        <motion.a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.socials?.twitter && (
                        <motion.a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaTwitter className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
