import logo from "./logo.svg";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

function App() {
  return (
    <div className="h-screen w-full text-red-400 bg-slate-600">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker center={[51.505, -0.09]}>
          <Popup>
            Your Telegram uses {window.Telegram.WebApp.colorScheme} theme.
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}

export default App;
