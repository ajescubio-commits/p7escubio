
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Gamepad2 } from "lucide-react";

const hobbies = [
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "I enjoy playing strategy and RPG games.",
  },
  {
    title: "Sports",
    icon: Trophy,
    description: "I enjoy playing and watching sports, especially basketball and NBA games.",
  },
];

export default function Hobbies() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Hobbies & Interests
        </h1>
        <p className="text-muted-foreground mt-1">
          Things I enjoy doing outside of coding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;

          return (
            <Card key={hobby.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">
                    {hobby.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
