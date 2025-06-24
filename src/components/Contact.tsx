
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your accounting operations? Schedule a consultation or get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">contact@accuraglobus.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Office Location</h4>
                  <a 
                    href="https://g.co/kgs/LrFKtLa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Dwarka, New Delhi, India
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 12:00 PM - 9:00 PM IST
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Company Name" />
                  <Input placeholder="Firm Size (Number of Employees)" />
                  <Textarea placeholder="Tell us about your accounting needs..." rows={4} />
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
