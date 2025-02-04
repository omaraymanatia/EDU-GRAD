import { NeuralBackground } from "@/components/ui/neural-background";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    image: "https://images.unsplash.com/photo-1599442270806-07b9cddcf3eb",
    description: "Leading the development of our AI grading algorithms"
  },
  {
    name: "Mark Thompson",
    role: "Education Specialist",
    image: "https://images.unsplash.com/photo-1526560244950-1a3c1ace48f9",
    description: "Ensuring pedagogical excellence in our platform"
  },
  {
    name: "Dr. James Wilson",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1526994452082-caaabb7a69f0",
    description: "Overseeing platform architecture and scalability"
  },
  {
    name: "Lisa Rodriguez",
    role: "User Experience Lead",
    image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1",
    description: "Crafting intuitive interfaces for educators and students"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <NeuralBackground />
      
      <div className="container mx-auto px-4 space-y-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Revolutionizing Education with AI
          </h1>
          <p className="text-xl text-muted-foreground">
            We're combining advanced artificial intelligence with decades of educational expertise to create the future of exam assessment.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Upload</h3>
                  <p className="text-muted-foreground">
                    Securely upload exam papers through our platform
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Process</h3>
                  <p className="text-muted-foreground">
                    AI analyzes and grades responses with high accuracy
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Review</h3>
                  <p className="text-muted-foreground">
                    Get detailed feedback and analytics instantly
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
              >
                <Card className="bg-background/60 backdrop-blur-lg border-primary/20">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary">{member.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
