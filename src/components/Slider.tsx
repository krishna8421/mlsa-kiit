
const Slider = () => {
    return (
        <div className="flex flex-col items-center ">
            <div id="myElement"
              className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#09f921] bg-gradient-to-b from-[#09f921]  to-[#2EC0FF] shadow-dotShadowBlue duration-700 transition 
              "
            >
              <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
            </div>
            <div className="h-full w-[5px]  bg-gradient-to-b from-[#2CC4F5] to-transparent duration-700 transition lg:h-[80vh]"></div>
          </div>
    );
};
export default Slider;