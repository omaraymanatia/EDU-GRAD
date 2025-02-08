import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { NeuralBackground } from "@/components/ui/neural-background";
import { AILoader } from "@/components/ui/ai-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  ChevronRight,
  FileText,
  Table,
  Calculator,
} from "lucide-react";
import type { SelectExam } from "@db/schema";

export default function ProfessorDashboard() {
  const { user } = useAuth();

  const { data: exams, isLoading } = useQuery<SelectExam[]>({
    queryKey: ["/api/professor/exams"],
  });

  // TODO: Replace with actual upload states
  const hasExamUploaded = false;
  const hasAnswersUploaded = false;

  if (isLoading) return <AILoader />;

  return (
    <div className='min-h-screen pt-20 p-4 relative'>
      {/* Neural Background */}
      <div className='absolute inset-0 z-0'>
        <NeuralBackground />
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto space-y-8'>
        <div className='grid gap-6 md:grid-cols-3'>
          {/* Total Exams Card */}
          <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
            <CardHeader>
              <CardTitle className='text-lg text-purple-800'>
                Total Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold text-purple-600'>
                {exams?.length || 0}
              </div>
            </CardContent>
          </Card>

          {/* Grading Progress Card */}
          <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
            <CardHeader>
              <CardTitle className='text-lg text-purple-800'>
                Grading Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={75} className='mb-2 bg-purple-100' />
              <span className='text-sm text-purple-500'>75% Complete</span>
            </CardContent>
          </Card>

          {/* AI Confidence Card */}
          <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
            <CardHeader>
              <CardTitle className='text-lg text-purple-800'>
                AI Confidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold text-purple-600'>98%</div>
            </CardContent>
          </Card>
        </div>

        {/* Upload New Exam Card */}
        <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
          <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle className='text-purple-800'>Upload New Exam</CardTitle>
            <div className='flex space-x-2'>
              <Button
                variant='outline'
                className='group border-purple-400 bg-purple-600 text-white hover:bg-purple-700 hover:border-purple-500 transition-all duration-200'
              >
                <Upload className='w-4 h-4 mr-2 text-white group-hover:animate-bounce' />
                Upload CSV
              </Button>
              <Button
                variant='outline'
                className='group border-purple-400 bg-purple-600 text-white hover:bg-purple-700 hover:border-purple-500 transition-all duration-200'
              >
                <Upload className='w-4 h-4 mr-2 text-white group-hover:animate-bounce' />
                Upload photo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className='border-2 border-dashed border-purple-200 rounded-lg p-8 text-center hover:border-purple-300 transition-colors'>
              <div className='mx-auto w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4'>
                <FileText className='w-6 h-6 text-purple-600' />
              </div>
              <p className='text-black'>
                Drag and drop your exam files here or click to browse
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Upload Student Answers Card */}
        <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
          <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle className='text-purple-800'>
              Upload Student Answers
            </CardTitle>
            <div className='flex space-x-2'>
              <Button
                variant='outline'
                className='group border-purple-400 bg-purple-600 text-white hover:bg-purple-700 hover:border-purple-500 transition-all duration-200'
              >
                <Upload className='w-4 h-4 mr-2 text-white group-hover:animate-bounce' />
                Upload CSV
              </Button>
              <Button
                variant='outline'
                className='group border-purple-400 bg-purple-600 text-white hover:bg-purple-700 hover:border-purple-500 transition-all duration-200'
              >
                <Upload className='w-4 h-4 mr-2 text-white group-hover:animate-bounce' />
                Upload photos
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className='border-2 border-dashed border-purple-200 rounded-lg p-8 text-center hover:border-purple-300 transition-colors'>
              <div className='mx-auto w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4'>
                <Table className='w-6 h-6 text-purple-600' />
              </div>
              <p className='text-black'>
                Upload a CSV file containing student answers
              </p>
              <p className='text-sm text-black mt-2'>
                File should contain student IDs and their responses
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Calculate Scores Card */}
        <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
          <CardContent className='pt-6'>
            <div className='text-center space-y-4'>
              <Button
                size='lg'
                className='w-full md:w-auto min-w-[200px] bg-purple-600 hover:bg-purple-700'
                disabled={!hasExamUploaded || !hasAnswersUploaded}
              >
                <Calculator className='w-4 h-4 mr-2' />
                Calculate Student Scores
              </Button>
              {(!hasExamUploaded || !hasAnswersUploaded) && (
                <p className='text-sm text-black'>
                  Please upload both the exam and student answers before
                  calculating scores
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Exams Card */}
        <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
          <CardHeader>
            <CardTitle className='text-purple-800'>Recent Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {exams?.map((exam) => (
                <div
                  key={exam.id}
                  className='flex items-center justify-between p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors'
                >
                  <div>
                    <h3 className='font-medium text-purple-800'>
                      {exam.title}
                    </h3>
                    <p className='text-sm text-purple-500'>
                      Created {new Date(exam.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-purple-600 hover:bg-purple-200'
                  >
                    <ChevronRight className='w-4 h-4' />
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
