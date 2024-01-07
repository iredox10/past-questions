import Link from 'next/link'
import React from 'react'

const SemesterCard = ({semester,href}) => {
  return (
    <Link href={href}>
      <div className="bg-white-color px-5 py-16 text-center">
        <h1 className="text-8xl font-bold">{semester}</h1>
        <p className="italic my-5">semester</p>
      </div>
    </Link>
  );
}

export default SemesterCard