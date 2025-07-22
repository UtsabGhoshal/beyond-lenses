import { Request, Response } from "express";

// Get API key from environment variables with fallback
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || 'ea20e25b95mshaa23b6e950ced78p1caa7bjsna2036f230cb3';

// Google Maps Places API search endpoint
export async function searchPlaces(req: Request, res: Response) {
  try {
    const { query, latitude, longitude } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: "Query parameter is required" });
    }

    // Try to use the RapidAPI service first
    try {
      const response = await fetch("https://google-map-places-new-v2.p.rapidapi.com/v1/places:autocomplete", {
        method: "POST",
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'google-map-places-new-v2.p.rapidapi.com',
          'Content-Type': 'application/json',
          'X-Goog-FieldMask': '*'
        },
        body: JSON.stringify({
          input: query,
          locationBias: {
            circle: {
              center: {
                latitude: latitude || 22.5726, // Default to Kolkata
                longitude: longitude || 88.3639
              },
              radius: 10000
            }
          },
          includedPrimaryTypes: [],
          includedRegionCodes: ['IN'],
          languageCode: 'en',
          regionCode: 'IN',
          origin: {
            latitude: latitude || 22.5726,
            longitude: longitude || 88.3639
          },
          inputOffset: 0,
          includeQueryPredictions: true,
          sessionToken: Math.random().toString(36).substring(7)
        })
      });

      if (response.ok) {
        const data = await response.json();
        return res.json(data);
      } else {
        console.warn(`RapidAPI request failed with status ${response.status}, falling back to local geocoding`);
      }
    } catch (apiError) {
      console.warn('RapidAPI service unavailable, falling back to local geocoding:', apiError);
    }

    // Fallback to local geocoding
    return geocodeAddress(req, res);

  } catch (error) {
    console.error("Maps API error:", error);
    res.status(500).json({ error: "Failed to fetch location data" });
  }
}

// Get place details by place ID
export async function getPlaceDetails(req: Request, res: Response) {
  try {
    const { placeId } = req.body;
    
    if (!placeId) {
      return res.status(400).json({ error: "Place ID is required" });
    }

    try {
      const response = await fetch("https://google-map-places-new-v2.p.rapidapi.com/v1/places:details", {
        method: "POST",
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'google-map-places-new-v2.p.rapidapi.com',
          'Content-Type': 'application/json',
          'X-Goog-FieldMask': '*'
        },
        body: JSON.stringify({
          placeId: placeId
        })
      });

      if (response.ok) {
        const data = await response.json();
        return res.json(data);
      } else {
        console.warn(`RapidAPI place details failed with status ${response.status}`);
      }
    } catch (apiError) {
      console.warn('RapidAPI place details service unavailable:', apiError);
    }

    // Fallback response
    res.status(404).json({ error: "Place details not available" });

  } catch (error) {
    console.error("Place details API error:", error);
    res.status(500).json({ error: "Failed to fetch place details" });
  }
}

// Enhanced geocoding endpoint for known locations
export async function geocodeAddress(req: Request, res: Response) {
  try {
    const { address } = req.body;
    
    if (!address) {
      return res.status(400).json({ error: "Address parameter is required" });
    }
    
    // Comprehensive list of Kolkata heritage locations with precise coordinates
    const knownLocations: Record<string, { lat: number; lng: number; address: string }> = {
      // Heritage Pujas locations
      "hathkhola dutta bari": { lat: 22.5892, lng: 88.3654, address: "Hathkhola Dutta Bari, Sovabazar, Kolkata, West Bengal, India" },
      "sovabazar rajbari": { lat: 22.5966, lng: 88.3668, address: "Sovabazar Rajbari, Kolkata, West Bengal, India" },
      "chhatubabu latu babu": { lat: 22.5903, lng: 88.3645, address: "Chhatu Babu Latu Babu Thakur Bari, Sovabazar, Kolkata, West Bengal, India" },
      "dorji para mitra bari": { lat: 22.5912, lng: 88.3648, address: "Dorji Para Mitra Bari, Sovabazar, Kolkata, West Bengal, India" },
      "harakutir ray-banerjee": { lat: 22.5886, lng: 88.3576, address: "Harakutir Ray-Banerjee Bari, Sovabazar, Kolkata, West Bengal, India" },
      "badan chand roy bari": { lat: 22.5748, lng: 88.3579, address: "Badan Chand Roy Bari, Central Avenue, Kolkata, West Bengal, India" },
      "shyamaldhan dutta bari": { lat: 22.5877, lng: 88.3621, address: "Shyamaldhan Dutta Bari, Central Avenue, Kolkata, West Bengal, India" },
      "motilal seal": { lat: 22.5756, lng: 88.3591, address: "Motilal Seal's Bari, Central Avenue, Kolkata, West Bengal, India" },
      "khelat ghose": { lat: 22.5701, lng: 88.3567, address: "Khelat Ghose Bari, Central Avenue, Kolkata, West Bengal, India" },
      "chorbagan chatterjee": { lat: 22.5822, lng: 88.3635, address: "Chorbagan Chatterjee Bari, Central Avenue, Kolkata, West Bengal, India" },
      "rani rashmoni": { lat: 22.5620, lng: 88.3551, address: "Rani Rashmoni Kachari Bari, Central Avenue, Kolkata, West Bengal, India" },
      "rajbari ballygunge": { lat: 22.5430, lng: 88.3654, address: "Rajbari Ballygunge, Kolkata, West Bengal, India" },
      "bardhan bari": { lat: 22.5612, lng: 88.3540, address: "Bardhan Bari, Central Avenue, Kolkata, West Bengal, India" },
      "mallick bari": { lat: 22.5336, lng: 88.3491, address: "Mallick Bari, Bhowanipore, Kolkata, West Bengal, India" },
      "bhowanipore de bari": { lat: 22.5351, lng: 88.3436, address: "Bhowanipore De Bari, Kolkata, West Bengal, India" },
      "sabarna roy chowdhury": { lat: 22.4799, lng: 88.3064, address: "Sabarna Roy Chowdhury Atchala Bari, Barisha, Kolkata, West Bengal, India" },
      
      // Featured Pandals locations
      "santosh mitra square": { lat: 22.5003, lng: 88.3392, address: "Santosh Mitra Square, South Kolkata, West Bengal, India" },
      "bagbazar sarbojanin": { lat: 22.5901, lng: 88.3677, address: "Bagbazar Sarbojanin, North Kolkata, West Bengal, India" },
      "park circus": { lat: 22.5460, lng: 88.3732, address: "Park Circus, Central Kolkata, West Bengal, India" },
      "ekdalia evergreen": { lat: 22.5234, lng: 88.3543, address: "Ekdalia Evergreen, South Kolkata, West Bengal, India" },
      "mudiali club": { lat: 22.5912, lng: 88.3723, address: "Mudiali Club, North Kolkata, West Bengal, India" },
      "suruchi sangha": { lat: 22.5543, lng: 88.3521, address: "Suruchi Sangha, Central Kolkata, West Bengal, India" },
      
      // General areas
      "kumartuli": { lat: 22.5916, lng: 88.3587, address: "Kumartuli, Kolkata, West Bengal, India" },
      "sovabazar": { lat: 22.5892, lng: 88.3654, address: "Sovabazar, Kolkata, West Bengal, India" },
      "central avenue": { lat: 22.5675, lng: 88.3599, address: "Central Avenue, Kolkata, West Bengal, India" },
      "bagbazar": { lat: 22.5901, lng: 88.3677, address: "Bagbazar, Kolkata, West Bengal, India" },
      "shyambazar": { lat: 22.5873, lng: 88.3732, address: "Shyambazar, Kolkata, West Bengal, India" },
      "bhowanipore": { lat: 22.5351, lng: 88.3436, address: "Bhowanipore, Kolkata, West Bengal, India" },
      "pathuriaghata": { lat: 22.5876, lng: 88.3643, address: "Pathuriaghata Street, Kolkata, West Bengal, India" },
      "jorasanko": { lat: 22.5876, lng: 88.3754, address: "Jorasanko, Kolkata, West Bengal, India" },
      "beadon street": { lat: 22.5798, lng: 88.3687, address: "Beadon Street, Kolkata, West Bengal, India" },
      "chitpur": { lat: 22.5943, lng: 88.3732, address: "Chitpur, Kolkata, West Bengal, India" },
      "ahiritola": { lat: 22.6034, lng: 88.3765, address: "Ahiritola, Kolkata, West Bengal, India" },
      "cossipore": { lat: 22.6123, lng: 88.3765, address: "Cossipore, Kolkata, West Bengal, India" },
      "thanthania": { lat: 22.5806, lng: 88.3659, address: "Thanthania, Kolkata, West Bengal, India" },
      "ballygunge": { lat: 22.5430, lng: 88.3654, address: "Ballygunge, Kolkata, West Bengal, India" }
    };

    const normalizedAddress = address.toLowerCase().trim();
    
    // Check if it's a known location (exact match or contains)
    for (const [key, location] of Object.entries(knownLocations)) {
      if (normalizedAddress.includes(key) || key.includes(normalizedAddress)) {
        return res.json({
          success: true,
          location: location,
          mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`,
          embedUrl: `https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-MjnwqNE92fFAaLKhA&q=${encodeURIComponent(location.address)}&zoom=16`,
          directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`
        });
      }
    }

    // If not found in known locations, return a generic Kolkata location
    const fallbackLocation = { lat: 22.5726, lng: 88.3639, address: "Kolkata, West Bengal, India" };
    res.json({
      success: true,
      location: fallbackLocation,
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      embedUrl: `https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-MjnwqNE92fFAaLKhA&q=${encodeURIComponent(address)}&zoom=14`,
      directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${fallbackLocation.lat},${fallbackLocation.lng}`,
      note: "Location approximated to Kolkata area"
    });

  } catch (error) {
    console.error("Geocoding error:", error);
    res.status(500).json({ error: "Failed to geocode address" });
  }
}
