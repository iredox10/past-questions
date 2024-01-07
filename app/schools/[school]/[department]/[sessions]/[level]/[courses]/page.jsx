import GridLayout from '@/app/components/GridLayout'
import SchoolHeader from '@/app/components/SchoolHeader'
import Search from '@/app/components/Search'
import SemesterCard from '@/app/components/SemesterCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <SchoolHeader />
      <div className="flex items-center justify-between my-5 capitalize">
        <div className="w-full ">
          <h1 className="text-xl font-bold ">
            computer science -{" "}
            <span className="text-tertiary-color">Semesters</span>
          </h1>
        </div>
        <div className="w-full justify-self-end bg-primary-color ">
          <Search placeholder={"search department"} />
        </div>
      </div>
      <div>
        <GridLayout grids={2}>
          <SemesterCard semester={"1st"}  href={'/schools/school/department/sessions/level/courses/course'}/>
          <SemesterCard semester={"2nd"}  href={'/schools/school/department/sessions/level/courses/course'}/>
        <SemesterCard semester={'3rd'} href={'/schools/school/department/sessions/level/courses/course'}/>
          <SemesterCard semester={"4th"}  href={'/schools/school/department/sessions/level/courses/course'}/>
        </GridLayout>
      </div>
    </div>
  );
}

export default page