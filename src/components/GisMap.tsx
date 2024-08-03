import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat, transform } from "ol/proj";
import { TileWMS } from "ol/source";
import { useMapStore } from "@/stores/map-store";
import Zoom from "./tool/Zoom";
import { defaults as defaultControls } from "ol/control";
// @ts-ignore
import ScaleLine from "ol-ext/control/CanvasScaleLine";
// @ts-ignore
import Scale from "ol-ext/control/Scale";
import LatLon from "./tool/LatLon";

const GisMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);
  const INDIA_CENTER_COORDS = [78.9629, 22.5937];
  const ctrl = new Scale({});
  const scaleline = new ScaleLine({});

  const setMap = useMapStore.use.setMap();

  useEffect(() => {
    ////////////////////////////////
    if (hasMounted.current) {
      return;
    }
    hasMounted.current = true;
    ////////////////////////////////
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(INDIA_CENTER_COORDS),
        zoom: 5.2,
      }),
      controls: false
        ? []
        : defaultControls({
            zoom: false,
            attribution: true,
            rotate: false,
          }),
    });

    setMap(map);
    map.addControl(ctrl);
    map.addControl(scaleline);
  }, []);

  return (
    <>
      <div
        id="map"
        className="h-screen"
        style={{
          width: "100vw",
        }}
        ref={mapRef}
      ></div>
      <LatLon />
      <Zoom />
    </>
  );
};

export default GisMap;
