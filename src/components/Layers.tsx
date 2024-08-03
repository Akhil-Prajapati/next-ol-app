import { useMapStore } from "@/stores/map-store";
import TileLayer from "ol/layer/Tile";
import { TileWMS } from "ol/source";
import React, { useState } from "react";

function Layers() {
  const map = useMapStore.use.map();
  const [collapse, setCollapse] = useState(true);
  const [checked, setChecked] = useState(false);
  const layers = map.getLayers();

  const dlc = new TileLayer({
    source: new TileWMS({
      url: "http://localhost:8080/geoserver/wms",
      params: {
        LAYERS: "ne:pension_dlc_status",
        TILED: true,
      },
      serverType: "geoserver",
    }),
    properties: {
      name: "DLC Layer",
    },
  });

  const stateBoundary = new TileLayer({
    source: new TileWMS({
      url: "http://localhost:8080/geoserver/wms",
      params: {
        LAYERS: "ne:state_boundary_21_03_2023",
        TILED: true,
      },
      serverType: "geoserver",
    }),
  });
  const handleCheckboxChange = (e: any) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      map.addLayer(dlc);
    } else {
      layers.forEach((layer) => {
        if (layer?.get("name") === "DLC Layer") {
          map.removeLayer(layer);
        }
      });
    }
  };
  map.addLayer(stateBoundary);

  return (
    <div className="max-w-md mx-auto text-black border-t-2 border-gray-500 p-4">
      <div className="flex justify-between items-center mb-4">
        <h5 className=" font-bold">Tile Layers</h5>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-md p-2"
          type="button"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div id="layers" className={collapse ? "collapse" : "open"}>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <input
              className="mr-2"
              type="checkbox"
              id="dlc-checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <label className="text-sm text-black" htmlFor="dlc-checkbox">
              DLC
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              className="mr-2"
              type="checkbox"
              id="state-boundary-checkbox"
              checked
            />
            <label
              className="text-sm text-black"
              htmlFor="state-boundary-checkbox"
            >
              State Boundary
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layers;
