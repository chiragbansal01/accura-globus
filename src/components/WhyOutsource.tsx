
import { Card, CardContent } from "@/components/ui/card";

const WhyOutsource = () => {
  const benefits = [
    {
      title: "Cost Savings",
      description: "Leverage India's lower labor costs and favorable exchange rates to dramatically reduce overhead. Reallocate budget towards growth and client services.",
      icon: "💰"
    },
    {
      title: "Flexible Scaling", 
      description: "Services ramp up during tax season or dial down in off-peak months. Convert fixed in-house costs into variable, on-demand support.",
      icon: "📈"
    },
    {
      title: "Regulatory Compliance",
      description: "Dedicated specialists monitor regulatory changes and ensure compliance. Reduce risk of fines or errors with up-to-date IRS rules knowledge.",
      icon: "⚖️"
    },
    {
      title: "Improved Accuracy",
      description: "Professional team with quality-control processes ensures precise bookkeeping and timely filings. Advanced software keeps books error-free.",
      icon: "✅"
    },
    {
      title: "Expert Talent Access",
      description: "Global extension of your team with qualified CAs, CPAs, and EAs who know U.S. GAAP and tax law. Continuous training on latest tools.",
      icon: "🎓"
    },
    {
      title: "Focus on Core Business",
      description: "Handle back-office finance work while you focus on sales and advisory. Net result: lower costs, more capacity, higher service quality.",
      icon: "🎯"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Outsource to AccuraGlobal?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock key benefits that transform your accounting operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOutsource;
