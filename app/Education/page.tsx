import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationList = [
  {
    degree: "BS in Information Technology",
    institution: "Naga College Foundation, Inc.",
    period: "2024 - Present",
    description:
      "Intensive program covering React, Node.js, databases, and deployment.",
  },
  {
    degree: "High School Education",
    institution: "Tinago National High School",
    period: "2019 - 2024",
    description:
      "Focused on hands-on technical skills, practical training, and career readiness.",
  },
  {
    degree: "High School Education",
    institution: "Lighthouse Baptist Educational Center",
    period: "2018 - 2019",
    description: "",
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Education
        </h1>
        <p className="text-muted-foreground mt-1">
          Academic background and formal training.
        </p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      {item.degree}
                    </CardTitle>
                    <CardDescription>
                      {item.institution}
                    </CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.period}
                </span>
              </div>
            </CardHeader>

            {item.description && (
              <CardContent>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
