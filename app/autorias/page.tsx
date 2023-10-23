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
      É, pode parecer surpresa, mas o portfólio foi uma das atividades que mais gostei de fazer! Como mostrado na tela inicial, usei o Tailwind CSS, React e Next.js. Ainda acho que preciso melhorar bastante, mas gostei do resultado. Foquei em usar pixel art, que é esse estilo pixelado usado no fundo do site, por ter uma pegada mais de jogos, algo que eu gosto muito. Sobre o código, descobrir o Tailwind foi uma salvação de vida, pois ele facilita muito na construção de CSS, e o React eu já estava aprendendo anteriormente, mesmo sendo o nativo. Foi divertido e ótimo para o meu aprendizado construir o portfólio.
      </p>
      <img className="flex-shrink-0 mx-auto mt-5" src="/programar.gif" alt="Programação" />
    </div>

    <div className='mx-auto shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl sm:w-1/2 mx-4 mb-10 px-1.5'>
    <h2 className="text-white text-2xl font-bold mt-0 pt-3.5 text-center">Minhas Aulas de inglês de tarde</h2>
      <p className='text-white max-w-md mx-auto font-josefin mt-5'>
      Normalmente, às segundas-feiras e quartas-feiras, eu tenho aulas de inglês à tarde. Meu nível foi pré-determinado com base no ano passado e em uma prova que fiz anteriormente. O inglês é patrocinado e ministrado pela Cambridge, já que usamos a plataforma deles. No entanto, não acho que seja tão complexo quanto eu imaginava inicialmente. No começo, pensei que, por ser da Cambridge, seria algo desafiador e muito profissional, mas é bem simples. Tem seus pontos positivos e negativos, mas aprendi bastante até agora. Meu maior desafio no inglês é a pronúncia. Consigo entender quase todos os textos perfeitamente e também escuto bem. Acredito que, no ano que vem, estarei em um nível profissional.
      </p>
      <img className="flex-shrink-0 mx-auto py-1.5" src="/gif3.gif" />
    </div>

    <div className=' mx-auto shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl sm:w-1/2 mx-4 mb-10 px-1.5'>
      <h2 className="text-white text-2xl font-bold mt-0 pt-3.5 mx-3 text-center">Como é estudar no senai?</h2>
      <p className='text-white max-w-md mx-auto font-josefin mt-5'>
      Estudar no Senai é realmente um desafio. Apesar de ter enfrentado problemas logo no primeiro ano e de ter que mudar de Senai (estava estudando em São José e tive que ir para Florianópolis) devido a certos alunos, consegui superar isso após um tempo para me adaptar e deu tudo certo.

O Senai em si tem uma estrutura muito boa e oferece um suporte incrível para o uso da tecnologia. É muito melhor não precisar ficar usando cadernos o tempo todo, folhas e outras coisas, e usar o que está disponível virtualmente. Claro que o uso de materiais físicos ainda é necessário e é utilizado, mas ter acesso à tecnologia facilita muito para muitas coisas.

Já na área do curso focado em programação, houve alguns pontos negativos devido à lentidão e desequilíbrio, por assim dizer, mas foi de grande ajuda para o meu ponto de partida na área.
      </p>
      <img className="flex-shrink-0 mx-auto" src="/senai.gif" />
    </div>
    
    <div className=' mx-auto shadow-lg bg-black/60 backdrop-filter backdrop-blur-3xl sm:w-1/2 mx-4 mb-10 px-1.5'>
      <h2 className="text-white text-2xl font-bold mt-0 pt-3.5 mx-3 text-center">Por que programação de jogos?</h2>
      <p className='text-white max-w-md mx-auto font-josefin mt-5'>
      Desde criança, meu pai sempre jogava várias coisas em consoles antigos. Eu sempre gostei muito de assistir até ter idade suficiente para começar a jogar aquilo que apenas assistia. Poder mergulhar em um mundo novo e interagir com ele de alguma forma, apertando botões, fazendo escolhas ou apenas jogando algo bobo no qual nem precisava pensar é extremamente divertido.

Sabendo da diversão que passei, jogar jogos ainda é o meu principal hobby. Quando descobri a programação, a primeira coisa que fiz foi tentar programar um jogo. Com isso, descobri o extremo prazer e felicidade em ver aquilo que você trabalhou em código virar realidade. Ver o personagem que anteriormente era apenas uma imagem estática começar a mexer as pernas e andar, ou algo complexo como um chefe final, usar sua imaginação para criar algo virtual e interagir com isso é algo que eu acho magnífico.
      </p> 
      <img className="flex-shrink-0 mx-auto py-1.5" src="/gif2.gif" />
    </div>

  </div>
</div>

  )
}

export default Autorias