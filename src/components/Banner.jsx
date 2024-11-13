import React from 'react'
import img from "../assets/me.jpg"
import { FaArrowRight, FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <section className=' bg-[#e3dfd9a8] lg:px-[50px] px-4 lg:pt-[180px] pt-[80px] lg:py-[80px] py-[36px]'>
      <div className=" lg:flex">
        <div className=" lg:w-[40%] w-[45%] lg:ml-0 ml-[25%]">
          <img className=' lg:h-[683px]  lg:w-[650px]  rounded-full ' src={img} alt="" />
        </div>
        <div className=" lg:w-[45%] w-[96%] lg:ml-[50px] ml-[10px] lg:pt-[50px] lg:text-start text-center">
          <h1 className=' font-sans font-bold lg:text-[80px] text-[40px] text-[#40ce36] '>I'M <span className=""> SOHEL RANA.</span>
          </h1>
          <h1 className=' font-sans font-bold lg:text-[50px] text-[28px] text-[#616060]'>
            WEB DEVELOPER</h1>
          <p className=' font-sans font-medium lg:text-[24px] text-[18px]  text-[#6e6c6c] lg:py-[30px] py-[10px] lg:pb-[40px] pb-[20px]'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
          <div className=" lg:pl-0 pl-[21%]">
            <Link to="/about">
              <div className=" relative  flex justify-between lg:w-[40%] w-[80%] items-center  lg:py-4 py-3 lg:px-4 border-2 border-[#40ce36] rounded-full cursor-pointer duration-300 ease-in-out hover:text-white after:absolute after:contain-[''] after:top-0 after:right-0 after:h-full lg:after:w-[25%] after:w-[23%] after:rounded-full after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full">
                <h3 className='font-sans lg:text-[22px] text-[14px] font-bold z-50 lg:ml-4 ml-8'>More About Me</h3>
                <FaArrowRight className='lg:text-[36px] z-50 text-white mr-2' />



              </div>
            </Link>
          </div>
          <div className="flex lg:gap-x-10 gap-x-4 lg:mt-10 mt-[20px] lg:pl-0 pl-[16%]">
            <a className='lg:py-4 py-3 lg:px-4 px-3 bg-[#ddd9d9]  rounded-full lg:text-[32px] text-[23px] text-[#000] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out ' href="https://www.facebook.com/share/9yKV8w73S7dazz2P/?mibextid=qi2Omg" target='blank'><FaFacebookSquare /></a>
            <a className='lg:py-4 py-3 lg:px-4 px-3 bg-[#ddd9d9]  rounded-full lg:text-[32px] text-[23px] text-[#000] p-[14px] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out' href="#" target='blank'><SiFiverr /></a>
            <a className='lg:py-4 py-3 lg:px-4 px-3 bg-[#ddd9d9]  rounded-full lg:text-[32px] text-[23px] text-[#000] p-[14px] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out' href="https://github.com/sohelranasakib" target='blank'><FaGithubSquare /></a>
            <a className='lg:py-4 py-3 lg:px-4 px-3 bg-[#ddd9d9] rounded-full lg:text-[32px] text-[23px] text-[#000] p-[14px] hover:bg-[#40ce36] hover:text-[#fff] duration-700 ease-in-out' href="#" target='blank'><FaSquareUpwork /></a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Banner
