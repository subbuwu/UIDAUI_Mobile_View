"use client"
import Image from "next/image";
import { roboto, roboto_condensed } from "./layout";
import Navbar from "@/components/navbar";

export default function Home() {

  const handleDownload = (fileUrl,) => {

    const link = document.createElement('a');
    link.href = fileUrl;

    link.setAttribute('download', `${fileUrl}`);

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className='mx-auto'>
      <Navbar/>
      <main className="">
        <div className="p-[18px] lg:px-24 lg:pt-12 bg-[#04185A] pb-24">
          <h1 className={`text-base lg:text-3xl font-medium ${roboto_condensed.className} from-[#FFFFFF] to-[#00A8DD] bg-gradient-to-r inline-block text-transparent bg-clip-text `}>
            About Bio Challenge
          </h1>

          <p className={`text-base lg:text-xl ${roboto_condensed.className} text-[#FFFFFF] font-[400] mt-3 leading-[18.75px] tracking-[1%]`}>
            The Unique Identification Authority of India (UIDAI) is launching the Bio-Challenge, a competition to evaluate biometric solution Software Development Kits (SDKs) across three modalities: fingerprints, iris, and face. The Bio-Challenge aims to improve biometric solutions by testing their performance in real-world scenarios, such as matching current images with those taken ten years prior and recognizing faces despite significant ageing.
          </p>

          <p className={`text-base lg:text-xl ${roboto_condensed.className} text-[#FFFFFF] font-[400] mt-3 leading-[18.75px] tracking-[1%]`}>
            To boost awareness and participation, UIDAI and IIIT-H, supported by MSC, will host a webinar on “Real-world challenges of biometric enrolment and authentication.” The webinar will discuss key topics in biometrics, initiate conversations within the ecosystem, and promote research and development in the sector.
          </p>

        </div>
        <div className="-mt-16 bg-gradient-to-r from-[#0D5587] to-[#04185A] border-[2px] rounded-2xl max-w-[90%] mx-auto border-[#18A4D2] lg:p-12 p-[18px]">
            <h2 className={` ${roboto.className} text-white font-semibold text-sm lg:text-xl`}> 
              The details of the webinar are:

              <div className={`flex flex-row justify-start items-center gap-2 mt-2 ${roboto.className} text-white font-bold text-sm lg:text-xl leading-[20px] tracking-[0.1px]`}>
                <Image src='/cal.svg' width={24} height={24} alt="cal" />
                Date: 26th June 2024
              </div>

              <div className={`flex flex-row justify-start items-center gap-2 mt-2 ${roboto.className} text-white font-bold text-sm lg:text-xl leading-[20px] tracking-[0.1px]`}>
                <Image src='/clock.svg' width={24} height={24} alt="cal" />
                Time: 18:30 – 20:00 IST / 13:00 – 14:30 GMT
              </div>
            </h2>
          </div>

          <div className="p-[18px] lg:px-24 mt-6">
            <h1 className={` ${roboto.className} text-[#505050] mb-2 font-medium text-[20px] lg:text-2xl leading-[20px] tracking-[1%] `}>
              About the competition
            </h1>
            
            <div className={` ${roboto.className} text-[#505050] font-normal text-[14px] lg:text-xl leading-[22px] text-justify tracking-[1%] `}>
            The SDK benchmarking competition, organized by UIDAI and IIIT-H, assesses the effectiveness of biometric verification and authentication SDKs. It provides a platform for researchers and industry leaders to evaluate their SDKs' computational power and efficiency. With a large dataset of real-world biometric data, encompassing diverse geographies and demographics in India, the competition ensures algorithm testing across various challenges and generalizability to real-world scenarios. Developers can identify areas for improvement, and benefit from understanding their performances with peers by participating in the competition. 
            </div>

            <div className="bg-[#E6E6E6] mt-3 py-3 px-4 rounded-lg">
            <h1 className={` ${roboto.className} text-[#505050] mb-4 font-medium text-[20px] lg:text-2xl leading-[20px] text-justify tracking-[1%] `}>
              Downloads
            </h1>

            <div className="flex flex-row gap-4 justify-center items-center">
              <div className="bg-[#FFFFFF] max-w-[97px] lg:max-w-2xl h-[92px] shadow-lg p-[18px] rounded-[13px]" onClick={() => handleDownload('/code-of-conduct.pdf')} >
                  <Image src="/file.svg" width={20} height={20} alt="file" className="mx-auto"/>
                  <p className={`text-[#244A72] ${roboto.className} text-[#505050] mt-2  font-medium text-[14px] lg:text-xl leading-[20px] text-center tracking-[1%] `}> Code of Conduct </p>
              </div>  

              <div className="bg-[#FFFFFF] max-w-[97px] lg:max-w-2xl  h-[92px] shadow-lg p-[18px] rounded-[13px]" onClick={() => handleDownload('/privacy-policy.pdf')}>
                  <Image src="/file.svg" width={20} height={20} alt="file" className="mx-auto"/>
                  <p className={`text-[#244A72] ${roboto.className} text-[#505050] mt-2  font-medium text-[14px] lg:text-xl leading-[20px] text-center tracking-[1%] `}> Privacy Policy </p>
              </div> 
            </div> 

            </div>

            <h3 className={`text-[#505050] mt-6 p-[18px] text-center font-bold ${roboto.className} text-[28px] leading-[35px]`}>
              For More Info Please Visit <a href="https://biochallenge.uidai.gov.in/" target="_blank" className={`${roboto_condensed.className} text-[28px] leading-[35px] from-[#04185A] to-[#19A3D1] bg-gradient-to-r inline-block text-transparent bg-clip-text`}>Biochallenge.Uidai.Gov.In</a> On Your Desktop
            </h3>
          </div>
      </main>
      <footer className="px-0 py-3 mt-3 border-t-[1px] max-w-[90%] mx-auto border-[#516091] flex flex-row justify-between">
        <Image src="/footerimg2.svg" width={58} height={35} alt="file"/>
        <a href="https://www.microsave.net/" target="_blank"><Image src="/footerimg1.svg" width={58} height={35} alt="file"/></a>
      </footer>
    </div>
  );
}
