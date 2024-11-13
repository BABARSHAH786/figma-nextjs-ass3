import Image from "next/image";

export default function WorkManagement() {
  return (
    <div className="w-[1955px] h-[1588px]  ml-[1px] m-[140px 220px] pt-[140px] pr-[220px] pb-[140px] pl-[220px]   left-[1px] bg-[#ffffff] ">
      <div className="w-[1480px] h-[547px] gap[60px] flex ">
        <div className="flex mt-[160px] ">
          <div className="w-[672px] h-[411px] gap[60px]  ">
            <h2 className="w-[672px] h-[288px] gap[24px] text-[#212529;] ">
              <p className="w-[672px] h-[174px] font-bold leading-[87.14px] text-[72px] tracking[-2%] text-[#212529;]  ">
                Project Management
              </p>

              <p className=" w-[672px] h-[174px] font-bold leading-[30px] text-[18px] tracking[-2%] text-[#212529;]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </h2>

            <button className="bg-[#4F9CF9;] font-medium text-[18px] text-[#ffffff] w-[201px] h-[63px] rounded-lg p-[20px 40px]  ">
              Get started
            </button>

            
          </div>
          <div className="w-[748px] h-[547px] gap-[4px] bg-[#C4DEFD;] "></div>
        </div>
      </div>
      {/* <div></div>

      <div></div> */}
      {/* second part */}
      <div className="w-[1480px] h-[661px] gap-[100px] ">
        <Image
          className="w-[1480px] h-[661px] mt-[190px] gap-24 relative pt-[2.5px]  "
          src={"/Content.png"}
          alt="icon image"
          width={1480}
          height={661}
        ></Image>
      </div>
    </div>
  );
}
