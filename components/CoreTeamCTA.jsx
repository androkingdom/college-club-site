import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CoreTeamCTA() {
  return (
    <div className="mt-10 flex justify-center">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl border border-border/50 bg-card">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Meet the Core Team
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg">
            Our student-led team drives every project, event, and innovation at
            IMS Noida Club. Discover the people who make it possible.
          </p>
          <Button asChild size="lg">
            <Link href="/team">See the Full Team</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
