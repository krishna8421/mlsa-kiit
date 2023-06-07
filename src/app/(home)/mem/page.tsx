"use client";
import Image from "next/image";
import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import mem from "../../../styles/mem.module.css";
import { ARVR, AndroidDevelopment, Creative, GraphicDesign, MachineLearning, Marketing, WebDevelopment, YT, cloud, videoediting } from "./mem";
interface eventLineProp {
  lineNum: number;
  name:string;
}
const EventLine: React.FC<eventLineProp> = ({name,lineNum}) => {
  return (
    <div className="mx-auto flex w-[90vw] items-center justify-between">
      <div className="flex w-full items-center pr-8">
        <div className="flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[#083475] text-white md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
          {lineNum}
          
        </div>
        <h1 className="text-xl" style={{display: "inline-block", whiteSpace:"nowrap",paddingLeft:"1rem",paddingRight:"1rem"}}><b>{name}</b></h1>
        <div className="h-[3px] w-full bg-blue-line hover:bg-[#286FD9] "></div>
      </div>
      
    </div>
  );
};
const page = () => {
  return (
    <>
    <div className="m-auto max-w-[1920px]">
        <div className="relative">
          <div className="mb-6 mt-20">
            <div className="xl:h-[451px] relative mt-16 h-[220px] md:h-[300px] lg:h-[400px] 2xl:h-[600px]">
              <Image
                src="/projects/projectHeroArrow.png"
                alt="project hero white background"
                width={1920}
                height={1080}
                className="absolute left-0 right-0 h-full max-w-[1270px]"
              ></Image>
              <Image
                src="/projects/projectHero.png"
                alt="project hero arrow"
                width={1920}
                height={1080}
                className="absolute left-0 right-0 h-full md:w-full"
              ></Image>
            </div>
            <div className="z-4 absolute top-[-20%] ml-4 mt-12 h-full cursor-default font-semibold md:left-[60px] md:ml-0 lg:left-[90px]">
              <div className="flex h-full flex-col justify-center">
                <div className="flex gap-5">
                  <h1 className="cursor-default text-xl md:text-3xl 2xl:text-4xl">
                    Our <span className="text-[#286FD9]">Members</span>
                  </h1>
                  <Image
                    src="/projects/Arrow.png"
                    alt="projects heading arrow"
                    width={200}
                    height={200}
                    className="h-7 w-7 md:h-10 md:w-10"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto max-w-[1920px] px-4 md:px-6">
       
        <div className="mt-16 flex items-center justify-center gap-8">
          <h1 className="font-semibold md:text-2xl  lg:text-[25px] 2xl:text-[2.1vw]">
            Our
            <span className="ml-2 text-[#286FD9]">Members</span>
          </h1>
          <RiHeart2Fill className="text-lg text-[#286FD9]"></RiHeart2Fill>
        </div>
        <EventLine name="Web Development" lineNum={1} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute left-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>

         {WebDevelopment?.map((item,index)=>{
          return(<>
             

          <main>
  <div className = {mem.card}>
    <div className={mem.imgdiv}>
    <img src={WebDevelopment[index].img} alt="img" className={mem.img}/>
    </div>
    <div className={mem.cardcontent}>
      <h2 className={mem.name}>
        {WebDevelopment[index].name}
      </h2>
      <p className={mem.para}>
       {WebDevelopment[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}   
       
</div>
<EventLine name="Marketing" lineNum={2} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
        <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>
           {Marketing?.map((item,index)=>{
          return(<>
           <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
       }
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:13.5rem;
          height:21.875rem;
        }
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;            
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;  
          }
         } `}</style>

            
          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={Marketing[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {Marketing[index].name}
      </h2>
      <p>
       {Marketing[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}          
</div>
<EventLine name="Machine Learning" lineNum={3} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute left-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
           {MachineLearning?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
       }
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:19rem;
          height:21.875rem; 
        }        
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;      
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;   
          }
        }
      `}</style>

          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={MachineLearning[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {MachineLearning[index].name}
      </h2>
      <p>
       {MachineLearning[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}   
       
</div>
<EventLine name="Graphic Design" lineNum={4} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
           {GraphicDesign?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
       }
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:19rem;
          height:21.875rem;
        }
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;              
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;            
          }
        }
 `}</style>

          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={GraphicDesign[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {GraphicDesign[index].name}
      </h2>
      <p>
       {GraphicDesign[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}   
       
</div>
<EventLine name="Creative" lineNum={5} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute left-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
           {Creative?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
        
       }
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:19rem;
          height:21.875rem;
         } 
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;      
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex; 
          }
        }
 `}</style>

          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={Creative[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {Creative[index].name}
      </h2>
      <p>
       {Creative[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}   
       
</div>
<EventLine name="Video Editing" lineNum={6} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
          
         {videoediting?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
       }
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:19rem;
          height:21.875rem;
        }
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;              
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;   
          }
        } 
      `}</style>
        <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={videoediting[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {videoediting[index].name}
      </h2>
      <p>
       {videoediting[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}    
</div>
<EventLine name="Android Development" lineNum={7} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute left-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
           {AndroidDevelopment?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
       }
       .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden; 
        }
        .imgdiv{
          width:19rem;
          height:21.875rem;
        }
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;           
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;   
          }
        }
      `}</style>

          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={AndroidDevelopment[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {AndroidDevelopment[index].name}
      </h2>
      <p>
       {AndroidDevelopment[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}     
</div>
<EventLine name="AR/VR" lineNum={8} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
           {ARVR?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
       }
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:19rem;
          height:21.875rem;
        }
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;      
                  
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;
          }
        }
  `}</style>

          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={ARVR[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {ARVR[index].name}
      </h2>
      <p>
       {ARVR[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}   
       
</div>
<EventLine name="Cloud And CyberSecurity" lineNum={9} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute left-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
           {cloud?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
       }
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:19rem;
          height:21.875rem;
        }
        .card-content{
         visibility:hidden;
         margin-top:-3rem;
        }
         .card:hover{
          color:white;
          cursor:pointer;
            opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;                
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;
         }
        }
      `}</style>

          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={cloud[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {cloud[index].name}
      </h2>
      <p>
       {cloud[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}   
       
</div>
<EventLine name="Youtube Hosting" lineNum={10} />
        <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
          <Image
            src="/eventImages/eventsBgLogo.png"
            alt="events design"
            width={600}
            height={600}
            className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
          ></Image>
           {YT?.map((item,index)=>{
          return(<>
             <style jsx>{`
        h2{
          text-align: center;
          color:white; 
        }
       p{
        text-align: center;
        color:white;
        
       }
        
        .img{
          width:19rem;
          height:21.875rem;
          object-fit:cover;
          overflow:hidden;
        }
        .imgdiv{
          width:19rem;
          height:21.875rem;
        }
        .card-content{
         visibility:hidden;
         margin-top:-3rem;        
        }
         .card:hover{
          color:white;
          cursor:pointer;
          opacity:0.7;
            transition:0.3s ease-in;
           .card-content{
            visibility:visible;
            margin-top:-3rem;      
                  
          }
        }
        @media (min-width: 640px) { 
          .img{
            display:flex;   
          }
        }
      `}</style>

          <main>
  <div className = "card">
    <div className="imgdiv">
    <img src={YT[index].img} alt="img" className="img"/>
    </div>
    <div className="card-content ">
      <h2>
        {YT[index].name}
      </h2>
      <p>
       {YT[index].domain}
      </p>
    </div>
  </div>
</main>
          </>)
        })}   
       
</div>        
</div>
</div>      
    </>
  )
}

export default page;