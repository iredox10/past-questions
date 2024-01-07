import Image from "next/image";
import bukLogo from "@/public/BUK.jpg";

const SchoolHeader = () => {
  return (
    <div>
      <div className="flex gap-5 items-center ">
        <div className="w-[5%]">
          <Image src={bukLogo} alt="buk logo" className="w-full rounded-full" />
        </div>
        <h1 className="text-3xl font-bold w-[40%]">
          Bayero University Kano. (BUK)
        </h1>
      </div>
    </div>
  );
};

export default SchoolHeader;
