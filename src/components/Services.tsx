
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const usServices = [
    {
      title: "Tax Planning & Filing",
      description: "Individual (1040) and business returns (1065, 1120C/S) with year-round planning. HNWI tax strategy specialty.",
      features: ["Form 1040", "Form 1065", "Form 1120C/S", "Year-round planning", "HNWI strategies"]
    },
    {
      title: "Audit & Assurance", 
      description: "Support for financial audits, reviews, and compilations with Big Four experience.",
      features: ["Financial audits", "Reviews", "Compilations", "Big Four standards"]
    },
    {
      title: "Bookkeeping",
      description: "Daily accounting using QuickBooks Online, Xero, or Zoho, with month-end and year-end closings.",
      features: ["QuickBooks Online", "Xero", "Zoho Books", "Month-end closing", "Year-end closing"]
    },
    {
      title: "Payroll & Receivables",
      description: "Payroll processing and AR management to ensure accurate and timely payments.",
      features: ["Payroll processing", "AR management", "Vendor payments", "Employee payments"]
    },
    {
      title: "Finance Automation",
      description: "Streamlining processes with cloud software for maximum efficiency.",
      features: ["Bank feeds", "Invoicing automation", "Rules-based reconciliation", "Process optimization"]
    },
    {
      title: "Custom Reporting",
      description: "Professional financial reports plus custom dashboards highlighting key KPIs.",
      features: ["P&L statements", "Balance sheets", "Cash flow", "Custom dashboards", "KPI tracking"]
    }
  ];

  const indianServices = [
    {
      title: "Company Incorporation",
      description: "Guidance through India's company registration, compliance filings, and legal setup.",
      features: ["Private/Public registration", "Compliance filings", "Legal setup"]
    },
    {
      title: "Indian Tax Returns",
      description: "Filing of Indian corporate and individual tax returns, including ITR and TDS returns.",
      features: ["ITR returns", "TDS returns", "Corporate returns", "Individual returns"]
    },
    {
      title: "GST Compliance",
      description: "Full GST registration and return filing to meet India's indirect tax regulations.",
      features: ["GST registration", "Return filing", "Compliance management"]
    },
    {
      title: "Business Advisory",
      description: "Local finance, compliance, and strategy advice for Indian operations.",
      features: ["Joint ventures", "Transfer pricing", "Local compliance", "Strategy advice"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive accounting solutions for U.S. CPA firms and Indian business operations.
            </p>
          </div>

          {/* U.S. CPA Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">U.S. CPA Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {usServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Indian Services */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Indian Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {indianServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-teal-600">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
