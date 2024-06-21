import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-[#04185A] p-[18px]'>
        <div className='flex justify-between flex-row border-b-[1px] border-[#516091]'>
            <div className='flex flex-row gap-3 mb-4'>
            <Image src='/image3.svg' width={50} height={30} alt='logo1'/>
            <Image src='/image1.svg' width={126} height={30} alt='logo1'/>
            </div>
            <div>
            <Image src='/image2.svg' width={58} height={23} alt='logo1'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar