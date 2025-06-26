
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Senior Tax Manager",
      rating: 5,
      testimonial: "AccuraGlobus has completely transformed our practice operations. Their precision in bookkeeping and tax preparation is unmatched, allowing us to focus entirely on expanding our client relationships and growing our business.",
      location: "New York, USA"
    },
    {
      name: "Michael Chen",
      position: "Financial Director",
      rating: 5,
      testimonial: "The attention to detail and quality of work consistently exceeds our expectations. They've streamlined our entire workflow, significantly improving our turnaround times and client satisfaction rates.",
      location: "California, USA"
    },
    {
      name: "Priya Sharma",
      position: "Business Owner",
      rating: 5,
      testimonial: "Their expertise in handling both US and Indian compliance requirements has been absolutely invaluable for our international operations. The team is highly professional and incredibly reliable.",
      location: "Mumbai, India"
    },
    {
      name: "David Williams",
      position: "Tax Advisory Specialist",
      rating: 5,
      testimonial: "AccuraGlobus delivers consistently high-quality work that we can depend on. Their technology integration and process automation have revolutionized our workflow efficiency and accuracy.",
      location: "Texas, USA"
    },
    {
      name: "Lisa Thompson",
      position: "Accounting Manager",
      rating: 5,
      testimonial: "The team's deep expertise in QuickBooks and Xero implementation helped us completely modernize our accounting processes. The results have exceeded all our expectations and saved us countless hours.",
      location: "Florida, USA"
    },
    {
      name: "Robert Martinez",
      position: "CPA Practice Owner",
      rating: 5,
      testimonial: "Working with AccuraGlobus has been a game-changer for our firm. Their meticulous approach to compliance and tax preparation has enhanced our reputation and allowed us to take on more complex clients.",
      location: "Arizona, USA"
    },
    {
      name: "Jennifer Lee",
      position: "Financial Consultant",
      rating: 5,
      testimonial: "The level of professionalism and expertise they bring to every project is remarkable. They've helped us maintain perfect compliance records while reducing our operational costs significantly.",
      location: "Washington, USA"
    },
    {
      name: "Amanda Davis",
      position: "Audit Supervisor",
      rating: 5,
      testimonial: "Their comprehensive understanding of both accounting standards and technology solutions has made them an invaluable partner. The quality and timeliness of their deliverables are consistently outstanding.",
      location: "Oregon, USA"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by accounting professionals and businesses worldwide for exceptional financial services and unwavering compliance excellence.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-gray-700 mb-6 italic">
                        "{testimonial.testimonial}"
                      </blockquote>
                      <div className="border-t pt-4">
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-blue-600 font-medium">
                          {testimonial.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
