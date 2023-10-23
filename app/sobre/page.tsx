'use client'
import React from 'react'
import { Header } from '../../components/index';
import { useState } from "react";

const sobre = () => {

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/gbaoliveira/';
  };

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/gbaoliveira';
  };

  const [name, setName] = useState();

  return (
<div className='w-screen min-h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url("/fish.gif")` }}>
  <Header />
  <div className='shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl max-w-fit sm:flex mx-auto rounded-lg mt-10'>
    <p className='text-white mt-0 pt-3.5 mr-2 ml-3 max-w-sm mx-auto sm:items-center mb-5 font-josefin'>
      Meu nome é Gabriel Antônio e tenho 18 anos, estou no terceiro ano do ensino médio e aprendendo programação, principalmente de jogos,
      sites e aplicativos. Atualmente não sei muito bem onde eu pretendo me aprofundar na área, porém, gosto muito de programação de jogos e até um tempo
      átras pensava que iria focar 100% nisso, mas atualmente estou criando interesse em outras áreas na programação, tanto de programação de aplicativos, quanto hacking. Após finalizar o ensino médio
      pretendo ir para o senac fazer faculdade de desenvolvimento de jogos digitais.
    </p>
    <img className="flex-shrink-0 max-h-64 mt-5 mr-5" src="/gif1.gif" />
  </div>
  <div className='mt-5'>
    <div className='shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl max-w-fit mx-auto rounded-lg py-8 px-8 sm:items-center'>
      <p className='pt-2 py-8 px-8 sm:items-center mx-auto text-xl font-josefin'>Minhas redes de contato:</p>
      <div className='flex justify-center mx-auto'>
        <img className='mr-2 ml-3 cursor-pointer w-11' src="/linkedin.svg" style={{ filter: 'invert(100%)' }} onClick={handleLinkedInClick} />
        <img className='mr-2 ml-3 cursor-pointer w-11' src="/github.svg" style={{ filter: 'invert(100%)' }} onClick={handleGitHubClick} />
      </div>
    </div>
  </div>
</div>




  )
}

export default sobre