import DomainCard from "../DomainCard";
// import ProjectVector2 from ""
const ProjectCommuntiy = () => {
  return (
    <div className="flex cursor-default flex-col items-center lg:ml-[97px] lg:mr-[32px] lg:flex-row lg:justify-between">
      <h1 className="w-[240px] text-3xl font-semibold ">
        We Are Proud Of Our <span className="text-[#286FD9]"> Community Members </span>
      </h1>

      <div className="mt-8 flex flex-col gap-7 md:mt-0 md:flex-row">
        <DomainCard
          logo={20}
          heading="Finished Projects"
          about={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble"
          }
        ></DomainCard>
        <DomainCard
          logo={27}
          heading="Sponsors"
          about={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble"
          }
        />
      </div>
    </div>
  );
};

export default ProjectCommuntiy;
