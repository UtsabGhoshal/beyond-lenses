import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink, Navigation, Clock, Phone, Globe, Star } from "lucide-react";

interface LocationData {
  lat: number;
  lng: number;
  address: string;
}

interface LocationViewerProps {
  locationName: string;
  address?: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export default function LocationViewer({ 
  locationName, 
  address, 
  description,
  buttonText = "View Location",
  buttonVariant = "outline",
  buttonSize = "sm",
  className = ""
}: LocationViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  const handleViewLocation = async () => {
    setLoading(true);
    setIsUsingFallback(false);
    
    try {
      const searchQuery = address || locationName;
      const response = await fetch('/api/maps/geocode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: searchQuery }),
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.success && data.location) {
          setLocationData(data.location);
          return;
        }
      }

      // If API fails or returns no data, use fallback
      throw new Error('API unavailable');

    } catch (err) {
      // Create fallback location
      const fallbackLocation = {
        lat: 22.5726,
        lng: 88.3639,
        address: `${address || locationName}, Kolkata, West Bengal, India`
      };
      setLocationData(fallbackLocation);
      setIsUsingFallback(true);
      console.warn('Using fallback location due to API error:', err);
    } finally {
      setLoading(false);
    }
  };

  const openInGoogleMaps = () => {
    if (locationData) {
      const query = encodeURIComponent(locationData.address);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  const openDirections = () => {
    if (locationData) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${locationData.lat},${locationData.lng}`, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize} 
          className={className}
          onClick={handleViewLocation}
        >
          <MapPin className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            {locationName}
          </DialogTitle>
          <DialogDescription>
            {description || `Location details for ${locationName}`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {loading && (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-2">Loading location...</span>
            </div>
          )}

          {locationData && !loading && (
            <>
              {/* Fallback Notice */}
              {isUsingFallback && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Location service unavailable. Showing approximate Kolkata area.
                  </p>
                </div>
              )}

              {/* Location Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Location Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium">{locationData.address}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {locationData.lat.toFixed(4)}, {locationData.lng.toFixed(4)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button 
                  onClick={openInGoogleMaps}
                  className="w-full"
                  variant="default"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in Google Maps
                </Button>
                <Button 
                  onClick={openDirections}
                  className="w-full"
                  variant="outline"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>

              {/* Additional Info */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-green-800">
                    <Star className="h-4 w-4" />
                    <span className="text-sm font-medium">Heritage Location</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    This is a culturally significant location in Kolkata's heritage quarter.
                  </p>
                </CardContent>
              </Card>

              {/* Interactive Map Alternative */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Map View</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">Interactive map unavailable</p>
                      <Button 
                        onClick={openInGoogleMaps}
                        size="sm"
                        variant="outline"
                      >
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
