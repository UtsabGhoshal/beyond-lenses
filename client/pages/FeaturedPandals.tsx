import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import LocationViewer from "@/components/LocationViewer";
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
  Search,
  Filter,
  Share2,
  BookOpen,
    Zap,
  Train,
  Navigation,
  Route,
  TramFront
} from "lucide-react";

export default function FeaturedPandals() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedMetro, setSelectedMetro] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("north");

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

    // North Kolkata Pandals organized by Metro Stations
  const northKolkataPandals = {
    "BELGACHIA": {
      metroName: "Belgachia Metro",
      railwayName: "Bidhan Nagar Road Railway",
      color: "from-blue-500 to-indigo-500",
      pandals: [
        {
          id: "nk1",
          name: "Belgachia Sadharan",
          metroStation: "BELGACHIA",
          theme: "Traditional Bengali Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "A traditional community puja known for its authentic Bengali cultural programs and heritage themes.",
          highlights: ["Traditional art", "Cultural programs", "Community participation", "Heritage focus"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Evening 6-8 PM",
                    established: "1952",
          walkingTime: "2 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "4 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk2",
          name: "Tala Park Prattay",
          metroStation: "BELGACHIA",
          theme: "Modern Artistic Vision",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Known for innovative pandal designs and contemporary artistic interpretations with social messages.",
          highlights: ["Modern design", "Social themes", "Youth involvement", "Artistic innovation"],
          rating: 4.5,
          crowdLevel: "High",
          bestTime: "Afternoon 4-6 PM",
                    established: "1968",
          walkingTime: "5 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "7 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk3",
          name: "Tala Barowari",
          metroStation: "BELGACHIA",
          theme: "Community Celebration",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F47901b9e7c84434c93a704efed769a46?format=webp&width=800",
          description: "A vibrant community puja that brings together the entire neighborhood with grand celebrations.",
          highlights: ["Community spirit", "Family-friendly", "Local artisans", "Traditional music"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Morning 9-11 AM",
                    established: "1975",
          walkingTime: "3 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "6 minutes",
          railwayLine: "Sealdah Main Line"
        }
      ]
    },
        "SHYAMBAZAR": {
      metroName: "Shyambazar Metro",
      railwayName: "Bagbazar Railway",
      color: "from-green-500 to-emerald-500",
      pandals: [
        {
          id: "nk4",
          name: "Bidhan Sarani Atlas Club",
          metroStation: "SHYAMBAZAR",
          theme: "Grand Architectural Marvel",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F88efebcbbbbd40599bddbd3a8058dc62?format=webp&width=800",
          description: "Famous for recreating iconic architectural wonders with intricate details and craftsmanship.",
          highlights: ["Architectural themes", "Detailed craftsmanship", "Award-winning", "Photo-worthy"],
          rating: 4.8,
          crowdLevel: "Very High",
          bestTime: "Evening 7-9 PM",
                    established: "1945",
          walkingTime: "4 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "6 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk5",
          name: "Sikdar Bagan Sadharan",
          metroStation: "SHYAMBAZAR",
          theme: "Traditional Devotional",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Maintains the traditional essence of Durga Puja with authentic rituals and classical decorations.",
          highlights: ["Traditional rituals", "Classical music", "Authentic ceremonies", "Heritage preservation"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Morning 8-10 AM",
                    established: "1938",
          walkingTime: "6 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "8 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk6",
          name: "Hatibagan Nabin Pally",
          metroStation: "SHYAMBAZAR",
          theme: "Modern Social Themes",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Progressive community puja that addresses contemporary social issues through art and decoration.",
          highlights: ["Social awareness", "Contemporary art", "Educational themes", "Community engagement"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Afternoon 3-5 PM",
                    established: "1960",
          walkingTime: "3 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "5 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk7",
          name: "Nalin Sarkar Street",
          metroStation: "SHYAMBAZAR",
          theme: "Cultural Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Celebrates Bengali cultural heritage with traditional dance, music, and storytelling.",
          highlights: ["Cultural programs", "Traditional dance", "Folk music", "Storytelling"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Evening 6-8 PM",
                    established: "1955",
          walkingTime: "7 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "9 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk8",
          name: "North Tridhara",
          metroStation: "SHYAMBAZAR",
          theme: "Artistic Innovation",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Known for innovative pandal designs that blend traditional motifs with contemporary artistry.",
          highlights: ["Innovative design", "Art installations", "Creative themes", "Young artists"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Afternoon 4-6 PM",
                    established: "1972",
          walkingTime: "5 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "7 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk9",
          name: "Hatibagan Sarbojonin",
          metroStation: "SHYAMBAZAR",
          theme: "Community Unity",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F47901b9e7c84434c93a704efed769a46?format=webp&width=800",
          description: "Emphasizes community unity and participation with inclusive celebrations and programs.",
          highlights: ["Community unity", "Inclusive celebration", "Family events", "Local participation"],
          rating: 4.5,
          crowdLevel: "High",
          bestTime: "Morning 9-11 AM",
                    established: "1950",
          walkingTime: "4 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "6 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk10",
          name: "Kashi Bose Lane",
          metroStation: "SHYAMBAZAR",
          theme: "Historical Significance",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Celebrates the historical significance of the area with themes depicting local heritage.",
          highlights: ["Historical themes", "Local heritage", "Educational value", "Cultural significance"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Evening 5-7 PM",
                    established: "1963",
          walkingTime: "8 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "10 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk11",
          name: "Jagat Mukherjee Park",
          metroStation: "SHYAMBAZAR",
          theme: "Nature and Environment",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Focuses on environmental themes with eco-friendly decorations and nature conservation messages.",
          highlights: ["Environmental themes", "Eco-friendly", "Nature conservation", "Green initiatives"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Morning 8-10 AM",
                    established: "1980",
          walkingTime: "6 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "8 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "nk12",
          name: "Bagbazar Sarbojanin",
          metroStation: "SHYAMBAZAR",
          theme: "Traditional Heritage Style",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Historic puja with traditional rituals and authentic Bengali cultural performances.",
          highlights: ["Heritage style", "Traditional dhak", "Local artisans", "Authentic rituals"],
          rating: 4.8,
          crowdLevel: "Very High",
          bestTime: "Morning 8-10 AM",
                    established: "1919",
          walkingTime: "10 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "3 minutes",
          railwayLine: "Sealdah Main Line"
        }
      ]
    },
        "SOVABAZAR_SUTANUTI": {
      metroName: "Sovabazar-Sutanuti Metro",
      railwayName: "Sovabazar-Ahiritola Railway",
      color: "from-purple-500 to-pink-500",
      pandals: [
        {
          id: "nk13",
          name: "Kumartuli Sarbojanin",
          metroStation: "SOVABAZAR_SUTANUTI",
          theme: "Artisan Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "Located in the heart of the potter's quarter, showcasing the artisan heritage of idol making.",
          highlights: ["Artisan heritage", "Idol making", "Potter's quarter", "Traditional crafts"],
          rating: 4.9,
          crowdLevel: "Very High",
          bestTime: "Morning 7-9 AM",
                    established: "1935",
          walkingTime: "3 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "5 minutes",
          railwayLine: "Sealdah Circular Line"
        },
        {
          id: "nk14",
          name: "Kumartuli Park",
          metroStation: "SOVABAZAR_SUTANUTI",
          theme: "Cultural Workshop",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Interactive puja where visitors can witness live idol making and participate in cultural workshops.",
          highlights: ["Live demonstrations", "Interactive experience", "Cultural workshops", "Hands-on activities"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Afternoon 2-4 PM",
                    established: "1958",
          walkingTime: "2 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "4 minutes",
          railwayLine: "Sealdah Circular Line"
        },
        {
          id: "nk15",
          name: "Ahiritola Sarbojanin",
          metroStation: "SOVABAZAR_SUTANUTI",
          theme: "River Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F47901b9e7c84434c93a704efed769a46?format=webp&width=800",
          description: "Celebrates the Ganga riverside heritage with nautical themes and river conservation messages.",
          highlights: ["River themes", "Ganga heritage", "Nautical decorations", "Water conservation"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Evening 6-8 PM",
                    established: "1942",
          walkingTime: "8 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "2 minutes",
          railwayLine: "Sealdah Circular Line"
        },
        {
          id: "nk16",
          name: "Pathuriaghata 5 er Pally",
          metroStation: "SOVABAZAR_SUTANUTI",
          theme: "Aristocratic Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Reflects the aristocratic heritage of old Kolkata with royal themes and palatial decorations.",
          highlights: ["Aristocratic themes", "Royal heritage", "Palatial decorations", "Historical significance"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Evening 7-9 PM",
                    established: "1928",
          walkingTime: "5 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "7 minutes",
          railwayLine: "Sealdah Circular Line"
        },
        {
          id: "nk17",
          name: "Darjeepara Sarbojanin",
          metroStation: "SOVABAZAR_SUTANUTI",
          theme: "Unity in Diversity",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Celebrates unity in diversity with themes that bring together different communities and cultures.",
          highlights: ["Unity themes", "Cultural diversity", "Community harmony", "Inclusive celebration"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Afternoon 3-5 PM",
                    established: "1965",
          walkingTime: "7 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "4 minutes",
          railwayLine: "Sealdah Circular Line"
        }
            ]
    }
  };

  // Central Kolkata Pandals organized by Metro Stations
  const centralKolkataPandals = {
    "MG_ROAD": {
      metroName: "MG Road Metro",
      railwayName: "Sealdah Railway",
      color: "from-orange-500 to-red-500",
      pandals: [
        {
          id: "ck1",
          name: "Santosh Mitra Square",
          metroStation: "MG_ROAD",
          theme: "Heritage Architecture",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F2bc249d88c344b20a1ef3fb1825a6431?format=webp&width=800",
          description: "One of Kolkata's most prestigious pandals known for grand architectural recreations and historical themes.",
          highlights: ["Architectural marvel", "Historical themes", "Grand scale", "Award-winning"],
          rating: 4.9,
          crowdLevel: "Very High",
          bestTime: "Early morning 6-8 AM",
          established: "1936",
          walkingTime: "3 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "8 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck2",
          name: "Maniktala Chaltabagan Lohapatty",
          metroStation: "MG_ROAD",
          theme: "Traditional Craftsmanship",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Celebrates traditional Bengali craftsmanship with intricate handwork and local artisan involvement.",
          highlights: ["Traditional crafts", "Local artisans", "Handwork", "Cultural heritage"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Morning 9-11 AM",
          established: "1952",
          walkingTime: "5 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "12 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck3",
          name: "Amherst Street Sarbojonin",
          metroStation: "MG_ROAD",
          theme: "Community Celebration",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F47901b9e7c84434c93a704efed769a46?format=webp&width=800",
          description: "A vibrant community puja that brings together diverse neighborhoods with inclusive celebrations.",
          highlights: ["Community unity", "Inclusive celebration", "Cultural diversity", "Family-friendly"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Evening 6-8 PM",
          established: "1948",
          walkingTime: "4 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "10 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck4",
          name: "Lalabagan Sarbojonin",
          metroStation: "MG_ROAD",
          theme: "Modern Art & Culture",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Features contemporary art installations and modern cultural programs while maintaining traditional roots.",
          highlights: ["Modern art", "Cultural programs", "Contemporary themes", "Youth engagement"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Afternoon 4-6 PM",
          established: "1965",
          walkingTime: "6 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "14 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck5",
          name: "Lalabagan Nabankur",
          metroStation: "MG_ROAD",
          theme: "Youth & Innovation",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "Youth-driven puja focusing on innovation, technology integration, and social awareness campaigns.",
          highlights: ["Youth leadership", "Innovation", "Technology", "Social awareness"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Evening 7-9 PM",
          established: "1978",
          walkingTime: "7 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "15 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck6",
          name: "Chorebagan Sarbojonin",
          metroStation: "MG_ROAD",
          theme: "Traditional Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Preserves traditional Bengali heritage with authentic rituals, classical music, and cultural performances.",
          highlights: ["Traditional rituals", "Classical music", "Heritage preservation", "Authentic ceremonies"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Morning 8-10 AM",
          established: "1940",
          walkingTime: "8 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "16 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck7",
          name: "Shimla Byam Samity",
          metroStation: "MG_ROAD",
          theme: "Sports & Community",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Sports club organized puja emphasizing fitness, community health, and active lifestyle promotion.",
          highlights: ["Sports themes", "Community health", "Active lifestyle", "Youth participation"],
          rating: 4.3,
          crowdLevel: "Moderate",
          bestTime: "Afternoon 3-5 PM",
          established: "1962",
          walkingTime: "9 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "18 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck8",
          name: "Vivekananda Sporting",
          metroStation: "MG_ROAD",
          theme: "Philosophy & Sports",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Combines Swami Vivekananda's philosophy with sports culture, promoting physical and spiritual well-being.",
          highlights: ["Philosophy themes", "Sports culture", "Spiritual wellness", "Educational programs"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Morning 9-11 AM",
          established: "1955",
          walkingTime: "10 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "20 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck9",
          name: "Shimla Sporting",
          metroStation: "MG_ROAD",
          theme: "Athletic Excellence",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Celebrates athletic excellence and sportsmanship with themes highlighting achievements of local athletes.",
          highlights: ["Athletic themes", "Sportsmanship", "Local athletes", "Achievement celebration"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Evening 5-7 PM",
          established: "1968",
          walkingTime: "11 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "22 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck10",
          name: "College Square",
          metroStation: "MG_ROAD",
          theme: "Educational Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Celebrates the educational heritage of the area with themes highlighting knowledge, learning, and academic excellence.",
          highlights: ["Educational themes", "Academic excellence", "Knowledge celebration", "Student participation"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Afternoon 2-4 PM",
          established: "1935",
          walkingTime: "5 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "12 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck11",
          name: "Muhammad Ali Park",
          metroStation: "MG_ROAD",
          theme: "Harmony & Unity",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F47901b9e7c84434c93a704efed769a46?format=webp&width=800",
          description: "Promotes communal harmony and unity with themes celebrating diversity and peaceful coexistence.",
          highlights: ["Communal harmony", "Unity themes", "Diversity celebration", "Peace promotion"],
          rating: 4.8,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1925",
          walkingTime: "7 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "15 minutes",
          railwayLine: "Sealdah Main Line"
        },
        {
          id: "ck12",
          name: "Jorasako Sadharan",
          metroStation: "MG_ROAD",
          theme: "Literary Heritage",
                    image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Celebrates the rich literary heritage of the area with themes honoring poets, writers, and literary traditions.",
          highlights: ["Literary themes", "Poetry celebration", "Writers' tribute", "Cultural literature"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Morning 10 AM-12 PM",
          established: "1945",
          walkingTime: "12 minutes",
          metroLine: "Blue Line",
          railwayWalkingTime: "5 minutes",
          railwayLine: "Sealdah Main Line"
        }
      ]
    }
  };

  // South Kolkata Pandals organized by Metro Stations
  const southKolkataPandals = {
    "RABINDRA_SAROBAR": {
      metroName: "Rabindra Sarobar Metro",
      railwayName: "Tollygunge Railway",
      color: "from-purple-500 to-pink-500",
      pandals: [
        {
          id: "sk1",
          name: "Mudiali Club",
          metroStation: "RABINDRA_SADAN",
          theme: "Cultural Excellence",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F89879d22dfda48a286eb3e4b1b568409?format=webp&width=800",
          description: "Known for innovative themes and cultural programs that blend tradition with contemporary art.",
          highlights: ["Cultural programs", "Innovative themes", "Art exhibitions", "Musical performances"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1932",
          walkingTime: "5 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "8 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk2",
          name: "Shiv Mandir Sarbojonin",
          metroStation: "RABINDRA_SADAN",
          theme: "Spiritual Devotion",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Traditional puja with deep spiritual significance and authentic religious ceremonies.",
          highlights: ["Spiritual focus", "Traditional rituals", "Religious ceremonies", "Community devotion"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Morning 8-10 AM",
          established: "1948",
          walkingTime: "3 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "6 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk3",
          name: "Lake Youth",
          metroStation: "RABINDRA_SADAN",
          theme: "Youth Empowerment",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Youth-driven puja emphasizing social awareness, environmental themes, and modern values.",
          highlights: ["Youth leadership", "Social awareness", "Environmental themes", "Modern values"],
          rating: 4.5,
          crowdLevel: "High",
          bestTime: "Evening 7-9 PM",
          established: "1975",
          walkingTime: "7 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "10 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk4",
          name: "Pratipaditya Trikon Park",
          metroStation: "RABINDRA_SADAN",
          theme: "Historical Heritage",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "Celebrates Bengali historical heritage with themes depicting local history and cultural evolution.",
          highlights: ["Historical themes", "Cultural heritage", "Local history", "Educational value"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Afternoon 4-6 PM",
          established: "1963",
          walkingTime: "6 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "9 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        }
      ]
    },
    "KALIGHAT": {
      metroName: "Kalighat Metro",
      railwayName: "New Alippur Railway",
      color: "from-green-500 to-teal-500",
      pandals: [
        {
          id: "sk5",
          name: "66 Pally",
          metroStation: "KALIGHAT",
          theme: "Community Tradition",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Traditional community puja maintaining age-old customs and neighborhood participation.",
          highlights: ["Traditional customs", "Community spirit", "Neighborhood unity", "Cultural preservation"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Morning 9-11 AM",
          established: "1955",
          walkingTime: "4 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "12 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk6",
          name: "Badamtala Ashar Sangha",
          metroStation: "KALIGHAT",
          theme: "Artistic Innovation",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Renowned for innovative pandal designs and artistic excellence with award-winning themes.",
          highlights: ["Artistic excellence", "Innovative design", "Award-winning", "Creative themes"],
          rating: 4.8,
          crowdLevel: "Very High",
          bestTime: "Evening 6-8 PM",
          established: "1957",
          walkingTime: "3 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "10 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk7",
          name: "Nepal Bhattacharya Street",
          metroStation: "KALIGHAT",
          theme: "Cultural Heritage",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Celebrates Bengali cultural heritage with traditional dance, music, and literary programs.",
          highlights: ["Cultural heritage", "Traditional dance", "Music programs", "Literary events"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Evening 7-9 PM",
          established: "1942",
          walkingTime: "5 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "13 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk8",
          name: "Kalighat BBTA",
          metroStation: "KALIGHAT",
          theme: "Traditional Devotion",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Near the famous Kalighat temple, emphasizing spiritual devotion and traditional worship.",
          highlights: ["Spiritual devotion", "Temple proximity", "Traditional worship", "Religious significance"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Morning 8-10 AM",
          established: "1938",
          walkingTime: "2 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "8 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk9",
          name: "Chetla Pally",
          metroStation: "KALIGHAT",
          theme: "Neighborhood Unity",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "Strong neighborhood puja bringing together residents with inclusive celebrations and local participation.",
          highlights: ["Neighborhood unity", "Local participation", "Inclusive celebration", "Community bonding"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Afternoon 3-5 PM",
          established: "1960",
          walkingTime: "8 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "15 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk10",
          name: "Chetla Agrani",
          metroStation: "KALIGHAT",
          theme: "Progressive Vision",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Progressive puja with modern themes addressing contemporary social issues and forward-thinking concepts.",
          highlights: ["Progressive themes", "Social issues", "Modern concepts", "Forward-thinking"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Evening 5-7 PM",
          established: "1972",
          walkingTime: "9 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "16 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk11",
          name: "Alipore Sarbojonin",
          metroStation: "KALIGHAT",
          theme: "Aristocratic Elegance",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Reflects the aristocratic heritage of Alipore with elegant themes and refined cultural programs.",
          highlights: ["Aristocratic heritage", "Elegant themes", "Refined culture", "Heritage preservation"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1925",
          walkingTime: "12 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "5 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk12",
          name: "Alipore 78 Pally",
          metroStation: "KALIGHAT",
          theme: "Modern Tradition",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Balances modern innovation with traditional values, creating unique thematic presentations.",
          highlights: ["Modern tradition", "Innovation", "Unique themes", "Cultural balance"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Afternoon 4-6 PM",
          established: "1978",
          walkingTime: "13 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "6 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk13",
          name: "Hazra Park Sarbojonin",
          metroStation: "KALIGHAT",
          theme: "Park Community",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Park-based community puja emphasizing environmental themes and green initiatives.",
          highlights: ["Environmental themes", "Green initiatives", "Park setting", "Community focus"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Morning 9-11 AM",
          established: "1965",
          walkingTime: "10 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "18 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk14",
          name: "Deshapriya Park",
          metroStation: "KALIGHAT",
          theme: "National Pride",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "One of Kolkata's most famous pandals, known for patriotic themes and national pride celebrations.",
          highlights: ["Patriotic themes", "National pride", "Famous pandal", "Cultural significance"],
          rating: 4.9,
          crowdLevel: "Very High",
          bestTime: "Evening 7-9 PM",
          established: "1971",
          walkingTime: "8 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "15 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk15",
          name: "Tridhara Sammilani",
          metroStation: "KALIGHAT",
          theme: "Cultural Confluence",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Celebrates the confluence of different cultures and traditions in modern Bengal.",
          highlights: ["Cultural confluence", "Tradition blend", "Modern Bengal", "Diversity celebration"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Afternoon 3-5 PM",
          established: "1958",
          walkingTime: "7 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "14 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk16",
          name: "Ballygunge Cultural Association",
          metroStation: "KALIGHAT",
          theme: "Cultural Excellence",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Renowned for high-quality cultural programs and artistic presentations throughout the festival.",
          highlights: ["Cultural programs", "Artistic presentations", "Quality events", "Educational focus"],
          rating: 4.8,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1952",
          walkingTime: "11 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "20 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk17",
          name: "Samaj Sebi Sangha",
          metroStation: "KALIGHAT",
          theme: "Social Service",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Focuses on social service and community welfare with themes promoting social responsibility.",
          highlights: ["Social service", "Community welfare", "Social responsibility", "Welfare programs"],
          rating: 4.7,
          crowdLevel: "Moderate",
          bestTime: "Morning 10 AM-12 PM",
          established: "1963",
          walkingTime: "6 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "13 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk18",
          name: "Hindustan Park Sarbojonin",
          metroStation: "KALIGHAT",
          theme: "Unity in Diversity",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Celebrates India's unity in diversity with themes showcasing different regional cultures.",
          highlights: ["Unity in diversity", "Regional cultures", "National integration", "Cultural harmony"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Evening 5-7 PM",
          established: "1948",
          walkingTime: "9 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "17 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk19",
          name: "Hindustan Yubak Brinda",
          metroStation: "KALIGHAT",
          theme: "Youth Culture",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "Youth-oriented puja promoting modern cultural values and contemporary artistic expressions.",
          highlights: ["Youth culture", "Modern values", "Contemporary art", "Innovation"],
          rating: 4.5,
          crowdLevel: "High",
          bestTime: "Evening 7-9 PM",
          established: "1976",
          walkingTime: "10 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "18 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk20",
          name: "Hindustan Club Sarbojonin",
          metroStation: "KALIGHAT",
          theme: "Club Tradition",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Club-organized puja maintaining high standards of celebration with traditional elegance.",
          highlights: ["Club tradition", "High standards", "Traditional elegance", "Quality celebration"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Afternoon 4-6 PM",
          established: "1955",
          walkingTime: "11 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "19 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk21",
          name: "Singhi Park",
          metroStation: "KALIGHAT",
          theme: "Park Heritage",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Historic park puja celebrating the heritage and natural beauty of the surrounding area.",
          highlights: ["Park heritage", "Natural beauty", "Historic significance", "Environmental focus"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Morning 8-10 AM",
          established: "1962",
          walkingTime: "12 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "20 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk22",
          name: "Ekdalia Evergreen",
          metroStation: "KALIGHAT",
          theme: "Evergreen Tradition",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Long-standing puja maintaining evergreen traditions while adapting to contemporary times.",
          highlights: ["Evergreen tradition", "Long-standing", "Contemporary adaptation", "Traditional values"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1945",
          walkingTime: "14 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "22 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk23",
          name: "Kalighat Yuba Maitry",
          metroStation: "KALIGHAT",
          theme: "Youth Friendship",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Youth-organized puja emphasizing friendship, social bonding, and community harmony among young people.",
          highlights: ["Youth friendship", "Social bonding", "Community harmony", "Modern approach"],
          rating: 4.5,
          crowdLevel: "High",
          bestTime: "Evening 7-9 PM",
          established: "1982",
          walkingTime: "6 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "14 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk24",
          name: "Kalighat Byamagar",
          metroStation: "KALIGHAT",
          theme: "Traditional Commerce",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Represents the traditional business community with themes celebrating commerce and trade heritage.",
          highlights: ["Business community", "Trade heritage", "Commercial themes", "Economic prosperity"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Afternoon 3-5 PM",
          established: "1967",
          walkingTime: "7 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "15 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk25",
          name: "Kalighat Milan Sangha",
          metroStation: "KALIGHAT",
          theme: "Unity and Harmony",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F47901b9e7c84434c93a704efed769a46?format=webp&width=800",
          description: "Promotes unity and harmony among different communities with inclusive celebration themes.",
          highlights: ["Community unity", "Harmony themes", "Inclusive celebration", "Cultural integration"],
          rating: 4.6,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1958",
          walkingTime: "5 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "13 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        }
      ]
    },
    "NETAJI_BHAWAN": {
      metroName: "Netaji Bhawan Metro",
      railwayName: "Ballygunge Railway",
      color: "from-indigo-500 to-purple-500",
      pandals: [
        {
          id: "sk26",
          name: "Bhawanipur Saraswati Sangha",
          metroStation: "NETAJI_BHAWAN",
          theme: "Knowledge and Wisdom",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Celebrates the goddess of knowledge and wisdom with educational themes and scholarly programs.",
          highlights: ["Educational themes", "Knowledge focus", "Scholarly programs", "Wisdom celebration"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Morning 9-11 AM",
          established: "1941",
          walkingTime: "4 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "8 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk27",
          name: "Maddox Square Park Sarbojonin",
          metroStation: "NETAJI_BHAWAN",
          theme: "Urban Heritage",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Located in the heart of the city, celebrating urban heritage and metropolitan cultural diversity.",
          highlights: ["Urban heritage", "Metropolitan culture", "City celebration", "Modern traditions"],
          rating: 4.6,
          crowdLevel: "Very High",
          bestTime: "Evening 6-8 PM",
          established: "1952",
          walkingTime: "3 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "7 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk28",
          name: "Bhawanipur 75 Palli",
          metroStation: "NETAJI_BHAWAN",
          theme: "Neighborhood Pride",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "Strong neighborhood puja representing local pride and community spirit in the Bhawanipur area.",
          highlights: ["Neighborhood pride", "Local community", "Area heritage", "Community spirit"],
          rating: 4.5,
          crowdLevel: "High",
          bestTime: "Afternoon 4-6 PM",
          established: "1975",
          walkingTime: "6 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "10 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk29",
          name: "Chakraberia Sarbojonin",
          metroStation: "NETAJI_BHAWAN",
          theme: "Community Excellence",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F88efebcbbbbd40599bddbd3a8058dc62?format=webp&width=800",
          description: "Known for excellent community participation and high-quality cultural programs throughout the festival.",
          highlights: ["Community excellence", "Quality programs", "Cultural events", "High participation"],
          rating: 4.8,
          crowdLevel: "High",
          bestTime: "Evening 7-9 PM",
          established: "1946",
          walkingTime: "5 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "9 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk30",
          name: "Paddapukur Barowari",
          metroStation: "NETAJI_BHAWAN",
          theme: "Lake Heritage",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F2bc249d88c344b20a1ef3fb1825a6431?format=webp&width=800",
          description: "Celebrates the heritage of the area around the historic lake with water and nature themes.",
          highlights: ["Lake heritage", "Water themes", "Nature celebration", "Historic significance"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Morning 8-10 AM",
          established: "1963",
          walkingTime: "8 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "12 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        },
        {
          id: "sk31",
          name: "Bhawanipur Swadhin Sangha",
          metroStation: "NETAJI_BHAWAN",
          theme: "Freedom and Independence",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F34d32115e7914516a9517157a9b0259f?format=webp&width=800",
          description: "Celebrates themes of freedom and independence, honoring the freedom struggle and national pride.",
          highlights: ["Freedom themes", "Independence celebration", "National pride", "Historical significance"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Evening 5-7 PM",
          established: "1947",
          walkingTime: "7 minutes",
          metroLine: "North-South Line",
          railwayWalkingTime: "11 minutes",
          railwayLine: "Sealdah-Budge Budge Line"
        }
      ]
    }
  };

  // Railway Station Pandals organized by Railway Stations
  const railwayStationPandals = {
    "TOLLYGUNGE": {
      stationName: "Tollygunge Railway",
      metroName: "Rabindra Sarobar Metro",
      color: "from-emerald-500 to-teal-500",
      pandals: [
        {
          id: "rs1",
          name: "Mudiali Club",
          railwayStation: "TOLLYGUNGE",
          theme: "Cultural Excellence",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Known for innovative themes and cultural programs that blend tradition with contemporary art.",
          highlights: ["Cultural programs", "Innovative themes", "Art exhibitions", "Musical performances"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1932",
          walkingTime: "3 minutes",
          railwayLine: "Sealdah-Budge Budge Line",
          metroWalkingTime: "8 minutes",
          metroLine: "North-South Line"
        },
        {
          id: "rs2",
          name: "Shiv Mandir Sarbojonin",
          railwayStation: "TOLLYGUNGE",
          theme: "Spiritual Devotion",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Ffe26ed4aff714dc9b1df4f10eccbaede?format=webp&width=800",
          description: "Traditional puja with deep spiritual significance and authentic religious ceremonies.",
          highlights: ["Spiritual focus", "Traditional rituals", "Religious ceremonies", "Community devotion"],
          rating: 4.6,
          crowdLevel: "Moderate",
          bestTime: "Morning 8-10 AM",
          established: "1948",
          walkingTime: "5 minutes",
          railwayLine: "Sealdah-Budge Budge Line",
          metroWalkingTime: "10 minutes",
          metroLine: "North-South Line"
        },
        {
          id: "rs3",
          name: "Lake Youth",
          railwayStation: "TOLLYGUNGE",
          theme: "Youth Empowerment",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F47901b9e7c84434c93a704efed769a46?format=webp&width=800",
          description: "Youth-driven puja emphasizing social awareness, environmental themes, and modern values.",
          highlights: ["Youth leadership", "Social awareness", "Environmental themes", "Modern values"],
          rating: 4.5,
          crowdLevel: "High",
          bestTime: "Evening 7-9 PM",
          established: "1975",
          walkingTime: "4 minutes",
          railwayLine: "Sealdah-Budge Budge Line",
          metroWalkingTime: "9 minutes",
          metroLine: "North-South Line"
        },
        {
          id: "rs4",
          name: "Pratipaditya Trikon Park",
          railwayStation: "TOLLYGUNGE",
          theme: "Historical Heritage",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fb0b9003d30f147e099b5a60cbe62e225?format=webp&width=800",
          description: "Celebrates Bengali historical heritage with themes depicting local history and cultural evolution.",
          highlights: ["Historical themes", "Cultural heritage", "Local history", "Educational value"],
          rating: 4.4,
          crowdLevel: "Moderate",
          bestTime: "Afternoon 4-6 PM",
          established: "1963",
          walkingTime: "6 minutes",
          railwayLine: "Sealdah-Budge Budge Line",
          metroWalkingTime: "11 minutes",
          metroLine: "North-South Line"
        }
      ]
    },
    "NEW_ALIPPUR": {
      stationName: "New Alipur Railway",
      metroName: "Kalighat Metro",
      color: "from-red-500 to-rose-500",
      pandals: [
        {
          id: "rs5",
          name: "66 Pally",
          railwayStation: "NEW_ALIPPUR",
          theme: "Community Tradition",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fe62fe6238d1443bd856615f1b4e69f1e?format=webp&width=800",
          description: "Traditional community puja maintaining age-old customs and neighborhood participation.",
          highlights: ["Traditional customs", "Community spirit", "Neighborhood unity", "Cultural preservation"],
          rating: 4.5,
          crowdLevel: "Moderate",
          bestTime: "Morning 9-11 AM",
          established: "1955",
          walkingTime: "4 minutes",
          railwayLine: "Sealdah-Budge Budge Line",
          metroWalkingTime: "12 minutes",
          metroLine: "North-South Line"
        },
        {
          id: "rs6",
          name: "Badamtala Ashar Sangha",
          railwayStation: "NEW_ALIPPUR",
          theme: "Artistic Innovation",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F11580775a4b646448bacabd3bf55cdaf?format=webp&width=800",
          description: "Renowned for innovative pandal designs and artistic excellence with award-winning themes.",
          highlights: ["Artistic excellence", "Innovative design", "Award-winning", "Creative themes"],
          rating: 4.8,
          crowdLevel: "Very High",
          bestTime: "Evening 6-8 PM",
          established: "1957",
          walkingTime: "2 minutes",
          railwayLine: "Sealdah-Budge Budge Line",
          metroWalkingTime: "10 minutes",
          metroLine: "North-South Line"
        }
      ]
    },
    "BALLYGUNGE_JN": {
      stationName: "Ballygunge Junction Railway",
      metroName: "Netaji Bhawan Metro",
      color: "from-amber-500 to-orange-500",
      pandals: [
        {
          id: "rs7",
          name: "Ballygunge Cultural Association",
          railwayStation: "BALLYGUNGE_JN",
          theme: "Cultural Excellence",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F88efebcbbbbd40599bddbd3a8058dc62?format=webp&width=800",
          description: "Renowned for high-quality cultural programs and artistic presentations throughout the festival.",
          highlights: ["Cultural programs", "Artistic presentations", "Quality events", "Educational focus"],
          rating: 4.8,
          crowdLevel: "High",
          bestTime: "Evening 6-8 PM",
          established: "1952",
          walkingTime: "3 minutes",
          railwayLine: "Circular Railway",
          metroWalkingTime: "8 minutes",
          metroLine: "North-South Line"
        },
        {
          id: "rs8",
          name: "Samaj Sebi Sangha",
          railwayStation: "BALLYGUNGE_JN",
          theme: "Social Service",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F2bc249d88c344b20a1ef3fb1825a6431?format=webp&width=800",
          description: "Focuses on social service and community welfare with themes promoting social responsibility.",
          highlights: ["Social service", "Community welfare", "Social responsibility", "Welfare programs"],
          rating: 4.7,
          crowdLevel: "Moderate",
          bestTime: "Morning 10 AM-12 PM",
          established: "1963",
          walkingTime: "5 minutes",
          railwayLine: "Circular Railway",
          metroWalkingTime: "10 minutes",
          metroLine: "North-South Line"
        }
      ]
    },
    "SEALDAH": {
      stationName: "Sealdah Railway",
      metroName: "Central Railway Hub",
      color: "from-violet-500 to-purple-500",
      pandals: [
        {
          id: "rs9",
          name: "Santosh Mitra Square",
          railwayStation: "SEALDAH",
          theme: "Heritage Architecture",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F34d32115e7914516a9517157a9b0259f?format=webp&width=800",
          description: "One of Kolkata's most prestigious pandals known for grand architectural recreations and historical themes.",
          highlights: ["Architectural marvel", "Historical themes", "Grand scale", "Award-winning"],
          rating: 4.9,
          crowdLevel: "Very High",
          bestTime: "Early morning 6-8 AM",
          established: "1936",
          walkingTime: "8 minutes",
          railwayLine: "Sealdah Main Line",
          metroWalkingTime: "3 minutes",
          metroLine: "Blue Line"
        },
        {
          id: "rs10",
          name: "College Square",
          railwayStation: "SEALDAH",
          theme: "Educational Heritage",
          image: "https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2Fda41d7c4013c415cbc5f95000e6abe40?format=webp&width=800",
          description: "Celebrates the educational heritage of the area with themes highlighting knowledge, learning, and academic excellence.",
          highlights: ["Educational themes", "Academic excellence", "Knowledge celebration", "Student participation"],
          rating: 4.7,
          crowdLevel: "High",
          bestTime: "Afternoon 2-4 PM",
          established: "1935",
          walkingTime: "12 minutes",
          railwayLine: "Sealdah Main Line",
          metroWalkingTime: "5 minutes",
          metroLine: "Blue Line"
        }
      ]
    }
  };

    const getMetroStations = () => {
    if (activeTab === "north") {
      return [
        { id: "all", name: "All North Metros", count: "17", color: "from-orange-500 to-red-500" },
        { id: "BELGACHIA", name: "Belgachia", count: "3", color: "from-blue-500 to-indigo-500" },
        { id: "SHYAMBAZAR", name: "Shyambazar", count: "9", color: "from-green-500 to-emerald-500" },
        { id: "SOVABAZAR_SUTANUTI", name: "Sovabazar-Sutanuti", count: "5", color: "from-purple-500 to-pink-500" }
      ];
    } else if (activeTab === "central") {
      return [
        { id: "all", name: "All Central Metros", count: "12", color: "from-orange-500 to-red-500" },
        { id: "MG_ROAD", name: "MG Road", count: "12", color: "from-orange-500 to-red-500" }
      ];
    } else if (activeTab === "south") {
      return [
        { id: "all", name: "All South Metros", count: "31", color: "from-green-500 to-teal-500" },
        { id: "RABINDRA_SAROBAR", name: "Rabindra Sarobar", count: "4", color: "from-purple-500 to-pink-500" },
        { id: "KALIGHAT", name: "Kalighat", count: "21", color: "from-green-500 to-teal-500" },
        { id: "NETAJI_BHAWAN", name: "Netaji Bhawan", count: "6", color: "from-indigo-500 to-purple-500" }
      ];
    } else {
      return [
        { id: "all", name: "All Railway Stations", count: "12", color: "from-green-600 to-emerald-600" },
        { id: "TOLLYGUNGE", name: "Tollygunge", count: "4", color: "from-emerald-500 to-teal-500" },
        { id: "NEW_ALIPPUR", name: "New Alippur", count: "2", color: "from-red-500 to-rose-500" },
        { id: "BALLYGUNGE_JN", name: "Ballygunge Jn", count: "2", color: "from-amber-500 to-orange-500" },
        { id: "SEALDAH", name: "Sealdah", count: "4", color: "from-violet-500 to-purple-500" }
      ];
    }
  };

    const getAllPandals = () => {
    const allPandals = [];
    if (activeTab === "north") {
      Object.values(northKolkataPandals).forEach(station => {
        allPandals.push(...station.pandals);
      });
    } else if (activeTab === "central") {
      Object.values(centralKolkataPandals).forEach(station => {
        allPandals.push(...station.pandals);
      });
    } else if (activeTab === "south") {
      Object.values(southKolkataPandals).forEach(station => {
        allPandals.push(...station.pandals);
      });
    } else if (activeTab === "railway") {
      Object.values(railwayStationPandals).forEach(station => {
        allPandals.push(...station.pandals);
      });
    }
    return allPandals;
  };

  const getFilteredPandals = () => {
    let pandals = getAllPandals();
    
        if (selectedMetro !== "all") {
      if (activeTab === "north") {
        pandals = northKolkataPandals[selectedMetro]?.pandals || [];
      } else if (activeTab === "central") {
        pandals = centralKolkataPandals[selectedMetro]?.pandals || [];
      } else if (activeTab === "south") {
        pandals = southKolkataPandals[selectedMetro]?.pandals || [];
      } else if (activeTab === "railway") {
        pandals = railwayStationPandals[selectedMetro]?.pandals || [];
      }
    }
    
    if (searchTerm) {
      pandals = pandals.filter(pandal => 
        pandal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pandal.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pandal.metroStation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return pandals;
  };

    const getStatistics = () => {
    if (activeTab === "north") {
      return [
        { number: "17+", label: "North Kolkata Pandals", icon: <Building className="h-6 w-6" /> },
        { number: "3", label: "Metro Stations", icon: <Train className="h-6 w-6" /> },
        { number: "2M+", label: "Annual Visitors", icon: <Users className="h-6 w-6" /> },
        { number: "5", label: "Days of Celebration", icon: <Calendar className="h-6 w-6" /> }
      ];
    } else if (activeTab === "central") {
      return [
        { number: "12+", label: "Central Kolkata Pandals", icon: <Building className="h-6 w-6" /> },
        { number: "1", label: "Metro Station", icon: <Train className="h-6 w-6" /> },
        { number: "3M+", label: "Annual Visitors", icon: <Users className="h-6 w-6" /> },
        { number: "5", label: "Days of Celebration", icon: <Calendar className="h-6 w-6" /> }
      ];
    } else if (activeTab === "south") {
      return [
        { number: "31+", label: "South Kolkata Pandals", icon: <Building className="h-6 w-6" /> },
        { number: "3", label: "Metro Stations", icon: <Train className="h-6 w-6" /> },
        { number: "5M+", label: "Annual Visitors", icon: <Users className="h-6 w-6" /> },
        { number: "5", label: "Days of Celebration", icon: <Calendar className="h-6 w-6" /> }
      ];
    } else {
      return [
        { number: "12+", label: "Railway Station Pandals", icon: <Building className="h-6 w-6" /> },
        { number: "4", label: "Railway Stations", icon: <TramFront className="h-6 w-6" /> },
        { number: "1M+", label: "Annual Visitors", icon: <Users className="h-6 w-6" /> },
        { number: "5", label: "Days of Celebration", icon: <Calendar className="h-6 w-6" /> }
      ];
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F2477f586e9364b7a9fa52db217da2d5c%2F34d32115e7914516a9517157a9b0259f?format=webp&width=2000')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-purple-900/70" />
        
        {/* Floating Metro Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-8 h-8 text-blue-400 animate-bounce">🚇</div>
          <div className="absolute top-40 right-32 w-10 h-10 text-green-400 animate-pulse">🎭</div>
          <div className="absolute bottom-40 left-40 w-6 h-6 text-purple-400 animate-ping">🏛️</div>
          <div className="absolute bottom-20 right-20 w-8 h-8 text-yellow-300 animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
          <div className="absolute top-60 left-10 w-6 h-6 text-indigo-300 animate-pulse" style={{animationDelay: '1s'}}>🎪</div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <Badge className="mb-6 bg-blue-500/20 border-blue-400/30 text-blue-200 backdrop-blur-sm px-6 py-3 text-lg">
              🚇 Metro-Connected Pandals 🎭
            </Badge>
            
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                {activeTab === "north" ? "North Kolkata" : activeTab === "central" ? "Central Kolkata" : activeTab === "south" ? "South Kolkata" : "Railway Station"}
              </span>
              <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Pandals
              </span>
            </h1>
            
                        <p className="text-2xl md:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {activeTab === "north"
                ? "Discover authentic heritage pandals easily accessible via Kolkata Metro"
                : activeTab === "central"
                ? "Explore prestigious Central Kolkata pandals near MG Road and Sealdah"
                : activeTab === "south"
                ? "Experience famous South Kolkata pandals near Rabindra Sarobar and Kalighat"
                : "Navigate pandals conveniently located near major railway stations across Kolkata"
              }
            </p>
          </div>

                    {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {getStatistics().map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-blue-300 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-500 hover:bg-blue-600 shadow-xl transform hover:-translate-y-1 transition-all duration-300" asChild>
              <Link to="#pandals">
                <Train className="mr-2 h-5 w-5" />
                Explore by Metro
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1" onClick={() => setShowSignupModal(true)}>
              <Route className="mr-2 h-5 w-5" />
              Plan Your Route
            </Button>
          </div>
        </div>
            </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={(value) => {
            setActiveTab(value);
            setSelectedMetro("all");
            setSearchTerm("");
          }} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-4xl grid-cols-4 bg-white shadow-lg">
                <TabsTrigger value="north" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  <Building className="h-4 w-4 mr-2" />
                  North Kolkata
                </TabsTrigger>
                <TabsTrigger value="central" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  <Building className="h-4 w-4 mr-2" />
                  Central Kolkata
                </TabsTrigger>
                <TabsTrigger value="south" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                  <Building className="h-4 w-4 mr-2" />
                  South Kolkata
                </TabsTrigger>
                <TabsTrigger value="railway" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                  <TramFront className="h-4 w-4 mr-2" />
                  Railway Stations
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Metro Station Navigation */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeTab === "railway" ? "Navigate by Railway Station" : "Navigate by Metro Station"}
            </h2>
            <p className="text-gray-600">
              {activeTab === "railway"
                ? "Find pandals near your preferred railway station for easy access"
                : "Find pandals near your preferred metro station for easy access"
              }
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search pandals, themes, metro..."
                className="pl-10 bg-white shadow-lg border-blue-200 focus:border-blue-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

                        {/* Metro Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {getMetroStations().map((metro) => (
                <Button
                  key={metro.id}
                  variant={selectedMetro === metro.id ? "default" : "outline"}
                  onClick={() => setSelectedMetro(metro.id)}
                  className={`${selectedMetro === metro.id 
                    ? `bg-gradient-to-r ${metro.color} text-white hover:opacity-90` 
                    : 'hover:bg-blue-50'
                  } transition-all duration-300 transform hover:scale-105`}
                >
                  <Train className="mr-2 h-4 w-4" />
                  {metro.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {metro.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center mt-6 text-gray-600">
            Showing <span className="font-semibold text-blue-600">{getFilteredPandals().length}</span> pandals
          </div>
        </div>
      </section>

      {/* Pandals by Metro Station */}
      <section id="pandals" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedMetro === "all" ? (
            // Show all metro stations
            Object.entries(
              activeTab === "north" ? northKolkataPandals :
              activeTab === "central" ? centralKolkataPandals :
              activeTab === "south" ? southKolkataPandals :
              railwayStationPandals
            ).map(([stationKey, station]) => (
              <div key={stationKey} className="mb-16">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    {activeTab === "railway" ? (
                      <TramFront className="h-8 w-8 text-emerald-600" />
                    ) : (
                      <Train className="h-8 w-8 text-blue-600" />
                    )}
                    <h2 className="text-4xl font-bold text-gray-900">
                      {activeTab === "railway" ? station.stationName : station.metroName}
                    </h2>
                  </div>
                  <Badge className={`bg-gradient-to-r ${station.color} text-white px-4 py-2 text-sm`}>
                    {station.pandals.length} Pandals • {activeTab === "railway" ? "Railway Line" : "Blue Line"}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {station.pandals.map((pandal) => (
                    <Card key={pandal.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-blue-200 hover:border-blue-300">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={pandal.image}
                          alt={pandal.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Rating Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{pandal.rating}</span>
                        </div>
                        
                        {/* Metro Badge */}
                        <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${station.color} text-white border-none`}>
                          <Train className="h-3 w-3 mr-1" />
                          {pandal.walkingTime} walk
                        </Badge>
                        
                        {/* Established Year */}
                        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur rounded-full px-3 py-1 text-white text-xs">
                          Est. {pandal.established}
                        </div>
                        
                        {/* Pandal Info Overlay */}
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-bold text-xl mb-1">{pandal.name}</h3>
                          <p className="text-sm opacity-90">{pandal.theme}</p>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pandal.description}</p>
                        
                        {/* Key Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1 text-blue-500" />
                            <span className="text-gray-600">{pandal.crowdLevel}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-blue-500" />
                            <span className="text-gray-600">{pandal.bestTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Train className="h-3 w-3 mr-1 text-blue-500" />
                            <span className="text-gray-600">{pandal.metroLine}</span>
                          </div>
                          <div className="flex items-center">
                            <Navigation className="h-3 w-3 mr-1 text-blue-500" />
                            <span className="text-gray-600">{pandal.walkingTime}</span>
                          </div>
                        </div>
                        
                        {/* Highlights */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights</h4>
                          <div className="flex flex-wrap gap-1">
                            {pandal.highlights.slice(0, 3).map((highlight, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white" onClick={() => setShowSignupModal(true)}>
                            <Camera className="mr-1 h-3 w-3" />
                            Visit Plan
                          </Button>
                                                    <LocationViewer
                            locationName={pandal.name}
                            address={`${pandal.name}, ${activeTab === "railway" ? pandal.railwayStation : pandal.metroStation}, ${activeTab === "north" ? "North" : activeTab === "central" ? "Central" : activeTab === "south" ? "South" : ""} Kolkata, West Bengal`}
                            description={`Experience ${pandal.theme} at this ${pandal.established} established pandal`}
                            buttonText=""
                            buttonVariant="outline"
                            buttonSize="sm"
                            className="border-blue-300 text-blue-600 hover:bg-blue-50"
                          />
                          <Button size="sm" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                            <Share2 className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                            <Heart className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show filtered pandals
            <div>
                            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {(() => {
                    const stationData = activeTab === "north" ? northKolkataPandals :
                                       activeTab === "central" ? centralKolkataPandals :
                                       activeTab === "south" ? southKolkataPandals :
                                       railwayStationPandals;
                    const station = stationData[selectedMetro];
                    if (activeTab === "railway") {
                      return station?.stationName || "Search Results";
                    } else {
                      return station?.metroName || "Search Results";
                    }
                  })()}
                </h2>
                <p className="text-gray-600">
                  {getFilteredPandals().length} pandals found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredPandals().map((pandal) => (
                  <Card key={pandal.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-blue-200 hover:border-blue-300">
                    {/* Same card content as above */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={pandal.image}
                        alt={pandal.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{pandal.rating}</span>
                      </div>
                      
                                            <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${(() => {
                        const stationData = activeTab === "north" ? northKolkataPandals :
                                           activeTab === "central" ? centralKolkataPandals :
                                           activeTab === "south" ? southKolkataPandals :
                                           railwayStationPandals;
                        const stationKey = activeTab === "railway" ? pandal.railwayStation : pandal.metroStation;
                        return stationData[stationKey]?.color || 'from-blue-500 to-indigo-500';
                      })()} text-white border-none`}>
                        <Train className="h-3 w-3 mr-1" />
                        {pandal.walkingTime} walk
                      </Badge>
                      
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-xl mb-1">{pandal.name}</h3>
                        <p className="text-sm opacity-90">{pandal.theme}</p>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pandal.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1 text-blue-500" />
                          <span className="text-gray-600">{pandal.crowdLevel}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1 text-blue-500" />
                          <span className="text-gray-600">{pandal.bestTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Train className="h-3 w-3 mr-1 text-blue-500" />
                          <span className="text-gray-600">{pandal.metroLine}</span>
                        </div>
                        <div className="flex items-center">
                          <Navigation className="h-3 w-3 mr-1 text-blue-500" />
                          <span className="text-gray-600">{pandal.walkingTime}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights</h4>
                        <div className="flex flex-wrap gap-1">
                          {pandal.highlights.slice(0, 3).map((highlight, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white" onClick={() => setShowSignupModal(true)}>
                          <Camera className="mr-1 h-3 w-3" />
                          Visit Plan
                        </Button>
                                                <LocationViewer
                          locationName={pandal.name}
                          address={`${pandal.name}, ${activeTab === "railway" ? pandal.railwayStation : pandal.metroStation}, ${activeTab === "north" ? "North" : activeTab === "central" ? "Central" : activeTab === "south" ? "South" : ""} Kolkata, West Bengal`}
                          description={`Experience ${pandal.theme} at this ${pandal.established} established pandal`}
                          buttonText=""
                          buttonVariant="outline"
                          buttonSize="sm"
                          className="border-blue-300 text-blue-600 hover:bg-blue-50"
                        />
                        <Button size="sm" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                          <Share2 className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                          <Heart className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {getFilteredPandals().length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Building className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No pandals found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                  <Button onClick={() => { setSearchTerm(""); setSelectedMetro("all"); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* User Puja Submission Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-4 shadow-2xl">
              <Building className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Feature Your Puja
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Have a special Durga Puja that deserves recognition? Submit your puja details and get featured on our platform to reach thousands of visitors during the festival season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Camera className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Share Photos</h3>
              <p className="text-sm text-gray-600">Upload beautiful images of your pandal and decorations</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Users className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Reach Visitors</h3>
              <p className="text-sm text-gray-600">Connect with thousands of Durga Puja enthusiasts</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Award className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Get Recognition</h3>
              <p className="text-sm text-gray-600">Showcase your community's efforts and creativity</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Puja Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Puja Name *</label>
                <input
                  type="text"
                  placeholder="e.g., Jodhpur Park Sarbojonin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  placeholder="e.g., Near Jadavpur Railway Station"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Puja Theme & Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe your puja theme, special features, and what makes it unique..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto mt-6 text-lg px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => setShowSignupModal(true)}
            >
              <Award className="mr-2 h-5 w-5" />
              Submit for Review
            </Button>

            <p className="text-xs text-gray-500 mt-4">
              * Required fields. All submissions are reviewed before being featured on our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Metro Planning Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4 shadow-2xl">
              <Route className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Plan Your Metro Route
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Get optimal metro routes, walking directions, and crowd timing recommendations for the best pandal hopping experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Train className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Metro Routes</h3>
              <p className="text-sm text-gray-600">Optimal metro connections and timings</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Navigation className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Walking Directions</h3>
              <p className="text-sm text-gray-600">Step-by-step walking guides from metro</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Crowd Timing</h3>
              <p className="text-sm text-gray-600">Best times to visit each pandal</p>
            </div>
          </div>

          <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-xl transform hover:-translate-y-1 transition-all duration-300" onClick={() => setShowSignupModal(true)}>
            <Calendar className="mr-2 h-5 w-5" />
            Create My Pandal Route
          </Button>
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
