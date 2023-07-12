import four from "../../../public/gallery/numbers/four.svg";
import one from "../../../public/gallery/numbers/one.svg";
import three from "../../../public/gallery/numbers/three.svg";
import two from "../../../public/gallery/numbers/two.svg";
import GalleryFadeShowCard from "./GalleryFadeShowCard";
import { Devops_GALLERY, Eyespy_GALLERY, Frontend_GALLERY, ProjectWing_GALLERY } from "./data";
// import two from "./gallery/numbers/two.svg";
const GalleryFadeShow = () => {
  return (
    <div className="max-w-[1920px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto lg:pt-[80px] p-[5vw] ">
      <GalleryFadeShowCard imgArray={ProjectWing_GALLERY} title="Project Wing" num={one} timer={5000} />
      <GalleryFadeShowCard imgArray={Frontend_GALLERY} title="Frontend With Benefits" num={two} timer={10000} />
      <GalleryFadeShowCard imgArray={Devops_GALLERY} title="DevOps" num={four} timer={8000} />
      <GalleryFadeShowCard imgArray={Eyespy_GALLERY} title="EyeSpy Squid" num={three} timer={11000} />
    </div>
  );
};

export default GalleryFadeShow;
