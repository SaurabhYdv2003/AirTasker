"use client"
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  const mapRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: 28.988200, lng: 79.406850,
          });
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (currentPosition) {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      });

      loader.load().then(() => {
        const map = new google.maps.Map(mapRef.current, {
          center: currentPosition,
          zoom: 15, 
          disableDefaultUI: false, 
          zoomControl: true, 
          mapTypeControl: true,
          scaleControl: true, 
          streetViewControl: true, 
          rotateControl: true,
          fullscreenControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP, 
        });

        const markerImg = {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", 
          size: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0, 0), 
          anchor: new google.maps.Point(20, 40), 
          scaledSize: new google.maps.Size(40, 40) 
        };

        new google.maps.Marker({
          position: currentPosition,
          map: map,
          title: "Your Location",
          icon: markerImg 
        });
      });
    }
  }, [currentPosition]);

  return <div style={{ height: "350px", width: "100%", }} ref={mapRef} />;
}

export default Map;