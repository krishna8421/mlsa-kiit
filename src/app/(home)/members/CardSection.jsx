import Image from "next/image";
import EventLine from "./EventLine";
import "./index.css";
const CardSection = ({ team, lineNum, teamName }) => {
    return (
        <div className="w-[80vw] ml-[10vw] mr-[10vw] mt-5 ">
            <EventLine name={teamName} lineNum={lineNum} />
            <div className="w-full grid gap-x-8 lg:gap-y-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 ">
                {team.map((item, index) => {
                    return (
                        <div className="w-[90%] lg:h-[40vh] md:h-[15vh] sm:h-[40vh] xsm:h-[20vh] mt-3 relative  " key={item.id} >
                            <Image
                                fill
                                className="w-full  h-full z-10"
                                src={item.img}
                                alt={item.name}
                            />
                            <div className="absolute w-full h-[30%] flex justify-center items-center gradientImageHover z-20 bottom-0 text-center  ">
                                <p className="text-white md:text-sm"> {item.name}</p>
                                {/* <p className="text-white" > {item.domain}</p> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardSection;
