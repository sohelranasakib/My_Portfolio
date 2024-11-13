import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SkillDevloper from './SkillDevloper';
import EducationExp from './EducationExp';

const About = () => {
  return (
    <section className='lg:py-24 py-16 bg-[#171616] lg:px-0 px-4'>
    <Container>

      <h2 className=' relative font-extrabold lg:text-[110px] text-[70px] text-center opacity-10 text-[#fff]    '>RESUME</h2>
      <h3 className='text-center font-semibold lg:text-[56px] text-[45px] font-sans lg:mt-[-125px] mt-[-90px] text-[#fff] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[280px] after:w-[220px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#fff] '>About <span className='text-[#35d645]'>Me!</span> </h3>

      <Flex className=" lg:gap-[170px] lg:flex-wrap">

        <div className="lg:w-[40%] w-full lg:mt-[70px] mt-6 ">
          <div className="lg:flex justify-around ">
            <div className="lg:w-[45%] ">
              <div className="">
                <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '>First Name : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>Sohel </span></h2>
              </div>
              <div className="lg:py-[20px] py-[8px]">
                <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '>Last Name : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>Rana</span></h2>
              </div>
              <div className="">
                <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '>Age : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>23 </span></h2>
              </div>

              <div className="lg:py-[20px] py-[8px]">
              <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '> Phone : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>+88001731612756 </span></h2>
                
              </div>
            </div>
            <div className="lg:w-[45%]">
              <div className="">
                <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '>Address : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>Kurigram</span></h2>
              </div>
              <div className="lg:py-[20px] py-[8px]">
              <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '>Nationality : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>Bangladshi </span></h2>
              </div>

              <div className="">
                <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '>Langages : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>Bangla , English </span></h2>
              </div>
              <div className="lg:py-[20px] py-[8px]">
              <h2 className='font-serif font-medium lg:text-[16px] text-[14px] text-[#fff]  '>Email : <span className='text-[#fff] font-semibold lg:text-[18px] text-[14px]'>mrsohelrana756@gmail.com </span></h2>
               
              </div>
             
            </div>
            
          </div>
          <div className="lg:mt-[20px] mt-[10px]">
             <div className=" relative  flex justify-between lg:w-[50%] w-[74%] items-center lg:py-4 py-2 lg:px-4 border-2 border-[#40ce36] rounded-full cursor-pointer duration-300 ease-in-out hover:text-white after:absolute after:contain-[''] after:top-0 after:right-0 after:h-full lg:after:w-[30%] after:w-[28%] after:rounded-full after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full ">
             <h3 className='font-sans lg:text-[24px] text-[12px] font-bold lg:ml-[20px] ml-[6px] z-50 text-[#fff] '>Downlode CV</h3>
              <FaDownload className='lg:text-[36px] text-[16px] text-white z-50 mr-[8px]'/>
            </div>
            </div>
        </div>
        <div className="lg:w-[30%] w-full lg:mt-[70px] mt-6 lg:ml-0 ml-8">
          <div className=" lg:flex justify-around">
            <div className="lg:w-[45%] w-[90%] ">

              <div className="lg:p-[20px] p-[10px] border-2 border-[#fff] rounded-xl duration-300 ease-in-out lg:hover:mt-[-5px]">
                <div className="">
                  <div className="flex ">
                    <h2 className='font-bold lg:text-[56px] text-[14px] font-sans text-[#40ce36]  '>01</h2>
                    <h4 className='lg:text-[38px] text-[14px] font-semibold  text-[#fff]'>+</h4>
                  </div>
                  <h3 className='lg:text-[16px] text-[12px] font-sans lg:w-[150px] text-[#fff] font-semibold'>YEARS OF EXPERIENCE</h3>
                </div>
              </div>

            </div>
            <div className="lg:w-[45%] w-[90%] mt-5 lg:mt-0">

              <div className="lg:p-[20px] p-[10px] border-2 border-[#fff] rounded-xl duration-300 ease-in-out lg:hover:mt-[-5px] ">
                <div className="">
                  <div className="flex ">
                    <h2 className='font-bold lg:text-[56px] text-[14px] font-sans text-[#40b730]  '>15</h2>
                    <h4 className='lg:text-[38px] text-[14px] font-semibold text-[#fff] '>+</h4>
                  </div>
                  <h3 className='lg:text-[16px] text-[12px] font-sans lg:w-[150px] text-[#fff] font-semibold'>COMPLETED PROJECTS</h3>
                </div>
              </div>

            </div>

          </div>

        </div>

       

      </Flex>
     
    <div className="">
      <SkillDevloper/>
    </div>
    
    <div className="">
      <EducationExp/>
    </div>
    </Container>

  </section>
  )
}

export default About
