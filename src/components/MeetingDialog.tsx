
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Clock, User, Mail, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MeetingDialogProps {
  children: React.ReactNode;
  serviceType?: string;
}

const MeetingDialog = ({ children, serviceType }: MeetingDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    meetingTime: "",
    concern: "",
    timezone: "EST"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    return formData.fullName.trim() !== "" && 
           formData.email.trim() !== "" && 
           formData.meetingTime.trim() !== "" && 
           formData.concern.trim() !== "" &&
           formData.timezone.trim() !== "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Incomplete Information",
        description: "Please fill all the required details including timezone",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('meeting_schedules')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            meeting_time: formData.meetingTime,
            concern: formData.concern,
            service_type: serviceType || null,
            timezone: formData.timezone,
            status: 'pending'
          }
        ]);

      if (error) {
        console.error('Error submitting meeting:', error);
        toast({
          title: "Error",
          description: "Failed to schedule meeting. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Meeting Scheduled Successfully",
          description: `Thank you for your trust, our team will reach you within 24 hours (${formData.timezone})`,
        });
        
        // Reset form
        setFormData({ fullName: "", email: "", meetingTime: "", concern: "", timezone: "EST" });
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Error submitting meeting:', error);
      toast({
        title: "Error",
        description: "Failed to schedule meeting. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Schedule a Meet
            {serviceType && <span className="text-sm text-gray-600">for {serviceType}</span>}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <Input
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Preferred Timezone *
            </label>
            <Select value={formData.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EST">EST (Eastern Standard Time)</SelectItem>
                <SelectItem value="IST">IST (India Standard Time)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Preferred Meeting Time *
            </label>
            <Input
              type="datetime-local"
              value={formData.meetingTime}
              onChange={(e) => handleInputChange("meetingTime", e.target.value)}
              required
            />
            <p className="text-xs text-gray-500">
              Time will be scheduled according to your selected timezone ({formData.timezone})
            </p>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Concern/Topic *
            </label>
            <Textarea
              value={formData.concern}
              onChange={(e) => handleInputChange("concern", e.target.value)}
              placeholder="Please describe your accounting needs or concerns..."
              rows={3}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingDialog;
