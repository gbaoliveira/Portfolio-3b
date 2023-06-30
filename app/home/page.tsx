import React from 'react'
import { Header } from '../../components/index';

const Home = () => {
  return (
<div  className='home h-screen bg-cover' style={{ backgroundImage: `url("/bg3.png")`}}>
<Header />
<div className='shadow-lg bg-sky-500/30 backdrop-filter backdrop-blur-lg  max-w-md sm:items-center mx-auto rounded-lg my-20'>
    <div className='home'>
     <div className='max-w-sm mx-auto sm:items-center pt-10'>
        <h1 className='font-bold text-3xl mb-4 '>
            Bem vindo ao meu portfólio!
        </h1>
        <p className="text-xl mono">
        Sou aluno do Sesi Senai e me chamo Gabriel Antônio. Aqui estarei postando minhas atividades junto com meu planejamento semanal. Tenho Habilidades em 
        React | Javascript | Typescript | HTML & CSS
        </p>
    </div>
</div>
    <div className="py-8 px-8 max-w-sx mx-auto rounded-lg sm:flex sm:items-center">
        <img className="block mx-auto h-45 rounded-full sm:mx-0 sm:shrink-0" src="/pfp.png" alt="profile"/>
    </div>
    <a href='https://portfolio-gbaoliveira-2b.netlify.app' className='max-w-fit sm:flex mx-auto border-2 px-0.5 rounded mono border-black bg-slate-950'>Link do portfólio do 2 ano</a>
    </div>
    
</div>
  )
}

export default Home