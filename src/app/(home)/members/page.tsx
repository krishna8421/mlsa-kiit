"use client";

import Image from "next/image";
import React from "react";
import { RiHeart2Fill } from "react-icons/ri";

interface eventLineProp {
  lineNum: number;
  name: string;
}

const EventLine: React.FC<eventLineProp> = ({ name, lineNum }) => {
  return (
    <div className="mx-auto flex w-[90vw] items-center justify-between">
      <div className="flex w-full items-center pr-8">
        <div className="flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[#083475] text-white md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
          {lineNum}
        </div>
        <h1
          className="text-xl"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <b>{name}</b>
        </h1>
        <div className="h-[3px] w-full bg-blue-line  "></div>
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
                className="absolute left-0 right-0 h-full w-screen max-w-[1920px]"
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
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px] rotate-180"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main className="sm:flex-auto">
              <div className="card sm:flex-auto">
                <div className="imgdiv">
                  <img src="./members/Harshit2.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Harshit Yadav</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/amaan.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Amaan Bhati</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/anshul.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Anshul Kumar</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/akshat.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Akshat Srivastava</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/harsh.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Harsh Raj</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/MANISH KUMAR.webp" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Manish Kumar Saw</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/GARV AGARWAL.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Garv Agarwal</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Ashish Mishra.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Ashish Kumar Mishra</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/RISHABH KUMAR.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Rishabh Kumar</h2>
                  <p>Web Development</p>
                </div>
              </div>
            </main>
          </div>
          <EventLine name="Video Editing" lineNum={2} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px]"
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 19rem;
                height: 21.875rem;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 19rem;
                height: 21.875rem;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.3s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Pratik.jpeg" alt="" className="img" />
                </div>
                <div className="card-content ">
                  <h2>Pratik Mohanty</h2>
                  <p>Video Editing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Shresth Rakesh Kumar.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Shreshth Rakesh Kumar</h2>
                  <p>Video Editing</p>
                </div>
              </div>
            </main>
            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Parivesh.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Parivesh Srivastava</h2>
                  <p>Video Editing</p>
                </div>
              </div>
            </main>
            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/SASWATI PADHY.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Saswati Padhy</h2>
                  <p>Video Editing</p>
                </div>
              </div>
            </main>
            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/PIYALI MURMU.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Piyali Murmu</h2>
                  <p>Video Editing</p>
                </div>
              </div>
            </main>
            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/V N Ayush Mudaliyar.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>V N Ayush Mudaliyar</h2>
                  <p>Video Editing</p>
                </div>
              </div>
            </main>
          </div>
          <EventLine name="Marketing" lineNum={3} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main className="sm:flex-auto">
              <div className="card sm:flex-auto">
                <div className="imgdiv">
                  <img src="./members/YASHASWINI SARANGI.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Yashaswini Sarangi</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>
            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/2.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Debesh Acharya</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/VAISHNAVI SINGH.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Vaishnavi Singh</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/DHYANAM ATTREYA.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Dhyanam Attreya</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Deepika Soni.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Deepika Soni</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/RajivMishra.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Rajiv Mishra</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Shouryjeet Gupta.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Shouryjeet Gupta</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/PRANSHU SAHAY.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Pranshu Sahay</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>
            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/GIRISH KYAL.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Girish Kayal</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ABHISHREEBHADRA.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Abhishreebhadra</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ANKIT KUMAR.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Ankit Kumar</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Adarsh Kumar Rath.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Adarsh Kumar Rath</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Krishna Agrawal.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Krishna Agrawal</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/UTSAV ANAND.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Utsav Anand</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/AVINAV ROY.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Avinav Roy</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Anand.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Anand</h2>
                  <p>Marketing</p>
                </div>
              </div>
            </main>
          </div>
          <EventLine name="Machine Learning" lineNum={4} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px] rotate-180"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main className="sm:flex-auto">
              <div className="card sm:flex-auto">
                <div className="imgdiv">
                  <img src="./members/Indranil_Nag.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Indranil Nag</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ATIG PUROHIT.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Atig Purohit</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/MITUL GOSWAMI.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Mitul Goswami</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/AlokKumarJha.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Alok Kumar Jha</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ANURAG PRASOON.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Anurag Prasoon</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/NISHARG.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Nisharg Nargund</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ArunopalDutta.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Arunopal Dutta</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/KARTIK AGARWAL.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Kartik Agarwal</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Rohan Volety.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Rohan Volety</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/anir.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Anirban Roy</h2>
                  <p>Machine Learning</p>
                </div>
              </div>
            </main>
          </div>
          <EventLine name="Graphic Design" lineNum={5} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px] rotate-180"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main className="sm:flex-auto">
              <div className="card sm:flex-auto">
                <div className="imgdiv">
                  <img src="./members/ASHISH POTHAL.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Ashish Pothal</h2>
                  <p>Graphic Design</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Harsh Singh.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Harsh Singh</h2>
                  <p>Graphic Design</p>
                </div>
              </div>
            </main>
          </div>

          <EventLine name="Creative" lineNum={6} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main className="sm:flex-auto">
              <div className="card sm:flex-auto">
                <div className="imgdiv">
                  <img src="./members/DAWAR SHAFAQUE.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Dawar Shafaque</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Isha Mishra.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Isha Mishra</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/TANVI UPADHYAY.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Tanvi Upadhyay</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/SAKSHI PATHAK.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Sakshi Pathak</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/SUDIPTA SUBHAM.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Sudipta Subham</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ANUBHAV KAKATI.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Anubhav Kakati</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ANKIT MOHAPATRA.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Ankit Mohapatra</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/DIBYOJYOTI DEB.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Dibyojyoti Deb</h2>
                  <p>Creative</p>
                </div>
              </div>
            </main>
          </div>

          <EventLine name="Android Development" lineNum={7} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Aritra Pal.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Aritra Pal</h2>
                  <p>Android Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Pranshu sarthak.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Pranshu Sarthak</h2>
                  <p>Android Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/SHASHANK DEEPAK.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Shashank Deepak</h2>
                  <p>Android Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Shivangi.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Shivangi Chatterjee</h2>
                  <p>Android Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/G Dhvani Iyer.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>G Dhvani Iyer</h2>
                  <p>Android Development</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/shubhankar shahi.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Shubhankar Shahi</h2>
                  <p>Android Development</p>
                </div>
              </div>
            </main>
          </div>

          <EventLine name="AR/VR" lineNum={8} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px] rotate-180"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/ANISH ROY.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Anish Roy</h2>
                  <p>AR/VR</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/PRITAM KUMAR PAL.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Pritam Kumar Pal</h2>
                  <p>AR/VR</p>
                </div>
              </div>
            </main>
          </div>

          <EventLine name="Cloud and Cyber Security" lineNum={9} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute right-[-126px] z-[-10] h-[254px] w-[254px]"
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Archit Gupta.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Archit Gupta</h2>
                  <p>Cloud and Cyber Security</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Subandhu.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Subandhu</h2>
                  <p>Cloud and Cyber Security</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/sourasish.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Sourasish Basu</h2>
                  <p>Cloud and Cyber Security</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Tanisha.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Tanisha Verma</h2>
                  <p>Cloud and Cyber Security</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/rahul.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Rahul Biswas</h2>
                  <p>Cloud and Cyber Security</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/dhruv.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Dhruv Agarwal</h2>
                  <p>Cloud and Cyber Security</p>
                </div>
              </div>
            </main>
          </div>

          <EventLine name="Youtube Hosting" lineNum={10} />
          <div className="mx-auto mb-8 mt-10 flex w-[1010px] flex-wrap gap-12 overflow-auto">
            <Image
              src="/eventImages/eventsBgLogo.png"
              alt="events design"
              width={600}
              height={600}
              className="absolute left-[-126px] z-[-10] h-[254px] w-[254px] rotate-180"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            ></Image>

            <style jsx>{`
              h2 {
                text-align: center;
                color: white;
              }

              p {
                text-align: center;
                color: white;
              }

              .img {
                width: 304px;
                height: 350px;
                object-fit: cover;
                overflow: hidden;
              }

              .imgdiv {
                width: 304px;
                height: 350px;
              }

              .card-content {
                visibility: hidden;
                margin-top: -3rem;
              }

              .card:hover {
                color: white;
                cursor: pointer;

                opacity: 0.7;
                transition: 0.4s ease-in;
                .card-content {
                  visibility: visible;
                  margin-top: -3rem;
                }
              }
              @media (min-width: 640px) {
                .img {
                  display: flex;
                }
              }
            `}</style>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Paarth Pareek.jpeg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Paarth Pareek</h2>
                  <p>Youtube Hosting</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/Prakhar Singh.png" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Prakhar Singh</h2>
                  <p>Youtube Hosting</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/APOORVA AANAND.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Apoorva Aanand</h2>
                  <p>Youtube Hosting</p>
                </div>
              </div>
            </main>

            <main>
              <div className="card">
                <div className="imgdiv">
                  <img src="./members/bhoomika.jpg" alt="" className="img" />
                </div>
                <div className="card-content">
                  <h2>Bhoomika Sehta</h2>
                  <p>Youtube Hosting</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
