import Link from 'next/link';
import React from 'react'

const SessionCard = ({session,href}) => {
  return (
      <Link href={href}>
        <div className="shadow-lg capitalize text-center bg-white-color p-10">
          <h1>{session}</h1>
        </div>
      </Link>
  );
}

export default SessionCard