
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "5 Key Benefits of Outsourcing Tax Preparation to India",
      excerpt: "Discover how U.S. CPA firms are leveraging Indian expertise to reduce costs and improve efficiency during tax season.",
      author: "Bhuvesh Aggarwal",
      date: "March 15, 2024",
      category: "Tax Planning",
      readTime: "5 min read"
    },
    {
      title: "QuickBooks vs Xero: Which is Best for Your Business?",
      excerpt: "A comprehensive comparison of the two leading cloud accounting platforms and how to choose the right one.",
      author: "Krishna",
      date: "March 10, 2024", 
      category: "Technology",
      readTime: "7 min read"
    },
    {
      title: "Understanding GST Compliance for U.S. Companies in India",
      excerpt: "Navigate India's GST system effectively if your U.S. business is expanding into the Indian market.",
      author: "Bhuvesh Aggarwal",
      date: "March 5, 2024",
      category: "Compliance",
      readTime: "6 min read"
    },
    {
      title: "2024 Tax Season: Key Changes Every CPA Should Know",
      excerpt: "Stay updated with the latest IRS regulations and tax law changes that will impact your 2024 filing season.",
      author: "Krishna",
      date: "February 28, 2024",
      category: "Tax Planning", 
      readTime: "8 min read"
    },
    {
      title: "Data Security in Outsourced Accounting: Best Practices",
      excerpt: "Learn how to maintain the highest security standards when working with offshore accounting partners.",
      author: "AccuraGlobus Team",
      date: "February 20, 2024",
      category: "Security",
      readTime: "4 min read"
    },
    {
      title: "Scaling Your CPA Firm: When to Consider Outsourcing",
      excerpt: "Identify the right time and strategies for outsourcing accounting functions to support your firm's growth.",
      author: "Bhuvesh Aggarwal",
      date: "February 15, 2024",
      category: "Business Growth",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Tax Planning", "Technology", "Compliance", "Security", "Business Growth"];

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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  index === 0 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
