import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import { Star, MapPin, Calendar, Users, ArrowRight, Plane, Mountain, Palmtree, Building } from "lucide-react";

export default function Index() {
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
            name: "Darjeeling",
      description: "Queen of Hills with tea gardens and stunning Himalayan views",
      image: "https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      price: "₹15,000",
      duration: "4 days"
    },
    {
            name: "Sundarbans",
      description: "World's largest mangrove forest and home to Royal Bengal Tigers",
      image: "https://images.pexels.com/photos/28368468/pexels-photo-28368468.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      price: "₹12,000",
      duration: "3 days"
    },
    {
            name: "Kalimpong",
      description: "Serene hill station with monasteries and panoramic mountain views",
      image: "https://images.pexels.com/photos/4542265/pexels-photo-4542265.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      price: "₹10,000",
      duration: "3 days"
    },
    {
            name: "Digha",
      description: "Popular beach destination with golden sands and Bay of Bengal views",
      image: "https://images.pexels.com/photos/20875136/pexels-photo-20875136.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      price: "₹8,000",
      duration: "2 days"
    }
  ];

  const features = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Expert Planning",
      description: "Carefully crafted itineraries by local travel experts"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Unique Experiences",
      description: "Authentic local experiences you won't find anywhere else"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Best Accommodations",
      description: "Handpicked hotels and resorts for maximum comfort"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
                        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg?auto=compress&cs=tinysrgb&w=2000')"
          }}
        />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-green-900/40" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-yellow-400/40 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-primary/30">
              🌿 Authentic Bengal Experience
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Beauty of
            <span className="text-primary block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">West Bengal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        Experience the diverse cultures, breathtaking landscapes, and rich heritage that make West Bengal an unforgettable destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link to="/destinations">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link to="/tours">Plan Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Beyond Lenses?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're committed to making your West Bengal adventure seamless, authentic, and unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Destinations
              </h2>
              <p className="text-xl text-gray-600">
                              Discover West Bengal's most captivating destinations
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/destinations">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group hover-lift bg-white/80 backdrop-blur border-white/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2 py-1 flex items-center space-x-1 shadow-lg">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{destination.rating}</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨ Featured
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {destination.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">From</div>
                      <div className="text-lg font-bold text-primary">{destination.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/destinations">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
                </div>
      </section>

            {/* Durga Puja CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 shadow-2xl animate-bounce">
                <div className="text-5xl">🪔</div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                Durga Puja Experience
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Witness Bengal's grandest festival through our dedicated photography experiences
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-8"></div>
            <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-xl transform hover:-translate-y-1 transition-all duration-300" asChild>
              <Link to="/durga-puja">
                <Star className="mr-2 h-5 w-5" />
                Explore Durga Puja
              </Link>
            </Button>
          </div>

                    {/* Enhanced Photography Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fc93e066239bf42de91143d623ddaa86a?format=webp&width=800"
                  alt="Magnificent Durga Puja celebration"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Divine Artistry</h3>
                  <p className="text-lg opacity-90">Through the Lens of Bengal's Culture</p>
                </div>
                <div className="absolute top-6 right-6 bg-orange-500/80 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-white font-medium text-sm">Featured</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📸</div>
                  <h3 className="text-xl font-bold mb-2">Photography Tours</h3>
                  <p className="text-sm opacity-90">Guided cultural experiences</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏛️</div>
                  <h3 className="text-xl font-bold mb-2">Heritage Sites</h3>
                  <p className="text-sm opacity-90">Ancient Bonedi Baris</p>
                </CardContent>
              </Card>
                        </div>
          </div>
        </div>
      </section>

      {/* Heritage Pujas CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4 shadow-xl">
              <div className="text-4xl">🏛️</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Heritage Pujas Experience
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover the aristocratic Bonedi Baris and their 300-year-old Durga Puja traditions
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-xl transform hover:-translate-y-1 transition-all duration-300" asChild>
            <Link to="/heritage-pujas">
              <Building className="mr-2 h-5 w-5" />
              Explore Heritage Houses
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
                        Ready to Start Your West Bengal Adventure?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
                        Let our travel experts create a personalized itinerary just for you. From the majestic Darjeeling hills to the mystical Sundarbans, your perfect West Bengal journey awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-3" onClick={() => setShowSignupModal(true)}>
              <MapPin className="mr-2 h-5 w-5" />
              Plan My Trip
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/tours">Browse Tours</Link>
            </Button>
          </div>
        </div>
      </section>

            {/* Photography Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Photography Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional photography services to capture your West Bengal journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 group border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Group Tours</CardTitle>
                <CardDescription>Photography tours with fellow enthusiasts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Star className="h-3 w-3 text-green-500 mr-2" />Guided photo walks</li>
                  <li className="flex items-center"><Star className="h-3 w-3 text-green-500 mr-2" />Professional tips</li>
                  <li className="flex items-center"><Star className="h-3 w-3 text-green-500 mr-2" />Cultural insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Private Sessions</CardTitle>
                <CardDescription>Personalized one-on-one photography</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Star className="h-3 w-3 text-emerald-500 mr-2" />Custom itinerary</li>
                  <li className="flex items-center"><Star className="h-3 w-3 text-emerald-500 mr-2" />Personal guidance</li>
                  <li className="flex items-center"><Star className="h-3 w-3 text-emerald-500 mr-2" />Exclusive access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Special Events</CardTitle>
                <CardDescription>Festival and celebration coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Star className="h-3 w-3 text-teal-500 mr-2" />Festival coverage</li>
                  <li className="flex items-center"><Star className="h-3 w-3 text-teal-500 mr-2" />Cultural events</li>
                  <li className="flex items-center"><Star className="h-3 w-3 text-teal-500 mr-2" />Special occasions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-xl transform hover:-translate-y-1 transition-all duration-300" onClick={() => setShowSignupModal(true)}>
              Book Photography Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
                            Real experiences from real clients across West Bengal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
              {
                name: "Priya Banerjee",
                location: "Kolkata, West Bengal",
                quote: "Utsab's photography captured the true essence of our family's Bonedi Bari Durga Puja. Every frame tells our heritage story beautifully!",
                rating: 5
              },
              {
                name: "Rajesh Chatterjee",
                location: "Darjeeling, West Bengal",
                quote: "From our tea garden shoots to the monastery documentation in Kalimpong, Utsab's work exceeded all expectations. Truly authentic!",
                rating: 5
              },
              {
                name: "Ananya Ghosh",
                location: "Shantiniketan, West Bengal",
                quote: "Professional, passionate, and deeply connected to Bengali culture. Utsab made our cultural event documentation absolutely memorable.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
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
    </>
  );
}
