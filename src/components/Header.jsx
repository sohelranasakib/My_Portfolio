import React, { useState } from 'react'
import Container from './Container'
import Flex from '../components/Flex'
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdBusinessCenter, MdOutlineEmail } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";
import { Link } from 'react-router-dom';

const Header = () => {
  // let [multiList, setMultiList] = useState('')

//   let handleList = ()=>{
//     setMultiList("activeList")
// }

  return (

    <section className=' bg-[#f0f1f1] lg:py-[20px] py-[15px] w-full fixed  z-50 px-3 '>
      <Container>
        <Flex className=" lg:w-[100%] justify-center lg:gap-[60px] gap-[20px]">
          
          <Link to="/">
            <div  className=" group overflow-hidden">
              {/* <div onClick={()=>setMultiList("")} className={`relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden ${multiList == "activeList" ? "" : "bg-[#40ce36]"}`}> */}
              <div className=" relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden">
                <a className=" lg:text-[45px] text-[20px] text-[#fff]" href="#" ><IoHomeSharp /></a>
              </div>
              <h3 className=' absolute lg:top-[90px]  font-sans font-bold lg:text-[16px] text-[10px] lg:py-[2px] lg:px-[10px] px-[2px] bg-[#40ce36] rounded-lg opacity-0 group-hover:opacity-[1] duration-300'>Home</h3>
            </div>
          </Link>

          <Link to="/about">
            <div className=" group overflow-hidden">
              {/* <div onClick={handleList}  className={`relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden ${multiList == "activeList" ? "bg-[#40ce36]" : "" }`}> */}
              <div className="relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden">
                <a className=" lg:text-[45px] text-[20px] text-[#fff]" href="#" ><FaUser /></a>
              </div>
              <h3 className=' absolute lg:top-[90px]  font-sans font-bold lg:text-[16px] text-[10px] lg:py-[2px] lg:px-[10px] px-[2px] bg-[#40ce36] rounded-lg opacity-0 group-hover:opacity-[1] duration-300'>About</h3>
            </div>
          </Link>

          <Link to="/portfolio">
            <div className=" group overflow-hidden">
              {/* <div onClick={handleList}  className={` relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden ${multiList == "activeList" ? "bg-[#]" : "" }`}> */}
              <div  className= "relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden">
                
                <a className=" lg:text-[45px] text-[20px] text-[#fff]" href="#" ><MdBusinessCenter /></a>
              </div>
              <h3 className=' absolute lg:top-[90px]  font-sans font-bold lg:text-[16px] text-[10px] lg:py-[2px] lg:px-[10px] px-[2px] bg-[#40ce36] rounded-lg opacity-0 group-hover:opacity-[1] duration-300'>Portfolio</h3>
            </div>
          </Link>

          <Link to="/contuct">
            <div className=" group overflow-hidden">
              <div className=" relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden ">
                <a className=" lg:text-[45px] text-[20px] text-[#fff]" href="#" ><MdOutlineEmail /></a>
              </div>
              <h3 className=' absolute lg:top-[90px]  font-sans font-bold lg:text-[16px] text-[10px] lg:py-[2px] lg:px-[10px] px-[2px] bg-[#40ce36] rounded-lg opacity-0 group-hover:opacity-[1] duration-300'>Contuct</h3>
            </div>
          </Link>
          
          <Link to="/blog">
          <div className=" group overflow-hidden">
            <div className=" relative py-[10px] px-[10px] bg-[#262626] hover:bg-[#40ce36] rounded-full group overflow-hidden ">
              <a className=" lg:text-[45px] text-[20px] text-[#fff]" href="#" ><SiBloglovin /></a>
            </div>
            <h3 className=' absolute lg:top-[90px]  font-sans font-bold lg:text-[16px] text-[10px] lg:py-[2px] lg:px-[10px] px-[2px] bg-[#40ce36] rounded-lg opacity-0 group-hover:opacity-[1] duration-300'>Blog</h3>
          </div>
          </Link>

        </Flex>
      </Container>
    </section>


    // <section className='  top-[50px] right-[50px] z-50 fixed animate-slideIn'>
    //    <Container>
    //    <div className=" justify-end">
    //    <div className=" w-[100%] pt-[50px] pl-[130px]">
    //     <Link to="/">
    //     <div className=" relative flex items-center py-2 px-4  after:absolute after:contain-[''] after:top-0 after:right-[0px] after:h-[60px] after:w-[33%] after:rounded-full after:bg-[#262626] hover:after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full ">
    //         <h3 className='font-sans text-[18px] font-bold z-50  text-[#fff] pl-[30px] '>Home</h3>
    //         <div className=" pl-[63px] z-50 ">
    //           <IoHomeSharp className='text-[40px] text-[#fff]' />
    //         </div>
    //       </div>
    //     </Link>

    //      <div className=" py-[30px]">
    //         <Link to="/about">
    //         <div className=" relative  flex items-center py-2 px-4  after:absolute after:contain-[''] after:top-0 after:right-[0px] after:h-[60px] after:w-[33%] after:rounded-full after:bg-[#262626] hover:after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full">
    //            <h3 className='font-sans text-[18px] font-bold z-50  text-[#fff] pl-[30px]'>About</h3>
    //           <div className=" pl-[58px] z-50 ">
    //           <FaUser  className='text-[40px] text-[#fff]' />
    //         </div>
    //       </div>
    //         </Link>

    //      </div>
    //      <div className=" relative  flex items-center py-2 px-4  after:absolute after:contain-[''] after:top-0 after:right-[0px] after:h-[60px] after:w-[33%] after:rounded-full after:bg-[#262626] hover:after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full">
    //            <h3 className='font-sans text-[18px] font-bold z-50  text-[#fff] pl-[30px]'>Protfolio</h3>
    //           <div className=" pl-[37px] z-50 ">
    //           <MdBusinessCenter  className='text-[40px] text-[#fff]' />
    //         </div>
    //       </div>

    //       <div className=" py-[30px]">
    //         <div className=" relative  flex items-center py-2 px-4  after:absolute after:contain-[''] after:top-0 after:right-[0px] after:h-[60px] after:w-[33%] after:rounded-full after:bg-[#262626] hover:after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full">
    //            <h3 className='font-sans text-[18px] font-bold z-50  text-[#fff] pl-[30px]'>Contuct</h3>
    //           <div className=" pl-[38px] z-50 ">
    //           <MdOutlineEmail   className='text-[40px] text-[#fff]' />
    //         </div>
    //       </div>
    //      </div>

    //      <div className=" relative  flex items-center py-2 px-4  after:absolute after:contain-[''] after:top-0 after:right-[0px] after:h-[60px] after:w-[33%] after:rounded-full after:bg-[#262626] hover:after:bg-[#40ce36] after:duration-300 after:ease-in-out after:hover:w-full">
    //            <h3 className='font-sans text-[18px] font-bold z-50  text-[#fff] pl-[50px]'>Blog</h3>
    //           <div className=" pl-[57px] z-50 ">
    //           <SiBloglovin    className='text-[40px] text-[#fff]' />
    //         </div>
    //       </div>

    //     </div>
    //    </div>
    //    </Container>
    // </section>


  )
}

export default Header
