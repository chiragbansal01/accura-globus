
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson & Associates CPA",
      rating: 5,
      testimonial: "AccuraGlobus has transformed our practice. Their team handles our bookkeeping and tax prep with incredible precision, allowing us to focus on growing our client base.",
      location: "New York, USA"
    },
    {
      name: "Michael Chen",
      company: "Chen Financial Services",
      rating: 5,
      testimonial: "The quality of work and attention to detail is outstanding. They've helped us streamline our operations and improve our turnaround times significantly.",
      location: "California, USA"
    },
    {
      name: "Priya Sharma",
      company: "Sharma Enterprises",
      rating: 5,
      testimonial: "Their expertise in both US and Indian compliance has been invaluable for our cross-border operations. Highly professional and reliable team.",
      location: "Mumbai, India"
    },
    {
      name: "David Williams",
      company: "Williams Tax Advisory",
      rating: 5,
      testimonial: "AccuraGlobus delivers consistent, high-quality work. Their technology integration and process automation have made our workflow much more efficient.",
      location: "Texas, USA"
    },
    {
      name: "Lisa Thompson",
      company: "Thompson & Partners",
      rating: 5,
      testimonial: "The team's expertise in QuickBooks and Xero implementation helped us modernize our entire accounting process. Couldn't be happier with the results.",
      location: "Florida, USA"
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
              Trusted by CPA firms and businesses worldwide for exceptional accounting and compliance services.
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
                          {testimonial.company}
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
