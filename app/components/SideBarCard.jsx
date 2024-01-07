import Image from 'next/image'

const SideBarCard = ({image,name}) => {
  return (
    <div className='flex  items-center bg-white-color gap-5 capitalize rounded-full shadow-lg mb-5'>
        <div className='w-[20%] pl-10 py-2 pr-0'>
            <Image src={image} alt={name} />
        </div>
        <h1 className="text-2xl font-medium">{name}</h1>
    </div>
  )
}

export default SideBarCard