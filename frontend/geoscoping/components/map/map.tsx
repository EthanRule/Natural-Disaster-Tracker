import dynamic from "next/dynamic";

// Dynamically import the entire map implementation
const MapWithNoSSR = dynamic(() => import("../map/MapImplementation"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center bg-[#693A12] text-white h-[300px] sm:h-[400px] md:h-[500px] w-full">
      Loading map...
    </div>
  ),
});

export default function Map() {
  return (
    <div className="bg-[#693A12] rounded-lg shadow-md p-1.5 mt-6 w-full overflow-hidden">
      <MapWithNoSSR />
    </div>
  );
}
