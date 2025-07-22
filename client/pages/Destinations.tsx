import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import { Star, MapPin, Calendar, Users, Search, Filter, Clock, Camera } from "lucide-react";

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

    const destinations = [
    {
      id: 1,
            name: "Darjeeling",
      description: "Queen of Hills with world-famous tea gardens and breathtaking Himalayan views",
      image: "https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      price: "₹15,000",
      duration: "4 days",
      category: "nature",
      highlights: ["Tiger Hill Sunrise", "Tea Garden Tours", "Darjeeling Railway"],
      bestTime: "Mar - May, Sep - Dec"
    },
    {
      id: 2,
            name: "Sundarbans",
      description: "World's largest mangrove forest and UNESCO World Heritage Site, home to Royal Bengal Tigers",
      image: "https://images.pexels.com/photos/28368468/pexels-photo-28368468.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      price: "₹12,000",
      duration: "3 days",
      category: "nature",
      highlights: ["Tiger Safari", "Mangrove Cruise", "Bird Watching"],
      bestTime: "Oct - Mar"
    },
    {
      id: 3,
            name: "Kolkata",
      description: "City of Joy with rich cultural heritage, colonial architecture, and vibrant street life",
      image: "https://images.pexels.com/photos/6210324/pexels-photo-6210324.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      price: "₹8,000",
      duration: "3 days",
      category: "heritage",
      highlights: ["Victoria Memorial", "Howrah Bridge", "Park Street"],
      bestTime: "Oct - Mar"
    },
    {
      id: 4,
            name: "Digha",
      description: "Popular beach destination with golden sands along the Bay of Bengal coast",
      image: "https://images.pexels.com/photos/20875136/pexels-photo-20875136.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      price: "₹8,000",
      duration: "2 days",
      category: "beach",
      highlights: ["Digha Beach", "Marine Aquarium", "Sunset Views"],
      bestTime: "Oct - Mar"
    },
    {
      id: 5,
            name: "Kalimpong",
      description: "Peaceful hill station with Buddhist monasteries and stunning mountain panoramas",
      image: "https://images.pexels.com/photos/4542265/pexels-photo-4542265.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.5,
      price: "₹10,000",
      duration: "3 days",
      category: "nature",
      highlights: ["Deolo Hill", "Zang Dhok Palri Monastery", "Flower Markets"],
      bestTime: "Mar - Jun, Sep - Dec"
    },
    {
      id: 6,
            name: "Shantiniketan",
      description: "Cultural hub founded by Rabindranath Tagore with artistic heritage and rural charm",
      image: "https://images.pexels.com/photos/29545399/pexels-photo-29545399.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.4,
      price: "₹7,000",
      duration: "2 days",
      category: "heritage",
      highlights: ["Visva Bharati University", "Tagore Museum", "Khoai Mela"],
      bestTime: "Oct - Mar"
    },
    {
      id: 7,
            name: "Murshidabad",
      description: "Historic city with Nawabi heritage, ancient palaces, and architectural marvels",
      image: "https://images.pexels.com/photos/13614815/pexels-photo-13614815.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.3,
      price: "₹9,000",
      duration: "2 days",
      category: "heritage",
      highlights: ["Hazarduari Palace", "Katra Mosque", "Nizamat Imambara"],
      bestTime: "Oct - Mar"
    },
    {
      id: 8,
            name: "Siliguri",
      description: "Gateway to the Himalayas with tea gardens, wildlife, and adventure activities",
      image: "https://images.pexels.com/photos/10939105/pexels-photo-10939105.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.2,
      price: "₹11,000",
      duration: "3 days",
      category: "adventure",
      highlights: ["Mahananda Wildlife Sanctuary", "Tea Gardens", "River Rafting"],
      bestTime: "Oct - May"
    }
  ];

  const categories = [
    { id: "all", name: "All Destinations" },
    { id: "heritage", name: "Heritage & Culture" },
    { id: "nature", name: "Nature & Wildlife" },
    { id: "adventure", name: "Adventure" },
    { id: "beach", name: "Beach & Coastal" }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Explore West Bengal's
            <span className="text-primary block">Amazing Destinations</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        From ancient heritage sites to pristine beaches, discover the incredible diversity of West Bengal
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search destinations..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {filteredDestinations.length} Destinations Found
            </h2>
            <p className="text-gray-600">
                            Discover West Bengal's most captivating places to visit
            </p>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination) => (
              <Link key={destination.id} to={`/destinations/${destination.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{destination.rating}</span>
                  </div>
                  <Badge className="absolute top-3 left-3 capitalize">
                    {destination.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {destination.name}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {destination.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Highlights */}
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      <Camera className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500 font-medium">Top Highlights</span>
                    </div>
                    <div className="space-y-1">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="text-xs text-gray-600">• {highlight}</div>
                      ))}
                    </div>
                  </div>

                  {/* Duration and Best Time */}
                  <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div>
                      <div className="text-xs text-gray-500">Starting from</div>
                      <div className="text-lg font-bold text-primary">{destination.price}</div>
                    </div>
                                                            <Button
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowSignupModal(true);
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                                </CardContent>
              </Card>
              </Link>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <MapPin className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our travel experts create a custom itinerary tailored to your preferences and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => setShowSignupModal(true)}>
              <Users className="mr-2 h-5 w-5" />
              Speak to an Expert
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/tours">Browse All Tours</Link>
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
