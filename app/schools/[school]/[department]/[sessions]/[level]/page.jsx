import CourseCard from '@/app/components/CourseCard'
import GridLayout from '@/app/components/GridLayout'
import SchoolHeader from '@/app/components/SchoolHeader'
import Search from '@/app/components/Search'
import React from 'react'

const page = () => {
  return (
    <div>
        <SchoolHeader />
      <div className="flex items-center justify-between my-5 capitalize">
        <div className="w-full ">
          <h1 className="text-xl font-bold ">
            computer science -{" "}
            <span className="text-tertiary-color">Courses</span>
          </h1>
        </div>
        <div className="w-full justify-self-end bg-primary-color ">
          <Search placeholder={"search department"} />
        </div>
    </div>
    <GridLayout grids={4}>
        <CourseCard code={'com 114'} name={'statitics for computing I'}  href={'/schools/school/department/sessions/level/course'}/>
    </GridLayout>
    </div>
  )
}

export default page