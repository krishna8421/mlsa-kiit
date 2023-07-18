// "use client";
// import { OUR_LEADS } from "@/constants";
// import "swiper/css";
// import "swiper/css/bundle";
// import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import LeadsCard from "./LeadsCard";
// // import "swiper/swiper-bundle.min.css";
// const OurLeads = () => {
//   return (
//     <div className="box-border w-[85vw]">

//       {/* <h1 className="ml-9 text-lg font-semibold text-[#ffffff] md:text-5xl mb-8"> */}

//       <h1 className="ml-9 text-lg font-semibold text-[#ffffff] md:text-3xl text-[12px] sm:text-[18px] font-semibold md:mb-[20px] md:text-4xl items-start text-[#FFFFFF] 2xl:text-[2.1vw]">

//         Our{" "}
//         <span className="bg-gradient-to-r from-[#21FD8B] to-[#2CC4F2] bg-clip-text text-transparent">
//           Leads
//         </span>
//       </h1>
//       <Swiper
//         className="px-3 md:ml-20"
//         spaceBetween={10}
//         slidesPerView={1}
//         centeredSlides={true}
//         cssMode={true}
//         loop={false}
//         mousewheel={true}
//         navigation={true}
//         // autoplay={{
//         //   delay: 2500,
//         //   disableOnInteraction: true,
//         // }}
//         breakpoints={{
//           350: {
//             slidesPerView: 1,
//           },
//           640: {
//             slidesPerView: 2.3,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//           1280: {
//             slidesPerView: 4.7,
//             spaceBetween: 10,
//           },
//           1440: {
//             slidesPerView: 5.7,
//             spaceBetween: 5,
//           },
//         }}
//         modules={[Autoplay, Navigation, Pagination]}
//       >
//         {OUR_LEADS.map((Lead, index) => {
//           return (
//             <SwiperSlide key={index}>
//               <LeadsCard {...Lead} index={index} />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default OurLeads;
