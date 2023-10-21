import React from 'react'
import { Header } from '../../components/index';

const Planejamento = () => {
  return (
<div className='w-screen min-h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url("/may.gif")`}}>
  <Header />
  <div className='py-8 px-8 sm:items-center mx-auto mt-10'>
    <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto mb-n" src="/planejamento.png" alt="profile"/>
  </div>
</div>

  )
}

export default Planejamento