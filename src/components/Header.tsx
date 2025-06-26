
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MeetingDialog from "./MeetingDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Technology", id: "technology" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3f541feb-b69d-4aef-b274-e5b25b491567.png" 
              alt="AccuraGlobus" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">AccuraGlobus</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <MeetingDialog>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Schedule a Meet
              </Button>
            </MeetingDialog>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                    >
                      {item.name}
                    </button>
                  ))}
                  <MeetingDialog>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">
                      Schedule a Meet
                    </Button>
                  </MeetingDialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
