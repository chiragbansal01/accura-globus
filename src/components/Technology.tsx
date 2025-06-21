
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Technology = () => {
  const tools = [
    {
      category: "Accounting Software",
      items: ["QuickBooks Online", "Xero", "Zoho Books", "CCH Axcess", "SurePrep", "ProSystem fx"]
    },
    {
      category: "Security & Compliance", 
      items: ["SOC 2 Framework", "ISO 27001", "GDPR Compliance", "Multi-factor Authentication", "Role-based Access"]
    },
    {
      category: "Collaboration Tools",
      items: ["Secure Cloud Services", "Encrypted Data Transfer", "Real-time Collaboration", "Document Management"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology & Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading finance tools combined with enterprise-grade security for complete peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tools.map((tool, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{tool.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.items.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="mb-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Data Security Promise</h3>
            <p className="text-gray-700 text-center max-w-4xl mx-auto text-lg">
              Your financial information is as safe with us as in your own firm's vault. All client data is encrypted 
              at rest and in transit, with multi-factor authentication, strict role-based access controls, and regular backups 
              to ensure business continuity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
