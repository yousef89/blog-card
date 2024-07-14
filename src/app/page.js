import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F4D04E] min-h-screen flex items-center justify-center">
      <div className="bg-white w-[384px] h-[522px] rounded-[20px] outline outline-black outline-1 shadow flex flex-col items-center justify-center relative" style={{boxShadow: '10px 10px'}}>
        <div className="absolute top-5">
          <img src="image.png" alt="blog image" className="w-[336px] h-[200px] rounded-[10px]" />
        </div>

        
          <div className="bg-[#F4D04E] mr-[247px] w-[88px] h-[29px] flex items-center justify-center rounded-[4px]">
            <p className="font-extrabold tracking-tight">Learning</p>
          </div>

          <div className="mr-[180px] ">
            <p className="text-sm">Published 21 Dec 2023</p>
          </div>
        
      </div>
    </div>
  );
}
