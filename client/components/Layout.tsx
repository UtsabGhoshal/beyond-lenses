import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, User } from "lucide-react";
import LoginModal from "./auth/LoginModal";
import SignupModal from "./auth/SignupModal";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">
                Beyond Lenses
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                to="/destinations"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/destinations") ? "text-primary" : "text-gray-700"
                }`}
              >
                Destinations
              </Link>
              <Link
                to="/tours"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/tours") ? "text-primary" : "text-gray-700"
                }`}
              >
                Tours
              </Link>
              <Link
                to="/durga-puja"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/durga-puja") ? "text-primary" : "text-gray-700"
                }`}
              >
                Durga Puja
              </Link>
              <Link
                to="/featured-pandals"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/featured-pandals") ? "text-primary" : "text-gray-700"
                }`}
              >
                Pandals
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-gray-700"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-gray-700"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex space-x-2">
              <Button variant="outline" onClick={() => setShowLoginModal(true)}>
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button onClick={() => setShowSignupModal(true)}>
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                                <span className="text-xl font-bold">Beyond Lenses</span>
              </div>
              <p className="text-gray-400 text-sm">
                                Discover the beauty, culture, and heritage of West Bengal with our expertly crafted travel experiences.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/destinations" className="block text-gray-400 hover:text-white transition-colors">
                  Destinations
                </Link>
                <Link to="/tours" className="block text-gray-400 hover:text-white transition-colors">
                  Tours
                </Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
              <div className="space-y-2">
                <div className="text-gray-400">                Kolkata</div>
                <div className="text-gray-400">                Darjeeling</div>
                <div className="text-gray-400">                Sundarbans</div>
                <div className="text-gray-400">                Kalimpong</div>
                <div className="text-gray-400">                Murshidabad</div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-400 text-sm">+91 90889 93780</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-gray-400 text-sm">utsab.ghoshal04@gmail.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    84, Subash Sarani, Birati<br />
                    Kolkata, India 700051
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
                            © 2024 Beyond Lenses Travel Agency. All rights reserved.
            </p>
          </div>
                </div>
      </footer>

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
    </div>
  );
}
