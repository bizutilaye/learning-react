import { useNavigate, useSearchParams } from "react-router-dom"; // Fixed hook import
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // Corrected hook usage
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
