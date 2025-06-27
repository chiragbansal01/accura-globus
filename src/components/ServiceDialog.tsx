
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import MeetingDialog from "./MeetingDialog";

interface ServiceDialogProps {
  service: {
    title: string;
    description: string;
    features: string[];
    logo: string;
  };
  children: React.ReactNode;
}

const ServiceDialog = ({ service, children }: ServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{service.logo}</span>
            <DialogTitle className="text-2xl text-blue-600">{service.title}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-600 text-lg">{service.description}</p>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, idx) => (
                <Badge key={idx} variant="outline" className="text-sm">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600 mb-4">
              Ready to get started with {service.title}? Schedule a consultation to discuss your specific needs.
            </p>
            <MeetingDialog serviceType={service.title}>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Schedule Consultation for {service.title}
              </button>
            </MeetingDialog>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;
