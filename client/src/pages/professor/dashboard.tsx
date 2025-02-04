import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { NeuralBackground } from "@/components/ui/neural-background";
import { AILoader } from "@/components/ui/ai-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, ChevronRight, FileText } from "lucide-react";
import type { SelectExam } from "@db/schema";

export default function ProfessorDashboard() {
  const { user } = useAuth();

  const { data: exams, isLoading } = useQuery<SelectExam[]>({
    queryKey: ["/api/professor/exams"],
  });

  if (isLoading) return <AILoader />;

  return (
    <div className="min-h-screen pt-20 p-4">
      <NeuralBackground />
      
      <div className="container mx-auto space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Total Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary">
                {exams?.length || 0}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Grading Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={75} className="mb-2" />
              <span className="text-sm text-muted-foreground">75% Complete</span>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">AI Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-emerald-500">98%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upload New Exam</CardTitle>
            <Button variant="outline" className="group">
              <Upload className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Upload
            </Button>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Drag and drop your exam files here or click to browse
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
          <CardHeader>
            <CardTitle>Recent Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exams?.map((exam) => (
                <div
                  key={exam.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/40 hover:bg-background/60 transition-colors"
                >
                  <div>
                    <h3 className="font-medium">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Created {new Date(exam.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
