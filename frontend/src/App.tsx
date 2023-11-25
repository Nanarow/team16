import { Button } from "../src/lib/components/ui/button";
import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  text: string;
}

const SizeSmallState = ({ className, text = "Width" }: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-start gap-[6px] relative ${className}`}
    >
      <div className="flex w-[384px] items-center gap-[16px] relative flex-[0_0_auto]">
        <div className="relative w-[84px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#000000] text-[14px] tracking-[0] leading-[20px]">
          {text}
        </div>
        <div className="flex flex-col items-start gap-[6px] relative flex-1 grow">
          <div className="flex items-center pl-[12px] pr-[56px] py-[8px] relative self-stretch w-full flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#ffffff] rounded-[6px] border border-solid border-[#cbd5e1]">
            <div className="relative w-fit font-subtle font-[number:var(--subtle-font-weight)] text-slate-400 text-[length:var(--subtle-font-size)] tracking-[var(--subtle-letter-spacing)] leading-[var(--subtle-line-height)] whitespace-nowrap [font-style:var(--subtle-font-style)]">
              Add value
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SizeSmallState.propTypes = {
  text: PropTypes.string,
};
function App() {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] w-[1280px] h-[720px] relative">
        <div className="w-[289px] top-[77px] left-[134px] text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] absolute font-h-3 font-[number:var(--h-3-font-weight)] text-[#0f172a] [font-style:var(--h-3-font-style)]">
          เพิ่มข้อมูลพนักงาน
        </div>
        <div className="w-[184px] top-[148px] left-[138px] text-[length:var(--large-font-size)] tracking-[var(--large-letter-spacing)] leading-[var(--large-line-height)] absolute font-large font-[number:var(--large-font-weight)] text-[#0f172a] [font-style:var(--large-font-style)]">
          ข้อมูลพนักงานพื้นฐาน
        </div>
        <div className="w-[197px] top-[148px] left-[765px] text-[length:var(--large-font-size)] tracking-[var(--large-letter-spacing)] leading-[var(--large-line-height)] absolute font-large font-[number:var(--large-font-weight)] text-[#0f172a] [font-style:var(--large-font-style)]">
          ข้อมูลการติดต่อ
        </div>
        <div className="w-[197px] top-[435px] left-[761px] text-[length:var(--large-font-size)] tracking-[var(--large-letter-spacing)] leading-[var(--large-line-height)] absolute font-large font-[number:var(--large-font-weight)] text-[#0f172a] [font-style:var(--large-font-style)]">
          ข้อมูลเพิ่มเติม
        </div>
        <div className="w-[184px] top-[435px] left-[134px] text-[length:var(--large-font-size)] tracking-[var(--large-letter-spacing)] leading-[var(--large-line-height)] absolute font-large font-[number:var(--large-font-weight)] text-[#0f172a] [font-style:var(--large-font-style)]">
          ข้อมูลการจ้างงาน
        </div>
        <SizeSmallState
          className="!absolute !left-[765px] !w-[384px] !top-[203px]"
          text="*เบอร์โทร:"
        />
        <SizeSmallState
          className="!left-[765px] !absolute !w-[384px] !top-[258px]"
          text="*อีเมล:"
        />
        <SizeSmallState
          className="!left-[761px] !absolute !w-[384px] !top-[546px]"
          text="หมายเหตุ:"
        />
        <SizeSmallState
          className="!left-[761px] !absolute !w-[384px] !top-[491px]"
          text="*วันเกิด:"
        />
        <SizeSmallState
          className="!left-[134px] !absolute !w-[384px] !top-[203px]"
          text="*ชื่อพนักงาน:"
        />
        <SizeSmallState
          className="!left-[134px] !absolute !w-[384px] !top-[313px]"
          text="*เพศ:"
        />
        <SizeSmallState
          className="!left-[134px] !absolute !w-[384px] !top-[258px]"
          text="*นามสกุล:"
        />
        <SizeSmallState
          className="!left-[134px] !absolute !w-[384px] !top-[491px]"
          text="*ตำแหน่งงาน:"
        />
        <SizeSmallState
          className="!left-[134px] !absolute !w-[384px] !top-[546px]"
          text="*เงินเดือน:"
        />
        <Button
          className="!absolute !left-[1149px] !top-[90px]"
          variant="destructive"
        >
          "ยกเลิก"
        </Button>
        <Button
          className="!absolute !left-[1020px] !bg-green-500 !top-[90px]"
          variant="destructive"
        >
          "บันทึกข้อมูล"
        </Button>
      </div>
    </div>
  );
  // return (
  //   <div className="App w-full h-screen bg-slate-700 flex justify-center items-center">
  //     <div className=" w-[600px] h-80 border-white border-2 rounded-md bg-orange-300 text-center flex flex-col gap-2">
  //       <h1 className=" font-bold text-rose-500 text-6xl hover:text-yellow-300 transition-colors duration-150 ">
  //         Login
  //       </h1>
  //       <input className=" "></input>
  //       <input></input>
  //       <div>
  //         <Button className=" bg-indigo-500 hover:bg-indigo-700 rounded-none hover:rounded-lg transition-all duration-500">
  //           Submit
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
