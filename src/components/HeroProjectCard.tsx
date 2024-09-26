import Image from "next/image";
import "../styles/globals.css";
import Link from "next/link";

const HeroProjectCard = ({ index, project }: any) => {
    return (
        <Link target="_blank" href={project.github} key={index} className="relative w-[192px] h-[150px] rounded-[15%] overflow-hidden flex justify-center items-center back">
            <div className="absolute inset-0 w-full h-full rounded-[15%] bg-gradient-to-br hero_border_rotation from-[#704796] via-[#9B6FEE00] to-[#1C63D3]" />
            <div className="relative w-[187px] h-[145px] rounded-[15%] bg-black flex justify-center items-center">
                <Image src={project.img} alt={project.ProjectName} width={15} height={15} className="w-1/2 h-1/2"/>
            </div>
        </Link>
    );
};

export default HeroProjectCard;
