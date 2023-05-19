import DomainCard from "../DomainCard";
// import ProjectVector2 from ""
const ProjectCommuntiy = () => {
  return (
    <div className=" ml-24 flex cursor-default  flex-col md:flex-row items-center justify-between">
      <h1 className="w-[240px] text-3xl font-semibold ">
        We Are Proud Of Our <span className="text-[#286FD9]"> Community Members </span>
      </h1>

      <div className="mr-8 flex  gap-7  ">
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
