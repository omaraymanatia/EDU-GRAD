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

  const tmp = {
    grades: [
      {
        id: 1,
        examId: 1,
        score: 85,
        aiProbability: 98,
        feedback: "Good job on this exam!",
      },
      {
        id: 2,
        examId: 2,
        score: 90,
        aiProbability: 95,
        feedback: "Great work!",
      },
      {
        id: 3,
        examId: 3,
        score: 80,
        aiProbability: 99,
        feedback: "Excellent work!",
      },
    ],
  };

  if (isLoading) return <AILoader />;

  return (
    <div className='min-h-screen pt-20 p-4 relative'>
      {/* Neural Background */}
      <div className='absolute inset-0 z-0'>
        <NeuralBackground />
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto space-y-8'>
        {/* Performance and Activity Cards */}
        <div className='grid gap-6 md:grid-cols-2'>
          {/* Overall Performance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
              <CardHeader>
                <CardTitle className='text-purple-800'>
                  Overall Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {/* Average Score */}
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='text-black'>Average Score</span>
                      <span className='font-bold text-black'>85%</span>
                    </div>
                    <Progress value={85} className='bg-purple-100' />
                  </div>

                  {/* AI Authenticity */}
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span className='text-black'>AI Authenticity</span>
                      <span className='font-bold text-black'>98%</span>
                    </div>
                    <Progress value={98} className='bg-purple-100' />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg h-full'>
              <CardHeader>
                <CardTitle className='text-purple-800'>
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='text-sm text-black'>
                    Last exam submitted: 2 days ago
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 rounded-full bg-purple-600' />
                    <span className='text-black'>
                      All assignments up to date
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Exam History Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
            <CardHeader>
              <CardTitle className='text-purple-800'>Exam History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-6'>
                {/* Exam 1 */}
                <div
                  key={1}
                  className='p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors space-y-4'
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='font-medium text-purple-800'>Exam #{1}</h3>
                    <span className='text-lg font-bold text-black'>{95}%</span>
                  </div>

                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-black'>AI Probability</span>
                      <span className='text-black'>{5}%</span>
                    </div>
                    <Progress value={95} className='bg-purple-100' />
                  </div>

                  <div className='text-sm text-black'>
                    <p>Feedback: {"good"}</p>
                  </div>
                </div>

                {/* Exam 2 */}
                <div
                  key={2}
                  className='p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors space-y-4'
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='font-medium text-purple-800'>Exam #{2}</h3>
                    <span className='text-lg font-bold text-black'>{100}%</span>
                  </div>

                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-black'>AI Probability</span>
                      <span className='text-black'>{10}%</span>
                    </div>
                    <Progress value={100} className='bg-purple-100' />
                  </div>

                  <div className='text-sm text-black'>
                    <p>Feedback: {"Excellent"}</p>
                  </div>
                </div>

                {/* Exam 3 */}
                <div
                  key={3}
                  className='p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors space-y-4'
                >
                  <div className='flex justify-between items-center'>
                    <h3 className='font-medium text-purple-800'>Exam #{3}</h3>
                    <span className='text-lg font-bold text-black'>{70}%</span>
                  </div>

                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-black'>AI Probability</span>
                      <span className='text-black'>{40}%</span>
                    </div>
                    <Progress value={60} className='bg-purple-100' />
                  </div>

                  <div className='text-sm text-black'>
                    <p>Feedback: {"Bad"}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
