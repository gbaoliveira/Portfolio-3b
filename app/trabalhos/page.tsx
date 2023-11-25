'use client'
import React, { useState } from 'react'
import { Header } from '../../components/index';

const Trabalhos = () => {
  const works = [
    { id: 1, subject: 'Natureza', title: 'Prática de Eletricidade', image: '/natureza.png', link: 'https://drive.google.com/file/d/12IBtxFGPZh6uwMTe6DbaEDu6x4mWaeAR/view' },
    { id: 2, subject: 'Natureza', title: 'Revisão Citologia', image: '/natureza.png', link: 'https://docs.google.com/document/d/1FTe9iLZ4BY2RWLpQNWZeXFE5YDo7qI3N2QeBlBAupbk/edit?usp=sharing' },
    { id: 3, subject: 'Natureza', title: 'Meio ambiente - uso do plástico', image: '/natureza.png', link: 'https://drive.google.com/file/d/1_eHAIUe1c7m5uUS9CAs64D3_2tVbEkp9/view?usp=share_link' },
    { id: 4, subject: 'Humanas', title: 'Meios de comunicação século XX', image: '/humanas.png', link: 'https://drive.google.com/file/d/1XZVA7O7iY2QJ46PWNbE6B-lmGcUj27Tq/view?usp=sharing' },
    { id: 5, subject: 'Humanas', title: 'Regimes totalitários', image: '/humanas.png', link: 'https://docs.google.com/presentation/d/1GE662KIPiyGwqtjlVICe12NuQ_nf1xbAfM1TUpiQb2o/edit?usp=sharing' },
    { id: 6, subject: 'Humanas', title: 'Era Vargas', image: '/humanas.png', link: 'https://drive.google.com/file/d/11iBBqesH9TI1yVlrbuSyRNu3QLfS1oQd/view?usp=share_link' },
    { id: 7, subject: 'Linguagens', title: 'Resenha Crítica', image: '/linguagens.png', link: 'https://docs.google.com/document/d/1HMRiIalwJszih2pgkg6S1-3_ssal9rtFDlimQ7MNExM/edit?usp=sharing' },
    { id: 8, subject: 'Linguagens', title: 'Revista Literária', image: '/linguagens.png', link: 'https://www.canva.com/design/DAFy3YgnNps/mgCTK2Y0c3IymNDdvmKEKw/edit?utm_content=DAFy3YgnNps&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
    { id: 9, subject: 'Matematica', title: 'AV MATEMÁTICA', image: '/math.png', link: 'https://drive.google.com/file/d/1m6OX474yYjkQBMU08Fo5FYpOMTRBhy7L/view?usp=share_link' },
    { id: 10, subject: 'Matematica', title: 'Filme Quebrando a banca', image: '/math.png', link: 'https://docs.google.com/document/d/1r5ImaZeZgD8u-C_nSCpZyD68YP4e8Ec0kREf3jBlMqY/edit?usp=sharing' },
    { id: 11, subject: 'Tecnico', title: 'Teoria de POO', image: '/tec.png', link: 'https://docs.google.com/document/d/1PMEfTyxG0XS3BBFb09gv128S06X7SElPxms8aT_zSsU/edit?usp=sharing' },
    { id: 12, subject: 'Tecnico', title: 'Canva da SA', image: '/tec.png', link: 'https://www.canva.com/design/DAFn3WZq8T4/qtNjsQklVAf-hcvL-R7_4g/edit?utm_content=DAFn3WZq8T4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
    { id: 13, subject: 'Tecnico', title: 'Telas da SA', image: '/tec.png', link: 'https://www.canva.com/design/DAFn3WZq8T4/qtNjsQklVAf-hcvL-R7_4g/edit?utm_content=DAFn3WZq8T4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
    { id: 14, subject: 'Tecnico', title: 'SA', image: '/tec.png', link: 'https://github.com/Senai-SC-CTAI/SA_2023_3B_SesiSenai_Ambientes' },
    { id: 15, subject: 'Tecnico', title: 'Pesquisa de Virtualizadores', image: '/tec.png', link: 'https://docs.google.com/document/d/1SHVzZ_feQekqp7_fjq7Z4GTQyaPEIexvIvDyXc7Qb_0/edit' },
    { id: 16, subject: 'Tecnico', title: 'Retomada Banco de dados', image: '/tec.png', link: 'https://docs.google.com/document/d/1YU26HUQkb4vHX5HwS8o8K-x7p84ayDn2WNvynZyyGnE/edit?usp=sharing' },
    { id: 17, subject: 'Tecnico', title: 'API Github', image: '/tec.png', link: 'https://github.com/gbaoliveira/api-github' },
    { id: 18, subject: 'Tecnico', title: 'Atividade APIs', image: '/tec.png', link: 'https://docs.google.com/document/d/1cmIGSPllpMuWrZ4fSpUuoV297OyxWgE1m04JMT4s6js/edit?usp=sharing' },
    { id: 19, subject: 'Tecnico', title: 'Modelo Físico', image: '/tec.png', link: 'https://docs.google.com/document/d/1fzFCWZSuKkv8H7uwgXA7m_0D6OTatROBb7X9o6g1KGE/edit?usp=sharing' },
    { id: 20, subject: 'Tecnico', title: 'Teste de Usabilidade', image: '/tec.png', link: '' },
    { id: 21, subject: 'Tecnico', title: 'Processo de Desenvolvimento de Software', image: '/tec.png', link: 'https://docs.google.com/presentation/d/15CviYjLUvTq0UajNA6mSQkqEHp020yEh/edit?usp=sharing&ouid=113264898922744913367&rtpof=true&sd=true' },
    { id: 22, subject: 'Tecnico', title: 'Diagrama de Casos SA', image: '/tec.png', link: 'https://docs.google.com/document/d/15YLVNBRhebLdB4eMrK_vv06YX6PGSHb7cqQVd4osWjc/edit?usp=sharing' },
    { id: 23, subject: 'Tecnico', title: 'Diagrama de Atividade SA', image: '/tec.png', link: 'https://docs.google.com/document/d/1zNCV-n4PWDw0Asfv0iUz8lvNrXMCiDBKdyMij-rnerI/edit?usp=sharing' },
    { id: 24, subject: 'Tecnico', title: 'Diagrama de Classe SA', image: '/tec.png', link: 'https://docs.google.com/document/d/1wNvhwBGJu2PkI9as1R419Cye5PvXExt2Vu41PrWbErc/edit?usp=sharing' },
  ];

  const [filteredWorks, setFilteredWorks] = useState(works);

  const filterBySubject = (subject: string) => {
    if (subject === 'Todas') {
      setFilteredWorks(works);
    } else {
      const filtered = works.filter((work) => work.subject === subject);
      setFilteredWorks(filtered);
    }
  };
  return (
    <div className='w-screen min-h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url("/fundo5.gif")`}}>
      <Header />
      <div className='max-w-fit mx-auto my-4'>
        <button onClick={() => filterBySubject('Todas')} className='text-white px-5 mr-1.5 rounded-lg bg-black font-josefin'>Todas</button>
        <button onClick={() => filterBySubject('Matematica')} className='text-white px-5 mr-1.5 rounded-lg bg-black font-josefin'>Matemática</button>
        <button onClick={() => filterBySubject('Natureza')} className='text-white px-5 mr-1.5 rounded-lg bg-black font-josefin'>Natureza</button>
        <button onClick={() => filterBySubject('Linguagens')} className='text-white px-5 mr-1.5 rounded-lg bg-black font-josefin'>Linguagens</button>
        <button onClick={() => filterBySubject('Humanas')} className='text-white px-5 mr-1.5 rounded-lg bg-black font-josefin'>Humanas</button>
        <button onClick={() => filterBySubject('Tecnico')} className='text-white bg-black px-5 rounded-lg font-josefin'>Técnico</button>
      </div>
      <div className="max-w-fit mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWorks.map((work) => (
          <div key={work.id} className="bg-black mt-10 rounded-lg p-4">
            <img src={work.image} className="w-32 h-32 mx-auto" />
            <p className="text-white text-center font-josefin mt-2">{work.title}</p>
            <a href={work.link} className="block text-center text-blue-500">Ver atividade</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trabalhos
