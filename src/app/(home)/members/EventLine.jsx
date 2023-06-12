const EventLine = ({ name, lineNum }) => {
    return (
        <div className="mx-auto flex w-[90vw] items-center justify-between">
            <div className="flex w-full items-center pr-8">
                <div className="flex h-[2.5rem] w-[3rem] items-center justify-center rounded-[100%] bg-[#083475] text-white md:text-xl lg:text-[15px] xl:text-[20px] 2xl:text-[20px]">
                    {lineNum}
                </div>
                <h1 className="text-xl" style={{ display: "inline-block", whiteSpace: "nowrap", paddingLeft: "1rem", paddingRight: "1rem" }}><b>{name}</b></h1>
                <div className="h-[3px] w-full bg-blue-line hover:bg-[#286FD9] "></div>
            </div>
        </div>
    );
}

export default EventLine