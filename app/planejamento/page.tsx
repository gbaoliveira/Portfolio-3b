import React from 'react'
import { Header } from '../../components/index';

const Planejamento = () => {
  return (
<div className='home h-screen bg-cover' style={{ backgroundImage: `url("/bg3.png")`}}>
<Header />
    <div className='py-8 px-8 sm:items-center mx-auto'>
       <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/planejamento.png" alt="profile"/>
    </div>
</div>
  )
}

export default Planejamento