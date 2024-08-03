import { useNavigationStore } from "@/stores/navigation-store";
import react from "react";

const Test = () => {
  const id = useNavigationStore.getState().id;
  return <span>test:{id}</span>;
};

export default Test;
