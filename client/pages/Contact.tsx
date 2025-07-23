import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock, 
  Globe, 
  Camera, 
  Heart,
  CheckCircle,
  Star
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 90889 93780",
      description: "Call me for immediate response",
      color: "from-green-500 to-green-600",
      action: "tel:+919088993780"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "utsab.ghoshal04@gmail.com",
      description: "Send me your project details",
      color: "from-blue-500 to-blue-600",
      action: "mailto:utsab.ghoshal04@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "84, Subash Sarani, Birati",
      description: "Kolkata, India 700051",
      color: "from-purple-500 to-purple-600",
      action: "https://maps.google.com/?q=84+Subash+Sarani+Birati+Kolkata+700051"
    }
  ];

  const services = [
    "Photography Sessions",
    "Cultural Documentation",
    "Event Coverage",
    "Heritage Photography",
    "Portfolio Creation",
    "Commercial Projects"
  ];

  const faqs = [
    {
      question: "What type of photography do you specialize in?",
      answer: "I specialize in cultural documentation, particularly Durga Puja festivals, heritage architecture, and Bengali cultural events."
    },
    {
      question: "How far do you travel for shoots?",
      answer: "I primarily cover West Bengal region, with extensive experience across Kolkata and surrounding areas."
    },
    {
      question: "What's your approach to photography?",
      answer: "I focus on authentic storytelling, capturing genuine emotions and cultural significance rather than just staged shots."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              📞 Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Create Something
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Beautiful Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to capture your special moments or document cultural heritage? 
              I'm here to bring your vision to life through authentic storytelling.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover-lift bg-white/80 backdrop-blur border-white/50">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-gray-600 mb-4">{info.description}</p>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => window.open(info.action, '_blank')}
                    className="hover:bg-primary hover:text-white transition-colors"
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Me a Message</h2>
                <p className="text-gray-600">
                  Tell me about your project, and I'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="serviceType">Service Type</Label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => handleInputChange("serviceType", e.target.value)}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Brief subject of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, requirements, timeline, and any specific details..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-3 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Services */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-primary" />
                    Services I Offer
                  </CardTitle>
                  <CardDescription>
                    Specialized photography and documentation services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Response Time</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">Within 24 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Project Timeline</span>
                    <span className="text-gray-600">Flexible scheduling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Emergency Coverage</span>
                    <span className="text-gray-600">Available on request</span>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether it's documenting a special event or preserving cultural heritage, 
            I'm here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3 bg-white text-primary hover:bg-gray-100"
              onClick={() => window.open("tel:+919088993780")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open("mailto:utsab.ghoshal04@gmail.com")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
