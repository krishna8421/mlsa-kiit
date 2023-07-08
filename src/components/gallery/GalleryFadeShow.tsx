import GalleryFadeShowCard from "./GalleryFadeShowCard";
import { ProjectWing_GALLERY, Frontend_GALLERY, Devops_GALLERY, Eyespy_GALLERY } from "./data";

const GalleryFadeShow = () => {
  return (
    <div className="flex justify-around max-w-[1440px] mx-auto">
      <GalleryFadeShowCard  imgArray={ProjectWing_GALLERY} title="Project Wing" num={1} timer={5000}/>
      <GalleryFadeShowCard  imgArray={Frontend_GALLERY} title="Frontend With Benefits" num={2} timer={10000}/>
      <GalleryFadeShowCard  imgArray={Devops_GALLERY} title="DevOps" num={3} timer={8000}/>
      <GalleryFadeShowCard  imgArray={Eyespy_GALLERY} title="EyeSpy Squid" num={4} timer={11000}/>
    </div>
  );
};

export default GalleryFadeShow;
