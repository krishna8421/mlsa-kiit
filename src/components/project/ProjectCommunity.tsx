import DomainCard from "../DomainCard";

const ProjectCommuntiy = () => {
  return (
    <div className="ml-12 flex cursor-default flex-col  items-center justify-between sm:ml-24 lg:flex-row">
      <h1 className="w-[240px] text-3xl font-semibold ">
        We Are Proud Of Our <span className="text-[#286FD9]"> Community Members </span>
      </h1>

      <div className="mx-5 mt-8 flex flex-col gap-7 md:mt-0 md:flex-row">
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