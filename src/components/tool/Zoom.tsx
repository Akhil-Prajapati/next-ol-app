import { useMapStore } from "@/stores/map-store";
import { Extent } from "ol/extent";
import { transformExtent } from "ol/proj";
import React from "react";
import { BiHome } from "react-icons/bi";
import { FiHome, FiZoomIn, FiZoomOut } from "react-icons/fi";

function Zoom() {
  const map = useMapStore.use.map();
  const zoomIn = () => {
    map.getView().setZoom((map.getView().getZoom() ?? 0) + 1);
  };

  const zoomOut = () => {
    map.getView().setZoom((map.getView().getZoom() ?? 1) - 1);
  };

  const indiaExtent4326: Extent = [68.11, 6.4, 96.41, 37.5];
  const indiaExtent3857 = transformExtent(
    indiaExtent4326,
    "EPSG:4326",
    "EPSG:3857"
  );
  const reset = () => {
    map.getView().fit(indiaExtent3857, { duration: 500 });
  };
  return (
    <>
      <div className="absolute top-20 left-5  flex flex-col">
        <button className="p-2 bg-gray-700 hover:bg-gray-800">
          <FiZoomIn
            className="text-white font-bold  rounded"
            size={20}
            onClick={zoomIn}
          />
        </button>
        <button className="p-2 bg-gray-700 hover:bg-gray-800">
          <FiZoomOut
            className="text-white font-bold  rounded"
            size={20}
            onClick={zoomOut}
          />
        </button>
      </div>
      <div className="absolute top-44 left-5 ">
        <button className="p-2 bg-stone-700 hover:bg-stone-800">
          <BiHome
            className="text-white font-bold  rounded"
            size={20}
            onClick={reset}
          />
        </button>
      </div>
    </>
  );
}

export default Zoom;
