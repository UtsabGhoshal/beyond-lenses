import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import { 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Camera, 
  Heart, 
  Clock,
  Sparkles,
  Crown,
  Music,
  Palette,
  Eye,
  ArrowRight,
  Award,
  Building,
  Brush,
  Hammer,
  HandHeart,
  GraduationCap,
  Coffee,
  Sunrise,
  Sunset,
  ImageIcon
} from "lucide-react";

export default function DurgaPuja() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState("morning");

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const tourPackages = [
    {
      id: "morning",
      name: "Dawn at Kumartuli",
      time: "6:00 AM - 10:00 AM",
      duration: "4 hours",
            price: "₹1,000",
      groupSize: "6-8 people",
      icon: <Sunrise className="h-6 w-6" />,
      highlights: ["Early morning light", "Artisans at work", "Fresh clay preparation", "Traditional techniques"],
      description: "Experience the magical dawn hours when master craftsmen begin their daily work creating divine idols.",
      includes: ["Professional guide", "Tea & breakfast", "Clay workshop", "Photo tips"]
    },
    {
      id: "afternoon",
      name: "Artisan Masterclass",
      time: "2:00 PM - 6:00 PM", 
      duration: "4 hours",
      price: "₹3,000",
      groupSize: "4-6 people",
      icon: <Brush className="h-6 w-6" />,
      highlights: ["Hands-on workshop", "Master artisan interaction", "Detailed sculpting", "Cultural stories"],
      description: "Immerse yourself in the art of idol making with hands-on workshops led by master craftsmen.",
      includes: ["Clay sculpting", "Tools provided", "Artisan interaction", "Cultural stories"]
    },
    {
      id: "evening",
      name: "Golden Hour Documentation",
      time: "4:00 PM - 8:00 PM",
      duration: "4 hours", 
      price: "₹2,800",
      groupSize: "5-7 people",
      icon: <Sunset className="h-6 w-6" />,
      highlights: ["Golden hour photography", "Finishing touches", "Community interactions", "Traditional music"],
      description: "Capture the golden hour magic as artisans put finishing touches on magnificent creations.",
      includes: ["Photography tips", "Professional guidance", "Cultural program", "Evening tea"]
    }
  ];

  const masterArtisans = [
    {
      name: "Kartick Pal",
      experience: "45+ years",
      specialty: "Traditional Durga idols",
            image: "https://images.pexels.com/photos/4706130/pexels-photo-4706130.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Padma Shri recipient",
      description: "Master craftsman known for preserving ancient sculpting techniques"
    },
    {
            name: "Sanatan Rudra Pal", 
      experience: "35+ years",
      specialty: "Modern artistic interpretations",
            image: "https://images.pexels.com/photos/13751945/pexels-photo-13751945.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "National Award winner",
      description: "Pioneer in blending traditional methods with contemporary themes"
    },
    {
      name: "Mintu Pal",
      experience: "30+ years", 
      specialty: "Intricate facial expressions",
            image: "https://images.pexels.com/photos/22823/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      achievement: "State Heritage Artist",
      description: "Renowned for creating the most expressive and divine facial features"
    }
  ];

  const kumartuliStages = [
    {
      stage: "Clay Preparation",
      description: "Sacred Ganga clay mixed with straw and cow dung",
      timing: "Early Morning",
            photo: "https://images.pexels.com/photos/6611212/pexels-photo-6611212.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: "Witness the ancient process of preparing the perfect clay mixture using traditional methods passed down through generations."
    },
    {
      stage: "Frame Creation", 
      description: "Bamboo and straw framework construction",
      timing: "Morning",
            photo: "https://images.pexels.com/photos/5829905/pexels-photo-5829905.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: "See skilled artisans create the skeletal framework that will support the magnificent idol using eco-friendly materials."
    },
    {
      stage: "Sculpting",
      description: "Detailed carving and shaping of divine forms",
      timing: "Afternoon",
            photo: "https://images.pexels.com/photos/13751945/pexels-photo-13751945.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: "Watch master sculptors breathe life into clay, creating intricate details that make each idol unique and divine."
    },
    {
      stage: "Painting & Decoration",
      description: "Vibrant colors and ornate decorations",
      timing: "Evening",
            photo: "https://images.pexels.com/photos/9462047/pexels-photo-9462047.jpeg?auto=compress&cs=tinysrgb&w=400",
      details: "Experience the transformation as artists apply traditional colors and decorations, bringing divine beauty to life."
    }
  ];

  const statistics = [
    { number: "300+", label: "Master Artisans", icon: <Users className="h-6 w-6" /> },
    { number: "200+", label: "Years of Tradition", icon: <Crown className="h-6 w-6" /> },
    { number: "1000+", label: "Idols Created Annually", icon: <Building className="h-6 w-6" /> },
    { number: "4", label: "Generations of Craftsmen", icon: <GraduationCap className="h-6 w-6" /> }
  ];

  const selectedTourData = tourPackages.find(tour => tour.id === selectedTour);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
                        backgroundImage: "url('https://images.pexels.com/photos/4706130/pexels-photo-4706130.jpeg?auto=compress&cs=tinysrgb&w=2000')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/70 to-brown-900/80" />
        
        {/* Floating Clay Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-6 h-6 text-amber-400 animate-bounce">🏺</div>
          <div className="absolute top-40 right-32 w-8 h-8 text-orange-400 animate-pulse">🎨</div>
          <div className="absolute bottom-40 left-40 w-6 h-6 text-yellow-400 animate-ping">✋</div>
          <div className="absolute bottom-20 right-20 w-7 h-7 text-amber-300 animate-bounce" style={{animationDelay: '0.5s'}}>🧑‍🎨</div>
          <div className="absolute top-60 left-10 w-5 h-5 text-orange-300 animate-pulse" style={{animationDelay: '1s'}}>⚱️</div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <Badge className="mb-6 bg-amber-500/20 border-amber-400/30 text-amber-200 backdrop-blur-sm px-6 py-3 text-lg">
              🏺 Kumartuli Heritage Experience 🏺
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Kumartuli
              </span>
              <span className="block text-4xl md:text-5xl mt-4 text-white/90">
                Photography Tours
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-amber-100 max-w-4xl mx-auto leading-relaxed">
              Document the ancient art of idol making in the historic potter's quarter where divine sculptures come to life
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-amber-300 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-amber-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-amber-600 hover:bg-amber-700 shadow-xl transform hover:-translate-y-1 transition-all duration-300" asChild>
              <Link to="#tours">
                <Camera className="mr-2 h-5 w-5" />
                Explore Photo Tours
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-amber-900 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link to="/featured-pandals">
                <Building className="mr-2 h-5 w-5" />
                View Featured Pandals
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kumartuli Process Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Sacred Art Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the ancient journey from sacred clay to divine sculpture through four timeless stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kumartuliStages.map((stage, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-amber-200 hover:border-amber-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={stage.photo}
                    alt={stage.stage}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="outline" className="bg-black/30 text-white border-white/30 mb-2">
                      {stage.timing}
                    </Badge>
                    <h3 className="font-bold text-lg">{stage.stage}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm mb-3">{stage.description}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{stage.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Tour Packages */}
      <section id="tours" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Photography Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your perfect Kumartuli photography experience with expert guidance and cultural immersion
            </p>
          </div>

          {/* Tour Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tourPackages.map((tour) => (
              <Button
                key={tour.id}
                variant={selectedTour === tour.id ? "default" : "outline"}
                onClick={() => setSelectedTour(tour.id)}
                className={`${selectedTour === tour.id 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                  : 'hover:bg-amber-50'
                } transition-all duration-300 flex items-center gap-2`}
              >
                {tour.icon}
                {tour.name}
              </Button>
            ))}
          </div>

          {/* Selected Tour Details */}
          {selectedTourData && (
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-amber-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedTourData.icon}
                      <div>
                        <CardTitle className="text-2xl">{selectedTourData.name}</CardTitle>
                        <CardDescription className="text-amber-100">{selectedTourData.time}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{selectedTourData.price}</div>
                      <div className="text-sm text-amber-200">per person</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedTourData.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{selectedTourData.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{selectedTourData.groupSize}</div>
                      <div className="text-sm text-gray-600">Group Size</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Camera className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">All Levels</div>
                      <div className="text-sm text-gray-600">Photography</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tour Highlights</h4>
                      <ul className="space-y-2">
                        {selectedTourData.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <Sparkles className="h-4 w-4 text-amber-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {selectedTourData.includes.map((item, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <Award className="h-4 w-4 text-amber-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-xl transform hover:-translate-y-1 transition-all duration-300" onClick={() => setShowSignupModal(true)}>
                      <Calendar className="mr-2 h-5 w-5" />
                      Book This Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Master Artisans Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Crown className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Master Artisans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from legendary craftsmen who have dedicated their lives to preserving this sacred art form
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masterArtisans.map((artisan, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-amber-200 text-center">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{artisan.name}</h3>
                  <Badge variant="outline" className="mb-3 text-amber-700 border-amber-300">
                    {artisan.experience}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-3">{artisan.specialty}</p>
                  <div className="bg-amber-100 rounded-lg p-3 mb-3">
                    <Award className="h-4 w-4 text-amber-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-amber-800">{artisan.achievement}</div>
                  </div>
                  <p className="text-xs text-gray-500">{artisan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonedi Bari Heritage Link */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4 shadow-xl">
              <Crown className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Explore Heritage Pujas
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Complete your cultural journey by visiting the aristocratic Bonedi Baris where these magnificent idols find their divine home
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-xl transform hover:-translate-y-1 transition-all duration-300" asChild>
            <Link to="/heritage-pujas">
              <Building className="mr-2 h-5 w-5" />
              Visit Heritage Houses
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <HandHeart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Preserve Sacred Artistry
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join us in documenting and preserving this ancient art form for future generations. 
            Every photograph helps tell the story of Bengal's most sacred tradition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 shadow-xl" onClick={() => setShowSignupModal(true)}>
              <Camera className="mr-2 h-5 w-5" />
              Book Photography Tour
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-amber-600 backdrop-blur-sm" asChild>
              <Link to="/contact">
                <Users className="mr-2 h-5 w-5" />
                Plan Custom Experience
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
                onSwitchToLogin={handleSwitchToLogin}
      />
    </Layout>
  );
}
