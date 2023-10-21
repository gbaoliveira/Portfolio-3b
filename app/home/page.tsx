'use client'
import React from 'react'
import { Header } from '../../components/index';
import '../globals.css'

const Home = () => {

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/gbaoliveira/';
  };

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/gbaoliveira';
  };
  
  return (
<div>
  <div className="w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url("/pixel-art.gif")` }}>
    <Header />
  </div>

  <section className='relative bg-no-repeat bg-cover py-36'>
    <div className='text-center'>
      <p className="text-sky-200 z-10 relative text-5xl font-custom">Esse site foi feito em</p>
    </div>
    <div className='mt-2 text-center flex justify-center items-center relative z-10'>
      <img className="w-24 mx-4" src="/react.png" alt="React Logo" />
      <div className="text-white text-xl mx-4">+</div>
      <img className="w-60 mx-4" src="/tailwind.png" alt="Tailwind CSS Logo" />
      <div className="text-white text-xl mx-4">+</div>
      <img className="w-36 mx-4" src="/nextjs.png" alt="Next.js Logo" />
    </div>
    <div className="absolute top-0 left-0 right-0 bottom-0 filter blur-md z-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url("/fundo2.gif")` }}></div>
  </section>

  <footer>
    <div className='max-w-fit mx-auto py-8 px-8 sm:items-center'>
    </div>
  </footer>
</div>
  )
}


export default Home