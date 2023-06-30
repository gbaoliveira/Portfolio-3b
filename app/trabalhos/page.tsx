import React from 'react'
import { Header } from '../../components/index';

const Trabalhos = () => {
  return (
    <div  className='home h-screen bg-cover' style={{ backgroundImage: `url("/bg3.png")`}}>
     <Header />
     <div className='max-w-fit sm:flex mx-auto my-4'>
      <button className='px-5 mr-1.5 rounded-lg bg-black'>Matemática</button>
      <button className='px-5 mr-1.5 rounded-lg bg-black'>Natureza</button>
      <button className='px-5 mr-1.5 rounded-lg bg-black'>Linguagens</button>
      <button className='px-5 mr-1.5 rounded-lg bg-black'>Humanas</button>
      <button className='bg-black px-5 rounded-lg'>Técnico</button>
      </div>
    </div>
  )
}

export default Trabalhos