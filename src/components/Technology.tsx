
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Technology = () => {
  const tools = [
    {
      category: "Accounting Software",
      items: [
        { name: "QuickBooks Online", logo: "https://logo.clearbit.com/quickbooks.intuit.com" },
        { name: "Xero", logo: "https://logo.clearbit.com/xero.com" },
        { name: "Zoho Books", logo: "https://logo.clearbit.com/zoho.com" },
        { name: "CCH Axcess", logo: "https://via.placeholder.com/40x40/0066cc/ffffff?text=CCH" },
        { name: "SurePrep", logo: "https://via.placeholder.com/40x40/ff6600/ffffff?text=SP" },
        { name: "ProSystem fx", logo: "https://via.placeholder.com/40x40/009900/ffffff?text=PS" }
      ]
    },
    {
      category: "Security & Compliance", 
      items: [
        { name: "SOC 2 Framework", logo: "https://via.placeholder.com/40x40/333333/ffffff?text=SOC2" },
        { name: "ISO 27001", logo: "https://via.placeholder.com/40x40/0066cc/ffffff?text=ISO" },
        { name: "GDPR Compliance", logo: "https://via.placeholder.com/40x40/0066ff/ffffff?text=GDPR" },
        { name: "Multi-factor Authentication", logo: "https://via.placeholder.com/40x40/ff9900/ffffff?text=MFA" },
        { name: "Role-based Access", logo: "https://via.placeholder.com/40x40/6600cc/ffffff?text=RBA" }
      ]
    },
    {
      category: "Collaboration Tools",
      items: [
        { name: "Secure Cloud Services", logo: "https://logo.clearbit.com/aws.amazon.com" },
        { name: "Encrypted Data Transfer", logo: "https://via.placeholder.com/40x40/009900/ffffff?text=EDT" },
        { name: "Real-time Collaboration", logo: "https://logo.clearbit.com/slack.com" },
        { name: "Document Management", logo: "https://logo.clearbit.com/dropbox.com" }
      ]
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
                  <div className="space-y-3">
                    {tool.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <img 
                          src={item.logo} 
                          alt={item.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/32x32/0066cc/ffffff?text=${item.name.substring(0, 2)}`;
                          }}
                        />
                        <Badge variant="outline" className="flex-1">
                          {item.name}
                        </Badge>
                      </div>
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
