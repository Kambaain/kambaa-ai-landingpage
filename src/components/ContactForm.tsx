import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeName: "",
    yearSemester: "",
    course: "",
    specifyCourse: "",
    isCurrentStudent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStudentChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      isCurrentStudent: checked
    }));
  };

  const validateForm = () => {
    const { fullName, email, phone, collegeName, yearSemester, course, specifyCourse, isCurrentStudent } = formData;
    
    if (!fullName.trim()) {
      toast({
        title: "Error",
        description: "Full name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }
    
    if (!phone.trim()) {
      toast({
        title: "Error",
        description: "Phone number is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!collegeName.trim()) {
      toast({
        title: "Error",
        description: "College name is required",
        variant: "destructive"
      });
      return false;
    }

    if (!yearSemester) {
      toast({
        title: "Error",
        description: "Year is required",
        variant: "destructive"
      });
      return false;
    }

    if (!course) {
      toast({
        title: "Error",
        description: "Course is required",
        variant: "destructive"
      });
      return false;
    }

    if (course === "Others" && !specifyCourse.trim()) {
      toast({
        title: "Error",
        description: "Please specify your course",
        variant: "destructive"
      });
      return false;
    }
    
    if (!isCurrentStudent) {
      toast({
        title: "Error",
        description: "Please confirm you are a current student",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you for registering! We're excited to see you at the AI Ignite Masterclass.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card p-8 rounded-lg shadow-lg border animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Success!</h2>
              <p className="text-lg text-muted-foreground">
                Thank you for registering! We're excited to see you at the AI Ignite Masterclass.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Secure Your Spot
            </h2>
            <p className="text-lg text-muted-foreground">
              Limited seats! Register before September 10, 2025!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg border animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Use college email for priority"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number *
                </Label>
                <div className="flex mt-1">
                  <div className="bg-secondary px-3 py-2 rounded-l-md border border-r-0 border-input text-muted-foreground">
                    +91
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-l-none"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="collegeName" className="text-sm font-medium text-foreground">
                  College Name *
                </Label>
                <Input
                  id="collegeName"
                  name="collegeName"
                  type="text"
                  required
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Enter your college name"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground">
                  Year *
                </Label>
                <Select value={formData.yearSemester} onValueChange={(value) => handleSelectChange('yearSemester', value)}>
                  <SelectTrigger className="mt-1 bg-background">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border z-50">
                    <SelectItem value="1st-year">1st Year</SelectItem>
                    <SelectItem value="2nd-year">2nd Year</SelectItem>
                    <SelectItem value="3rd-year">3rd Year</SelectItem>
                    <SelectItem value="4th-year">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground">
                  Course *
                </Label>
                <Select value={formData.course} onValueChange={(value) => handleSelectChange('course', value)}>
                  <SelectTrigger className="mt-1 bg-background">
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border z-50">
                    <SelectItem value="Computer Science Engineering">Computer Science Engineering</SelectItem>
                    <SelectItem value="Information Technology">Information Technology</SelectItem>
                    <SelectItem value="Electronics and Communication Engineering">Electronics and Communication Engineering</SelectItem>
                    <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                    <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                    <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                    <SelectItem value="Chemical Engineering">Chemical Engineering</SelectItem>
                    <SelectItem value="Aerospace Engineering">Aerospace Engineering</SelectItem>
                    <SelectItem value="Biomedical Engineering">Biomedical Engineering</SelectItem>
                    <SelectItem value="Biotechnology Engineering">Biotechnology Engineering</SelectItem>
                    <SelectItem value="Automobile Engineering">Automobile Engineering</SelectItem>
                    <SelectItem value="Industrial Engineering">Industrial Engineering</SelectItem>
                    <SelectItem value="Environmental Engineering">Environmental Engineering</SelectItem>
                    <SelectItem value="Petroleum Engineering">Petroleum Engineering</SelectItem>
                    <SelectItem value="Mining Engineering">Mining Engineering</SelectItem>
                    <SelectItem value="Metallurgical Engineering">Metallurgical Engineering</SelectItem>
                    <SelectItem value="Agricultural Engineering">Agricultural Engineering</SelectItem>
                    <SelectItem value="Food Technology">Food Technology</SelectItem>
                    <SelectItem value="Instrumentation Engineering">Instrumentation Engineering</SelectItem>
                    <SelectItem value="Production Engineering">Production Engineering</SelectItem>
                    <SelectItem value="Textile Engineering">Textile Engineering</SelectItem>
                    <SelectItem value="Marine Engineering">Marine Engineering</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="AI/ML">AI/ML</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {formData.course === "Others" && (
              <div className="mt-6">
                <Label htmlFor="specifyCourse" className="text-sm font-medium text-foreground">
                  Specify Course *
                </Label>
                <Input
                  id="specifyCourse"
                  name="specifyCourse"
                  type="text"
                  required
                  value={formData.specifyCourse}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Enter your course details"
                />
              </div>
            )}

            <div className="mt-6 flex items-start space-x-2">
              <Checkbox
                id="isCurrentStudent"
                checked={formData.isCurrentStudent}
                onCheckedChange={handleStudentChange}
                className="mt-1"
              />
              <Label htmlFor="isCurrentStudent" className="text-sm text-foreground">
                I confirm I am a current student *
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 px-6 transition-all duration-300"
            >
              {isSubmitting ? "Registering..." : "Register for Free"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;