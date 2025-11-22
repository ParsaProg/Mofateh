"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";

export default function SchoolMapInner() {
  const position: LatLngExpression = [28.50122, 53.53998];

  // FIX Leaflet icons safely in the browser
  useEffect(() => {
    const L = require("leaflet");

    const DefaultIcon = L.icon({
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
      iconSize: [40, 41],
      iconAnchor: [12, 41],
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={60}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <Marker position={position}>
        <Popup>
          <h1 className="text-center">
            مدرسه نمونه دولتی شهید مفتح <br /> جزییات آدرس
            <br />
            مختصات دقیق محل:
            <br />
            <strong className="font-bold text-black">
              {convertToFarsiNumbers("28.50122, 53.53998")}
            </strong>
          </h1>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
