import {useState} from "react";
import { GALLERY } from "@/constants";
import Image from "next/image";
// import LightGallery from 'lightgallery/react';
// import { LightGallery } from "lightgallery/lightgallery";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-autoplay.css";
// import styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgAutoplay from 'lightgallery/plugins/autoplay';



const Gallery = () => {
  const [showMoreClick, setShowMoreClick] = useState(7);
  const changeShowMore = () => {
    setShowMoreClick(showMoreClick + 3);
  };

  return (
    <div className="max-w-[1920px] pt-[100px] bg-black mx-auto p-[5vw] ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-4 ">
                {GALLERY.map((gallery,index) =>{
                    {if(index + 1 < showMoreClick){
                    return(<>
                        
                        <div key={index} className="relative group gallery-gradient overflow-hidden rounded-[10px] lg:rounded-[15px]  w-full h-[300px] sm:h-[22vw] lg:h-[19.21vw] 3xl:h-[369px]">
                        {/* <LightGallery 
                        speed={500}
                        plugins={[lgThumbnail,lgAutoplay,lgZoom]}> */}
                        <Image src={gallery.img}  width={555} height={355} className="block z-10 w-full h-full object-cover transition duration-700 group-hover:scale-105 " alt="gallery"></Image>
                        {/* </LightGallery> */}
                        <div className="absolute bottom-3 left-4 z-50 text-white text-xl 3xl:text-3xl font-normal ">{gallery.name}</div>
                        {/* <div className="absolute gallery-gradient top-0 left-0 z-20 w-full h-full"></div> */}
                        </div>
                        
                        </>
                        // <div key={index} className=""></div>
                        
                    );}}
                })}
            </div>




        
        <div className={`mx-auto mt-[30px] md:mt-[90px] flex w-full cursor-pointer group items-center mr-[5.8vw] 3xl:mr-[0px]`}
                 onClick={changeShowMore}>
                   <div className={`h-[1px] w-[100%] my-auto bg-[#FFFFFF] group-hover:bg-gray-300 ${
                    showMoreClick >= GALLERY.length  ? "hidden" : "visible"
                 }`}></div>
                  <div
                    className={`flex-shrink-0  ml-2 text-[17px] lg:text-[23px] 3xl:text-[35px] capitalize font-normal leading-none text-white transition duration-300 group-hover:text-[#828282] ${
                        showMoreClick >= GALLERY.length ? "hidden" : "visible"
                     } `}
                  >
                    View More
                  </div>
            </div>
      </div>
  )
}

export default Gallery
