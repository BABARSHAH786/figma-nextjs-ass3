import Link from "next/link";
import Image from "next/image";
import Group from "../../../public/Group.png";

export default function Pricing() {
  return (
    <div className="bg-[#043873;] w-[1920px] flex  h-[92px] justify-between pt-[16px] pr-[220px] pb-[16px] pl-[220px] relative left-[1px] ">
      <div className="w-[191px] pt-[2.5px] h-[34px] justify-between flex">
        <Image
          className="w-[37px] h-[29px] relative pt-[2.5px]  "
          src={"/Group.png"}
          alt="icon image"
          width={37}
          height={29}
        ></Image>
        <p className="text-[#ffffff] w-[144px] flex  h-[34px] font-extrabold text-[28px] relative left-[20px] items-center ">
          whitepace
        </p>
      </div>
      <div className="w-[735.5px] h-[60px] gap-[60px] text-color-[#fffff] flex justify-between  ">
        <div className="w-[549px] mt-[16px] h-[23px] gap-7 text-[#ffffff] flex ">
          <Link
            className="w-[78px] h-[23px] gap-[10px] font-medium text-lg leading-6"
            href={"/products"}
          >
            Products
          </Link>
          <Link
            className="w-[78px] h-[23px] gap-[10px] font-medium text-lg leading-6"
            href={"/solutions"}
          >
            Solution
          </Link>
          <Link
            className="w-[78px] h-[23px] gap-[10px] font-medium text-lg leading-6"
            href={"/resources"}
          >
          Resources
          </Link>
          
          <Link
            className="w-[78px]  h-[23px] gap-[20px] relative ml-[10px] font-medium text-lg leading-6"
            href={"/pricing"}
          >
            Pricing
          </Link>
          
        </div>
        <div className=" w-[126px] h-[60px] gap-[24px] relative pt-[16px] pr-[40px] pb-[16px]   ">
            <button className="relative  mt-[-21px] w-[126px] h-[60px] flex justify-center bg-[#FFE492;] text-[#043873;] font-[500] text-[18px] leading-6 rounded-lg items-center tracking-tighter">
              Login
            </button>
          </div>
      </div>
    </div>
  );
}
