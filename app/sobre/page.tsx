'use client'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
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
    <div  className='home h-screen bg-cover' style={{ backgroundImage: `url("/bg3.png")`}}>
     <Header />
     <div className='shadow-lg bg-sky-500/30 backdrop-filter backdrop-blur-lg max-w-fit sm:flex mx-auto rounded-lg my-28'>
     <p className='pt-3.5 mr-2 ml-3 mt-4 max-w-sm mx-auto sm:items-center'>Meu nome é Gabriel Antônio, tenho 17 anos, estou no terceiro ano do ensino médio e aprendendo programação, principalmente de jogos
          e sites, atualmente não sei muito bem onde eu pretendo me aprofundar na área, porém, gosto muito de programação de jogos e até um tempo
          eu pensava que iria focar 100% nisso, mas atualmente estou criando interesse em outras áreas, tanto de programação de aplicativos, quanto hacking.</p>
      <img className="flex-shrink-0 max-h-80" src="/lucky2.png" alt="lucky"/>
      </div>
      <div className='shadow-lg bg-black/60 backdrop-filter backdrop-blur-lg max-w-fit mx-auto rounded-lg py-8 px-8 sm:items-center'>
      <p className='pt-2 py-8 px-8 sm:items-center mx-auto text-lg'>Minhas redes de contato:</p>
        <div className='flex justify-center mx-auto'>
        <FontAwesomeIcon className='mr-2 ml-3 cursor-pointer' size="2xl" icon={faLinkedin} onClick={handleLinkedInClick} ></FontAwesomeIcon>
          <FontAwesomeIcon className='mr-2 ml-3 cursor-pointer' size="2xl" icon={faGithub} onClick={handleGitHubClick} ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}

export default sobre