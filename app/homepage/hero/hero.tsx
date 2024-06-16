import { GlobeWrapper } from "@/app/homepage/hero/globeWrapper";
import Emojies from "@/app/homepage/hero/emojies";
import DownloadButtons from "@/app/homepage/hero/downloadButtons";
import { dela_gothic_one } from "@/app/utils/fonts";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-primary xl:px-40 xl:py-20 md:px-12 md:py-12 px-4 py-8">
      <div className="w-full h-full relative grid place-items-center">
        <div className="w-full z-20">
          <h1
            className="xl:text-8xl md:text-6xl text-4xl text-center text-secondary z-20"
            style={dela_gothic_one.style}
          >
            Unvieling The Code Artisian
          </h1>
          <DownloadButtons />
        </div>
        <Emojies />
        <GlobeWrapper />
      </div>
    </section>
  );
};

export default Hero;
