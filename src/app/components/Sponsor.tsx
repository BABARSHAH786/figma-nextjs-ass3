import Image from "next/image"

export default function Costomize(){
    return (
<div className="w-[1932px] h-[538px] pt-[140px]  pr-[220px] pb-[140px] pl-[220px]  left-[1px] relative  bg-[#ffffff] ">
            <div className="w-[1482px] h-[87px]  p-[140px 220px] text-[72px] leading-[87.14x] align-center flex justify-center font-extrabold">Our sponsors
            </div>

                <div className="w-[1482px] h-[71px] mt-[140px] justify-between flex">
                <Image className="w-[55.47px] h-[68px]  relative pt-[2.5px]  " src={"/Apple.png"} alt="icon image" width={55.47} height={68}></Image>
                <Image className="w-[287px] h-[62px] relative pt-[2.5px]  " src={"/Microsoft.png"} alt="icon image" width={287} height={62}></Image>
                <Image className="w-[280px] h-[71px] relative pt-[2.5px]  " src={"/Slack.png"} alt="icon image" width={280} height={71}></Image>
                <Image className="w-[211px] h-[61.81px] relative pt-[2.5px]  " src={"/Google.png"} alt="icon image" width={211} height={61.81}></Image>
            </div>
             </div>  
          )
}