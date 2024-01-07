import Link from 'next/link';
import React from 'react'

const LevelCard = ({name,level,href}) => {
  return (
    <Link href={href}>
      <div className="py-32 px-2 bg-white-color text-center">
        <p className="text-tertiary-color font-bold text-xl tracking-widest ">
          {name}
        </p>
        <h1 className="font-black text-4xl my-10">{level}</h1>
      </div>
    </Link>
  );
}

export default LevelCard