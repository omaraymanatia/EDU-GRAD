import { NeuralBackground } from "@/components/ui/neural-background";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Omar Ayman",
    role: "Software engineer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEz9mNhPRCagQ/profile-displayphoto-shrink_200_200/B4DZOhrXD.HcAY-/0/1733584324586?e=1744243200&v=beta&t=1srthfaR2KRR2PyuiFgjGevhkjXxBhpxaThjr9auvFY",
  },
  {
    name: "Osama Ayman",
    role: "Frontend engineer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGaSf9QCas9nA/profile-displayphoto-shrink_200_200/B4DZTOIWGJHkAY-/0/1738625083402?e=1744243200&v=beta&t=El8asqzaaJc9srd1cYHa-qFYZAL4dD2AsmilAf91LMw",
  },
  {
    name: "Saher mohamed",
    role: "Data scientist",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGb7BcXecGuqQ/profile-displayphoto-shrink_800_800/B4EZSY.v7gGgAc-/0/1737733374520?e=1744243200&v=beta&t=lxg7cNBkR4tvfYle6uUYntWC_VDRveRwGwMb_7vqSrg",
  },
  {
    name: "Ziad Mustafa",
    role: "Data scientist",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGUKzw90JzdBA/profile-displayphoto-shrink_200_200/B4EZRk3CeKHAAY-/0/1736858940597?e=1744243200&v=beta&t=PvpE3RBhtaAV075BK_6DpsbALpfxdC5TDWWLgm3jNSQ",
  },
  {
    name: "Zyad Hesham",
    role: "ML/DL engineer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQENAvd6pjQalw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727567566342?e=1744243200&v=beta&t=r3HWFrLfh_wsf4dkjWjchSsOV65rwlNtUg7STxaUxuk",
  },
];

export default function AboutPage() {
  return (
    <div className='min-h-screen pt-20 relative'>
      {/* NeuralBackground with absolute positioning */}
      <div className='absolute inset-0 z-0'>
        <NeuralBackground />
      </div>

      {/* Content with higher z-index to appear above the background */}
      <div className='relative z-10'>
        <div className='container mx-auto px-4 space-y-24'>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center max-w-3xl mx-auto'
          >
            <h1 className='text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600'>
              Revolutionizing Education with AI
            </h1>
            <p
              style={{ color: "black", fontWeight: "bold" }}
              className='text-xl text-muted-foreground'
            >
              We're combining advanced artificial intelligence with decades of
              educational expertise to create the future of exam assessment.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 text-center'>
              Our Process
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
                <CardContent className='pt-6'>
                  <div className='text-center space-y-4'>
                    <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto'>
                      <span className='text-2xl text-purple-600'>1</span>
                    </div>
                    <h3 className='text-xl font-semibold text-purple-800'>
                      Upload
                    </h3>
                    <p className='text-black'>
                      Securely upload exam papers through our platform
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
                <CardContent className='pt-6'>
                  <div className='text-center space-y-4'>
                    <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto'>
                      <span className='text-2xl text-purple-600'>2</span>
                    </div>
                    <h3 className='text-xl font-semibold text-purple-800'>
                      Process
                    </h3>
                    <p className='text-black'>
                      AI analyzes and grades responses with high accuracy
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
                <CardContent className='pt-6'>
                  <div className='text-center space-y-4'>
                    <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto'>
                      <span className='text-2xl text-purple-600'>3</span>
                    </div>
                    <h3 className='text-xl font-semibold text-purple-800'>
                      Review
                    </h3>
                    <p className='text-black'>
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
            <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 text-center'>
              Our Team
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                >
                  <Card className='bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
                    <CardContent className='pt-6'>
                      <div className='text-center space-y-4'>
                        <div className='w-24 h-24 rounded-full overflow-hidden mx-auto'>
                          <img
                            src={member.image}
                            alt={member.name}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <h3 className='text-xl font-semibold text-black'>
                          {member.name}
                        </h3>
                        <p className='text-purple-600'>{member.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
