import Link from "next/link"

const CourseCard = ({href,code,name}) => {
  return (
    <Link href={href}>
    <div className="bg-white-color py-16 px-5 capitalize text-center shadow-lg">
        <p className="italic text-xl font-bold">{code}</p>
        <h1 className="text-tertiary-color font-bold text-2xl my-5">{name}</h1>
    </div>
    </Link>
  )
}

export default CourseCard