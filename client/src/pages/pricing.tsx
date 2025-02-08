import { NeuralBackground } from "@/components/ui/neural-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Up to 50 exams per month",
      "Basic AI grading",
      "Standard support",
      "48-hour processing time",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    popular: true,
    features: [
      "Unlimited exams",
      "Advanced AI analysis",
      "Priority support",
      "2-hour processing time",
      "Custom answer templates",
      "Detailed analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "Real-time processing",
      "SLA guarantee",
      "On-premise deployment",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className='min-h-screen pt-20 p-4 relative'>
      {/* NeuralBackground with absolute positioning */}
      <div className='absolute inset-0 z-0'>
        <NeuralBackground />
      </div>

      {/* Content with higher z-index to appear above the background */}
      <div className='relative z-10'>
        <div className='container mx-auto text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
            Simple, Transparent Pricing
          </h1>
          <p
            style={{ color: "black", fontWeight: "bold" }}
            className='text-xl text-muted-foreground'
          >
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className='container mx-auto grid gap-8 md:grid-cols-3 max-w-5xl'>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className='relative'
            >
              <Card
                className={`h-full flex flex-col bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg ${
                  plan.popular
                    ? "border-purple-500 shadow-purple-500/20"
                    : "border-purple-200"
                }`}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className='text-2xl text-purple-800'>
                    {plan.name}
                  </CardTitle>
                  <div className='text-4xl font-bold mt-4 text-purple-900'>
                    {plan.price}
                  </div>
                  <div className='text-sm text-purple-600'>
                    {plan.price !== "Custom" ? "per month" : "contact us"}
                  </div>
                </CardHeader>

                <CardContent className='flex flex-col flex-grow'>
                  <ul className='space-y-4 flex-grow'>
                    {plan.features.map((feature) => (
                      <li key={feature} className='flex items-center space-x-2'>
                        <Check className='w-5 h-5 text-purple-500' />
                        <span className='text-purple-700'>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button pushed to the bottom */}
                  <Button
                    className='w-full mt-8'
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
