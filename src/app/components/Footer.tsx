import Image from "next/image";
export default function Costomize() {
  return (
    <div className="bg-[#043873;] w-[1920px] pt-[140px] pl-[220px] h-[421px] justify-between p-[16px 220px] relative left-[1px] ">
      <div className="w-[1480px] h-[289px] text-[#ffffff] justify-between  gap-[100px]">
        <div className="w-[1480px] h-[169px] flex  gap-[100px]">
          <div className="w-[295px] h-[169px]   gap-[15px]">
            <div className="w-[191px] h-[34px] flex">
              <Image
                className="w-[37] h-[29px] relative pt-[2.5px]  "
                src={"/Group.png"}
                alt="icon image"
                width={37}
                height={29}
              ></Image>
              <p className="text-[#ffffff] w-[144px] h-[34px] font-extrabold text-[28px] relative left-[10px]  ">
                whitepace
              </p>
            </div>
            <p className="w-[240px] h-[120px] mt-[15px] font-normal">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>

          <div className="w-[295px] h-[127px]">
            <p className="w-[68px] h-[22px] font-bold text-[16px] leading-6 tracking-tighter">Products</p>
            <p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">Overview</p><p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">Pricing</p><p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">Customer Stories</p>

          </div>
          <div className="w-[295px] h-[127px]">
            <p className="w-[68px] h-[22px] font-bold text-[16px] leading-6 tracking-tighter">Resources</p>
            <p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">Blog</p><p className=" font-normal text-[16px] leading-6 tracking-tighter">Guides & tutorials</p><p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">Help center</p>

          </div>
          {/* forth */}
          <div className="w-[295px] h-[127px]">
            <p className="w-[68px] h-[22px] font-bold text-[16px] leading-6 tracking-tighter">Company</p>
            <p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">About us</p><p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">Careers</p><p className="w-[68px] h-[22px] font-normal text-[16px] leading-6 tracking-tighter">Media list</p>

          </div>


        </div>
        
      
      </div>
      <div className="w-[1480px] h-[20px] font-normal flex justify-center text-[16px] leading-5 tracking-widest text-[#ffffff] ">©2021 Whitepace LLC.

        </div>
    </div>
  );
}
