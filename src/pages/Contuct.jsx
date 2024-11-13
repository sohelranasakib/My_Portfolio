import React from 'react'
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaWhatsapp , FaYoutube  } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Container from '../components/Container';


const Contuct = () => {
  return (
    <section className='bg-[#171616] lg:pt-[160px] pt-[70px] pb-[200px] px-3 '>
    <Container>
      <div className="">
        <h2 className=' relative font-extrabold lg:text-[160px] text-[60px] text-center opacity-10  uppercase text-[#fff]'>Contacts</h2>
        <h3 className='text-center font-semibold lg:text-[100px] text-[36px] text-[#fff] font-serif lg:mt-[-190px] mt-[-70px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[350px] after:w-[200px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#fff] '>Get <span className='text-[#40ce36]'> in touch!</span> </h3>
      </div>
      <div className=" lg:flex justify-between lg:pt-16 pt-[30px]">
        <div className="lg:w-[35%] w-full">
          <div className="">
            <h2 className='text-[#fff] font-bold lg:text-[36px] text-[22px]'>Don't be shy !</h2>
            <p className='text-[#fff] font-semibold lg:text-[20px] text-[14px]'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          </div>
          <div className=" flex items-center lg:pt-11 pt-[20px] gap-4">
            <div className="">
              <MdEmail className='lg:text-[36px] text-[22px] text-[#40ce36]' />
            </div>
            <div className="">
              <h2 className='text-[#fff] font-semibold lg:text-[18px] text-[16px] opacity-70'>Email Me</h2>
              <h3 className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'> mrsohelrana756@gmail.com </h3>
            </div>
          </div>
          <div className=" flex items-center lg:pt-11 pt-[10px] gap-4">
            <div className="">
              <BiSolidPhoneCall className='lg:text-[36px] text-[22px] text-[#40ce36]' />
            </div>
            <div className="">
              <h2 className='text-[#fff] font-semibold lg:text-[18px] text-[16px] opacity-70'>Call Me</h2>
              <h3 className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>+8801731612756</h3>
            </div>
          </div>
          <div className="flex lg:gap-x-10 gap-x-3 lg:pt-10 pt-[15px]">
                <a className='lg:py-4 py-2 lg:px-4 px-2 bg-[#ddd9d9]  rounded-full lg:text-[32px] text-[26px] text-[#000] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out p-[14px]' href="https://www.facebook.com/share/9yKV8w73S7dazz2P/?mibextid=qi2Omg" target='blank'><FaFacebookSquare /></a>
                <a className='lg:py-4 py-2 lg:px-4 px-2 bg-[#ddd9d9]  rounded-full lg:text-[32px] text-[26px] text-[#000] p-[14px] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out' href="#" target='blank'><FaLinkedin /></a>
                <a className='lg:py-4 py-2 lg:px-4 px-2 bg-[#ddd9d9]  rounded-full lg:text-[32px] text-[26px] text-[#000] p-[14px] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out' href="https://github.com/sohelranasakib" target='blank'><FaGithubSquare /></a>
                <a className='lg:py-4 py-2 lg:px-4 px-2 bg-[#ddd9d9] rounded-full lg:text-[32px] text-[26px] text-[#000] p-[14px] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out' href="https://youtube.com/@nikotborti2.0?si=XkPGDQisXoJVAdQy" target='blank'><FaYoutube /></a>
          </div>

        </div>
        <div className="lg:w-[65%] w-full">
          <form action="">
            <div className=" lg:flex justify-between lg:items-start items-center px-3 mt-5 ">
              <div className="lg:w-[32%] w-[80%]">
                <input className='lg:h-[50px] h-[40px] w-full border-2 border-[#40ce36] rounded-lg pl-2' type="text" placeholder='Your Name*' />
              </div>
              <div className="lg:w-[32%] w-[80%]">
                <input className='lg:h-[50px] h-[40px] w-full border-2 border-[#40ce36] rounded-lg pl-2 mt-2 lg:mt-0 mb-2 lg:mb-0' type="text" placeholder='Your E-mail*' />
              </div>
              <div className="lg:w-[32%] w-[80%]">
                <input className='lg:h-[50px] h-[40px] w-full border-2 border-[#40ce36] rounded-lg pl-2' type="text" placeholder='Your Subject' />
              </div>
             

            </div>
            <div className="w-full px-3  mt-5">
                <label for="" className='text-[#fff] font-bold text-[20px]'>Your Messege :</label>
                <textarea className='lg:w-full w-[80%] lg:h-48 h-24 border-2 border-[#40ce36] resize-none rounded-xl pl-2 pt-2  '  ></textarea>

              </div>
          </form>
          <div className=" ml-3 mt-8 relative  flex justify-between lg:w-[30%] w-[55%] items-center lg:py-4 py-2 lg:px-4 px-2 border-2 border-[#40ce36] rounded-full cursor-pointer duration-300 ease-in-out hover:text-white after:absolute after:contain-[''] after:top-0 after:right-0 after:h-full lg:after:w-[28%] after:w-[22%] after:rounded-full after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full ">
              <h3 className='font-sans lg:text-[20px] text-[16px] font-bold ml-4 z-50 text-[#fff]  '>Send Messege </h3>
              <RiSendPlaneFill className='lg:text-[36px] text-[24px] text-white z-50'/>
            </div>
        </div>
      </div>
    </Container>
  </section>
  )
}

export default Contuct
