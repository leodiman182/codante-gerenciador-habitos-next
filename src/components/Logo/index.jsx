import { BsCheck2Circle } from "react-icons/bs";

export default function Logo() {
  return (
    <div className="items-center flex flex-row w-[230px] mx-auto">
      <BsCheck2Circle size={50} />
      <h1 className="font-bold text-[40px] ml-[6px]">
        meta.<span className="text-primary-color font-normal">diária</span>
      </h1>
    </div>
  );
}
