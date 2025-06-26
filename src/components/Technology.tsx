
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Technology = () => {
  const tools = [
    {
      category: "Accounting and Auditing Softwares",
      items: [
        { name: "QuickBooks Online", logo: "https://logos-world.net/wp-content/uploads/2021/03/QuickBooks-Logo.png" },
        { name: "Xero", logo: "https://logos-world.net/wp-content/uploads/2021/03/Xero-Logo.png" },
        { name: "Zoho Books", logo: "https://logos-world.net/wp-content/uploads/2020/12/Zoho-Logo.png" },
        { name: "CCH Axcess", logo: "https://www.cchaxcess.com/content/dam/cch/logos/cch-axcess-logo.png" },
        { name: "SurePrep", logo: "https://www.sureprep.com/content/dam/sureprep/logos/sureprep-logo-color.png" },
        { name: "ProSystem fx", logo: "https://www.cch.com/content/dam/cch/navigation/prosystem-fx-logo.png" }
      ]
    },
    {
      category: "Security & Compliance", 
      items: [
        { name: "SOC 2 Framework", logo: "https://www.aicpa.org/content/dam/aicpa/interestareas/frc/assuranceadvisoryservices/images/soc-logo.png" },
        { name: "ISO 27001", logo: "https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100406.jpg" },
        { name: "GDPR Compliance", logo: "https://gdpr.eu/wp-content/uploads/sites/2/2018/04/gdpr-logo.png" },
        { name: "Multi-factor Authentication", logo: "https://www.microsoft.com/en-us/security/content-library/images/azure-mfa-logo.png" },
        { name: "Role-based Access", logo: "https://img.icons8.com/color/96/security-lock.png" }
      ]
    },
    {
      category: "Collaboration Tools",
      items: [
        { name: "Secure Cloud Services", logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" },
        { name: "Encrypted Data Transfer", logo: "https://img.icons8.com/color/96/ssl-security.png" },
        { name: "Real-time Collaboration", logo: "https://logos-world.net/wp-content/uploads/2020/12/Slack-Logo.png" },
        { name: "Document Management", logo: "https://logos-world.net/wp-content/uploads/2020/11/Dropbox-Logo.png" }
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
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded p-1">
                          <img 
                            src={item.logo} 
                            alt={item.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name}&background=0066cc&color=ffffff&size=40`;
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
