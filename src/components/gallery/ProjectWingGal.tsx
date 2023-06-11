import Image from "next/image";

const ProjectWingGal = () => {
  return (
    <div className="relative mb-8 mt-10 w-full px-1">
      <div className="  max-w-[1340px] lg:mx-auto">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <div className="relative mb-4 h-auto w-full overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/gallery/Projectwing/DSC_0027.jpg"
              alt="Gallery image"
              width={460}
              height={700}
              className="w-full  rounded-sm object-cover transition duration-1000 ease-in-out hover:scale-105"
            ></Image>
          </div>
          <div className="relative mb-4 h-auto w-full overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/gallery/Projectwing/DSC_0050.jpg"
              alt="Gallery image"
              width={460}
              height={700}
              className="w-full  rounded-sm object-cover transition duration-1000 ease-in-out hover:scale-105"
            ></Image>
          </div>

          <div className="relative mb-4 h-auto w-full overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/gallery/Projectwing/DSC_0029.jpg"
              alt="Gallery image"
              width={460}
              height={700}
              className="w-full  rounded-sm object-cover transition duration-1000 ease-in-out hover:scale-105"
            ></Image>
          </div>
          <div className="relative mb-4 h-auto w-full overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/gallery/Projectwing/DSC_0064.jpg"
              alt="Gallery image"
              width={460}
              height={700}
              className="w-full  rounded-sm object-cover transition duration-1000 ease-in-out hover:scale-105"
            ></Image>
          </div>
          <div className="relative mb-4 h-auto w-full overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/gallery/Projectwing/DSC_0034.jpg"
              alt="Gallery image"
              width={460}
              height={700}
              className="w-full  rounded-sm object-cover transition duration-1000 ease-in-out hover:scale-105"
            ></Image>
          </div>
          <div className="relative mb-4 h-auto w-full overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/gallery/Projectwing/DSC_0070.jpg"
              alt="Gallery image"
              width={460}
              height={700}
              className="w-full  rounded-sm object-cover transition duration-1000 ease-in-out hover:scale-105"
            ></Image>
          </div>
          <div className="relative mb-4 h-auto w-full overflow-hidden bg-cover bg-no-repeat">
            <Image
              src="/gallery/Projectwing/DSC_0071.jpg"
              alt="Gallery image"
              width={460}
              height={700}
              className="w-full  rounded-sm object-cover transition duration-1000 ease-in-out hover:scale-105"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWingGal;
