import Map from "ol/Map";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";

interface MapState {
  map: Map;
  setMap: (map: Map) => void;
}

const useMapStoreBase = create<MapState>()((set) => ({
  map: new Map(),
  setMap: (map: Map) => set({ map }),

}));

export const useMapStore = createSelectors(useMapStoreBase);
