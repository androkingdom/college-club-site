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

export default function TeamPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <h1 className="text-3xl font-bold">Core Team</h1>
        <p className="text-muted-foreground">
          Meet the students driving IMS NOIDA CLUB forward.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {coreTeam.map((member) => (
            <Card
              key={member._id}
              className="hover:scale-105 transition-transform"
            >
              <CardHeader className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-center text-lg">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-center text-sm text-muted-foreground">
                  {member.role}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                {member.socials && (
                  <div className="flex justify-center gap-4 mt-4">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
