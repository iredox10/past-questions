import Image from 'next/image'
import Link from 'next/link'
const SchoolCard = ({logo,name,desc,alt,href}) => {
  return (
    <div>
      <Link href={href}>
        <div className="bg-white-color shadow-2xl p-2 rounded-lg">
          <div className="w-[40%] mb-5">
            <Image src={logo} alt={alt} className="w-full rounded-full" />
          </div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="my-5">{desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default SchoolCard