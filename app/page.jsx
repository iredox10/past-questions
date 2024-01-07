import { Amaranth, Josefin_Sans } from "next/font/google";
import NavLink from "./components/NavLink";

const josefin = Josefin_Sans({
  subsets: ['latin']
})
const amaranth = Amaranth({
  subsets: ['latin'],
  weight: '700'
})
export default function Home() {
  return (
    <div className="flex justify-between  min-h-[80vh] items-center capitalize">
      <div>
        <h1 className={`${amaranth.className} text-7xl font-black  `}>
          Don't just get the{" "}
          <span className="block text-red-color my-2">Questions</span> have the{" "}
          <span className="text-secondary-color">Answers</span>
        </h1>
        <p className="text-xl my-5">
          Find Answers To Your School Past Question Papers Easily
        </p>
        <div className="flex gap-5">
          <NavLink
            href={"/sign-up"}
            text={"signup"}
            bgColor={"bg-secondary-color"}
          />
          <NavLink
            href={"/schools"}
            text={"explore"}
            bgColor={"bg-white-color"}
          />
        </div>
      </div>
    </div>
  );
}
