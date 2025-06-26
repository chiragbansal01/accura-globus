
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Technology = () => {
  const tools = [
    {
      category: "Accounting and Auditing Softwares",
      items: [
        { name: "QuickBooks Online", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg" },
        { name: "Xero", logo: "https://cdn.worldvectorlogo.com/logos/xero-logo.svg" },
        { name: "Zoho Books", logo: "https://cdn.worldvectorlogo.com/logos/zoho.svg" },
        { name: "CCH Axcess", logo: "https://www.cch.com/content/dam/cch/navigation/logo.svg" },
        { name: "SurePrep", logo: "https://www.sureprep.com/content/dam/sureprep/logos/sureprep-logo.svg" },
        { name: "ProSystem fx", logo: "https://cdn.worldvectorlogo.com/logos/prosystem-fx.svg" }
      ]
    },
    {
      category: "Security & Compliance", 
      items: [
        { name: "SOC 2 Framework", logo: "https://cdn.worldvectorlogo.com/logos/soc-2.svg" },
        { name: "ISO 27001", logo: "https://cdn.worldvectorlogo.com/logos/iso-27001.svg" },
        { name: "GDPR Compliance", logo: "https://cdn.worldvectorlogo.com/logos/gdpr.svg" },
        { name: "Multi-factor Authentication", logo: "https://cdn.worldvectorlogo.com/logos/2fa.svg" },
        { name: "Role-based Access", logo: "https://cdn.worldvectorlogo.com/logos/rbac.svg" }
      ]
    },
    {
      category: "Collaboration Tools",
      items: [
        { name: "Secure Cloud Services", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
        { name: "Encrypted Data Transfer", logo: "https://cdn.worldvectorlogo.com/logos/ssl.svg" },
        { name: "Real-time Collaboration", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
        { name: "Document Management", logo: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg" }
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
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded">
                          <img 
                            src={item.logo} 
                            alt={item.name}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name}&background=0066cc&color=ffffff&size=32`;
                            }}
                          />
                        </div>
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
