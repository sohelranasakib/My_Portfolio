import React from 'react'
import Container from '../components/Container'
import img from "../assets/img2.jfif"
import img5 from "../assets/img5.jfif"
import img6 from "../assets/img6.jfif"
import img2 from "../assets/img2.jfif"
import img4 from "../assets/img4.jfif"
import img3 from "../assets/img3.webp"
import img7 from "../assets/img7.jfif"
import { FaArrowRightLong } from "react-icons/fa6";
import Flex from '../components/Flex'

const Portfolio = () => {
  return (
    <section className=' lg:pt-[130px] pt-[70px] pb-[50px] bg-[#171616] lg:px-0 px-4'>
      <Container>
      <h2 className=' relative font-extrabold lg:text-[200px] text-[80px] text-center opacity-10  text-[#fff]  '>WORKS</h2>
      <h3 className='text-center font-bold lg:text-[86px] text-[40px] font-sans text-[#fff] lg:mt-[-215px] mt-[-90px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[350px] after:w-[230px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#fff] '>My <span className='text-[#40ce36]'>Portfolio!</span> </h3>

      </Container>

      <Container>
    
      <div className=" lg:pl-[10%] lg:pt-[70px] pt-[30px]">
      <div className=" w-[100%] flex lg:gap-x-[30px] gap-x-2">
      <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:left-0 after:top-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#63c75b] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://peaceful-malabi-fd7d4d.netlify.app/" ><img className=' lg:w-[400px] w-full  lg:h-[220px] h-[100px] rounded-2xl'  src={img} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out lg:pt-[8%] pt-[2%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[16px] font-serif font-bold '>Orebi E-Commerce <h3 className=' text-[#000] lg:text-[42px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
       <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#40ce36] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://cute-blini-4ab3cc.netlify.app/" ><img className=' lg:w-[400px] w-full lg:h-[220px] h-[100px] rounded-2xl'  src={img5} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out lg:pt-[8%] pt-[2%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[16px] font-serif font-bold '>Hekto E-Commerce <h3 className=' text-[#000] lg:text-[42px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
       <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#40ce36] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://magnificent-treacle-a3f6fa.netlify.app/" ><img className=' lg:w-[400px] w-full lg:h-[220px] h-[100px] rounded-2xl'  src={img6} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out lg:pt-[8%] pt-[12%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[16px] font-serif font-bold '>Finsweed <h3 className=' text-[#000] lg:text-[42px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
      </div>
      <div className=" w-[100%] flex lg:pt-[50px] pt-[15px] lg:gap-x-[30px] gap-x-2">
      <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#40ce36] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://sohelranasakib.github.io/Innovate-Tailwind/" ><img className=' lg:w-[400px] w-full lg:h-[220px] h-[100px] rounded-2xl'  src={img3} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out lg:pt-[8%] pt-[12%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[16px] font-serif font-bold '>Innovate 1 <h3 className=' text-[#000] lg:text-[38px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
       <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#40ce36] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://sohelranasakib.github.io/Innovate2-tailwind/" ><img className='lg:w-[400px] w-full lg:h-[220px] h-[100px] rounded-2xl'  src={img4} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[8%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[16px] font-serif font-bold '>Innovate 2 <h3 className=' text-[#000] lg:text-[38px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
       <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#40ce36] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://sohelranasakib.github.io/Mary/" ><img className=' lg:w-[400px] w-full lg:h-[220px] h-[100px] rounded-2xl'  src={img2} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[8%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[16px] font-serif font-bold '> Mery <h3 className=' text-[#000] lg:text-[38px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
      </div>

      <div className=" w-[100%] flex lg:pt-[50px] pt-[15px] lg:gap-x-[30px] gap-x-2">
      <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#40ce36] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://sohelranasakib.github.io/Waxom-Bootstrap/" ><img className=' lg:w-[400px] w-full lg:h-[220px] h-[120px] rounded-2xl'  src={img7} alt="img7" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[8%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[20px] font-serif font-bold '>waxom <h3 className=' text-[#000] lg:text-[38px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
       <div className=" lg:w-[30%] w-[33%]">
          <a className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] lg:after:w-[400px] after:w-full after:bg-[#40ce36] after:opacity-50 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]' target='blank'  href="https://sohelranasakib.github.io/Figma-to-html/" ><img className=' lg:w-[400px] w-full lg:h-[220px] h-[120px] rounded-2xl'  src={img5} alt="" /> <h2 className=' absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[8%] pl-[10%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[20px] font-serif font-bold '>finsweed 1 <h3 className=' text-[#000] lg:text-[38px] text-[18px]'>Website <FaArrowRightLong className=' text-[#fff]'/></h3></h2>
          </a>
       </div>
     
       
      </div>
      </div>
     
      </Container>
    </section>
  )
}

export default Portfolio
