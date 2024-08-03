import dynamic from "next/dynamic";
import { IoClose } from "react-icons/io5";
const Layers = dynamic(() => import("../components/Layers"), {
  ssr: false,
});

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-md p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-5 right-4 text-gray-600 hover:text-gray-900">
          <IoClose size={20} className="h-6 w-6 " onClick={toggleSidebar} />
        </button>
        <h2 className="text-lg font-bold mb-4 text-black">Layers</h2>
        <Layers />
      </div>
    </div>
  );
};

export default Sidebar;
