
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import MeetingDialog from "./MeetingDialog";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">AccuraGlobus</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">Why Us</a>
          <a href="#blogs" className="text-gray-600 hover:text-blue-600 transition-colors">Blogs</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        <MeetingDialog>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Schedule a Meet
          </Button>
        </MeetingDialog>
      </div>
    </header>
  );
};

export default Header;
