import { MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import { transform } from "ol/proj";
import { useEffect, useState } from "react";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import { useMapStore } from "@/stores/map-store";

const LatLon = () => {
  const map = useMapStore.use.map();
  const [coords, setCoords] = useState<Coordinate>([0, 0]);

  useEffect(() => {
    const handlePointerMove = (evt: MapBrowserEvent<any>) => {
      const coordinate = transform(evt.coordinate, "EPSG:3857", "EPSG:4326");
      setCoords(coordinate);
    };
    map.on("pointermove", handlePointerMove);

    () => {
      map.un("pointermove", handlePointerMove);
    };
  }, [map]);

  return (
    <div className="latLon">
      <TbWorldLatitude
        size={24}
        display="inline"
        strokeWidth="1.5"
        preserveAspectRatio="xMinYMin meet"
      />
      <span>{coords[1].toFixed(4)}</span>
      &nbsp; &nbsp; &nbsp;
      <TbWorldLongitude
        size={24}
        display="inline"
        strokeWidth="1.5"
        preserveAspectRatio="xMinYMin meet"
      />
      <span>{coords[0].toFixed(4)}</span>
    </div>
  );
};

export default LatLon;
