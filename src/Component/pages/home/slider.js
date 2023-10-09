import slider from "@/assets/slider/slider -1.jpg";
import Image from "next/image";
const Slider = () => {
  return (
    <div className="w-full lg:h-[70vh] h-auto mt-6 rounded overflow-hidden relative">
      <Image
        src={slider}
        width={600}
        height={600}
        className="w-full h-auto lg:absolute -bottom-20"
        alt="Slider image"
      />
    </div>
  );
};

export default Slider;
