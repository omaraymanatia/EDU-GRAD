import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { NeuralBackground } from "@/components/ui/neural-background";
import { AILoader } from "@/components/ui/ai-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import type { SelectGrade } from "@db/schema";

export default function StudentDashboard() {
  const { user } = useAuth();

  const { data: grades, isLoading } = useQuery<SelectGrade[]>({
    queryKey: ["/api/student/grades"],
  });

  if (isLoading) return <AILoader />;

  return (
    <div className="min-h-screen pt-20 p-4">
      <NeuralBackground />
      
      <div className="container mx-auto space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
              <CardHeader>
                <CardTitle>Overall Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Average Score</span>
                      <span className="font-bold text-primary">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>AI Authenticity</span>
                      <span className="font-bold text-emerald-500">98%</span>
                    </div>
                    <Progress value={98} className="bg-emerald-950" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-background/60 backdrop-blur-lg border-primary/20 h-full">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Last exam submitted: 2 days ago
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span>All assignments up to date</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
            <CardHeader>
              <CardTitle>Exam History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {grades?.map((grade) => (
                  <div
                    key={grade.id}
                    className="p-4 rounded-lg bg-background/40 space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Exam #{grade.examId}</h3>
                      <span className="text-lg font-bold text-primary">
                        {grade.score}%
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>AI Probability</span>
                        <span>{grade.aiProbability}%</span>
                      </div>
                      <Progress value={grade.aiProbability} />
                    </div>

                    {grade.feedback && (
                      <div className="text-sm text-muted-foreground">
                        <p>Feedback: {grade.feedback}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
