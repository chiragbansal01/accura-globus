
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";

const Blogs = () => {
  const handleBlogClick = () => {
    // This will be implemented when you create a dedicated blog page
    console.log("Navigating to blogs page");
  };

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Insights & Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert insights on accounting, tax planning, and business growth strategies.
            </p>
          </div>

          <div className="flex justify-center">
            <Card 
              className="max-w-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 border-blue-100 hover:border-blue-300"
              onClick={handleBlogClick}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  Explore Our Blog
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 text-lg">
                  Discover expert insights on accounting best practices, tax strategies, compliance updates, and business growth tips from our team of qualified professionals.
                </p>
                
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span className="font-medium">Read Our Articles</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
