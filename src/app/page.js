import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F4D04E] min-h-screen flex items-center justify-center">
      <div className="bg-white w-[384px] h-[522px] rounded-[20px] outline outline-black outline-1 shadow flex flex-col items-center" style={{boxShadow: '10px 10px'}}>
        <div className="mt-5">
          <img src="image.png" alt="blog image" className="w-[336px] h-[200px] rounded-[10px]" />
        </div>

        <div className="w-full gap-3 flex flex-col ml-12 mt-5">
            <div className="bg-[#F4D04E] mr-[247px] w-[88px] h-[29px] flex items-center justify-center rounded-[4px]">
              <p className="font-semibold tracking-tight text-[15px] ">Learning</p>
            </div>

            <div>
              <p className="text-sm">Published 21 Dec 2023</p>
            </div>
            <div>
              <h1 className="font-bold text-[23px] active:text-[#F4D04E]">HTML & CSS foundations</h1>
            </div>
            <div>
              <p className="text-[#7F7F7F]">These languages are the backbone of every website, defining structure, content, and presentation.</p>
            </div>
            <div className="flex items-center">
              <img src="avatar.webp" className="w-[32px] h-[32px] mt-6"></img>
              <h1 className="font-bold text-[13px] mt-6 ml-3">Greg Hooper</h1>
            </div>
          </div>
      </div>
    </div>
  );
}
