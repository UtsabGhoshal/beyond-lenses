import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
  Clock, 
  Camera, 
  Users, 
  ArrowLeft,
  CheckCircle,
  Utensils,
  Bed,
  Car,
  Heart,
  Share2,
  Download
} from "lucide-react";

export default function DestinationDetail() {
  const { id } = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [activeDay, setActiveDay] = useState(1);

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  // Sample destination data - In real app, this would come from an API
  const destinationsData = {
    1: {
      id: 1,
      name: "Darjeeling",
      description: "Queen of Hills with world-famous tea gardens and breathtaking Himalayan views",
      image: "https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg?auto=compress&cs=tinysrgb&w=1200",
      rating: 4.9,
      price: "₹15,000",
      duration: "4 days",
      category: "nature",
      highlights: ["Tiger Hill Sunrise", "Tea Garden Tours", "Darjeeling Railway", "Peace Pagoda", "Observatory Hill"],
      bestTime: "Mar - May, Sep - Dec",
      gallery: [
        "https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/15031397/pexels-photo-15031397.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Local Exploration",
          activities: [
            { time: "09:00 AM", title: "Arrival in Darjeeling", description: "Check-in at hotel and freshen up", icon: <Car className="h-4 w-4" /> },
            { time: "11:00 AM", title: "Mall Road Walk", description: "Explore the bustling Mall Road and local markets", icon: <MapPin className="h-4 w-4" /> },
            { time: "01:00 PM", title: "Lunch", description: "Traditional Tibetan cuisine at Glenary's", icon: <Utensils className="h-4 w-4" /> },
            { time: "03:00 PM", title: "Observatory Hill", description: "Visit the sacred hilltop with panoramic views", icon: <Camera className="h-4 w-4" /> },
            { time: "06:00 PM", title: "Evening Tea", description: "Experience authentic Darjeeling tea at a local tea house", icon: <Utensils className="h-4 w-4" /> }
          ]
        },
        {
          day: 2,
          title: "Tiger Hill Sunrise & Tea Gardens",
          activities: [
            { time: "04:00 AM", title: "Tiger Hill Sunrise", description: "Early morning trip to witness the spectacular sunrise over Kanchenjunga", icon: <Camera className="h-4 w-4" /> },
            { time: "08:00 AM", title: "Breakfast", description: "Hearty breakfast at Tiger Hill top", icon: <Utensils className="h-4 w-4" /> },
            { time: "10:00 AM", title: "Tea Garden Tour", description: "Visit Happy Valley Tea Estate and learn about tea processing", icon: <MapPin className="h-4 w-4" /> },
            { time: "01:00 PM", title: "Lunch", description: "Local Bengali cuisine", icon: <Utensils className="h-4 w-4" /> },
            { time: "03:00 PM", title: "Darjeeling Railway", description: "Joy ride on the famous Toy Train", icon: <Car className="h-4 w-4" /> },
            { time: "07:00 PM", title: "Dinner", description: "Special dinner with local folk music", icon: <Utensils className="h-4 w-4" /> }
          ]
        },
        {
          day: 3,
          title: "Cultural Immersion & Adventure",
          activities: [
            { time: "09:00 AM", title: "Peace Pagoda", description: "Visit the Japanese Peace Pagoda for meditation and views", icon: <MapPin className="h-4 w-4" /> },
            { time: "11:00 AM", title: "Himalayan Mountaineering Institute", description: "Explore mountaineering history and Tenzing Rock", icon: <Camera className="h-4 w-4" /> },
            { time: "01:00 PM", title: "Lunch", description: "Traditional Nepali thali", icon: <Utensils className="h-4 w-4" /> },
            { time: "03:00 PM", title: "Rock Garden & Ganga Maya Park", description: "Nature walks and waterfall views", icon: <MapPin className="h-4 w-4" /> },
            { time: "06:00 PM", title: "Cultural Show", description: "Traditional dance performance", icon: <Users className="h-4 w-4" /> },
            { time: "08:00 PM", title: "Farewell Dinner", description: "Special dinner with mountain views", icon: <Utensils className="h-4 w-4" /> }
          ]
        },
        {
          day: 4,
          title: "Departure & Souvenir Shopping",
          activities: [
            { time: "09:00 AM", title: "Souvenir Shopping", description: "Last-minute shopping for tea, handicrafts, and woolens", icon: <MapPin className="h-4 w-4" /> },
            { time: "11:00 AM", title: "Check-out", description: "Hotel check-out and luggage arrangement", icon: <Bed className="h-4 w-4" /> },
            { time: "12:00 PM", title: "Departure", description: "Departure to next destination or home", icon: <Car className="h-4 w-4" /> }
          ]
        }
      ],
      includes: [
        "3 nights accommodation in heritage hotel",
        "All meals (breakfast, lunch, dinner)",
        "Tiger Hill sunrise excursion",
        "Tea garden tours with tasting",
        "Darjeeling Toy Train ride",
        "All sightseeing as per itinerary",
        "Professional tour guide",
        "All transportation"
      ],
      excludes: [
        "Personal expenses and tips",
        "Travel insurance",
        "Camera fees at monuments",
        "Any additional activities not mentioned"
      ]
    },
    2: {
      id: 2,
      name: "Sundarbans",
      description: "World's largest mangrove forest and UNESCO World Heritage Site, home to Royal Bengal Tigers",
      image: "https://images.pexels.com/photos/28368468/pexels-photo-28368468.jpeg?auto=compress&cs=tinysrgb&w=1200",
      rating: 4.8,
      price: "₹12,000",
      duration: "3 days",
      category: "nature",
      highlights: ["Tiger Safari", "Mangrove Cruise", "Bird Watching", "Village Tours", "Fishing Experience"],
      bestTime: "Oct - Mar",
      gallery: [
        "https://images.pexels.com/photos/28368468/pexels-photo-28368468.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/16058188/pexels-photo-16058188.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/15647089/pexels-photo-15647089.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      itinerary: [
        {
          day: 1,
          title: "Journey to Sundarbans",
          activities: [
            { time: "06:00 AM", title: "Departure from Kolkata", description: "Early morning departure by AC vehicle", icon: <Car className="h-4 w-4" /> },
            { time: "10:00 AM", title: "Godkhali Jetty", description: "Board boat for Sundarbans journey", icon: <Car className="h-4 w-4" /> },
            { time: "12:00 PM", title: "River Cruise", description: "Scenic cruise through mangrove channels", icon: <Camera className="h-4 w-4" /> },
            { time: "02:00 PM", title: "Lunch on Boat", description: "Fresh seafood lunch during cruise", icon: <Utensils className="h-4 w-4" /> },
            { time: "04:00 PM", title: "Sajnekhali Bird Sanctuary", description: "Bird watching and nature walk", icon: <Camera className="h-4 w-4" /> },
            { time: "07:00 PM", title: "Accommodation Check-in", description: "Check-in at eco-resort", icon: <Bed className="h-4 w-4" /> }
          ]
        },
        {
          day: 2,
          title: "Tiger Safari & Mangrove Exploration",
          activities: [
            { time: "05:30 AM", title: "Tiger Safari", description: "Early morning tiger spotting cruise", icon: <Camera className="h-4 w-4" /> },
            { time: "08:00 AM", title: "Breakfast", description: "Hot breakfast on boat", icon: <Utensils className="h-4 w-4" /> },
            { time: "10:00 AM", title: "Dobanki Watch Tower", description: "Canopy walk and wildlife spotting", icon: <MapPin className="h-4 w-4" /> },
            { time: "01:00 PM", title: "Lunch", description: "Traditional Bengali fish curry", icon: <Utensils className="h-4 w-4" /> },
            { time: "03:00 PM", title: "Village Tour", description: "Visit local fishing village", icon: <Users className="h-4 w-4" /> },
            { time: "06:00 PM", title: "Sunset Cruise", description: "Beautiful sunset over the delta", icon: <Camera className="h-4 w-4" /> }
          ]
        },
        {
          day: 3,
          title: "Cultural Experience & Return",
          activities: [
            { time: "07:00 AM", title: "Fishing Experience", description: "Try traditional fishing with locals", icon: <Users className="h-4 w-4" /> },
            { time: "09:00 AM", title: "Bonnie Camp", description: "Final wildlife spotting opportunity", icon: <Camera className="h-4 w-4" /> },
            { time: "12:00 PM", title: "Lunch", description: "Farewell lunch with local specialties", icon: <Utensils className="h-4 w-4" /> },
            { time: "02:00 PM", title: "Return Journey", description: "Boat journey back to Godkhali", icon: <Car className="h-4 w-4" /> },
            { time: "06:00 PM", title: "Arrival in Kolkata", description: "Return to Kolkata by evening", icon: <Car className="h-4 w-4" /> }
          ]
        }
      ],
      includes: [
        "2 nights accommodation in eco-resort",
        "All meals during the tour",
        "Boat safari and cruises",
        "Professional naturalist guide",
        "All forest permits and entry fees",
        "Transportation from Kolkata",
        "Bird watching equipment"
      ],
      excludes: [
        "Personal expenses",
        "Travel insurance",
        "Camera fees",
        "Tips for guides and staff"
      ]
    }
    // Add more destinations as needed...
  };

  const destination = destinationsData[id as keyof typeof destinationsData];

  if (!destination) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
            <Button asChild>
              <Link to="/destinations">Back to Destinations</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${destination.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Button variant="outline" size="sm" className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white hover:text-gray-900" asChild>
              <Link to="/destinations">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Destinations
              </Link>
            </Button>
            
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary/80 text-white capitalize text-sm px-3 py-1">
                    {destination.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {destination.name}
                </h1>
                
                <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center gap-6 mt-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Best: {destination.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>All Ages</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:text-right">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-sm text-gray-200 mb-2">Starting from</div>
                  <div className="text-3xl font-bold text-white mb-4">{destination.price}</div>
                  <div className="flex gap-3">
                    <Button className="bg-primary hover:bg-primary/90" onClick={() => setShowSignupModal(true)}>
                      Book Now
                    </Button>
                    <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-gray-900">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white hover:text-gray-900">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="itinerary" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="includes">What's Included</TabsTrigger>
            </TabsList>

            {/* Detailed Itinerary */}
            <TabsContent value="itinerary" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {destination.duration.charAt(0).toUpperCase() + destination.duration.slice(1)} Detailed Itinerary
                </h2>
                <p className="text-gray-600">
                  Experience every moment of your journey with our carefully crafted itinerary
                </p>
              </div>

              {/* Day Navigation */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {destination.itinerary.map((day) => (
                  <Button
                    key={day.day}
                    variant={activeDay === day.day ? "default" : "outline"}
                    onClick={() => setActiveDay(day.day)}
                    className="min-w-[100px]"
                  >
                    Day {day.day}
                  </Button>
                ))}
              </div>

              {/* Active Day Content */}
              {destination.itinerary.map((day) => (
                <div key={day.day} className={activeDay === day.day ? "block" : "hidden"}>
                  <Card className="mb-6">
                    <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-accent/10">
                      <CardTitle className="text-2xl">Day {day.day}</CardTitle>
                      <CardDescription className="text-lg">{day.title}</CardDescription>
                    </CardHeader>
                  </Card>

                  <div className="grid gap-4">
                    {day.activities.map((activity, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                              {activity.icon}
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg text-gray-900">{activity.title}</h3>
                                <Badge variant="outline" className="text-xs">{activity.time}</Badge>
                              </div>
                              <p className="text-gray-600">{activity.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Highlights */}
            <TabsContent value="highlights">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Experience Highlights
                </h2>
                <p className="text-gray-600">
                  The most memorable moments of your {destination.name} journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.highlights.map((highlight, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{highlight}</h3>
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Gallery */}
            <TabsContent value="gallery">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Photo Gallery
                </h2>
                <p className="text-gray-600">
                  Get a glimpse of the beautiful moments awaiting you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.gallery?.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-xl">
                    <img
                      src={image}
                      alt={`${destination.name} gallery ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* What's Included */}
            <TabsContent value="includes">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">✓ What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {destination.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">✗ Not Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {destination.excludes.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="h-5 w-5 rounded-full border-2 border-red-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-green-600 to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your {destination.name} Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book now and create unforgettable memories in one of West Bengal's most beautiful destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100" onClick={() => setShowSignupModal(true)}>
              <Calendar className="mr-2 h-5 w-5" />
              Book This Tour
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">
                <Users className="mr-2 h-5 w-5" />
                Contact Us
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
