import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Camera, 
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  Sparkles,
  Globe,
  Gift,
  Target,
  Zap,
  Phone,
  Mail,
  Send
} from "lucide-react";

export default function Tours() {
  const [activeTab, setActiveTab] = useState<"group" | "custom">("group");
  const [customForm, setCustomForm] = useState({
    name: "",
    email: "",
    phone: "",
    duration: "",
    budget: "",
    interests: "",
    groupSize: "",
    preferredDates: "",
    specialRequests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const groupTours = [
    {
      id: 1,
      title: "Durga Puja Heritage Tour",
      description: "Experience the grandeur of Bonedi Bari Durga Pujas across North and Central Kolkata",
      image: "https://images.pexels.com/photos/6000942/pexels-photo-6000942.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 Days",
      groupSize: "8-12 People",
      price: "₹18,000",
      departureDates: ["Oct 15, 2024", "Oct 18, 2024", "Oct 21, 2024"],
      highlights: [
        "Visit 15+ Heritage Bonedi Baris",
        "Professional photography guidance",
        "Traditional Bengali meals",
        "Cultural performances",
        "Expert local guide"
      ],
      includes: ["Accommodation", "Meals", "Transportation", "Guide", "Photography Tips"],
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      title: "Darjeeling Tea Garden Experience",
      description: "Explore the scenic tea gardens and monasteries of the Queen of Hills",
      image: "https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "5 Days",
      groupSize: "6-10 People", 
      price: "₹25,000",
      departureDates: ["Nov 5, 2024", "Nov 12, 2024", "Nov 19, 2024"],
      highlights: [
        "Sunrise at Tiger Hill",
        "Tea garden photography",
        "Monastery visits", 
        "Toy train experience",
        "Local cultural immersion"
      ],
      includes: ["Hill Station Stay", "All Meals", "Sightseeing", "Photography Workshop", "Cultural Guide"],
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: "Sundarbans Wildlife Expedition",
      description: "Adventure into the mysterious mangrove forests and spot the Royal Bengal Tiger",
      image: "https://images.pexels.com/photos/28368468/pexels-photo-28368468.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3 Days",
      groupSize: "10-15 People",
      price: "₹15,000", 
      departureDates: ["Dec 2, 2024", "Dec 9, 2024", "Dec 16, 2024"],
      highlights: [
        "Tiger spotting safari",
        "Mangrove boat rides",
        "Bird watching",
        "Local fisherman villages",
        "Wildlife photography"
      ],
      includes: ["Boat Safari", "Forest Lodge", "All Meals", "Wildlife Guide", "Photography Support"],
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      title: "Cultural Kolkata Walking Tour",
      description: "Deep dive into Kolkata's rich heritage, street food, and artistic culture",
      image: "https://images.pexels.com/photos/6210324/pexels-photo-6210324.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2 Days",
      groupSize: "12-16 People",
      price: "₹8,000",
      departureDates: ["Every Weekend"],
      highlights: [
        "Heritage building tours",
        "Street food exploration", 
        "Art galleries and museums",
        "Local market visits",
        "Cultural storytelling"
      ],
      includes: ["Walking Tours", "Food Tastings", "Museum Entries", "Cultural Guide", "Photography"],
      rating: 4.6,
      reviews: 203
    }
  ];

  const handleCustomFormChange = (field: string, value: string) => {
    setCustomForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setCustomForm({
        name: "",
        email: "",
        phone: "",
        duration: "",
        budget: "",
        interests: "",
        groupSize: "",
        preferredDates: "",
        specialRequests: ""
      });
    }, 4000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 shadow-2xl">
                <Globe className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Explore West Bengal
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose your perfect adventure - Join our curated group tours or let us design 
              a personalized experience tailored just for you.
            </p>

            {/* Tour Type Selector */}
            <div className="inline-flex bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-green-200">
              <Button
                variant={activeTab === "group" ? "default" : "ghost"}
                onClick={() => setActiveTab("group")}
                className={`rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                  activeTab === "group" 
                    ? "bg-green-600 text-white shadow-lg" 
                    : "text-green-700 hover:bg-green-50"
                }`}
              >
                <Users className="mr-2 h-5 w-5" />
                Group Tours
              </Button>
              <Button
                variant={activeTab === "custom" ? "default" : "ghost"}
                onClick={() => setActiveTab("custom")}
                className={`rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                  activeTab === "custom" 
                    ? "bg-green-600 text-white shadow-lg" 
                    : "text-green-700 hover:bg-green-50"
                }`}
              >
                <Target className="mr-2 h-5 w-5" />
                Custom Tours
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Group Tours Section */}
      {activeTab === "group" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <Sparkles className="inline-block mr-3 h-8 w-8 text-green-600" />
                Group Tours with Fixed Departures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join fellow travelers on expertly curated journeys across West Bengal. 
                All tours include professional photography guidance and cultural insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {groupTours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white border-green-200/30">
                  {/* Tour Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white">
                        <Camera className="h-3 w-3 mr-1" />
                        Photo Tour
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/30">
                      <div className="flex items-center gap-1 text-white text-sm font-medium">
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        {tour.rating} ({tour.reviews})
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{tour.title}</h3>
                      <p className="text-lg opacity-90">{tour.duration} • {tour.groupSize}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{tour.description}</p>

                    {/* Tour Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-green-600" />
                        <span>{tour.groupSize}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="h-4 w-4 text-green-600 mr-2" />
                        Tour Highlights
                      </h4>
                      <div className="space-y-2">
                        {tour.highlights.slice(0, 3).map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Departure Dates */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Calendar className="h-4 w-4 text-green-600 mr-2" />
                        Departure Dates
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.departureDates.map((date, index) => (
                          <Badge key={index} variant="outline" className="border-green-300 text-green-700">
                            {date}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price and Booking */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="text-2xl font-bold text-green-600">{tour.price}</div>
                        <div className="text-xs text-gray-500">per person</div>
                      </div>
                      <Button 
                        size="lg" 
                        className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Group Tour Benefits */}
            <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                <Gift className="inline-block mr-3 h-6 w-6 text-green-600" />
                Why Choose Our Group Tours?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Small Groups</h4>
                  <p className="text-gray-600 text-sm">Intimate group sizes for personalized attention and better experiences</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Photography Focus</h4>
                  <p className="text-gray-600 text-sm">Professional photography guidance to capture the best moments</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cultural Immersion</h4>
                  <p className="text-gray-600 text-sm">Deep local insights and authentic cultural experiences</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Custom Tours Section */}
      {activeTab === "custom" && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <Target className="inline-block mr-3 h-8 w-8 text-green-600" />
                Design Your Perfect Tour
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tell us your preferences, and we'll create a personalized West Bengal experience 
                tailored specifically to your interests, budget, and schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Custom Tour Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-2xl border-green-200/50">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                    <CardTitle className="text-2xl">Customize Your Journey</CardTitle>
                    <CardDescription className="text-green-100">
                      Fill out your preferences and we'll design the perfect tour for you
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for your interest! Our travel experts will contact you within 24 hours 
                          with a personalized tour proposal.
                        </p>
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                          <p className="text-green-800 text-sm">
                            📧 Confirmation email sent to {customForm.email}<br />
                            📞 Expect a call at {customForm.phone}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleCustomSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              type="text"
                              placeholder="Your full name"
                              value={customForm.name}
                              onChange={(e) => handleCustomFormChange("name", e.target.value)}
                              required
                              className="mt-2 border-green-300 focus:border-green-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={customForm.email}
                              onChange={(e) => handleCustomFormChange("email", e.target.value)}
                              required
                              className="mt-2 border-green-300 focus:border-green-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              value={customForm.phone}
                              onChange={(e) => handleCustomFormChange("phone", e.target.value)}
                              required
                              className="mt-2 border-green-300 focus:border-green-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="groupSize">Group Size</Label>
                            <select
                              id="groupSize"
                              value={customForm.groupSize}
                              onChange={(e) => handleCustomFormChange("groupSize", e.target.value)}
                              className="mt-2 w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              <option value="">Select group size</option>
                              <option value="1-2">1-2 People (Couple/Solo)</option>
                              <option value="3-5">3-5 People (Family)</option>
                              <option value="6-10">6-10 People (Friends)</option>
                              <option value="10+">10+ People (Large Group)</option>
                            </select>
                          </div>
                        </div>

                        {/* Tour Preferences */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="duration">Tour Duration</Label>
                            <select
                              id="duration"
                              value={customForm.duration}
                              onChange={(e) => handleCustomFormChange("duration", e.target.value)}
                              className="mt-2 w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              <option value="">Select duration</option>
                              <option value="1-2 days">1-2 Days (Weekend)</option>
                              <option value="3-5 days">3-5 Days (Short Trip)</option>
                              <option value="6-7 days">6-7 Days (Week Long)</option>
                              <option value="8+ days">8+ Days (Extended)</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="budget">Budget Range (per person)</Label>
                            <select
                              id="budget"
                              value={customForm.budget}
                              onChange={(e) => handleCustomFormChange("budget", e.target.value)}
                              className="mt-2 w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              <option value="">Select budget range</option>
                              <option value="5000-10000">₹5,000 - ₹10,000</option>
                              <option value="10000-20000">₹10,000 - ₹20,000</option>
                              <option value="20000-35000">₹20,000 - ₹35,000</option>
                              <option value="35000+">₹35,000+</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="preferredDates">Preferred Dates</Label>
                          <Input
                            id="preferredDates"
                            type="text"
                            placeholder="e.g., December 15-20, 2024 or Flexible"
                            value={customForm.preferredDates}
                            onChange={(e) => handleCustomFormChange("preferredDates", e.target.value)}
                            className="mt-2 border-green-300 focus:border-green-500"
                          />
                        </div>

                        <div>
                          <Label htmlFor="interests">Interests & Preferences *</Label>
                          <Textarea
                            id="interests"
                            placeholder="Tell us what you're interested in: Heritage sites, Photography, Culture, Nature, Food, Adventure, etc."
                            value={customForm.interests}
                            onChange={(e) => handleCustomFormChange("interests", e.target.value)}
                            required
                            className="mt-2 min-h-24 border-green-300 focus:border-green-500"
                          />
                        </div>

                        <div>
                          <Label htmlFor="specialRequests">Special Requirements</Label>
                          <Textarea
                            id="specialRequests"
                            placeholder="Any special requirements, accessibility needs, dietary restrictions, accommodation preferences, etc."
                            value={customForm.specialRequests}
                            onChange={(e) => handleCustomFormChange("specialRequests", e.target.value)}
                            className="mt-2 min-h-20 border-green-300 focus:border-green-500"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full text-lg py-3 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Creating Your Tour...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Get Custom Tour Proposal
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Custom Tour Benefits */}
              <div className="space-y-6">
                <Card className="border-green-200/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Sparkles className="h-5 w-5 text-green-600 mr-2" />
                      Custom Tour Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Completely Personalized</h4>
                        <p className="text-sm text-gray-600">Every detail tailored to your preferences</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Flexible Scheduling</h4>
                        <p className="text-sm text-gray-600">Choose your own dates and pace</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Private Guide</h4>
                        <p className="text-sm text-gray-600">Dedicated local expert just for you</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Budget Control</h4>
                        <p className="text-sm text-gray-600">Options within your budget range</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Clock className="h-5 w-5 text-green-600 mr-2" />
                      How It Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Submit Your Preferences</h4>
                        <p className="text-sm text-gray-600">Fill out the form with your requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Expert Consultation</h4>
                        <p className="text-sm text-gray-600">Our team contacts you within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Custom Proposal</h4>
                        <p className="text-sm text-gray-600">Receive detailed itinerary and pricing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                      <div>
                        <h4 className="font-medium text-gray-900">Book & Enjoy</h4>
                        <p className="text-sm text-gray-600">Confirm and start your adventure</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-4">Our travel experts are here to assist you</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-green-700">
                        <Phone className="h-4 w-4" />
                        <span>+91 90889 93780</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-green-700">
                        <Mail className="h-4 w-4" />
                        <span>utsab.ghoshal04@gmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your West Bengal Adventure?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Whether you choose a group tour or a custom experience, we're here to make 
            your journey through West Bengal unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3 bg-white text-green-700 hover:bg-green-50 shadow-xl"
              onClick={() => setActiveTab("group")}
            >
              <Users className="mr-2 h-5 w-5" />
              Browse Group Tours
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-green-700 backdrop-blur-sm"
              onClick={() => setActiveTab("custom")}
            >
              <Target className="mr-2 h-5 w-5" />
              Design Custom Tour
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
