import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Award, Heart, Users, Clock, Route, Star, Eye, Target, Zap, Trophy, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const achievements = [
    { icon: <Camera className="h-6 w-6" />, label: "100+ Pandals", description: "Documented across Kolkata", number: "100+", color: "from-blue-500 to-blue-600" },
    { icon: <Route className="h-6 w-6" />, label: "60+ Kilometers", description: "Covered on foot & transport", number: "60+", color: "from-green-500 to-green-600" },
    { icon: <Clock className="h-6 w-6" />, label: "Limited Resources", description: "Maximum impact achieved", number: "∞", color: "from-purple-500 to-purple-600" },
    { icon: <Heart className="h-6 w-6" />, label: "Passion Driven", description: "Love for Bengal's culture", number: "❤️", color: "from-red-500 to-red-600" }
  ];

  const skills = [
    { name: "Cultural Photography", level: 95, icon: <Camera className="h-4 w-4" /> },
    { name: "Heritage Documentation", level: 90, icon: <Trophy className="h-4 w-4" /> },
    { name: "Durga Puja Coverage", level: 100, icon: <Star className="h-4 w-4" /> },
    { name: "Storytelling", level: 85, icon: <Eye className="h-4 w-4" /> }
  ];

  const experiences = [
    {
      year: "2024",
      title: "Durga Puja Documentation Project",
      description: "Comprehensive coverage of 100+ pandals across North, Central, and South Kolkata, capturing the essence of Bengal's greatest festival.",
      highlights: ["Traditional Bonedi Bari coverage", "Modern theme documentation", "Community interaction stories"],
                        image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fc93e066239bf42de91143d623ddaa86a?format=webp&width=800"
    },
    {
      year: "2024",
      title: "Heritage Architecture Focus",
      description: "Specialized in capturing the architectural marvels of Bengali heritage buildings and cultural landmarks.",
      highlights: ["Colonial architecture", "Traditional Bengali structures", "Cultural significance documentation"],
      image: "https://images.pexels.com/photos/6210324/pexels-photo-6210324.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
            backgroundImage: "url('https://images.pexels.com/photos/6000942/pexels-photo-6000942.jpeg?auto=compress&cs=tinysrgb&w=2000')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/50 to-black/60" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-6 h-6 bg-yellow-400/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-32 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-8 h-8 bg-primary/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-orange-400/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          {/* Main Content */}
          <div className="mb-8">
            <Badge className="mb-6 bg-primary/20 border-primary/30 text-white backdrop-blur-sm px-6 py-2 text-sm">
              📸 Visual Storyteller & Cultural Documentarian
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block">Utsab</span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Ghoshal
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
              Capturing the soul of Bengal through the lens, one frame at a time
            </p>
            
            <div className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              A passionate photographer dedicated to preserving the cultural heritage of West Bengal 
              through authentic visual storytelling and community documentation.
            </div>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-sm font-medium mb-1">{achievement.label}</div>
                <div className="text-xs text-gray-300">{achievement.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link to="/destinations">
                <MapPin className="mr-2 h-5 w-5" />
                Explore My Journey
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link to="/contact">
                <Users className="mr-2 h-5 w-5" />
                Connect With Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Developed through years of dedicated practice and passion for Bengal's cultural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Skills Chart */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary">{skill.icon}</div>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                To preserve and showcase the magnificent cultural heritage of Bengal through visual storytelling. 
                Every photograph I capture tells a story of devotion, artistry, and community spirit that defines 
                our beloved festivals and traditions.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Core Values</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✨ Authentic storytelling</li>
                  <li>🎭 Cultural preservation</li>
                  <li>🤝 Community connection</li>
                  <li>📷 Visual excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Journey
            </h2>
            <p className="text-xl text-gray-600">
              A passionate pursuit of cultural documentation through limited resources
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="text-primary border-primary">{experience.year}</Badge>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{experience.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{experience.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Key Highlights:</h4>
                      {experience.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Zap className="h-3 w-3 text-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-green-600 to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Making an Impact
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Through dedication and passion, I've proven that resource constraints cannot limit 
            the power of authentic storytelling and cultural preservation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <Globe className="h-8 w-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Cultural Bridge</div>
              <div className="text-sm text-white/80">Connecting traditions with modern audiences</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <Heart className="h-8 w-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Community Spirit</div>
              <div className="text-sm text-white/80">Celebrating the heart of Bengali culture</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <Award className="h-8 w-8 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Visual Legacy</div>
              <div className="text-sm text-white/80">Creating lasting memories for future generations</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100 shadow-xl" asChild>
              <Link to="/destinations">
                <Star className="mr-2 h-5 w-5" />
                View My Portfolio
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
              <Link to="/contact">
                <Users className="mr-2 h-5 w-5" />
                Let's Collaborate
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
