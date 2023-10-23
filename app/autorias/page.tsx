'use client'
import React from 'react'
import { Header } from '../../components/index';
import { useState } from "react";

const Autorias = () => {
  return (
<div className='w-screen min-h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url("/fundo6.gif")`}}>
  <Header />
  <div className='max-w-fit mx-auto rounded-lg mt-10 grid grid-cols-1 sm:grid-cols-2'>

    <div className='mx-auto shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl sm:w-1/2 mx-4 mb-10 px-1.5'>
      <h2 className="text-white text-2xl font-bold mt-0 pt-3.5 text-center">Falando sobre o Portfólio</h2>
      <p className='text-white max-w-md mx-auto font-josefin mt-5'>
        É pode parecer surpresa, porém o portfólio foi uma das atividades que eu mais gostei de fazer! Como mostrado na tela home, eu usei tailwind CSS, React e Next.js. Ainda acho que preciso melhorar bastante, mas gostei do resultado. Foquei em usar pixel art, que é esse estilo pixelado usado no fundo do site, por ter uma pegada mais de jogos, algo que eu gosto muito. Sobre o código, descobrir o tailwind foi uma salvação de vida, pois ele facilita muito na construção de CSS, e o React eu já estava aprendendo anteriormente, mesmo sendo o native. Foi divertido e ótimo para o meu aprendizado construir o portfólio.
      </p>
      <img className="flex-shrink-0 mx-auto mt-5" src="/programar.gif" alt="Programação" />
    </div>

    <div className='mx-auto shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl sm:w-1/2 mx-4 mb-10 px-1.5'>
    <h2 className="text-white text-2xl font-bold mt-0 pt-3.5 text-center">Minhas Aulas de inglês de tarde</h2>
      <p className='text-white max-w-md mx-auto font-josefin mt-5'>
        Normalmente segunda-feira e quarta-feira eu fico de tarde para o curso de inglês, lá eu tenho um nível
        que foi pré determinado com base no ano passado e em uma prova que fiz anteriormente. O inglês é patrocinado e feito pela cambridge já que usamos
        a plataforma dela, mas não acho que é tão complexo assim, de começo achei que por ser da cambridge seria algo desafiador e super profissional mas é bem simples, tem seus pontos
        positivos e negativos mas aprendi bastante coisa até agora, meu maior problema com inglês é a pronuncia, consigo entender quase todos os textos perfeitamente e também escutar bem, acredito
        que ano que vem estarei em um nível profissional já.
      </p>
      <img className="flex-shrink-0 mx-auto py-1.5" src="/gif3.gif" />
    </div>

    <div className=' mx-auto shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl sm:w-1/2 mx-4 mb-10 px-1.5'>
      <h2 className="text-white text-2xl font-bold mt-0 pt-3.5 mx-3 text-center">Como é estudar no senai?</h2>
      <p className='text-white max-w-md mx-auto font-josefin mt-5'>
        Estudar no senai é realmente um desafio, apesar de ter passado por problemas logo no primeiro ano e ter que mudar de senai (estava estudando em são josé e tive que ir para florianópolis) por conta 
        de certos alunos, consegui superar isso depois de um bom tempo para me adequar deu tudo certo. O Senai em si tem uma estrutura muito boa e com um suporte para o uso da tecnologia incrível. É 
        muito melhor não precisar ficar usando cadernos toda hora, folhas e outras coisas e usar aquilo que está disponível virtualmente, claro que o uso de materiais físicos ainda é necessário e é usado mas 
        poder ter acesso a tecnologia facilita muito para muitas coisas, já na área do curso focado em programação, teve seus pontos negativos por ser lento e "desbalanceado" se assim podemos dizer, porém foi de grande
        ajuda para meu ponto de partida na área.
      </p>
      <img className="flex-shrink-0 mx-auto" src="/senai.gif" />
    </div>
    
    <div className=' mx-auto shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl sm:w-1/2 mx-4 mb-10 px-1.5'>
      <h2 className="text-white text-2xl font-bold mt-0 pt-3.5 mx-3 text-center">Por que programação de jogos?</h2>
      <p className='text-white max-w-md mx-auto font-josefin mt-5'>
       Dês de criança meu pai sempre jogava várias coisas em consoles antigos, eu sempre gostei muito de assistir até ter idade o suficiente para começar a jogar aquilo que apenas assistia,
       poder mergulhar em um mundo novo e interagir com ele de alguma forma, apertando botões, fazendo escolhas ou apenas jogando algo bobo que nem precise pensar é extremamente divertido.
       Sabendo da diversão que passei, jogar jogos ainda é meu principal hobby, quando descobri a programação a primeira coisa que fiz foi tentar programar um jogo, com isso eu descobri o extremo
       prazer e feliciade em ver aquilo que você trabalhou em código virar realidade, ver o personagem que anteriormente era só uma imagem estática começando a mexer as pernas e andar, ou algo complexo
       como um chefão final, usar sua imaginação para criar algo virtual e interagir com aquilo é algo que eu acho magnífico.
      </p> 
      <img className="flex-shrink-0 mx-auto py-1.5" src="/gif2.gif" />
    </div>

  </div>
</div>

  )
}

export default Autorias