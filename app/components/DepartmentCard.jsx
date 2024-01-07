import Link from "next/link";

const DepartmentCard = ({name}) =>{
    return (
      <Link href={'/schools/school/department'}>
        <div className="shadow-lg capitalize text-center bg-white-color p-10">
          <h1>{name}</h1>
        </div>
      </Link>
    );
}

export default DepartmentCard