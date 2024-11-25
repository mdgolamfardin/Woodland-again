import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';
import { FaLocationArrow } from 'react-icons/fa'; // Icon for the button

const SiteMap = () => {
  const mapRef = useRef();
  const [userPosition, setUserPosition] = useState(null);

  // Coordinates for various locations
  const rewildingArea = [
    [45.123, -75.123], // Example coordinates
    [45.124, -75.124],
    [45.125, -75.125],
    [45.126, -75.126],
  ];
  const yellowBirchArea = [
    [45.130, -75.120],
    [45.131, -75.121],
    [45.132, -75.122],
  ];
  const wetlandArea = [
    [45.140, -75.140],
    [45.141, -75.141],
    [45.142, -75.142],
  ];
  const farmhouseFoundation = [45.127, -75.127];
  const well1 = [45.128, -75.128];
  const well2 = [45.129, -75.129];
  const trailhead1 = [45.130, -75.130];
  const trailhead2 = [45.131, -75.131];

  // Get the user's location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude]);
        },
        () => {
          alert('Unable to retrieve your location');
        }
      );
    }
  }, []);

  // Function to center the map on the user's location
  const centerMapOnUser = () => {
    if (userPosition) {
      mapRef.current.setView(userPosition, 13); // Zoom level 13 for better visibility
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* White card container for the map */}
      <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
        {/* Map */}
        <MapContainer
          center={[45.123, -75.123]}
          zoom={13}
          style={{ width: '100%', height: '400px' }} // Ensures the map fits within the card
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {/* Rewilding Area */}
          <Polygon positions={rewildingArea} color="green" fillOpacity={0.3}>
            <Popup>Rewilding Area</Popup>
          </Polygon>
          {/* Yellow Birch Area */}
          <Polygon positions={yellowBirchArea} color="orange" fillOpacity={0.3}>
            <Popup>Yellow Birch Area</Popup>
          </Polygon>
          {/* Wetland Area */}
          <Polygon positions={wetlandArea} color="blue" fillOpacity={0.3}>
            <Popup>Wetland Area</Popup>
          </Polygon>

          {/* Markers for points of interest */}
          <Marker position={farmhouseFoundation}>
            <Popup>Farmhouse Foundation</Popup>
          </Marker>
          <Marker position={well1}>
            <Popup>Well 1</Popup>
          </Marker>
          <Marker position={well2}>
            <Popup>Well 2</Popup>
          </Marker>
          <Marker position={trailhead1}>
            <Popup>Trailhead 1</Popup>
          </Marker>
          <Marker position={trailhead2}>
            <Popup>Trailhead 2</Popup>
          </Marker>
        </MapContainer>

        {/* Button to center map on user's location */}
        <button
          onClick={centerMapOnUser}
          className="absolute bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaLocationArrow />
        </button>
      </div>
    </div>
  );
};

export default SiteMap;
