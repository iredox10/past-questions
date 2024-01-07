import GridLayout from "@/app/components/GridLayout";
import LevelCard from "@/app/components/LevelCard";

const { default: SchoolHeader } = require("@/app/components/SchoolHeader")
const { default: Search } = require("@/app/components/Search")

const page = () => {
  return (
    <div>
      <SchoolHeader />
      <div className="flex items-center justify-between my-5 ">
        <div className="w-full ">
          <h1 className="text-xl font-bold ">
            computer science -{" "}
            <span className="text-tertiary-color">Levels</span>
          </h1>
        </div>
        <div className="w-full justify-self-end bg-primary-color ">
          <Search placeholder={"search department"} />
        </div>
      </div>
      <div className="my-5">
        <GridLayout grids={4}>
          <LevelCard
            name={"level"}
            level={"100"}
            href={"/schools/school/department/sessions/level"}
          />
          <LevelCard
            name={"level"}
            level={"200"}
            href={"/schools/school/department/sessions/level"}
          />
          <LevelCard
            name={"level"}
            level={"300"}
            href={"/schools/school/department/sessions/level"}
          />
          <LevelCard
            name={"level"}
            level={"400"}
            href={"/schools/school/department/sessions/level"}
          />
        </GridLayout>
      </div>
    </div>
  );
}

export default page