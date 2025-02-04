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
      "48-hour processing time"
    ]
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
      "Detailed analytics"
    ]
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
      "On-premise deployment"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20 p-4">
      <NeuralBackground />
      
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="container mx-auto grid gap-8 md:grid-cols-3 max-w-5xl">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative"
          >
            <Card className={`h-full bg-background/60 backdrop-blur-lg border-primary/20 ${
              plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold mt-4">{plan.price}</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-8"
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
  );
}
