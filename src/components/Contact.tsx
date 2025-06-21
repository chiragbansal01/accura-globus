
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
                  <p className="text-gray-600">contact@accuraglobal.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Office Location</h4>
                  <p className="text-gray-600">New Delhi, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br/>
                    (Perfect overlap with U.S. business hours)
                  </p>
                </div>
                <div className="pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Schedule a Discovery Call
                  </Button>
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
