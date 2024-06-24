import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-[#ffffff] p-[18px] pb-0'>
        <div className='flex justify-between flex-row border-b-[1px] border-[#ffffff]'>
            <div className='flex flex-row gap-3 mb-4'>
            <Image src='/uidai.svg' width={126} height={30} alt='UIDAI'/>
            </div>
            <div>
            <Image src='/aadhaar.svg' width={50} height={30} alt='Aadhaar'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
