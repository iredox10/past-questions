import Image from 'next/image'
import bukLogo from "@/public/BUK.jpg";
import SchoolHeader from "../../components/SchoolHeader";
import Search from '@/app/components/Search';
import DepartmentCard from '@/app/components/DepartmentCard';
import GridLayout from '@/app/components/GridLayout';

const page = () => {
  return (
    <div className="">
      <SchoolHeader />
      <div className="flex items-center justify-between my-5 ">
        <div className="w-full ">
          <h1 className="text-xl font-bold">Departments</h1>
        </div>
        <div className="w-full justify-self-end bg-primary-color ">
          <Search placeholder={"search department"} />
        </div>
      </div>
      <GridLayout grids={6}>
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
        <DepartmentCard name={"computer science"} />
      </GridLayout>
    </div>
  );
};

export default page;
