import GridLayout from '@/app/components/GridLayout';
import SchoolHeader from '@/app/components/SchoolHeader';
import Search from '@/app/components/Search';
import SessionCard from '@/app/components/SessionCard';
import React from 'react'

const page = () => {
  return (
    <div>
      <SchoolHeader />
      <div className="flex items-center justify-between my-5 capitalize">
        <div className="w-full ">
          <h1 className="text-xl font-bold ">
            computer science -{" "}
            <span className="text-tertiary-color">session</span>
          </h1>
        </div>
        <div className="w-full justify-self-end bg-primary-color ">
          <Search placeholder={"search department"} />
        </div>
      </div>
      <GridLayout grids={6}>
        <SessionCard session={"2015/2016 session"} href={"/schools/school/department/sessions"}/>
        <SessionCard session={"2015/2016 session"} href={"/schools/school/department/sessions"}/>
        <SessionCard session={"2015/2016 session"} href={"/schools/school/department/sessions"}/>
        <SessionCard session={"2015/2016 session"} href={"/schools/school/department/sessions"}/>
        <SessionCard session={"2015/2016 session"} href={"/schools/school/department/sessions"}/>
        <SessionCard session={"2015/2016 session"} href={"/schools/school/department/sessions"}/>
        <SessionCard session={"2015/2016 session"} href={"/schools/school/department/sessions"}/>
      </GridLayout>
    </div>
  );
}

export default page