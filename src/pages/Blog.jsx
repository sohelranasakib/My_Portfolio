import React from 'react'
import Container from '../components/Container'

const Blog = () => {
  return (
    <section className=' pt-[180px] pb-[300px] bg-[#171616]'>
        <Container>
      <h2 className=' relative font-extrabold lg:text-[200px] text-[90px] text-center opacity-10  text-[#fff]  '>WORKS</h2>
      <h3 className='text-center font-bold lg:text-[96px] text-[56px] font-sans text-[#fff] lg:mt-[-215px] mt-[-100px] relative after:absolute after:contain-[""] after:h-[2px] lg:after:w-[350px] after:w-[300px]  after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#fff] '>My <span className='text-[#40ce36]'>Blog!</span> </h3>

      </Container>
    </section>
  )
}

export default Blog
