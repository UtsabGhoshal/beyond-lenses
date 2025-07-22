import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { searchPlaces, getPlaceDetails, geocodeAddress } from "./routes/maps";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

      app.get("/api/demo", handleDemo);

  // Maps API routes
  app.post("/api/maps/places/search", searchPlaces);
  app.post("/api/maps/places/details", getPlaceDetails);
  app.post("/api/maps/geocode", geocodeAddress);

  return app;
}
