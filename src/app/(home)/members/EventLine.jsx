const EventLine = ({ name, lineNum }) => {
    return (
        <div className="mx-auto flex w-[90vw] items-center justify-between">
            <div className="flex w-full items-center pr-8">
                <div className="flex h-[4vw] w-[4vw] items-center justify-center rounded-[100%] bg-[#083475] text-white md:text-2xl lg:text-[25px] 2xl:text-[2.1vw]">
                    {lineNum}

                </div>
                <h1 className="text-xl" style={{ display: "inline-block", whiteSpace: "nowrap", paddingLeft: "1rem", paddingRight: "1rem" }}><b>{name}</b></h1>
                <div className="h-[3px] w-full bg-blue-line hover:bg-[#286FD9] "></div>
            </div>
        </div>
    );
}

export default EventLine