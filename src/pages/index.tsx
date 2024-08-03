import dynamic from "next/dynamic";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useState } from "react";

const DynamicMap = dynamic(() => import("../components/GisMap"), {
  ssr: false,
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-full bg-white">
      <Header toggleSidebar={toggleSidebar} />
      <DynamicMap />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
